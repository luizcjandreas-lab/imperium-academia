import { SITE, waLink } from "../config.js";

export default function VisitStrip() {
  const e = SITE.endereco;
  return (
    <section className="visit">
      <div className="wrap visit-row reveal">
        <div>
          <p className="kicker">Onde estamos</p>
          <p className="visit-addr">{e.rua} · {e.bairro}, {e.cidade}</p>
          <p className="visit-sub">{SITE.horarioFuncionamento[0]} · {SITE.telefone}</p>
        </div>
        <div className="actions">
          <a className="btn btn-line" href={SITE.comoChegar} target="_blank" rel="noopener">Como chegar</a>
          <a className="btn btn-line" href="contato.html">Contato e dúvidas</a>
        </div>
      </div>
    </section>
  );
}
