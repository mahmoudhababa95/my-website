[index.html](https://github.com/user-attachments/files/27555712/index.html)
<!DOCTYPE html>
<!-- Assignment request: Create the main page with SVU branding, featured events, categories, latest events, footer information, and team names with IDs. -->
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>دليل فعاليات الجامعة الافتراضية السورية</title>
  <meta name="description" content="موقع بسيط يعرض بعض فعاليات وخدمات الجامعة الافتراضية السورية لمشروع BWP401.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header class="site-header sticky-top">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand brand" href="index.html">
          <img src="img/svu-logo.png" alt="SVU">
          <span>فعاليات SVU</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#siteNav" aria-controls="siteNav" aria-expanded="false" aria-label="فتح القائمة">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="siteNav">
          <ul class="navbar-nav me-auto gap-lg-2">
            <li class="nav-item"><a class="nav-link active" href="index.html">الرئيسية</a></li>
            <li class="nav-item"><a class="nav-link" href="events.html">الفعاليات</a></li>
            <li class="nav-item"><a class="nav-link" href="event.html">تفاصيل فعالية</a></li>
            <li class="nav-item"><a class="nav-link" href="about.html">عن الموقع</a></li>
            <li class="nav-item"><a class="nav-link" href="contact.html">تواصل معنا</a></li>
            <li class="nav-item"><button class="theme-toggle" type="button" id="themeToggle" aria-label="تبديل الوضع الداكن">☾</button></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <section class="hero-band">
      <div class="container">
        <div class="row align-items-center g-4">
          <div class="col-lg-7">
            <p class="eyebrow">مشروع مادة BWP401</p>
            <h1>دليل مختصر لبعض أنشطة الجامعة الافتراضية السورية.</h1>
            <p class="lead">
              قمنا في هذا الموقع بجمع أمثلة عن فعاليات وخدمات تظهر على موقع الجامعة، مثل أنظمة الطلاب،
              مراكز النفاذ، التدريب، والمبادرات المرتبطة بالجامعة. الهدف هو تقديمها بطريقة مرتبة وسهلة التصفح.
            </p>
            <div class="d-flex flex-wrap gap-2 mt-4">
              <a class="btn btn-primary-svu" href="events.html">عرض الفعاليات</a>
              <a class="btn btn-outline-svu" href="contact.html">صفحة التواصل</a>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="team-panel">
              <h2>فريق المشروع</h2>
              <p>الطلاب المشاركون</p>
              <ul>
                <li><strong>الطالب 1:</strong> mahmoud- ID: 188908</li>
                <li><strong>الطالب 2:</strong> mohammed- ID: 245331</li>
                <li><strong>الطالب 3:</strong> asmaa- ID: 294212</li>
                <li><strong>الطالب 4:</strong> aref- ID: 209180</li>
                <li><strong>الطالب 5:</strong> yaman- ID: 233129</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <img class="site-image site-image-wide" src="img/svupedia-banner.jpg" alt="صورة من موسوعة الجامعة">
      </div>
    </section>

    <section class="section-block pt-0">
      <div class="container">
        <div class="section-title">
          <p class="eyebrow">فعاليات مختارة</p>
          <h2>أمثلة عن أنشطة يمكن أن يهتم بها الطالب</h2>
        </div>
        <div class="slider-box">
          <article class="feature-slide is-active" data-slide>
            <div class="row g-4 align-items-center">
              <div class="col-lg-5">
                <img class="site-image site-image-medium" src="img/svupedia-banner.jpg" alt="المؤتمر المعارفي السوري">
              </div>
              <div class="col-lg-7">
                <span class="badge badge-svu">معرفة وريادة</span>
                <h3>المؤتمر المعارفي السوري</h3>
                <p>اخترنا هذا المثال لأنه مرتبط بالمعرفة الرقمية وبنشاط الجامعة خارج إطار المحاضرات فقط.</p>
                <a class="btn btn-primary-svu" href="event.html">تفاصيل أكثر</a>
              </div>
            </div>
          </article>
          <article class="feature-slide" data-slide>
            <div class="row g-4 align-items-center">
              <div class="col-lg-5">
                <img class="site-image site-image-medium" src="img/programming-competition.png" alt="المسابقة البرمجية">
              </div>
              <div class="col-lg-7">
                <span class="badge badge-svu">برمجة</span>
                <h3>المسابقة البرمجية للجامعات</h3>
                <p>فعالية مناسبة لطلاب المعلوماتية والمهتمين بالبرمجة وحل المسائل ضمن فرق.</p>
                <a class="btn btn-primary-svu" href="event.html">تفاصيل أكثر</a>
              </div>
            </div>
          </article>
          <article class="feature-slide" data-slide>
            <div class="row g-4 align-items-center">
              <div class="col-lg-5">
                <img class="site-image site-image-medium" src="img/cooperation.png" alt="مبادرة بناة">
              </div>
              <div class="col-lg-7">
                <span class="badge badge-svu">مبادرات</span>
                <h3>مبادرة بناة</h3>
                <p>مثال على نشاط له جانب اجتماعي، وليس فقط نشاطا تعليميا أو تقنيا.</p>
                <a class="btn btn-primary-svu" href="event.html">تفاصيل أكثر</a>
              </div>
            </div>
          </article>
          <div class="slider-actions">
            <button class="btn btn-outline-svu" type="button" id="prevSlide">السابق</button>
            <button class="btn btn-primary-svu" type="button" id="nextSlide">التالي</button>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block pt-0">
      <div class="container">
        <div class="section-title">
          <p class="eyebrow">تصنيفات</p>
          <h2>قسمنا الفعاليات حسب نوعها ليسهل الوصول إليها</h2>
        </div>
        <div class="d-flex flex-wrap gap-2">
          <span class="badge category-badge">ريادة</span>
          <span class="badge category-badge">برمجة</span>
          <span class="badge category-badge">تدريب</span>
          <span class="badge category-badge">خدمات طلابية</span>
          <span class="badge category-badge">مبادرات</span>
          <span class="badge category-badge">خريجون</span>
        </div>
      </div>
    </section>

    <section class="section-block pt-0">
      <div class="container">
        <div class="section-title">
          <p class="eyebrow">آخر الإضافات</p>
          <h2>بعض العناصر التي أضفناها من موقع الجامعة</h2>
        </div>
        <div class="row g-3">
          <div class="col-md-6 col-xl-4">
            <article class="card event-card h-100">
              <img class="site-image site-image-card" src="img/llc-logo.png" alt="مركز التعلم مدى الحياة">
              <div class="card-body">
                <span class="badge badge-svu">تدريب</span>
                <h3>دورات مركز التعلم مدى الحياة</h3>
                <p>وضعنا هذا القسم للدورات التدريبية التي تفيد الطالب خارج الخطة الدراسية الأساسية.</p>
              </div>
            </article>
          </div>
          <div class="col-md-6 col-xl-4">
            <article class="card event-card h-100">
              <img class="site-image site-image-card" src="img/kpt.png" alt="التدريب البرمجي للأطفال واليافعين">
              <div class="card-body">
                <span class="badge badge-svu">مجتمع</span>
                <h3>التدريب البرمجي للأطفال واليافعين</h3>
                <p>هذا النشاط يوضح أن الجامعة لديها مبادرات موجهة للمجتمع أيضا.</p>
              </div>
            </article>
          </div>
          <div class="col-md-6 col-xl-4">
            <article class="card event-card h-100">
              <img class="site-image site-image-card" src="img/calendar.png" alt="تقويم الجامعة">
              <div class="card-body">
                <span class="badge badge-svu">خدمات</span>
                <h3>تقويم الجامعة</h3>
                <p>قسم بسيط لمتابعة المواعيد المهمة مثل التسجيل والامتحانات والإعلانات.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="row g-3 align-items-center">
        <div class="col-lg-6">
          <h2>الجامعة الافتراضية السورية</h2>
          <p>دمشق - الجمهورية العربية السورية | info@svuonline.org | 963 11 2113469+</p>
        </div>
        <div class="col-lg-6 text-lg-start">
          <p>روابط: Facebook | Instagram | YouTube | LinkedIn</p>
          <p>مشروع طلابي لمقرر BWP401 - <span data-current-year></span></p>
        </div>
      </div>
    </div>
  </footer>

  <button class="scroll-top-btn" type="button" id="scrollTopBtn" aria-label="العودة إلى الأعلى">↑</button>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
