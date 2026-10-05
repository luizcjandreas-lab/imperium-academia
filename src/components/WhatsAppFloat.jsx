import { waLink } from "../config.js";
import { WhatsIcon } from "./Icons.jsx";

export default function WhatsAppFloat() {
  return (
    <a className="wa-float" href={waLink()} target="_blank" rel="noopener" aria-label="Agendar aula experimental pelo WhatsApp">
      <WhatsIcon /><span>Aula experimental</span>
    </a>
  );
}
