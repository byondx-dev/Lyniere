
 # LYNIERE

 Futuristische, animierte Smart-Home-Landingpage als Single-Page-React-App. Das Repo spiegelt das Figma-Design (https://www.figma.com/design/7WIwIEVGnaJS0fVP6DXNNY/LYNIERE) in Code und nutzt Vite + Tailwind v4 + Framer Motion.

 ## Schnellstart
 - Voraussetzungen: Node 18+ und npm.
 - Abhaengigkeiten: `npm install`
 - Entwicklung: `npm run dev` (Vite-Dev-Server startet standardmaessig auf http://localhost:5173)
 - Produktion-Build: `npm run build` erzeugt `dist/` (statisches Bundle, z. B. fuer Netlify/Vercel/Static Hosting)

 ## Tech-Stack
 - React 18 mit TypeScript (kein Routing, Seitenwechsel per lokalem State)
 - Vite als Build-Tool
 - Tailwind CSS v4 (generierter Basis-Output liegt in `src/index.css`)
 - Custom-Design-Tokens & Utilities in `src/styles/globals.css`
 - Framer Motion fuer Animationen (`motion/react`)
 - Radix UI Primitives + shadcn/ui Wrapper in `src/components/ui/*`
 - Ikonen: `lucide-react`

 ## Projektaufbau (high level)
 - `index.html` – Vite-Einstiegspunkt mit `#root`
 - `src/main.tsx` – React-Root-Rendering, bindet `App` und `index.css`
 - `src/App.tsx` – Orchestriert Theme, Navigation und Page-Switching
 - `src/index.css` – generiertes Tailwind-Basis-CSS (meist unveraendert lassen)
 - `src/styles/globals.css` – Design-Token (Farben, Glas-Effekte, Container), Utility-Klassen, Basis-Typografie, Custom Cursor Styles
 - `src/components/` – alle Sections/Widgets der Seite
   - `ThemeProvider`, `ThemeToggle`, `CustomCursor`, `AnimatedBackground`, `WelcomeScreen`, `Navigation`
   - `"Pages"`: `HomePage`, `HomesPage`, `ContactPage` (werden in `App.tsx` anhand von State gewechselt)
   - Landing-Sections: z. B. `ModernHero`, `TextReveal`, `RoundCards`, `LuxurySlider`, `DynamicFeatures`, `HorizontalTimeline`, `FloatingShowcase`, `MinimalGallery`
   - Produkt/Storytelling: `ProductCard`, `CulturalEditionsSection`, `SmartHomeRoadmap`, `HomesPage` Datenarrays
   - Footer: `ModernFooter` (global eingebunden)
   - `ui/` – shadcn/radix-basierte Low-Level-Komponenten (Select, Dialog, Button, etc.)
   - `figma/` – Hilfscomponenten aus dem Figma-Export (`ImageWithFallback`)
 - `src/Attributions.md` – Credits (Unsplash, shadcn/ui, MIT)
 - `src/guidelines/` – Platz fuer eigene Team-Guidelines

 ## Seitenfluss & State
 - `App.tsx` haelt zwei States:
   - `showWelcome`: steuert das Preloader-Overlay (`WelcomeScreen`), verschwindet nach kurzer Animation.
   - `currentPage`: `"start" | "homes" | "contact"`; wird von `Navigation` und einzelnen Section-Buttons gesetzt und entscheidet, welche Page-Komponente gerendert wird.
 - Keine URL-Routen: der Seitenwechsel passiert rein ueber State und Scroll-to-top (`window.scrollTo`).
 - `ModernFooter` liegt ausserhalb der Page-Switches und ist global sichtbar.

 ## Wichtige UI-Elemente
 - **Theme**: `ThemeProvider` setzt `data-theme` auf `<html>`; `ThemeToggle` wechselt zwischen `light`/`dark`. Farben & Hintergruende lesen CSS-Custom-Properties.
 - **Custom Cursor**: `CustomCursor` blendet den nativen Cursor aus (`cursor: none` in `globals.css`) und ersetzt ihn durch zwei Motion-Layer, die Mausbewegung und Hover-Zustand (Buttons/Links) verfolgen.
 - **Hero & Sections**: `ModernHero` kombiniert Framer Motion Scrolling (`useScroll/useTransform`), Partikel und technische Zeichnungen. Weitere Sections (`TextReveal`, `DynamicFeatures`, `RoundCards`, usw.) folgen dem Pattern: statische Datenobjekte + Motion-Animationen + Tailwind/Utility-Klassen.
 - **Produktwelten**: `HomesPage` definiert die Smart-Home-Konzepte im Array `smartHomeConcepts` (Name, Tagline, Beschreibung, Preis, Bilder, Features, Specs) und reicht sie an `ProductCard`. Anpassungen/Erweiterungen erfolgen direkt in diesem Array.
 - **Kontakt**: `ContactPage` enthaelt ein rein clientseitiges Formular (kein Backend). `handleSubmit` zeigt eine Erfolgsmeldung und resettet die Felder nach 3 Sekunden. Select-Komponente kommt aus `components/ui/select` (Radix/shadcn).
 - **Navigation**: `Navigation` ist ein Fixed-Glas-Pill am Seitenanfang. Buttons setzen `currentPage`. Anpassung um neue Sections erfordert: State-Typ in `App.tsx` erweitern, neue Komponente rendern, Buttons in `Navigation` updaten.

 ## Styling & Designsystem
 - Design-Tokens & Utilities: `src/styles/globals.css`
   - Farbvariablen fuer Light/Dark Theme (`--color-bg-primary`, `--color-text-primary`, `--color-accent`, etc.)
   - Glas/Blur (`.glass-panel`), Container-Breite (`.container-luxury`), Text-Effekte (`.text-stroke`, `.text-stroke-fill`), Glow, Floating Animations.
   - Grundtypografie (h1–h4, p) und globale Transitions.
   - Scrollbar, Selection, Smooth-Scroll.
 - Tailwind v4: `@import "tailwindcss";` im Globals-File; die generierten Layer leben in `src/index.css`. Aendere primar `globals.css`, falls du Tokens/Utilities anpassen willst.
 - Ikonen: ueber `lucide-react` importiert. Motion-Animationen laufen ueber `motion/react` statt dem alten `framer-motion`-Namespace.

 ## Daten & Assets
 - Bilder: Remote-Links (Unsplash) direkt in den Datenobjekten der Components. `ImageWithFallback` zeigt ein Inline-SVG, falls ein Bild nicht laedt.
 - Texte/Copy: Lokal in den Components hinterlegt (kein CMS). Anpassungen passieren direkt im JSX/Array.
 - Credits: siehe `src/Attributions.md` (Unsplash, shadcn/ui, MIT).

 ## Erweiterungstipps fuer neue Teammitglieder
 - Neue Section auf der Startseite: eigene Komponente unter `src/components` anlegen und in `HomePage` einbinden.
 - Neue Seite/Tab: `currentPage`-Union in `App.tsx` erweitern, `Navigation`-Buttons anpassen, Komponente in den Conditional-Render einhaengen.
 - Neue Produkte/Konzepte: `smartHomeConcepts` in `HomesPage` erweitern (Bilder, Features, Specs beibehalten).
 - Kontakt-Formular real anbinden: `handleSubmit` in `ContactPage` durch echten API-Call ersetzen; Erfolg/Fehler via Toast (z. B. `sonner`) oder Status-UI anzeigen.
 - Theme/Branding aendern: Farbvariablen in `globals.css` anpassen; ggf. `text-stroke`/`glass-panel` Werte justieren.

 ## Deployment-Hinweise
 - `npm run build` erzeugt statische Assets unter `dist/`. Diese koennen auf jedem Static Host liegen.
 - Falls ein externer Host kein SPA-Routing braucht, reicht ein simples Upload. (Es gibt hier kein Router-basiertes Deep Linking.)

 ## Known Behaviors
 - Kein Backend: Formulareinreichung ist momentan rein visuell.
 - Custom Cursor: Bei Einbettung in andere Projekte sicherstellen, dass `cursor: none` erwuenscht ist oder Komponente entfernen.
 - Animationslast: Viele Framer-Motion-Elemente; bei Performance-Problemen `viewport`/`once`-Props, Anzahl Partikel/Bubbles und Motion-Ranges reduzieren.
  
