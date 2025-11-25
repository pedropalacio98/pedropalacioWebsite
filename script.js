// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

// Custom Cursor Logic
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  // Dot follows instantly
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // Outline follows with slight delay (using animate for smoothness)
  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll("a, button, .project-card");
interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)";
    cursorOutline.style.backgroundColor = "rgba(59, 130, 246, 0.1)";
  });
  el.addEventListener("mouseleave", () => {
    cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
    cursorOutline.style.backgroundColor = "transparent";
  });
});

// Parallax Effect for Background
window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  const bg1 = document.querySelector(".bg-gradient-1");
  const bg2 = document.querySelector(".bg-gradient-2");

  if (bg1) {
    bg1.style.transform = `translate(-${x * 50}px, -${y * 50}px)`;
  }
  if (bg2) {
    bg2.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
  }
});

const translations = {
  en: {
    "meta.title": "Pedro Palacio Estrada | Portfolio",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "hero.greeting": "Hello, I am",
    "hero.title": "Pedro Palacio Estrada",
    "hero.subtitle": "Software Engineer | Full-stack Developer",
    "hero.cta": "View Projects",
    "hero.contact": "Contact Me",
    "about.title": "About Me",
    "about.text":
      "I am a passionate full-stack software engineer who creates scalable, optimized applications. Skilled in frontend, backend, CI/CD, and Agile methodologies.",
    "projects.title": "Highlighted Projects",
    "experience.title": "Professional Experience",
    "experience.event1.time": "Jul 2023 – Present",
    "experience.event1.title": "CERN – Software Engineer (GRAE)",
    "experience.event1.bullet1":
      "Developed Web Energy: energy consumption monitoring.",
    "experience.event1.bullet2":
      "Equipment request system with Angular and Java.",
    "experience.event1.bullet3":
      "Optimized CI/CD pipelines on GitLab/Docker over OpenShift.",
    "experience.event1.bullet4":
      "Redesigned backend with Spring Boot and Oracle.",
    "experience.event1.bullet5": "Mentored and onboarded interns.",
    "experience.event2.time": "May 2022 – Jul 2023",
    "experience.event2.title": "CERN – Software Engineer (PJAS)",
    "experience.event2.bullet1": "5+ tools in Java Spring Boot and Angular.",
    "experience.event2.bullet2":
      "CI/CD Docker/OpenShift: –40% deployment time.",
    "experience.event2.bullet3": "Optimized Oracle queries: +25% performance.",
    "experience.event3.time": "Mar – May 2022",
    "experience.event3.title": "Merkle Inc. – Data Engineer",
    "experience.event3.bullet1":
      "Integration of Google Analytics, GTM and Adobe Analytics.",
    "experience.event4.time": "Sep 2021 – Feb 2022",
    "experience.event4.title": "Goo Apps – Software Engineering Intern",
    "experience.event4.bullet1":
      "Functions in React Native and Symfony (Copesa Mobile).",
    "experience.event4.bullet2":
      "5k+ active users with performance optimizations.",
    "experience.event5.time": "Feb 2020 – Jun 2021",
    "experience.event5.title": "CTIC Foundation – Software Dev Intern",
    "experience.event5.bullet1":
      "Embedded applications in Python/PyQt (+30% automation).",
    "experience.event5.bullet2":
      "Web modules in Node.js/React and Spring Java projects.",
    "experience.event6.time": "Sep 2019 – Feb 2020",
    "experience.event6.title": "University of Oviedo – Intern",
    "experience.event6.bullet1": "System and network administration.",
    "contact.title": "Contact",
    "contact.emailLabel": "Email",
    "contact.websiteLabel": "Website",
    "contact.linkedinLabel": "LinkedIn",
    "footer.text": "© 2025 Pedro Palacio Estrada. All rights reserved.",
  },
  es: {
    "meta.title": "Pedro Palacio Estrada | Portfolio",
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",
    "hero.greeting": "Hola, soy",
    "hero.title": "Pedro Palacio Estrada",
    "hero.subtitle": "Ingeniero de Software | Full-stack Developer",
    "hero.cta": "Ver Proyectos",
    "hero.contact": "Contactar",
    "about.title": "Sobre mí",
    "about.text":
      "Soy un ingeniero de software full-stack apasionado por crear aplicaciones escalables y optimizadas. Experto en frontend, backend, CI/CD y metodologías Agile.",
    "projects.title": "Proyectos Destacados",
    "experience.title": "Experiencia Profesional",
    "experience.event1.time": "Jul 2023 – Presente",
    "experience.event1.title": "CERN – Software Engineer (GRAE)",
    "experience.event1.bullet1":
      "Desarrollé Web Energy: monitorización de consumo energético.",
    "experience.event1.bullet2":
      "Sistema de peticiones de equipos con Angular y Java.",
    "experience.event1.bullet3":
      "Optimicé pipelines CI/CD en GitLab/Docker sobre OpenShift.",
    "experience.event1.bullet4": "Rediseñé backend con Spring Boot y Oracle.",
    "experience.event1.bullet5":
      "Mentoría y onboarding de estudiantes en prácticas.",
    "experience.event2.time": "May 2022 – Jul 2023",
    "experience.event2.title": "CERN – Software Engineer (PJAS)",
    "experience.event2.bullet1":
      "5+ herramientas en Java Spring Boot y Angular.",
    "experience.event2.bullet2":
      "CI/CD Docker/OpenShift: –40% tiempo de despliegue.",
    "experience.event2.bullet3":
      "Optimización de consultas Oracle: +25% rendimiento.",
    "experience.event3.time": "Mar – May 2022",
    "experience.event3.title": "Merkle Inc. – Data Engineer",
    "experience.event3.bullet1":
      "Integración de Google Analytics, GTM y Adobe Analytics.",
    "experience.event4.time": "Sep 2021 – Feb 2022",
    "experience.event4.title": "Goo Apps – Software Engineering Intern",
    "experience.event4.bullet1":
      "Funciones en React Native y Symfony (Copesa Mobile).",
    "experience.event4.bullet2":
      "5k+ usuarios activos con optimizaciones de rendimiento.",
    "experience.event5.time": "Feb 2020 – Jun 2021",
    "experience.event5.title": "CTIC Foundation – Software Dev Intern",
    "experience.event5.bullet1":
      "Aplicaciones embebidas en Python/PyQt (+30% automatización).",
    "experience.event5.bullet2":
      "Módulos web en Node.js/React y proyectos en Spring Java.",
    "experience.event6.time": "Sep 2019 – Feb 2020",
    "experience.event6.title": "University of Oviedo – Intern",
    "experience.event6.bullet1": "Administración de sistemas y redes.",
    "contact.title": "Contacto",
    "contact.emailLabel": "Email",
    "contact.websiteLabel": "Web",
    "contact.linkedinLabel": "LinkedIn",
    "footer.text":
      "© 2025 Pedro Palacio Estrada. Todos los derechos reservados.",
  },
};

