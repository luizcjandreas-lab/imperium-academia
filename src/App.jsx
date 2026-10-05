import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import Home from "./pages/Home.jsx";
import Modality from "./pages/Modality.jsx";
import Contact from "./pages/Contact.jsx";
import { PAGINAS } from "./config.js";
import { useReveal } from "./components/useReveal.js";

export default function App({ page }) {
  useReveal();
  const modal = PAGINAS.find((p) => p.id === page);
  return (
    <>
      <a className="skip" href="#conteudo">Pular para o conteúdo</a>
      <Header page={page} />
      <main id="conteudo">
        {modal ? <Modality pagina={modal} /> : page === "contato" ? <Contact /> : <Home />}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
