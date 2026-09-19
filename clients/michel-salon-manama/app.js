(function () {
  "use strict";

  var strings = {
    ar: {
      skip: "تخطي إلى المحتوى",
      preview: "معاينة للمراجعة فقط — ليست موقعاً منشوراً. لا تُرسل أي بيانات.",
      brand: "ميشيل صالون",
      brandPlace: "المنامة، البحرين",
      navHome: "الرئيسية",
      navServices: "الخدمات",
      navGallery: "المعرض",
      navTeam: "الفريق",
      navBooking: "الحجز",
      navLocation: "الموقع",
      langToggle: "English",
      menu: "القائمة",
      heroEyebrow: "صالون تجميل في المنامة",
      heroTitle: "ميشيل صالون",
      heroLead:
        "عناية ناعمة بالشعر والبشرة والمكياج في أجواء هادئة بقلب المنامة. هذه صفحة معاينة للمراجعة فقط.",
      heroCtaPrimary: "احجزي عبر واتساب",
      heroCtaSecondary: "استكشفي الخدمات",
      heroMetaCityLabel: "المدينة",
      heroMetaCity: "المنامة",
      heroMetaKindLabel: "النوع",
      heroMetaKind: "صالون تجميل",
      heroMetaStatusLabel: "الحالة",
      heroMetaStatus: "معاينة مراجعة",
      servicesEyebrow: "ماذا نقدّم",
      servicesTitle: "خدمات الصالون",
      servicesLead: "قائمة خدمات إرشادية للمراجعة. التفاصيل النهائية والأسعار تُؤكَّد مع الصالون.",
      svc1Title: "قص وتصفيف",
      svc1Body: "قصات حديثة وتسريح يومي أو مناسبات، بما يناسب شكل الوجه ونوع الشعر.",
      svc2Title: "صبغات ولون",
      svc2Body: "تجديد اللون، خصلات، وتدرجات ناعمة مع عناية تحافظ على لمعان الشعر.",
      svc3Title: "عناية ومعالجات",
      svc3Body: "حمام زيت، ترطيب مكثف، ومعالجات نعومة حسب حالة الشعر.",
      svc4Title: "مكياج مناسبات",
      svc4Body: "مكياج سهرات وعرائس بإطلالة ناعمة وثابتة تناسب الإضاءة والتصوير.",
      svc5Title: "أظافر وعناية يد",
      svc5Body: "مانيكير وباديكير وتجميل أظافر بألوان هادئة أو جريئة حسب الطلب.",
      svc6Title: "بشرة وحواجب",
      svc6Body: "تنظيف بشرة، حواجب، ولمسات تجميل خفيفة تُبرز الملامح دون مبالغة.",
      galleryEyebrow: "أعمال الصالون",
      galleryTitle: "المعرض",
      galleryLead: "صور تجريبية للتخطيط فقط. ستُستبدل بصور حقيقية بعد موافقة العميل.",
      placeholder: "عنصر نائب",
      gal1: "تسريحة سهرة",
      gal2: "لون وخصلات",
      gal3: "مكياج عروس",
      gal4: "عناية بالشعر",
      gal5: "أظافر",
      gal6: "تفاصيل الصالون",
      teamEyebrow: "من يستقبلكِ",
      teamTitle: "الفريق",
      teamLead: "أسماء وصور الفريق عناصر نائبة للمراجعة. تُحدَّث بعد تأكيد الصالون.",
      tm1Name: "ميشيل",
      tm1Role: "مديرة الصالون — عنصر نائب",
      tm2Name: "ليلى",
      tm2Role: "مصففة شعر — عنصر نائب",
      tm3Name: "نور",
      tm3Role: "مكياج وبشرة — عنصر نائب",
      tm4Name: "سارة",
      tm4Role: "أظافر — عنصر نائب",
      bookingEyebrow: "الحجز",
      bookingTitle: "احجزي موعدك عبر واتساب",
      bookingLead: "لا يوجد نموذج يرسل بيانات. الزر يفتح واتساب فقط. الرقم أدناه عنصر نائب للمراجعة.",
      waNumberLabel: "واتساب:",
      bookingCta: "فتح واتساب (عنصر نائب)",
      locationEyebrow: "زورينا",
      locationTitle: "الموقع والتواصل",
      locationLead: "العنوان العام: المنامة، مملكة البحرين. الخريطة تفتح بحثاً عن Michel Salon Manama.",
      hoursTitle: "ساعات العمل",
      hoursNote: "مثال شائع لصالونات البحرين — يُؤكَّد لاحقاً",
      hoursWeekdays: "السبت – الخميس",
      hoursFriday: "الجمعة",
      contactTitle: "التواصل",
      contactCity: "المنامة، مملكة البحرين",
      mapLink: "فتح خريطة بحث: Michel Salon Manama",
      mapCta: "عرض الموقع على الخريطة",
      mapHint: "يفتح بحث خرائط عن Michel Salon Manama",
      footerCopy: "ميشيل صالون — المنامة. معاينة مراجعة فقط.",
      footerNote: "لا نشر ولا جمع بيانات في هذه النسخة.",
      waMessage: "مرحباً، أود حجز موعد في ميشيل صالون (معاينة مراجعة)."
    },
    en: {
      skip: "Skip to content",
      preview: "Review-only preview — not a live site. No data is sent.",
      brand: "Michel Salon",
      brandPlace: "Manama, Bahrain",
      navHome: "Home",
      navServices: "Services",
      navGallery: "Gallery",
      navTeam: "Team",
      navBooking: "Booking",
      navLocation: "Location",
      langToggle: "العربية",
      menu: "Menu",
      heroEyebrow: "Beauty salon in Manama",
      heroTitle: "Michel Salon",
      heroLead:
        "Soft hair, skin, and makeup care in a calm Manama setting. This page is a review-only preview.",
      heroCtaPrimary: "Book on WhatsApp",
      heroCtaSecondary: "Browse services",
      heroMetaCityLabel: "City",
      heroMetaCity: "Manama",
      heroMetaKindLabel: "Type",
      heroMetaKind: "Beauty salon",
      heroMetaStatusLabel: "Status",
      heroMetaStatus: "Review preview",
      servicesEyebrow: "What we offer",
      servicesTitle: "Salon services",
      servicesLead: "Indicative services for review. Final details and prices are confirmed with the salon.",
      svc1Title: "Cut & styling",
      svc1Body: "Modern cuts and everyday or event styling matched to face shape and hair type.",
      svc2Title: "Color",
      svc2Body: "Refresh, highlights, and soft blends with care that keeps shine.",
      svc3Title: "Treatments",
      svc3Body: "Oil baths, deep moisture, and smoothing treatments based on hair condition.",
      svc4Title: "Occasion makeup",
      svc4Body: "Evening and bridal makeup with a soft, camera-ready finish.",
      svc5Title: "Nails & hand care",
      svc5Body: "Manicure, pedicure, and nail art in quiet or bold shades.",
      svc6Title: "Skin & brows",
      svc6Body: "Facials, brows, and light beauty touches that lift features without excess.",
      galleryEyebrow: "Salon work",
      galleryTitle: "Gallery",
      galleryLead: "Layout placeholders only. Real photos replace these after client approval.",
      placeholder: "PLACEHOLDER",
      gal1: "Evening style",
      gal2: "Color & highlights",
      gal3: "Bridal makeup",
      gal4: "Hair care",
      gal5: "Nails",
      gal6: "Salon details",
      teamEyebrow: "Who welcomes you",
      teamTitle: "Team",
      teamLead: "Names and portraits are placeholders for review. Update after salon confirmation.",
      tm1Name: "Michel",
      tm1Role: "Salon director — PLACEHOLDER",
      tm2Name: "Layla",
      tm2Role: "Hair stylist — PLACEHOLDER",
      tm3Name: "Noor",
      tm3Role: "Makeup & skin — PLACEHOLDER",
      tm4Name: "Sara",
      tm4Role: "Nails — PLACEHOLDER",
      bookingEyebrow: "Booking",
      bookingTitle: "Book on WhatsApp",
      bookingLead: "No form sends data. The button only opens WhatsApp. The number below is a review PLACEHOLDER.",
      waNumberLabel: "WhatsApp:",
      bookingCta: "Open WhatsApp (PLACEHOLDER)",
      locationEyebrow: "Visit",
      locationTitle: "Location & contact",
      locationLead: "General address: Manama, Kingdom of Bahrain. The map opens a search for Michel Salon Manama.",
      hoursTitle: "Hours",
      hoursNote: "Example Bahrain salon hours — confirm later",
      hoursWeekdays: "Saturday – Thursday",
      hoursFriday: "Friday",
      contactTitle: "Contact",
      contactCity: "Manama, Kingdom of Bahrain",
      mapLink: "Open map search: Michel Salon Manama",
      mapCta: "View location on the map",
      mapHint: "Opens a maps search for Michel Salon Manama",
      footerCopy: "Michel Salon — Manama. Review-only preview.",
      footerNote: "No publish step and no data collection in this build.",
      waMessage: "Hello, I would like to book an appointment at Michel Salon (review preview)."
    }
  };

  var root = document.documentElement;
  var toggle = document.getElementById("lang-toggle");
  var menuToggle = document.getElementById("menu-toggle");
  var nav = document.getElementById("site-nav");
  var backdrop = document.getElementById("nav-backdrop");
  var waLink = document.getElementById("whatsapp-link");

  function currentLang() {
    return root.getAttribute("data-lang") === "en" ? "en" : "ar";
  }

  function applyLang(lang) {
    var pack = strings[lang];
    var isAr = lang === "ar";

    root.lang = isAr ? "ar" : "en";
    root.dir = isAr ? "rtl" : "ltr";
    root.setAttribute("data-lang", lang);
    document.title = isAr
      ? "ميشيل صالون | معاينة مراجعة — المنامة"
      : "Michel Salon | Review preview — Manama";

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (pack[key]) {
        node.textContent = pack[key];
      }
    });

    if (toggle) {
      toggle.setAttribute("aria-pressed", isAr ? "false" : "true");
    }

    if (waLink) {
      waLink.href =
        "https://wa.me/97300000000?text=" + encodeURIComponent(pack.waMessage);
    }

    try {
      sessionStorage.setItem("michel-salon-lang", lang);
    } catch (err) {
      /* ignore quota / private mode */
    }
  }

  function setMenu(open) {
    if (!nav || !menuToggle) {
      return;
    }
    nav.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("nav-open", open);
    if (backdrop) {
      backdrop.hidden = !open;
    }
  }

  function closeMenu() {
    setMenu(false);
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      applyLang(currentLang() === "ar" ? "en" : "ar");
      closeMenu();
    });
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      setMenu(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeMenu);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  var saved = null;
  try {
    saved = sessionStorage.getItem("michel-salon-lang");
  } catch (err) {
    saved = null;
  }

  applyLang(saved === "en" ? "en" : "ar");
})();
