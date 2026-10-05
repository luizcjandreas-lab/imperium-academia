import { useRef } from "react";
import { useAutoVideo } from "./useAutoVideo.js";

/* Vídeo em destaque da página da modalidade: toca sozinho, sem som e em loop
   assim que aparece na tela (ou quando o mouse passa por cima). */
export default function FeatureVideo({ src, poster, label }) {
  const ref = useRef(null);
  useAutoVideo(ref, src);

  return (
    <figure className="feature-video" data-video-host>
      <div className="player" style={{ aspectRatio: "9 / 16" }}>
        <video ref={ref} poster={poster} muted loop autoPlay playsInline preload="metadata" aria-label={label} />
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}
