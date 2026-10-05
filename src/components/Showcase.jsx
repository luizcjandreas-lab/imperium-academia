import { useRef } from "react";
import { PAGINAS } from "../config.js";
import { Column } from "./Icons.jsx";
import { useAutoVideo } from "./useAutoVideo.js";

/* Vitrine das modalidades. Cada modalidade toca uma prévia curta, sem som,
   assim que aparece na tela (celular e computador) e ao passar o mouse. */
export function Tile({ p, big }) {
  const ref = useRef(null);
  useAutoVideo(ref, p.preview, 0.3);

  return (
    <a className={`tile reveal${big ? " is-big" : ""}`} href={`${p.id}.html`} data-video-host>
      <div className="tile-media">
        {p.poster ? (
          <>
            <img src={p.poster} alt="" loading="lazy" width="480" height="848" />
            {p.preview && <video ref={ref} poster={p.poster} muted loop autoPlay playsInline preload="none" aria-hidden="true" />}
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
