import { DEPOIMENTOS, SITE, TRECHOS_GOOGLE } from "../config.js";

export default function Reviews() {
  return (
    <section className="section reviews" id="depoimentos">
      <div className="wrap reviews-grid">
        <div className="score reveal">
          <p className="kicker">Depoimentos</p>
          <strong>{SITE.google.nota}</strong>
          <span className="stars" aria-label={`Nota ${SITE.google.nota} de 5`}>★★★★★</span>
          <p>{SITE.google.avaliacoes} avaliações no Google</p>
          <a className="mod-cta" href={SITE.googleMaps} target="_blank" rel="noopener">Ver avaliações no Google →</a>
        </div>
        <div className="quotes">
          {DEPOIMENTOS.map((d) => (
            <figure className="quote big reveal" key={d.nome}>
              <blockquote>“{d.texto}”</blockquote>
              <figcaption>{d.nome} · Avaliação no Google</figcaption>
            </figure>
          ))}
          <ul className="snippets reveal" aria-label="Trechos de avaliações no Google">
            {TRECHOS_GOOGLE.map((t) => <li key={t}>“{t}”</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
