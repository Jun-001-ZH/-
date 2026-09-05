import React from "react";
import { createRoot } from "react-dom/client";
import SphereGallery3D from "./components/originkit/sphere-gallery-3d";

const islands = new Map();

function mountIsland(selector, Component, props = {}) {
  document.querySelectorAll(selector).forEach((node) => {
    if (islands.has(node)) return;
    const root = createRoot(node);
    root.render(<Component {...props} />);
    islands.set(node, root);
  });
}

function mountSeasonSphere() {
  const terms = window.SolarTermsData || [];
  if (!terms.length) return;

  mountIsland(".hero-spectrum", SphereGallery3D, {
    images: terms.map((term) => ({
      image: `../assets/seasons/${term.id}.png`,
      link: `#term-${term.id}`
    })),
    branches: 24,
    background: "transparent",
    scale: 130,
    size: 16,
    scatter: 20,
    speed: 42,
    direction: "clockwise",
    hover: 54,
    rounded: 100,
    core: {
      coreColor: "rgba(185, 201, 160, 0.62)",
      coreSize: 18,
      lineColor: "rgba(95, 119, 108, 0.24)"
    },
    style: {
      minWidth: "100%",
      minHeight: "100%"
    }
  });
}

window.MuseumReact = {
  mountIsland,
  mountSphereGallery(selector, props = {}) {
    mountIsland(selector, SphereGallery3D, props);
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountSeasonSphere);
} else {
  mountSeasonSphere();
}
