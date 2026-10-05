import { HORARIOS, MODALIDADES, waLink } from "../config.js";

const nomeDe = (id) => MODALIDADES.find((m) => m.id === id)?.nome || id;

export default function Schedule({ filtro = null, titulo = "Grade de aulas" }) {
  const linhas = filtro ? HORARIOS.filter((h) => filtro.includes(h.modalidade)) : HORARIOS;
  return (
    <section className="section schedule" id="horarios">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="kicker">Horários</p>
          <h2>{titulo}</h2>
        </header>
        {linhas.length > 0 ? (
          <div className="table-wrap reveal">
            <table>
              <thead><tr><th scope="col">Modalidade</th><th scope="col">Dias</th><th scope="col">Horários</th></tr></thead>
              <tbody>
                {linhas.map((h) => (
                  <tr key={h.modalidade + h.dias}>
                    <th scope="row">{nomeDe(h.modalidade)}</th>
                    <td data-label="Dias">{h.dias}</td>
                    <td data-label="Horários">{h.horarios.join(" · ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="schedule-empty reveal">
            <p>Peça a grade atualizada da modalidade que você quer fazer e já aproveite para agendar sua aula experimental.</p>
            <a className="btn btn-gold" href={waLink("Olá! Conheci a IMPERIUM pelo site. Gostaria de saber os horários das aulas.")} target="_blank" rel="noopener">Consultar horários no WhatsApp</a>
          </div>
        )}
      </div>
    </section>
  );
}