// Internationalization
function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
  if (translations[lang]["meta.title"]) {
    document.title = translations[lang]["meta.title"];
  }
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    window.currentLang = lang;
    applyTranslations(lang);
    document
      .querySelectorAll(".lang-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Routing
const views = document.querySelectorAll(".view");
const navLinks = document.querySelectorAll(".nav-link");

function router() {
  const hash = window.location.hash || "#/";

  // Hide all views
  views.forEach((v) => v.classList.add("hidden"));

  let targetView;
  switch (hash) {
    case "#/":
      targetView = "#view-home";
      break;
    case "#/projects":
      targetView = "#view-projects";
      break;
    case "#/experience":
      targetView = "#view-experience";
      break;
    case "#/contact":
      targetView = "#view-contact";
      break;
    case "#/admin":
      targetView = "#view-admin";
      break;
    default:
      targetView = "#view-home";
  }

  const viewEl = document.querySelector(targetView);
  if (viewEl) {
    viewEl.classList.remove("hidden");
    // Refresh AOS when view changes
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }

  // Update Active Nav Link
  navLinks.forEach((link) => link.classList.remove("active"));
  const activeLink = document.querySelector(`nav a[href="${hash}"]`);
  if (activeLink) activeLink.classList.add("active");

  // Google Analytics Event
  if (typeof gtag === 'function') {
    gtag("event", "page_view", {
      page_path: window.location.hash,
      page_title: document.title,
    });
  }

  // Close mobile menu if open
  const nav = document.getElementById("main-nav");
  const btn = document.querySelector(".mobile-menu-btn");
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    btn.classList.remove("active");
  }
}

