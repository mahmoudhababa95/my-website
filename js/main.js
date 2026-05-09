// Assignment request: Add useful interactivity: slider, event filtering, contact validation, share/calendar actions, and scroll-to-top behavior.
document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  updateCurrentYear();
  setupImageCaptions();
  setupSlider();
  setupEventFilters();
  setupEventActions();
  setupContactForm();
  setupScrollTop();
});

function setupThemeToggle() {
  const button = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("svu-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  if (!button) return;

  const updateLabel = () => {
    const isDark = document.body.classList.contains("dark-mode");
    button.textContent = isDark ? "☀" : "☾";
    button.setAttribute("aria-label", isDark ? "تبديل الوضع الفاتح" : "تبديل الوضع الداكن");
    button.setAttribute("title", isDark ? "الوضع الفاتح" : "الوضع الداكن");
  };

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("svu-theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    updateLabel();
  });

  updateLabel();
}

function updateCurrentYear() {
  document.querySelectorAll("[data-current-year]").forEach((target) => {
    target.textContent = String(new Date().getFullYear());
  });
}

function setupImageCaptions() {
  document.querySelectorAll(".site-image").forEach((image) => {
    image.setAttribute("title", image.getAttribute("alt") || "صورة من موقع الجامعة");
  });
}

function setupSlider() {
  const slides = Array.from(document.querySelectorAll("[data-slide]"));
  const prevButton = document.getElementById("prevSlide");
  const nextButton = document.getElementById("nextSlide");

  if (!slides.length || !prevButton || !nextButton) return;

  let activeIndex = 0;
  const render = () => {
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === activeIndex);
    });
  };

  prevButton.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + slides.length) % slides.length;
    render();
  });

  nextButton.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % slides.length;
    render();
  });

  setInterval(() => {
    activeIndex = (activeIndex + 1) % slides.length;
    render();
  }, 5000);
}

function setupEventFilters() {
  const list = document.getElementById("eventList");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const dateFilter = document.getElementById("dateFilter");
  const locationFilter = document.getElementById("locationFilter");
  const resetButton = document.getElementById("resetFilters");
  const emptyState = document.getElementById("emptyState");

  if (!list || !searchInput || !categoryFilter || !dateFilter || !locationFilter || !resetButton || !emptyState) return;

  const items = Array.from(list.querySelectorAll(".event-item"));

  const applyFilters = () => {
    const searchValue = searchInput.value.trim().toLowerCase();
    const categoryValue = categoryFilter.value;
    const dateValue = dateFilter.value;
    const locationValue = locationFilter.value;
    let visibleCount = 0;

    items.forEach((item) => {
      const matchesSearch = !searchValue || item.dataset.title.toLowerCase().includes(searchValue);
      const matchesCategory = categoryValue === "all" || item.dataset.category === categoryValue;
      const matchesDate = !dateValue || item.dataset.date === dateValue;
      const matchesLocation = locationValue === "all" || item.dataset.location === locationValue;
      const isVisible = matchesSearch && matchesCategory && matchesDate && matchesLocation;

      item.classList.toggle("d-none", !isVisible);
      if (isVisible) visibleCount += 1;
    });

    emptyState.classList.toggle("d-none", visibleCount > 0);
  };

  [searchInput, categoryFilter, dateFilter, locationFilter].forEach((control) => {
    control.addEventListener("input", applyFilters);
    control.addEventListener("change", applyFilters);
  });

  resetButton.addEventListener("click", () => {
    searchInput.value = "";
    categoryFilter.value = "all";
    dateFilter.value = "";
    locationFilter.value = "all";
    applyFilters();
  });
}

function setupEventActions() {
  const calendarButton = document.getElementById("addCalendarBtn");
  const shareButton = document.getElementById("shareEventBtn");
  const actionAlert = document.getElementById("eventActionAlert");

  if (!calendarButton || !shareButton || !actionAlert) return;

  const showMessage = (message) => {
    actionAlert.textContent = message;
    actionAlert.classList.remove("d-none");
  };

  calendarButton.addEventListener("click", () => {
    const title = encodeURIComponent("المؤتمر المعارفي السوري");
    const location = encodeURIComponent("دمشق - كفرسوسة");
    const details = encodeURIComponent("مثال على فعالية ضمن مشروع دليل فعاليات الجامعة الافتراضية السورية.");
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20260518T070000Z/20260518T130000Z&details=${details}&location=${location}`;
    window.open(url, "_blank", "noopener");
    showMessage("تم فتح رابط التقويم في تبويب جديد.");
  });

  shareButton.addEventListener("click", async () => {
    const shareData = {
      title: "المؤتمر المعارفي السوري",
      text: "صفحة فعالية من مشروع دليل فعاليات الجامعة الافتراضية السورية.",
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        showMessage("تم فتح نافذة المشاركة.");
        return;
      }

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        showMessage("تم نسخ رابط الصفحة.");
        return;
      }

      showMessage("يمكن نسخ الرابط من شريط العنوان.");
    } catch {
      showMessage("لم تتم المشاركة. يمكن نسخ الرابط يدويا.");
    }
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const successAlert = document.getElementById("formSuccess");
  const errorAlert = document.getElementById("formError");

  if (!form || !successAlert || !errorAlert) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const fields = [name, email, message];
    const isValid = Boolean(name.value.trim()) && emailPattern.test(email.value.trim()) && Boolean(message.value.trim());

    successAlert.classList.add("d-none");
    errorAlert.classList.add("d-none");
    fields.forEach((field) => field.classList.remove("is-invalid", "is-valid"));

    if (!isValid) {
      errorAlert.classList.remove("d-none");
      name.classList.toggle("is-invalid", !name.value.trim());
      email.classList.toggle("is-invalid", !emailPattern.test(email.value.trim()));
      message.classList.toggle("is-invalid", !message.value.trim());
      return;
    }

    fields.forEach((field) => field.classList.add("is-valid"));
    successAlert.classList.remove("d-none");
    form.reset();
  });
}

function setupScrollTop() {
  const button = document.getElementById("scrollTopBtn");
  if (!button) return;

  window.addEventListener("scroll", () => {
    button.classList.toggle("is-visible", window.scrollY > 300);
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
