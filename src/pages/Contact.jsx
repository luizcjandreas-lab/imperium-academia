import Location from "../components/Location.jsx";
import Schedule from "../components/Schedule.jsx";
import Faq from "../components/Faq.jsx";
import Trial from "../components/Trial.jsx";

export default function Contact() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="kicker">Contato</p>
          <h1>Fale com a<br /><em>IMPERIUM.</em></h1>
        </div>
      </section>
      <Location />
      <Schedule />
      <Faq />
      <Trial />
    </>
  );
}
