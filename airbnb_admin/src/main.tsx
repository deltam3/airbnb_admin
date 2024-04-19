import React from "react";
import ReactDOM from "react-dom/client";
//@ts-expect-error
import App from "./App.jsx";

import { ErrorBoundary } from "react-error-boundary";
//@ts-expect-error
import ErrorFallback from "./ui/ErrorFallback.jsx";

const rootEl = document.getElementById("root")!;

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
