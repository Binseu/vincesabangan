"use client";

import { useEffect } from "react";

export default function PageEffects() {
  useEffect(() => {
    const loader = document.getElementById("pageLoader");
    const loaderTimeout = setTimeout(() => {
      if (loader) {
        loader.classList.add("exit");
        setTimeout(() => loader.remove(), 800);
      }
    }, 1600);

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.remove("active");
              if (
                link.getAttribute("href")?.substring(1) === entry.target.id
              ) {
                link.classList.add("active");
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((section) => navObserver.observe(section));

    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const targetId = this.getAttribute("href")!.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        const hash = targetId === "hero" ? "" : `#${targetId}`;
        window.history.replaceState(null, "", window.location.pathname + hash);
      }
    };
    anchors.forEach((anchor) =>
      anchor.addEventListener("click", handleAnchorClick as EventListener)
    );

    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => revealObserver.observe(el));

    return () => {
      clearTimeout(loaderTimeout);
      navObserver.disconnect();
      revealObserver.disconnect();
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleAnchorClick as EventListener)
      );
    };
  }, []);

  return null;
}
