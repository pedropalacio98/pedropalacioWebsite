// Initialize AOS animations
AOS.init({ duration: 800, once: true });

// Translation dictionaries
const translations = {
  en: {
    "meta.title": "Pedro Palacio Estrada | Portfolio",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.experience": "Proffesional Experience",
    "nav.contact": "Contact",
    "hero.title": "Pedro Palacio Estrada",
    "hero.subtitle": "Software Engineer | Full-stack Developer",
    "about.title": "About Me",
    "about.text":
      "I am a passionate full-stack software engineer who creates scalable, optimized applications. Skilled in frontend, backend, CI/CD, and Agile methodologies.",
    "projects.title": "Highlighted Projects",
    "project.supplyManager.title": "Supply Manager (CERN)",
    "project.supplyManager.text":
      "Inventory management and procurement workflows at CERN.",
    "project.webEnergy.title": "Web Energy (CERN)",
    "project.webEnergy.text":
      "Energy consumption monitoring with interactive dashboards.",
    "project.technicalPanels.title": "Technical Panels (CERN)",
    "project.technicalPanels.text":
      "Migrated complex Excel workflows into formula-driven processes with Gantt chart visualizations.",
    "project.worksManager.title": "Works Manager (CERN)",
    "project.worksManager.text":
      "Supported and extended the Works Manager project with new features for project tracking.",
    "project.copesa.title": "Copesa Mobile (Goo Apps)",
    "project.copesa.text":
      "React Native features and Symfony backend for a news distribution app.",
    "project.motorhertzer.title": "Motorhertzer (Bachelor’s Thesis)",
    "project.motorhertzer.text":
      "Developed Python signal-processing algorithms for automotive sensors, reducing noise by 15%.",
    "project.fireDrone.title": "FireDrone (Master’s)",
    "project.fireDrone.text":
      "Autonomous firefighting drone software using C++ and ROS, achieving 85% detection accuracy.",
    "contact.title": "Contact",
    "contact.emailLabel": "Email",
    "contact.linkedinLabel": "LinkedIn",
    "footer.text": "© 2025 Pedro Palacio Estrada. All rights reserved.",
  },
  es: {
    "meta.title": "Pedro Palacio Estrada | Portfolio",
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.title": "Pedro Palacio Estrada",
    "hero.subtitle": "Ingeniero de Software | Full-stack Developer",
    "about.title": "Sobre mí",
    "about.text":
      "Soy un ingeniero de software full-stack apasionado por crear aplicaciones escalables y optimizadas. Experto en frontend, backend, CI/CD y metodologías Agile.",
    "projects.title": "Proyectos Destacados",
    "project.supplyManager.title": "Supply Manager (CERN)",
    "project.supplyManager.text":
      "Gestión de inventario y flujos de adquisición en CERN.",
    "project.webEnergy.title": "Web Energy (CERN)",
    "project.webEnergy.text":
      "Monitorización del consumo energético con dashboards interactivos.",
    "project.technicalPanels.title": "Paneles Técnicos (CERN)",
    "project.technicalPanels.text":
      "Migración de flujos complejos de Excel a procesos automatizados con fórmulas y diagramas de Gantt.",
    "project.worksManager.title": "Works Manager (CERN)",
    "project.worksManager.text":
      "Soporte y extensión de funcionalidades en el proyecto Works Manager para el seguimiento de proyectos.",
    "project.copesa.title": "Copesa Mobile (Goo Apps)",
    "project.copesa.text":
      "Funcionalidades en React Native y backend Symfony para app de noticias.",
    "project.motorhertzer.title": "Motorhertzer (Tesis de Grado)",
    "project.motorhertzer.text":
      "Algoritmos de procesamiento de señales en Python para sensores automotrices, reduciendo ruido en un 15%.",
    "project.fireDrone.title": "FireDrone (Máster)",
    "project.fireDrone.text":
      "Software autónomo para drones contra incendios usando C++ y ROS.",
    "contact.title": "Contacto",
    "contact.emailLabel": "Email",
    "contact.linkedinLabel": "LinkedIn",
    "footer.text":
      "© 2025 Pedro Palacio Estrada. Todos los derechos reservados.",
  },
};

// Apply translations based on current language
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

// Language switch buttons
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

// Simple hash-based router with route-change animations
const views = document.querySelectorAll(".view");
const navLinks = document.querySelectorAll(".nav-link");

function router() {
  const hash = window.location.hash || "#/";
  views.forEach((v) => v.classList.add("hidden"));
  document
    .querySelectorAll(".card")
    .forEach((c) => c.classList.remove("route-anim"));

  let targetView;
  if (hash === "#/") targetView = "#view-home";
  else if (hash === "#/projects") targetView = "#view-projects";
  else if (hash === "#/experience") targetView = "#view-experience";
  else targetView = "#view-contacts";

  const viewEl = document.querySelector(targetView);
  viewEl.classList.remove("hidden");
  navLinks.forEach((link) => link.classList.remove("active"));
  document.querySelector(`nav a[href="${hash}"]`).classList.add("active");

  if (targetView === "#view-projects") {
    const cards = viewEl.querySelectorAll(".card");
    cards.forEach((card, index) => {
      setTimeout(() => card.classList.add("route-anim"), index * 100);
    });
  }
}

window.addEventListener("hashchange", () => {
  router();
  applyTranslations(window.currentLang);
});
window.addEventListener("load", () => {
  const defaultLang = "es";
  window.currentLang = defaultLang;
  applyTranslations(defaultLang);
  router();
});

function router() {
  const hash = window.location.hash || "#/";
  views.forEach((v) => v.classList.add("hidden"));
  // remove any lingering animations
  document.querySelectorAll(".route-anim").forEach((el) => {
    el.classList.remove("route-anim");
  });

  let targetView;
  if (hash === "#/") targetView = "#view-home";
  else if (hash === "#/projects") targetView = "#view-projects";
  else targetView = "#view-contact";

  const viewEl = document.querySelector(targetView);
  viewEl.classList.remove("hidden");

  // mark nav link as active
  navLinks.forEach((link) => link.classList.remove("active"));
  document.querySelector(`nav a[href="${hash}"]`).classList.add("active");

  // 1️⃣ Animate every direct child of this view
  const animItems = viewEl.querySelectorAll(":scope > *");
  animItems.forEach((item, index) => {
    setTimeout(() => item.classList.add("route-anim"), index * 100);
  });

  // 2️⃣ (Unchanged)—if we're on projects, also stagger each .card
  if (targetView === "#view-projects") {
    const cards = viewEl.querySelectorAll(".card");
    cards.forEach((card, i) => {
      setTimeout(
        () => card.classList.add("route-anim"),
        (i + animItems.length) * 100
      );
    });
  }
}

const modal = document.getElementById("project-modal");
const backdrop = modal.querySelector(".modal-backdrop");
const btnClose = modal.querySelector(".modal-close");
const titleEl = document.getElementById("modal-title");
const textEl = document.getElementById("modal-text");

document.querySelectorAll("#view-projects button.card").forEach((card) => {
  card.addEventListener("click", () => {
    const t = card.dataset.title;
    const txt = card.dataset.text;

    titleEl.innerText = t;
    textEl.innerText = txt;

    modal.classList.remove("hidden");
  });
});

// Función para cerrar
function closeModal() {
  modal.classList.add("hidden");
}
btnClose.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

// Escapar con la tecla Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
