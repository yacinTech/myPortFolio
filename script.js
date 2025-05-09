const content = {
    ar: {
      dir: "rtl",
      nav: ["الرئيسية", "نبذة عني", "مشاريعي", "تواصل معي"],
      title: "مرحبًا، أنا ياسين المعطاوي",
      desc: "أنا مطوّر Full Stack متخصص في تقنيات MERN (MongoDB, Express.js, React, Node.js)، أمتلك شغفًا ببناء تطبيقات ويب حديثة وعالية الأداء. أتمتع بقدرة على تحويل الأفكار إلى حلول رقمية متكاملة، من الواجهة الأمامية الجذابة إلى الخلفية القوية والآمنة. أسعى دائمًا لتقديم تجارب مستخدم متميزة وكود نظيف وقابل للتطوير. كما أواكب باستمرار أحدث التقنيات في عالم تطوير الويب لأضمن جودة وفعالية المشاريع التي أعمل عليها.",
      projectsTitle: "مشاريعي",
      contactTitle: "تواصل معي",
      footer: "© 2025 جميع الحقوق محفوظة.",

           // باقي المحتوى...
        hireTitle: "هل ترغب بالعمل معي؟",
        hireDesc: "أنا مستعد لتنفيذ مشاريعك الشخصية أو العمل معك كمطور مستقل، فقط تواصل معي عبر النموذج أدناه.",
        placeholderName: "الاسم الكامل",
        placeholderPhone: "رقم الهاتف",
        placeholderEmail: "البريد الإلكتروني",
        placeholderMessage: "اكتب رسالتك هنا...",
        sendButton: "إرسال",
    },
    fr: {
      dir: "ltr",
      nav: ["Accueil", "À propos", "Mes projets", "Contact"],
      title: "Bonjour, je suis Yassine El Maataoui",
      desc: "Je suis un développeur Full Stack spécialisé dans la stack MERN (MongoDB, Express.js, React, Node.js), passionné par la création d’applications web modernes et performantes. J’ai la capacité de transformer des idées en solutions numériques complètes, avec des interfaces élégantes côté client et une architecture robuste côté serveur. Je m’efforce de livrer des expériences utilisateur fluides, un code propre et évolutif. Je reste constamment à jour avec les dernières technologies pour garantir la qualité et l'efficacité des projets que je réalise.",
      projectsTitle: "Mes projets",
      contactTitle: "Contactez-moi",
      footer: "© 2025 Tous droits réservés.",

      hireTitle: "Vous souhaitez collaborer avec moi ?",
      hireDesc: "Je suis disponible pour réaliser vos projets personnels ou collaborer en freelance. Contactez-moi via ce formulaire.",
      placeholderName: "Nom complet",
      placeholderPhone: "Numéro de téléphone",
      placeholderEmail: "Adresse e-mail",
      placeholderMessage: "Écrivez votre message ici...",
      sendButton: "Envoyer",
    },
  };
  

  
  function switchLanguage(lang) {
    const data = content[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = data.dir;
  
    document.getElementById("nav-home").textContent = data.nav[0];
    document.getElementById("nav-about").textContent = data.nav[1];
    document.getElementById("nav-projects").textContent = data.nav[2];
    document.getElementById("nav-contact").textContent = data.nav[3];
    document.getElementById("intro-title").textContent = data.title;
    document.getElementById("intro-desc").textContent = data.desc;
    document.getElementById("projects-title").textContent = data.projectsTitle;
    document.getElementById("contact-title").textContent = data.contactTitle;
    document.getElementById("footer-text").textContent = data.footer;

    document.getElementById("hire-title").textContent = data.hireTitle;
    document.getElementById("hire-desc").textContent = data.hireDesc;
    document.getElementById("name").placeholder = data.placeholderName;
    document.getElementById("phone").placeholder = data.placeholderPhone;
    document.getElementById("email").placeholder = data.placeholderEmail;
    document.getElementById("message").placeholder = data.placeholderMessage;
    document.querySelector(".contact-form button").textContent = data.sendButton;

  }

  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
  
      // إزالة active من جميع العناصر
      document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
  
      // إضافة active للعنصر الحالي
      this.classList.add('active');
  
      // Scroll Smooth
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  

// تأكد من أن الكود لا يُنفذ قبل تحميل الصفحة
window.addEventListener("DOMContentLoaded", function () {
    // ربط حدث الإرسال بالنموذج
    document.querySelector(".contact-form").addEventListener("submit", function (e) {
      e.preventDefault(); // منع التحديث التلقائي للصفحة
  
      console.log("Form submitted"); // تأكيد أن الحدث يعمل
  
      // إرسال البيانات باستخدام EmailJS
      emailjs.send("service_0w199h5", "template_o80xf1h", {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
      })
      .then(function (response) {
        alert("✅ تم إرسال الرسالة بنجاح!");
        document.getElementById("contact-form").reset();
      }, function (error) {
        alert("❌ فشل في الإرسال، تحقق من الإعدادات.");
        console.error(error);
      });
    });
  });
  