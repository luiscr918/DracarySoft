import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import TagManager from "react-gtm-module";

const gtmId = import.meta.env.VITE_GTM_ID as string | undefined;

if (gtmId) {
  TagManager.initialize({ gtmId });

  // Insert GTM noscript iframe for users with JS disabled
  if (typeof document !== "undefined") {
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(noscript, document.body.firstChild);
  }
} else {
  console.warn(
    "VITE_GTM_ID no está definido en el entorno. GTM no inicializado.",
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
