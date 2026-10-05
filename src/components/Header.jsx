import { useEffect, useState } from "react";
import { PAGINAS, waLink } from "../config.js";

/* Abas do site. Os links usam .html para funcionar em qualquer hospedagem;
   na Vercel, o vercel.json (cleanUrls) mostra endereços limpos (/muay-thai). */
const ABAS = [
  ["inicio", "index.html", "Início"],
  ...PAGINAS.map((p) => [p.id, `${p.id}.html`, p.nome]),
  ["contato", "contato.html", "Contato"]
];

export default function Header({ page }) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.classList.toggle("menu-open", open);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`header${solid || open ? " is-solid" : ""}`}>
      <div className="wrap header-row">
        <a href="index.html" className="brand" aria-label="IMPERIUM Academia, página inicial">
          <img src="assets/logo-imperium.png" alt="IMPERIUM Academia" width="782" height="186" />
        </a>
        <nav id="menu" className={`nav${open ? " is-open" : ""}`} aria-label="Principal">
          <ul>
            {ABAS.map(([id, href, label]) => (
              <li key={id}>
                <a href={href} aria-current={page === id ? "page" : undefined}>{label}</a>
              </li>
            ))}
          </ul>
          <a className="btn btn-gold nav-cta" href={waLink()} target="_blank" rel="noopener">
            Agendar aula experimental
          </a>
        </nav>
        <button className="menu-btn" type="button" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          <span className="bars" aria-hidden="true"></span>
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
    </header>
  );
}
