/**
 * Entry point of the React application.
 *
 * This file imports necessary modules and styles, and renders the root component (`App`)
 * inside a `StrictMode` wrapper to the DOM element with the id "root".
 *
 * @file /Users/bagasprakarso/Documents/tests/Konexi/konexi-task/src/main.tsx
 * @module main
 *
 * @requires react.StrictMode
 * @requires react-dom.client.createRoot
 * @requires ./styles/index.css
 * @requires ./App
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
