import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

/* Cada arquivo .html define a página em <body data-page="...">. */
const page = document.body.dataset.page || "inicio";
createRoot(document.getElementById("root")).render(<App page={page} />);
