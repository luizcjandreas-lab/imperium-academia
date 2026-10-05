const ITENS = [
  ["Diversas modalidades em um só lugar", "Musculação, dança, jiu-jítsu, funcional e Muay Thai no mesmo endereço. Dá para combinar treinos sem trocar de academia."],
  ["Para adultos e crianças", "Jiu-jítsu kids para os pequenos e turmas adultas para todos os níveis."],
  ["Treinos para diferentes níveis", "Quem nunca treinou e quem já tem estrada dividem o mesmo espaço, cada um no seu ritmo."],
  ["Professores atenciosos", "É o que os alunos mais destacam nas avaliações do Google."],
  ["Estrutura completa", "Sala de musculação com mezanino de aeróbicos, tatame para as lutas e salão para as aulas coletivas."],
  ["Comunidade", "Turmas cheias, gente que se incentiva e um ambiente que recebe bem quem está chegando."]
];

export default function Why() {
  return (
    <section className="section why">
      <div className="wrap why-grid">
        <header className="reveal">
          <p className="kicker">Por que a Imperium</p>
          <h2>Você chega como está.<br /><em>O resto a gente constrói junto.</em></h2>
        </header>
        <dl className="why-list">
          {ITENS.map(([t, d]) => (
            <div className="reveal" key={t}>
              <dt>{t}</dt>
              <dd>{d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
