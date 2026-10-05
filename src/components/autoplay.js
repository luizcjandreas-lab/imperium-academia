/* Tenta tocar um vídeo sem som. Se o navegador bloquear, tenta de novo
   quando o vídeo ficar pronto e na primeira interação do visitante. */
export function autoplay(video, onPlay) {
  const tryPlay = () =>
    video.play().then(() => { onPlay && onPlay(); cleanup(); return true; }).catch(() => false);
  const events = ["pointerdown", "touchstart", "scroll", "keydown"];
  const handler = () => tryPlay();
  const cleanup = () => {
    events.forEach((e) => window.removeEventListener(e, handler));
    video.removeEventListener("canplay", handler);
    document.removeEventListener("visibilitychange", handler);
  };
  video.muted = true;
  video.setAttribute("muted", "");
  video.setAttribute("autoplay", "");
  tryPlay().then((ok) => {
    if (ok) return;
    video.addEventListener("canplay", handler, { once: true });
    document.addEventListener("visibilitychange", handler);
    events.forEach((e) => window.addEventListener(e, handler, { once: true, passive: true }));
  });
  return cleanup;
}
