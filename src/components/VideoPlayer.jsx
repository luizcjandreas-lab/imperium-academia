import { useEffect, useRef, useState } from "react";
import { PlayIcon } from "./Icons.jsx";

/* Vídeo sob demanda: mostra só a capa até o visitante tocar em "play".
   O arquivo é carregado nesse momento e o vídeo pausa ao sair da tela. */
export default function VideoPlayer({ src, poster, label, ratio = "9 / 16" }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!started || !v || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting && !v.paused) v.pause();
    }, { threshold: 0 });
    io.observe(v);
    return () => io.disconnect();
  }, [started]);

  const start = () => {
    setStarted(true);
    requestAnimationFrame(() => {
      const v = ref.current;
      if (!v) return;
      v.src = src;
      v.play().catch(() => {});
    });
  };

  return (
    <div className="player" style={{ aspectRatio: ratio }}>
      <video
        ref={ref}
        poster={poster}
        playsInline
        preload="none"
        controls={started}
        aria-label={label}
      />
      {!started && (
        <button type="button" className="play" onClick={start} aria-label={`Assistir: ${label}`}>
          <span className="play-ring"><PlayIcon /></span>
          <span className="play-text">Assistir</span>
        </button>
      )}
    </div>
  );
}
