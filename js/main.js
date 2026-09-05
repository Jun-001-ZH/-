document.addEventListener("DOMContentLoaded", () => {
  initCustomCursor();
  initRevealAnimations();
  initScrollEffects();
  initPageTransition();
  initHeroIntro();
  initHeroParallax();
  initFiveColorInteraction();
  initExhibitionCards();
  initDailyColor();
  initDailyColorSwitcher();
  initCopyButtons();

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const closeMenu = () => {
    header?.classList.remove("is-menu-open");
    document.body.classList.remove("is-menu-open");
    toggle?.setAttribute("aria-expanded", "false");
  };
  toggle?.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-menu-open");
    document.body.classList.toggle("is-menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
});
