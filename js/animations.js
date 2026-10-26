/*
  Animações de entrada com Animate.css + Intersection Observer.
  Cada elemento com a classe "reveal" anima uma única vez ao entrar na tela.
  A animação pode ser definida com data-animation="fadeInUp" (padrão: fadeInUp).
 */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function showElement(element) {
  element.classList.add("is-visible");
  if (prefersReducedMotion) return;
  const animationName = element.dataset.animation || "fadeInUp";
  element.classList.add("animate__animated", `animate__${animationName}`);
}

function initRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach(showElement);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        showElement(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((element) => observer.observe(element));
}

function disableHeroAnimationsIfNeeded() {
  if (!prefersReducedMotion) return;
  document.querySelectorAll(".hero .animate__animated").forEach((element) => {
    element.classList.remove("animate__animated");
  });
}