import { waLink } from "../config.js";

const FAQ = [
  ["Preciso já ter experiência para começar?", "Não. A IMPERIUM recebe quem está começando do zero e quem já treina. Na aula experimental, conte ao professor o seu momento para ele ajustar o treino."],
  ["Posso fazer uma aula experimental?", "Pode. Escolha a modalidade e chame a equipe no WhatsApp para combinar o melhor dia."],
  ["Existem aulas para crianças?", "Sim, o jiu-jítsu kids. Para saber a faixa de idade e os horários da turma, fale com a equipe pelo WhatsApp."],
  ["Quais modalidades estão disponíveis?", "Musculação, aula de dança, jiu-jítsu adulto, jiu-jítsu kids, funcional e Muay Thai."],
  ["Como consultar os horários?", "Os horários de cada modalidade são passados pela equipe no WhatsApp, sempre atualizados."],
  ["Como falar com a equipe?", "Pelo WhatsApp, pelo telefone (11) 4526-3390 ou pessoalmente na academia, na Vila Maringá."]
];

export default function Faq() {
  return (
    <section className="section faq" id="duvidas">
      <div className="wrap faq-grid">
        <header className="reveal">
          <p className="kicker">Perguntas frequentes</p>
          <h2>Antes do primeiro treino</h2>
          <a className="btn btn-line" href={waLink("Olá! Conheci a IMPERIUM pelo site e tenho uma dúvida.")} target="_blank" rel="noopener">Tirar outra dúvida</a>
        </header>
        <div className="faq-list reveal">
          {FAQ.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
