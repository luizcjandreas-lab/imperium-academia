import FeatureVideo from "../components/FeatureVideo.jsx";
import Schedule from "../components/Schedule.jsx";
import Trial from "../components/Trial.jsx";
import { Tile } from "../components/Showcase.jsx";
import { Column } from "../components/Icons.jsx";
import { MODALIDADES, PAGINAS, waLink } from "../config.js";

export default function Modality({ pagina: p }) {
  const mods = p.modalidades.map((id) => MODALIDADES.find((m) => m.id === id));
  const outras = PAGINAS.filter((x) => x.id !== p.id);

  return (
    <>
      <section className="mhero">
        <div className="wrap mhero-grid">
          <div className="mhero-text">
            <p className="kicker">Modalidade · {p.nome}</p>
            <h1>{p.titulo[0]} <em>{p.titulo[1]}</em></h1>
            <p className="lead">{p.intro}</p>
            <div className="actions">
              {mods.map((m) => (
                <a key={m.id} className="btn btn-gold btn-lg" href={waLink(m.mensagem)} target="_blank" rel="noopener">
                  {mods.length > 1 ? `Aula experimental · ${m.nome.replace("Jiu-jítsu ", "")}` : "Agendar aula experimental"}
                </a>
              ))}
            </div>
          </div>
          <div className="mhero-media">
            {p.video ? (
              <FeatureVideo src={p.video} poster={p.poster} label={p.legenda} />
            ) : (
              /* Espaço reservado para foto ou vídeo do funcional. */
              <figure className="feature-video">
                <div className="player mod-placeholder-wrap" style={{ aspectRatio: "9 / 16" }}>
                  <div className="mod-placeholder" role="img" aria-label={p.legenda}><Column /></div>
                </div>
              </figure>
            )}
          </div>
        </div>
      </section>

      <section className="focus">
        <div className="wrap">
          <p className="kicker reveal">O que você desenvolve</p>
          <ul className="focus-list reveal">
            {p.foco.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
      </section>

      {mods.length > 1 && (
        <section className="section split-mods">
          <div className="wrap split-grid">
            {mods.map((m) => (
              <article key={m.id} className="split-card reveal">
                {m.imagem ? (
                  <img src={m.imagem} alt={m.alt} loading="lazy" width="480" height="848" />
                ) : (
                  <div className="split-ph"><div className="mod-placeholder" role="img" aria-label={m.nome}><Column /></div></div>
                )}
                <div className="split-text">
                  <h2>{m.nome}</h2>
                  <p className="lead">{m.texto}</p>
                  <a className="mod-cta" href={waLink(m.mensagem)} target="_blank" rel="noopener">Quero fazer uma aula experimental →</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="section begin">
        <div className="wrap begin-grid reveal">
          <h2>Nunca treinou?<br /><em>Comece por aqui.</em></h2>
          <p className="lead">
            Você não precisa estar pronto para a primeira aula. Conte ao professor o seu momento e treine no seu ritmo,
            ao lado de quem já está na estrada e de quem também está começando.
          </p>
        </div>
      </section>

      <Schedule filtro={p.modalidades} titulo={`Horários · ${p.nome}`} />
      <Trial inicial={p.modalidades[0]} />

      <section className="section others">
        <div className="wrap">
          <header className="section-head reveal">
            <p className="kicker">Outras modalidades</p>
            <h2>Combine treinos</h2>
          </header>
          <div className="tiles small">
            {outras.map((o) => <Tile key={o.id} p={o} />)}
          </div>
        </div>
      </section>
    </>
  );
}
