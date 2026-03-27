# ClyMind Website – Progress Tracker

## Stato attuale
> Ultimo aggiornamento: 2026-03-27

**Fase:** Scaffold struttura file

---

## Completato

- [x] Scaffold progetto Vite + React (già fatto)
- [x] Git init + primo commit
- [x] Lettura e analisi `clymind_react_project_structure.md`
- [x] Creazione struttura cartelle completa
- [x] Creazione file placeholder per tutti i componenti, pagine, dati e stili

---

## Prossimi step (in ordine)

1. **Installare react-router-dom**
   ```bash
   npm install react-router-dom
   ```

2. **Configurare il router** → `src/router.jsx`
   - 5 route: `/`, `/product`, `/partners`, `/about`, `/order`

3. **Pulire il boilerplate Vite**
   - Svuotare `App.jsx`, `App.css`
   - Impostare `main.jsx` con `<RouterProvider>`

4. **Costruire il sistema di stili** → `src/styles/`
   - `variables.css` → colori, font, spacing tokens
   - `globals.css` → reset, tipografia base
   - `layout.css` → container, grid
   - `utilities.css` → classi helper

5. **Layout globale** → `src/components/layout/`
   - `PageWrapper.jsx` → wrapper con Navbar + Footer
   - `Navbar.jsx` → navigazione sticky con bottone Order sempre visibile
   - `Footer.jsx`

6. **Componenti UI riutilizzabili** → `src/components/common/`
   - `Button.jsx`
   - `SectionTitle.jsx`
   - `Card.jsx`
   - `Accordion.jsx`
   - `CTABox.jsx`
   - `LogoStrip.jsx`

7. **Dati contenuto** → `src/data/`
   - Popolare tutti i file `.js` con testi e strutture dati

8. **Pagine (empty shell)** → `src/pages/`
   - Creare le 5 pagine che importano le sezioni

9. **Home page** → `src/components/home/`
   - HeroSection → ProblemSection → SolutionSection → WhyItWorksSection → VisionSection → FinalCTASection

10. **Product page** → `src/components/product/`
    - ProductHero → SystemSection → AppSection → SustainabilitySection → FAQSection

11. **Order page** → `src/components/order/`
    - OrderHero → StarterKitSection → WhatsIncludedSection → AddOnsSection → OrderFAQSection

12. **Partners page** → `src/components/partners/`
    - PartnersHero → SupportersSection → WhyPartnerSection → RoadmapSection → PartnerContactSection

13. **About page** → `src/components/about/`
    - AboutHero → StorySection → VisionSection → TeamSection → ContactSection

14. **Rifinire stili e spacing**

15. **Responsiveness e ottimizzazione asset**

---

## Idee e decisioni

### Stack confermato
- React 19 + Vite 8
- JavaScript (non TypeScript, per velocità)
- React Router DOM
- CSS puro (no Tailwind, no UI lib) → pieno controllo visivo

### Design system da definire
- Palette: probabilmente bianco/crema + un colore accent (da definire con il brand)
- Font: da scegliere (serif per titoli? sans-serif per body?)
- Spacing scale da standardizzare in `variables.css`

### Navbar
- Sticky in alto
- Bottone `Order` sempre visibile e ben distinto
- Link: Home, Product, Partners, About

### Componenti chiave da curare
- `Button.jsx` → varianti: primary, secondary, ghost
- `Accordion.jsx` → usato in ProductPage e OrderPage per FAQ
- `Card.jsx` → usato in PartnersPage e AboutPage

### Animazioni (Framer Motion)
- Da aggiungere in una fase successiva, non ora
- Priorità: struttura e contenuto prima delle animazioni

### SEO e meta
- Da gestire con titoli e meta per ogni pagina (dopo la struttura)

---

## Note tecniche

### Stato progetto attuale (2026-03-27)
- Vite + React scaffoldato con boilerplate default
- `react-router-dom` NON ancora installato
- Nessun componente custom ancora scritto
- Assets presenti: `src/assets/hero.png`, `public/favicon.svg`, `public/icons.svg`
- File boilerplate da rimuovere: `App.css`, `src/assets/react.svg`, `src/assets/vite.svg`

### Dipendenze attuali
```json
{
  "react": "^19.2.4",
  "react-dom": "^19.2.4"
}
```
Da aggiungere: `react-router-dom`
