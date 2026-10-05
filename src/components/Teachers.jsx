import { PROFESSORES, waLink } from "../config.js";

export default function Teachers() {
  return (
    <section className="section teachers" id="professores">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="kicker">Professores</p>
          <h2>Quem conduz o seu treino</h2>
          {PROFESSORES.length === 0 && (
            <p className="lead">
              Os alunos destacam a atenção dos professores nas avaliações. Na aula experimental você conhece
              pessoalmente quem vai treinar com você.
            </p>
          )}
        </header>
        {PROFESSORES.length > 0 ? (
          <div className="teachers-grid">
            {PROFESSORES.map((p) => (
              <article className="teacher reveal" key={p.nome}>
                <img src={p.foto} alt={`${p.nome}, professor de ${p.modalidade}`} loading="lazy" />
                <p className="kicker">{p.modalidade}</p>
                <h3>{p.nome}</h3>
                {p.formacao && <p><b>Formação:</b> {p.formacao}</p>}
                {p.experiencia && <p><b>Experiência:</b> {p.experiencia}</p>}
                {p.mensagem && <blockquote>“{p.mensagem}”</blockquote>}
              </article>
            ))}
          </div>
        ) : (
          <a className="btn btn-line reveal" href={waLink()} target="_blank" rel="noopener">Agendar e conhecer a equipe</a>
        )}
      </div>
    </section>
  );
}
