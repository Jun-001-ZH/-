document.documentElement.classList.add("js");

window.MuseumUtils = {
  prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
};
