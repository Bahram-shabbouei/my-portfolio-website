// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/global.css';

// Die Root-Element-ID in der index.html. Wird als benannte Konstante
// gespeichert, damit bei einer Änderung der HTML-Struktur nur eine
// Stelle angepasst werden muss.

const ROOT_ELEMENT_ID = 'root';

// Die Root-Element-ID in der index.html. Wird als benannte Konstante
// gespeichert, damit bei einer Änderung der HTML-Struktur nur eine
// Stelle angepasst werden muss.

function getRootElement(): HTMLElement {
  const element = document.getElementById(ROOT_ELEMENT_ID);

  if (!element) {
    throw new Error(
      `Root element with id "${ROOT_ELEMENT_ID}" was not found in index.html`
    );
  }

  return element;
}

/**
 * Mountet die React-App in das Root-Element.
 */
function renderApp(rootElement: HTMLElement): void {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

renderApp(getRootElement());
