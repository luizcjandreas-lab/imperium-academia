import { useRef } from "react";
import { PAGINAS } from "../config.js";
import { Column } from "./Icons.jsx";

/* Vitrine das modalidades na página inicial. No computador, passar o mouse
   toca uma prévia do vídeo sem som; no celular fica a foto. */
export function Tile({ p, big }) {
  const ref = useRef(null);
  const canHover = typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const enter = () => {
    const v = ref.current;
    if (!v || !p.video || !canHover || reduce) return;
    if (!v.src) v.src = p.video;
    v.muted = true;
    v.play().catch(() => {});
  };
  const leave = () => { const v = ref.current; if (v && !v.paused) v.pause(); };

  return (
    <a className={`tile reveal${big ? " is-big" : ""}`} href={`${p.id}.html`} onMouseEnter={enter} onMouseLeave={leave} onFocus={enter} onBlur={leave}>
      <div className="tile-media">
        {p.poster ? (
          <>
            <img src={p.poster} alt="" loading="lazy" width="480" height="848" />
            {p.video && <video ref={ref} muted loop playsInline preload="none" aria-hidden="true" />}
          </>
        ) : (
          <div className="mod-placeholder" aria-hidden="true"><Column /></div>
        )}
      </div>
      <div className="tile-text">
        <h3>{p.nome}</h3>
        <span className="tile-go">Ver modalidade <span aria-hidden="true">→</span></span>
      </div>
    </a>
  );
}

export default function Showcase() {
  return (
    <section className="section showcase" id="modalidades">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="kicker">Modalidades</p>
          <h2>Encontre o seu caminho</h2>
          <p className="lead">Musculação, lutas, dança e funcional em um só lugar. Escolha o seu caminho e comece a construir sua melhor versão.</p>
        </header>
        <div className="tiles">
          {PAGINAS.map((p, i) => <Tile key={p.id} p={p} big={i === 0} />)}
        </div>
      </div>
    </section>
  );
}
