import { MODALIDADES, SITE, waLink } from "../config.js";

export default function Footer() {
  const e = SITE.endereco;
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src="assets/logo-imperium.png" alt="IMPERIUM Academia" width="782" height="186" loading="lazy" />
          <p>{SITE.posicionamento}</p>
        </div>
        <div>
          <h4>Modalidades</h4>
          <ul>{MODALIDADES.map((m) => <li key={m.id}><a href={`${m.pagina}.html`}>{m.nome}</a></li>)}<li><a href="contato.html">Contato</a></li></ul>
        </div>
        <div>
          <h4>Endereço e horário</h4>
          <p>{e.rua}<br />{e.bairro}, {e.cidade} · {e.uf}<br />CEP {e.cep}</p>
          <p>{SITE.horarioFuncionamento[0]}</p>
        </div>
        <div>
          <h4>Contato</h4>
          <ul>
            <li><a href={waLink()} target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a href={`tel:${SITE.telefoneLink}`}>{SITE.telefone}</a></li>
            {SITE.instagram && <li><a href={SITE.instagram} target="_blank" rel="noopener">Instagram</a></li>}
            {SITE.facebook && <li><a href={SITE.facebook} target="_blank" rel="noopener">Facebook</a></li>}
            <li><a href={SITE.googleMaps} target="_blank" rel="noopener">Google Maps</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} IMPERIUM Academia · Jundiaí · <a href="privacidade.html">Política de Privacidade</a></span>
        <span>Desenvolvido por <a href={SITE.credito.link}>{SITE.credito.nome}</a></span>
      </div>
    </footer>
  );
}
