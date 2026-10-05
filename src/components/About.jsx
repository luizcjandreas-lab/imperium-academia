export default function About() {
  return (
    <section className="section about" id="imperium">
      <div className="wrap about-grid">
        <div className="about-text reveal">
          <p className="kicker">A Imperium</p>
          <h2>Mais do que<br />uma academia</h2>
          <p className="lead">
            A IMPERIUM é o lugar onde pessoas comuns se transformam em sua melhor versão. Aqui, cada treino
            representa uma nova oportunidade de evoluir, superar limites e fazer parte de uma comunidade que
            cresce unida.
          </p>
          <p>
            Musculação, dança, jiu-jítsu adulto e kids, funcional e Muay Thai dividem o mesmo endereço na Vila
            Maringá. Quem chega para a primeira aula encontra turmas cheias, professores por perto e espaço para
            começar no próprio ritmo.
          </p>
          {/* HISTÓRIA DA IMPERIUM: quando a história real for enviada, adicione aqui um ou dois parágrafos. */}
        </div>
        <div className="about-media reveal">
          <figure className="frame tall">
            <img src="assets/images/sala-lutas.jpg" alt="Turma de Muay Thai treinando no tatame da IMPERIUM" loading="lazy" width="480" height="848" />
          </figure>
          <figure className="frame offset">
            <img src="assets/images/sala-danca.jpg" alt="Alunas na aula de dança da IMPERIUM" loading="lazy" width="480" height="848" />
          </figure>
        </div>
      </div>
    </section>
  );
}
