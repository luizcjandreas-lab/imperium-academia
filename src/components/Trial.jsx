import { useState } from "react";
import { MODALIDADES, MSG_GERAL, waLink } from "../config.js";
import { WhatsIcon } from "./Icons.jsx";

export default function Trial({ inicial = null }) {
  const [sel, setSel] = useState(inicial);
  const escolhida = MODALIDADES.find((m) => m.id === sel);
  const mensagem = escolhida
    ? `Olá! Conheci a IMPERIUM pelo site e gostaria de agendar uma aula experimental de ${escolhida.nome.toLowerCase()}.`
    : MSG_GERAL;

  return (
    <section className="trial" id="aula-experimental" style={{ "--trial-bg": "url(assets/images/ambiente-mezanino.jpg)" }}>
      <div className="wrap trial-inner">
        <p className="kicker reveal">Aula experimental</p>
        <h2 className="reveal">Todo mundo começa<br />em algum lugar.</h2>
        <p className="lead reveal">Escolha a modalidade que combina com você e venha viver uma experiência IMPERIUM.</p>
        <fieldset className="chips reveal">
          <legend>Qual modalidade você quer experimentar?</legend>
          {MODALIDADES.map((m) => (
            <label key={m.id} className={sel === m.id ? "on" : ""}>
              <input type="radio" name="modalidade" id={`exp-${m.id}`} value={m.id} checked={sel === m.id} onChange={() => setSel(m.id)} />
              {m.nome}
            </label>
          ))}
        </fieldset>
        <a className="btn btn-gold btn-xl reveal" href={waLink(mensagem)} target="_blank" rel="noopener">
          <WhatsIcon /> Agendar minha aula experimental
        </a>
        <p className="trial-note">{escolhida ? `Modalidade escolhida: ${escolhida.nome}` : "Você também pode escolher a modalidade direto na conversa."}</p>
      </div>
    </section>
  );
}