window.addEventListener("hashchange", () => {
  router();
  applyTranslations(window.currentLang || "es");
});

window.addEventListener("load", () => {
  window.currentLang = "es";
  applyTranslations(window.currentLang);
  router();
});

// Mobile Menu
const mobileBtn = document.querySelector(".mobile-menu-btn");
const mainNav = document.getElementById("main-nav");

if (mobileBtn) {
  mobileBtn.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    mobileBtn.classList.toggle("active");
  });
}

// Modal Logic
const modal = document.getElementById("project-modal");
const backdrop = modal.querySelector(".modal-backdrop");
const btnClose = modal.querySelector(".modal-close");
const titleEl = document.getElementById("modal-title");
const textEl = document.getElementById("modal-text");

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    titleEl.innerText = card.dataset.title;
    textEl.innerText = card.dataset.text;
    modal.classList.remove("hidden");
  });
});

function closeModal() {
  modal.classList.add("hidden");
}

if (btnClose) btnClose.addEventListener("click", closeModal);
if (backdrop) backdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Firebase Logic
const firebaseConfig = {
  apiKey: "AIzaSyDB2GV4nS6oil8RpB5FejqHPRNlyU8D-zI",
  authDomain: "ppalacio-website.firebaseapp.com",
  projectId: "ppalacio-website",
  storageBucket: "ppalacio-website.firebasestorage.app",
  messagingSenderId: "915653259932",
  appId: "1:915653259932:web:c2a2c334825ba21e05b359",
  measurementId: "G-7JCXGYDW8S"
};

// Initialize Firebase
let auth;
try {
  const app = window.firebase.initializeApp(firebaseConfig);
  auth = window.firebase.getAuth(app);
} catch (error) {
  console.error("Firebase init error (expected if config is placeholder):", error);
}

const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const userProfile = document.getElementById("user-profile");
const userAvatar = document.getElementById("user-avatar");
const adminLink = document.getElementById("admin-link"); // Keep for hero button if exists
const navAdminLink = document.getElementById("nav-admin-link");
const adminView = document.getElementById("view-admin");

// Allowed email
const ALLOWED_EMAIL = "pedropalacioestrada@gmail.com";

if (auth) {
  loginBtn.addEventListener("click", () => {
    const provider = new window.firebase.GoogleAuthProvider();
    window.firebase.signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Logged in:", result.user);
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Error logging in: " + error.message);
      });
  });

  logoutBtn.addEventListener("click", () => {
    window.firebase.signOut(auth).then(() => {
      console.log("Logged out");
      window.location.hash = "#/";
    });
  });

  window.firebase.onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      loginBtn.classList.add("hidden");
      userProfile.classList.remove("hidden");
      userAvatar.src = user.photoURL;

      if (user.email === ALLOWED_EMAIL) {
        if (adminLink) adminLink.classList.remove("hidden");
        if (navAdminLink) navAdminLink.classList.remove("hidden");
      } else {
        if (adminLink) adminLink.classList.add("hidden");
        if (navAdminLink) navAdminLink.classList.add("hidden");
        // If currently on admin page, redirect
        if (window.location.hash === "#/admin") {
          window.location.hash = "#/";
        }
      }
    } else {
      // User is signed out
      loginBtn.classList.remove("hidden");
      userProfile.classList.add("hidden");
      if (adminLink) adminLink.classList.add("hidden");
      if (navAdminLink) navAdminLink.classList.add("hidden");

      if (window.location.hash === "#/admin") {
        window.location.hash = "#/";
      }
    }
  });
} else {
  console.warn("Firebase Auth not initialized. Check configuration.");
  // Mock for testing UI if needed (commented out)
  /*
  loginBtn.addEventListener("click", () => {
     loginBtn.classList.add("hidden");
     userProfile.classList.remove("hidden");
     adminLink.classList.remove("hidden");
     userAvatar.src = "https://via.placeholder.com/32";
  });
  */
}
