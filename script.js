// script.js

// 1️⃣ Initialize AOS animations
AOS.init({ duration: 800, once: true });

// 2️⃣ Translation dictionaries
const translations = {
  en: {
    "meta.title": "Pedro Palacio Estrada | Portfolio",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.experience": "Professional Experience",
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

    // Footer
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
    "nav.experience": "Experiencia Profesional",
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
    "experience.title": "Experiencia Profesional",

    "experience.event1.time": "Jul 2023 – Presente",
    "experience.event1.title": "CERN – Software Engineer (GRAE)",
    "experience.event1.bullet1":
      "Desarrollé Web Energy: monitorización de consumo energético.",
    "experience.event1.bullet2":
      "Sistema de peticiones de equipos con Angular y Java.",
    "experience.event1.bullet3":
      "Optimizé pipelines CI/CD en GitLab/Docker sobre OpenShift.",
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

// 3️⃣ Apply translations to any element with a data-i18n attribute
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

// 4️⃣ Language switch buttons
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

const views = document.querySelectorAll(".view");
const navLinks = document.querySelectorAll(".nav-link");

function router() {
  const hash = window.location.hash || "#/";
  views.forEach((v) => v.classList.add("hidden"));
  document
    .querySelectorAll(".route-anim")
    .forEach((el) => el.classList.remove("route-anim"));

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
    default:
      targetView = "#view-home";
  }

  const viewEl = document.querySelector(targetView);
  viewEl.classList.remove("hidden");

  gtag("event", "page_view", {
    page_path: window.location.hash,
    page_title: document.title,
  });

  navLinks.forEach((link) => link.classList.remove("active"));
  const activeLink = document.querySelector(`nav a[href="${hash}"]`);
  if (activeLink) activeLink.classList.add("active");

  const animItems = viewEl.querySelectorAll(":scope > *");
  animItems.forEach((item, i) =>
    setTimeout(() => item.classList.add("route-anim"), i * 100)
  );

  if (hash === "#/projects") {
    const cards = viewEl.querySelectorAll(".card");
    cards.forEach((card, i) =>
      setTimeout(
        () => card.classList.add("route-anim"),
        (i + animItems.length) * 100
      )
    );
  }

  if (hash === "#/experience") {
    const events = viewEl.querySelectorAll(".timeline .event");
    events.forEach((ev, i) =>
      setTimeout(
        () => ev.classList.add("route-anim"),
        (i + animItems.length) * 100
      )
    );
  }

  if (hash === "#/contact") {
    const cards = viewEl.querySelectorAll(".contact-card");
    cards.forEach((card, i) =>
      setTimeout(
        () => card.classList.add("route-anim"),
        (i + animItems.length) * 100
      )
    );
  }
}

window.addEventListener("hashchange", () => {
  router();
  applyTranslations(window.currentLang);
});
window.addEventListener("load", () => {
  window.currentLang = "es";
  applyTranslations(window.currentLang);
  router();
});

// 6️⃣ Project modal logic
const modal = document.getElementById("project-modal");
const backdrop = modal.querySelector(".modal-backdrop");
const btnClose = modal.querySelector(".modal-close");
const titleEl = document.getElementById("modal-title");
const textEl = document.getElementById("modal-text");

document.querySelectorAll("#view-projects button.card").forEach((card) => {
  card.addEventListener("click", () => {
    titleEl.innerText = card.dataset.title;
    textEl.innerText = card.dataset.text;
    modal.classList.remove("hidden");
  });
});

function closeModal() {
  modal.classList.add("hidden");
}

btnClose.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
