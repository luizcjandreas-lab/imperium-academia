import { useRef } from "react";
import { waLink } from "../config.js";
import { useAutoVideo } from "./useAutoVideo.js";

/* Abertura com o vídeo do ambiente, tocando sozinho e sem som. */
export default function Hero() {
  const ref = useRef(null);
  useAutoVideo(ref, "assets/video-ambiente.mp4", 0);

  return (
    <section className="hero" id="inicio" aria-label="Abertura">
      <video
        ref={ref}
        className="hero-video"
        poster="assets/images/ambiente-musculacao.jpg"
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
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
      <a className="scroll-cue" href="#modalidades" aria-label="Rolar para as modalidades">
        <span>Role</span><i aria-hidden="true"></i>
      </a>
    </section>
  );
}
