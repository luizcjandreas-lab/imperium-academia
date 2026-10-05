export default function Structure() {
  return (
    <section className="ambient" id="estrutura">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="kicker">Estrutura</p>
          <h2>Um ambiente feito para evoluir</h2>
          <p className="lead">Sala de musculação com mezanino, tatame para as lutas e salão para as aulas coletivas.</p>
        </header>
        <div className="ambient-grid">
          <figure className="reveal">
            <img src="assets/images/ambiente-mezanino.jpg" alt="Vista do mezanino sobre a sala de musculação da IMPERIUM" loading="lazy" width="480" height="848" />
            <figcaption>Musculação e mezanino</figcaption>
          </figure>
          <figure className="reveal">
            <img src="assets/images/sala-lutas.jpg" alt="Tatame da IMPERIUM durante o treino de Muay Thai" loading="lazy" width="480" height="848" />
            <figcaption>Tatame das lutas</figcaption>
          </figure>
          <figure className="reveal">
            <img src="assets/images/sala-danca.jpg" alt="Salão com iluminação colorida durante a aula de dança" loading="lazy" width="480" height="848" />
            <figcaption>Salão de aulas coletivas</figcaption>
          </figure>
        </div>
        <blockquote className="ambient-quote reveal">
          <p>“Tem um mezanino com 10 esteiras novas, bikes e demais aparelhos aeróbicos.”</p>
          <cite>Trecho de avaliação de aluno no Google</cite>
        </blockquote>
      </div>
    </section>
  );
}
