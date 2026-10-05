import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "./Icons.jsx";
import { autoplay } from "./autoplay.js";

/* Vídeo em destaque da página da modalidade: começa sozinho, sem som e em
   loop (exceto em conexão lenta ou com "reduzir movimento"); botões para
   pausar e ligar o som. Pausa ao sair da tela. */
export default function FeatureVideo({ src, poster, label }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const c = navigator.connection;
    const slow = c && (c.saveData || /2g/.test(c.effectiveType || ""));
    let stop = () => {};
    if (!reduce && !slow) {
      v.src = src;
      stop = autoplay(v, () => setPlaying(true));
    }
    if (!("IntersectionObserver" in window)) return stop;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting && !v.paused) { v.pause(); setPlaying(false); }
    });
    io.observe(v);
    return () => { io.disconnect(); stop(); };
  }, [src]);

  const toggle = () => {
    const v = ref.current;
    if (!v.src) v.src = src;
    if (v.paused) v.play().then(() => setPlaying(true)).catch(() => {});
    else { v.pause(); setPlaying(false); }
  };
  const sound = () => {
    const v = ref.current;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.src) v.src = src;
    if (v.paused) v.play().then(() => setPlaying(true)).catch(() => {});
  };

  return (
    <figure className="feature-video">
      <div className="player" style={{ aspectRatio: "9 / 16" }}>
        <video ref={ref} poster={poster} loop playsInline preload="metadata" aria-label={label} />
      </div>
      <div className="fv-controls">
        <button type="button" onClick={toggle} aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}>
          {playing ? <PauseIcon /> : <PlayIcon />}<span>{playing ? "Pausar" : "Reproduzir"}</span>
        </button>
        <button type="button" onClick={sound} aria-pressed={!muted}>
          <span>{muted ? "Ativar som" : "Desativar som"}</span>
        </button>
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}
