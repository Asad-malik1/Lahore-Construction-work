// Al-Rukan Builders - Clean Universal Native Bilingual Engine (No External Google Toolbar)
(function() {
  'use strict';

  // Clear any existing Google Translate cookies that might trigger external bars
  (function clearGoogleTranslate() {
    var cookies = ["googtrans", "googtrans_es", "googtrans_ur"];
    var domain = window.location.hostname;
    for (var i = 0; i < cookies.length; i++) {
      document.cookie = cookies[i] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = cookies[i] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + domain + ";";
    }
    // Remove any leftover Google frames if present
    var iframes = document.querySelectorAll('.goog-te-banner-frame, iframe[id=":1.container"], #goog-gt-tt, .goog-te-balloon-frame');
    for (var j = 0; j < iframes.length; j++) {
      if (iframes[j] && iframes[j].parentNode) {
        iframes[j].parentNode.removeChild(iframes[j]);
      }
    }
  })();

  var DICTIONARY = {
    // Navigation & Global UI
    "Home": "صفحۂ اول",
    "About Us": "ہمارے بارے میں",
    "Services": "خدمات",
    "Our Work": "ہمارا کام",
    "Work Gallery": "گیلری",
    "Contact": "رابطہ کریں",
    "Contact Us": "ہم سے رابطہ کریں",
    "WhatsApp Us": "واٹس ایپ رابطہ",
    "WhatsApp Quick Chat": "واٹس ایپ کوئیک چیٹ",
    "Call Owner": "مالک سے بات کریں",
    "Call Manager": "منیجر سے بات کریں",
    "Call Now": "ابھی کال کریں",
    "Call for a Site Visit": "سائٹ وزٹ کیلئے کال کریں",
    "Call for a Quote": "کوٹیشن کیلئے کال کریں",
    "Calculate Construction Cost": "گھر کی قیمت کا حساب لگائیں",
    "Quality Construction Without Shortcuts.": "بغیر کسی سمجھوتے کے معیاری تعمیرات۔",
    "Direct Contact": "براہ راست رابطہ",
    "Company": "کمپنی",
    "Privacy Policy": "پرائیویسی پالیسی",
    "Privacy & Disclaimer": "پرائیویسی و شرائط",
    "Page Not Found": "صفحہ نہیں ملا",
    "Back to Homepage": "ہوم پیج پر واپس جائیں",

    // Services Names
    "Home Builders": "گھر بنانے والے",
    "House Construction": "گھر کی تعمیر",
    "House Renovation": "گھر کی رینوویشن",
    "Tiles Work": "ٹائلز کا کام",
    "Tiles & Marble": "ٹائلز و ماربل",
    "Marble Fitting": "ماربل فٹنگ",
    "Construction Workers": "تعمیراتی مزدور و مستری",
    "House-Ready Contractor": "تیار گھر کا ٹھیکیدار",
    "Shop Construction": "دکان و کمرشل تعمیر",
    "Commercial Plazas": "کمرشل پلازے",

    // Homepage Hero & Badges
    "100% Quality Guaranteed • Zero Compromise on Steel & Cement": "100٪ معیاری تعمیر • اسٹیل اور سیمنٹ پر صفر سمجھوتہ",
    "Build Your Dream Home in Lahore Without Delays, Hidden Costs, or Substandard Material": "لاہور میں اپنے خوابوں کا گھر بنوائیں — بغیر تاخیر، چھپے اخراجات، یا ناقص میٹریل کے",
    "A legacy of 40+ years in construction, structural durability, and trust across Lahore, Punjab. Founded 1984.": "لاہور میں 1984 سے 40 سالہ قابل اعتماد تعمیراتی خدمات اور پائیدار معیار۔",
    "Trusted Construction in Lahore Since 1984": "لاہور میں 1984 سے بااعتماد تعمیراتی خدمات",
    "Family Owned & Operated": "خاندانی بااعتماد ادارہ",
    "Direct Site Supervision": "سائٹ پر براہ راست نگرانی",

    // Calculator & Actions
    "Plot Size (Marla)": "پلاٹ کا سائز (مرلہ)",
    "Construction Type": "تعمیر کی قسم",
    "Gray Structure Only": "صرف گرے سٹرکچر",
    "Turnkey (A-Grade Finishing)": "مکمل تیار گھر (اے گریڈ فنشنگ)",
    "Turnkey (Premium Finishing)": "پریمیم لگژری فنشنگ",
    "Estimated Cost": "تخمینہ لاگت",
    "Get Detailed Breakdown on WhatsApp": "واٹس ایپ پر مکمل تفصیلات حاصل کریں",
    "Talk to the people doing the work.": "براہ راست کام کرنے والی ٹیم سے بات کریں۔",
    "Real Lahore projects, not stock photos.": "لاہور کے حقیقی تعمیراتی منصوبے، کوئی فرضی تصاویر نہیں۔",
    "A Lahore construction family, four decades in.": "لاہور میں چار دہائیوں سے تعمیرات کا بااعتماد نام۔"
  };

  function getLang() {
    return localStorage.getItem("alrukan_lang") || "en";
  }

  function updateThemeUI(theme) {
    var isUrdu = (getLang() === "ur");
    var lbl = document.getElementById("theme-lbl");
    if (theme === "dark") {
      if (lbl) lbl.textContent = isUrdu ? "لائٹ موڈ" : "Light Mode";
    } else {
      if (lbl) lbl.textContent = isUrdu ? "ڈارک موڈ" : "Dark Mode";
    }
  }

  // Pure client DOM translation with preservation of original text & child links
  function translateDOM(isUrdu) {
    // 1. Elements with explicit data-ur
    var explicit = document.querySelectorAll("[data-ur]");
    for (var i = 0; i < explicit.length; i++) {
      var el = explicit[i];
      var dataUr = el.getAttribute("data-ur");
      var dataEn = el.getAttribute("data-en");
      if (!dataEn) {
        dataEn = el.textContent.trim();
        el.setAttribute("data-en", dataEn);
      }
      // Never wipe elements that contain interactive child tags
      if (el.children.length === 0) {
        el.textContent = isUrdu ? dataUr : dataEn;
      }
    }

    // 2. Leaf text elements for dictionary matching
    var targets = document.querySelectorAll("h1, h2, h3, h4, h5, p, a, span, button, .eyebrow-plain, .rule, .lede");
    for (var j = 0; j < targets.length; j++) {
      var t = targets[j];
      // CRITICAL: NEVER touch elements that contain child tags (e.g. <li> with <a>, <p> with <a>)
      if (t.children.length > 0) continue;
      if (t.hasAttribute("data-ur")) continue; // already handled

      var text = t.textContent.trim().replace(/\s+/g, " ");
      if (!text) continue;

      if (!t.hasAttribute("data-orig-text")) {
        t.setAttribute("data-orig-text", text);
      }

      var orig = t.getAttribute("data-orig-text");
      if (isUrdu) {
        if (DICTIONARY[orig]) {
          t.textContent = DICTIONARY[orig];
        }
      } else {
        t.textContent = orig;
      }
    }
  }

  function applyLanguage(lang) {
    var isUrdu = (lang === "ur");
    document.documentElement.setAttribute("lang", lang);
    if (isUrdu) {
      document.documentElement.setAttribute("dir", "rtl");
      if (document.body) document.body.classList.add("lang-urdu");
    } else {
      document.documentElement.removeAttribute("dir");
      if (document.body) document.body.classList.remove("lang-urdu");
    }

    localStorage.setItem("alrukan_lang", lang);

    var langLbl = document.getElementById("lang-lbl");
    if (langLbl) {
      langLbl.textContent = isUrdu ? "English" : "اردو";
    }

    // Native dictionary translation
    translateDOM(isUrdu);

    // Update theme toggle label
    var currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    updateThemeUI(currentTheme);

    // Refresh cost calculator if present
    if (typeof window.calculateCost === "function") {
      window.calculateCost();
    }
  }

  function setupNavigation() {
    var menuToggle = document.getElementById("menu-toggle");
    var mainNav = document.getElementById("main-nav");
    if (!menuToggle || !mainNav || menuToggle.dataset.bound === "true") return;

    menuToggle.dataset.bound = "true";

    function closeNav() {
      if (mainNav.classList.contains("open")) {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      }
    }

    menuToggle.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      var isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    document.addEventListener("click", function(e) {
      if (mainNav.classList.contains("open") && !mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
        closeNav();
      }
    });

    var navLinks = mainNav.querySelectorAll("a");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", closeNav);
    }

    var lastScrollY = window.scrollY || window.pageYOffset;
    window.addEventListener("scroll", function() {
      var currentY = window.scrollY || window.pageYOffset;
      if (Math.abs(currentY - lastScrollY) > 10 && mainNav.classList.contains("open")) {
        closeNav();
      }
      lastScrollY = currentY;
    }, { passive: true });
  }

  function setupButtons() {
    var themeBtn = document.getElementById("theme-toggle");
    if (themeBtn && themeBtn.dataset.bound !== "true") {
      themeBtn.dataset.bound = "true";
      themeBtn.addEventListener("click", function(e) {
        e.preventDefault();
        var current = document.documentElement.getAttribute("data-theme") || "dark";
        var next = (current === "dark") ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("alrukan_theme", next);
        localStorage.setItem("theme", next);
        updateThemeUI(next);
      });
    }

    var langBtn = document.getElementById("lang-toggle");
    if (langBtn && langBtn.dataset.bound !== "true") {
      langBtn.dataset.bound = "true";
      langBtn.addEventListener("click", function(e) {
        e.preventDefault();
        var current = getLang();
        var nextLang = (current === "ur") ? "en" : "ur";
        applyLanguage(nextLang);
      });
    }
  }

  function init() {
    var yEl = document.getElementById("y");
    if (yEl) {
      yEl.textContent = new Date().getFullYear();
    }
    setupNavigation();
    setupButtons();

    var savedTheme = localStorage.getItem("alrukan_theme") || localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeUI(savedTheme);

    var lang = getLang();
    applyLanguage(lang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
