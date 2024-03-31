import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback";

// const rootElement = document.getElementById("root");

// const root = ReactDOM.createRoot(rootElement as HTMLElement);

// rootElement.render(
//   <React.StrictMode>
//     <ErrorBoundary
//       FallbackComponent={ErrorFallback}
//       onReset={() => window.location.replace("/")}
//     >
//       <App />
//     </ErrorBoundary>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
