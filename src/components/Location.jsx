import { useEffect, useRef, useState } from "react";
import { SITE, waLink } from "../config.js";
import { WhatsIcon } from "./Icons.jsx";

export default function Location() {
  const ref = useRef(null);
  const [load, setLoad] = useState(false);
  const e = SITE.endereco;

  /* O mapa só é carregado quando a seção se aproxima da tela. */
  useEffect(() => {
    if (!("IntersectionObserver" in window)) { setLoad(true); return; }
    const io = new IntersectionObserver(([x]) => { if (x.isIntersecting) { setLoad(true); io.disconnect(); } }, { rootMargin: "300px" });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section location" id="localizacao">
      <div className="wrap loc-grid">
        <div className="loc-info reveal">
          <p className="kicker">Localização</p>
          <h2>Venha conhecer</h2>
          <dl>
            <div><dt>Endereço</dt><dd>{e.rua}<br />{e.bairro}, {e.cidade} · {e.uf}<br />CEP {e.cep}</dd></div>
            <div><dt>Horário</dt><dd>{SITE.horarioFuncionamento.map((h) => <span key={h}>{h}<br /></span>)}</dd></div>
            <div><dt>Telefone</dt><dd><a href={`tel:${SITE.telefoneLink}`}>{SITE.telefone}</a></dd></div>
            <div><dt>WhatsApp</dt><dd><a href={waLink()} target="_blank" rel="noopener">{SITE.telefone}</a></dd></div>
          </dl>
          <div className="actions">
            <a className="btn btn-line" href={SITE.comoChegar} target="_blank" rel="noopener">Como chegar</a>
            <a className="btn btn-gold" href={waLink()} target="_blank" rel="noopener"><WhatsIcon /> Falar com a IMPERIUM</a>
          </div>
        </div>
        <div className="map reveal" ref={ref}>
          <div className="map-fallback">
            <p>{e.rua} · {e.bairro}</p>
            <a href={SITE.googleMaps} target="_blank" rel="noopener">Abrir no Google Maps</a>
          </div>
          {load && (
            <iframe
              title={`Mapa: Academia Imperium, ${e.rua}, ${e.bairro}, ${e.cidade}`}
              src={SITE.mapaIncorporado}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
