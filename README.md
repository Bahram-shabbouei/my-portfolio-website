# Mein Portfolio - Frontend

Dies ist das Frontend für meine persönliche Portfolio-Webseite. Es wurde als moderne Single-Page-Application (SPA) mit React, TypeScript und Vite entwickelt.

**Live-Demo:** [https://bahram-shabbouei.github.io/my-portfolio-website/](https://bahram-shabbouei.github.io/my-portfolio-website/)

---

## Übersicht

Diese Anwendung präsentiert meinen beruflichen Werdegang, meine technischen Fähigkeiten und abgeschlossene Projekte in einem interaktiven und responsiven Design. Sie kommuniziert mit einem separaten Backend-Service für Funktionalitäten wie das Kontaktformular.

### Features

-   **Responsive Design:** Optimiert für Desktop, Tablet und mobile Endgeräte.
-   **Dynamische Timeline:** Interaktive Darstellung von Ausbildung und Berufserfahrung.
-   **Fähigkeiten-Visualisierung:** Fortschrittsbalken zur Darstellung meiner Kompetenzen.
-   **Projekt-Galerie:** Übersichtliche Darstellung meiner Projekte in einem Grid-Layout.
-   **Zweistufiges Kontaktformular:** Ein kurzes Formular auf der Hauptseite und ein detailliertes Formular auf einer separaten Kontaktseite.
-   **Client-seitige Validierung:** Sofortiges Feedback für Benutzereingaben im Kontaktformular.

### Technologie-Stack

-   **Framework:** React 18+
-   **Sprache:** TypeScript
-   **Build-Tool:** Vite
-   **Styling:** CSS Modules
-   **Routing:** React Router DOM
-   **Linting:** ESLint

---

## Lokales Setup

### Voraussetzungen

-   Node.js (LTS-Version, z.B. 20.x)
-   `pnpm` Paketmanager (`npm install -g pnpm`)

### Installation & Start

1.  **Repository klonen:**
    ```bash
    git clone https://github.com/Bahram-shabbouei/my-portfolio-website.git
    cd my-portfolio-website
    ```
2.  **Abhängigkeiten installieren:**
    ```bash
    pnpm install
    ```
3.  **Entwicklungsserver starten:**
    ```bash
    pnpm run dev
    ```
    Die Anwendung ist unter `http://localhost:5173` (oder einem ähnlichen Port) verfügbar.

---

## CI/CD (Continuous Integration & Deployment)

Ein GitHub Actions Workflow ist eingerichtet, um die Code-Qualität zu sichern und das Deployment zu automatisieren. Bei jedem Push auf den `main`-Branch wird der folgende Prozess ausgelöst:

1.  **Linting:** Der Code wird mit ESLint auf Stil- und Syntaxfehler überprüft.
2.  **Build:** Die TypeScript-Anwendung wird in statisches HTML, CSS und JavaScript kompiliert.
3.  **Deployment:** Das Ergebnis wird automatisch auf GitHub Pages veröffentlicht.

Die Workflow-Konfiguration befindet sich in `.github/workflows/deploy.yml`.