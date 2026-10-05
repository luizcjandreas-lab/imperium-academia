import { useEffect } from "react";
import { autoplay } from "./autoplay.js";

/* Vídeo automático, sem som e em loop, no computador e no celular.
   - Começa a tocar assim que aparece na tela e pausa quando sai (economiza bateria e dados).
   - Também começa quando o mouse passa por cima do elemento com data-video-host.
   - Se o navegador bloquear (ex.: modo economia de energia do iPhone),
     tenta de novo no primeiro toque ou rolagem. */
export function useAutoVideo(ref, src, threshold = 0.15) {
  useEffect(() => {
    const v = ref.current;
    if (!v || !src) return;
    v.muted = true;
    v.defaultMuted = true;
    v.loop = true;
    v.playsInline = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");

    let stop = () => {};
    const start = () => {
      if (!v.getAttribute("src")) v.src = src;
      stop();
      stop = autoplay(v);
    };
    const halt = () => {
      stop();
      if (!v.paused) v.pause();
    };
    const onPlaying = () => v.classList.add("is-on");
    v.addEventListener("playing", onPlaying);

    const host = v.closest("[data-video-host]");
    if (host) host.addEventListener("mouseenter", start);

    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : halt()), { threshold });
      io.observe(v);
    } else {
      start();
    }

    return () => {
      if (io) io.disconnect();
      if (host) host.removeEventListener("mouseenter", start);
      v.removeEventListener("playing", onPlaying);
      stop();
    };
  }, [src]);
}
