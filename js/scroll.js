function initRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px 12% 0px" });
  revealItems.forEach((item) => observer.observe(item));
}

function initScrollEffects() {
  const header = document.querySelector(".site-header");
  const hero = document.querySelector(".hero-section");
  const heroTitle = document.querySelector(".hero-title-wrap");
  const closing = document.querySelector(".home-closing-section");
  let closingVisible = false;
  let ticking = false;

  function update() {
    const scrollY = window.scrollY || window.pageYOffset;
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    document.documentElement.style.setProperty("--scroll-progress", Math.min(scrollY / maxScroll, 1).toFixed(4));
    header?.classList.toggle("is-scrolled", scrollY > 80);
    if (header) {
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 0;
      const inHero = hero && scrollY < heroBottom - 96;
      header.dataset.theme = inHero || closingVisible ? "dark" : "light";
    }
    if (heroTitle) {
      const amount = Math.min(scrollY / 360, 1);
      heroTitle.style.setProperty("--hero-exit", amount.toFixed(3));
      heroTitle.style.opacity = String(1 - amount * 0.65);
      heroTitle.style.transform = `translate(-50%, calc(-50% - ${amount * 60}px))`;
    }
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();

  if (header && closing) {
    const themeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        closingVisible = entry.isIntersecting;
        update();
      });
    }, { threshold: 0.5 });
    themeObserver.observe(closing);
  }
}
