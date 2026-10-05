import { useEffect } from "react";

/* Entrada suave dos blocos .reveal ao rolar.
   Só anima o que ainda está abaixo da tela e respeita prefers-reduced-motion. */
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    const els = [...document.querySelectorAll(".reveal")].filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.95
    );
    if (!els.length) return;
    els.forEach((el) => el.classList.add("is-hidden"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("is-hidden");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
