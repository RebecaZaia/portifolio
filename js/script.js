const header = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const navLinks = document.querySelectorAll(".nav-link");

function setMenuState(isOpen) {
  mainNav.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  menuToggle.innerHTML = `<i data-lucide="${isOpen ? "x" : "menu"}"></i>`;
  refreshIcons();
}

function initMobileMenu() {
  menuToggle.addEventListener("click", () => setMenuState(!mainNav.classList.contains("is-open")));

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) setMenuState(false);
  });
}

function updateHeaderOnScroll() {
  header.classList.toggle("is-scrolled", window.scrollY > 10);
}

function highlightActiveSection() {
  const sections = document.querySelectorAll("main section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((section) => observer.observe(section));
}

function setCurrentYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) yearElement.textContent = new Date().getFullYear();
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function initPortfolio() {
  document.documentElement.classList.add("js-enabled");
  renderPortfolioContent();
  refreshIcons();
  disableHeroAnimationsIfNeeded();
  initRevealAnimations();
  initMobileMenu();
  highlightActiveSection();
  setCurrentYear();
  updateHeaderOnScroll();
  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
}

document.addEventListener("DOMContentLoaded", initPortfolio);