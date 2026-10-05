import { useEffect, useRef, useState } from "react";
import { waLink } from "../config.js";
import { PauseIcon, PlayIcon } from "./Icons.jsx";
import { autoplay } from "./autoplay.js";

/* Abertura com o vídeo do ambiente. Não toca automaticamente para quem pediu
   menos movimento ou está em conexão lenta / economia de dados. */
export default function Hero() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [allowed, setAllowed] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const c = navigator.connection;
    const slow = c && (c.saveData || /2g/.test(c.effectiveType || ""));
    if (reduce || slow) { setAllowed(false); return; }
    const v = ref.current;
    if (!v) return;
    v.src = "assets/video-ambiente.mp4";
    return autoplay(v, () => setPlaying(true));
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    if (!v.src) v.src = "assets/video-ambiente.mp4";
    if (v.paused) v.play().then(() => setPlaying(true)).catch(() => {});
    else { v.pause(); setPlaying(false); }
  };

  return (
    <section className="hero" id="inicio" aria-label="Abertura">
      <video
        ref={ref}
        className="hero-video"
        poster="assets/images/ambiente-musculacao.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="hero-shade" aria-hidden="true"></div>
      <div className="wrap hero-content">
        <p className="kicker">Academia · Jundiaí · Vila Maringá</p>
        <h1>
          <span>Você não precisa</span> <span>estar pronto.</span>
          <em>Só precisa começar.</em>
        </h1>
        <p className="hero-text">
          Musculação, lutas, dança e funcional em um ambiente criado para quem deseja evoluir de verdade.
        </p>
        <div className="actions">
          <a className="btn btn-gold btn-lg" href={waLink()} target="_blank" rel="noopener">
            Agendar aula experimental
          </a>
          <a className="btn btn-line btn-lg" href="#modalidades">Conhecer modalidades</a>
        </div>
      </div>
      <button
        className="hero-toggle"
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pausar vídeo de fundo" : "Reproduzir vídeo de fundo"}
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
        <span>{playing ? "Pausar" : allowed ? "Reproduzir" : "Ver vídeo"}</span>
      </button>
      <a className="scroll-cue" href="#imperium" aria-label="Rolar para a próxima seção">
        <span>Role</span><i aria-hidden="true"></i>
      </a>
    </section>
  );
}
