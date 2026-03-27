# ClyMind Website – React Project Structure

## Goal
Build the ClyMind website as a clean, premium, minimal React site with a structure that feels mature from day one.

The website currently has these main pages:

- Home
- Product
- Partners
- About
- Order

The main CTA (`Order`) should always remain visible in the top navigation.

---

## Recommended stack

For this project, the cleanest modern setup would be:

- React
- Vite
- React Router
- CSS Modules or a global CSS structure
- optionally later:
  - Framer Motion for animations
  - an icon library
  - a UI library only if really needed

For now, it is better to keep it simple and controlled.

---

## Suggested folder structure

```txt
clymind-website/
├─ public/
│  ├─ favicon.ico
│  ├─ images/
│  │  ├─ hero-vase.jpg
│  │  ├─ product-vase.jpg
│  │  ├─ logo.svg
│  │  └─ supporters/
│  └─ fonts/
│
├─ src/
│  ├─ assets/
│  │  ├─ images/
│  │  └─ icons/
│  │
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ Navbar.jsx
│  │  │  ├─ Footer.jsx
│  │  │  └─ PageWrapper.jsx
│  │  │
│  │  ├─ common/
│  │  │  ├─ Button.jsx
│  │  │  ├─ SectionTitle.jsx
│  │  │  ├─ CTABox.jsx
│  │  │  ├─ Accordion.jsx
│  │  │  ├─ Card.jsx
│  │  │  └─ LogoStrip.jsx
│  │  │
│  │  ├─ home/
│  │  │  ├─ HeroSection.jsx
│  │  │  ├─ ProblemSection.jsx
│  │  │  ├─ SolutionSection.jsx
│  │  │  ├─ WhyItWorksSection.jsx
│  │  │  ├─ VisionSection.jsx
│  │  │  └─ FinalCTASection.jsx
│  │  │
│  │  ├─ product/
│  │  │  ├─ ProductHero.jsx
│  │  │  ├─ SystemSection.jsx
│  │  │  ├─ AppSection.jsx
│  │  │  ├─ SustainabilitySection.jsx
│  │  │  ├─ FAQSection.jsx
│  │  │  └─ ProductAccordionData.js
│  │  │
│  │  ├─ partners/
│  │  │  ├─ PartnersHero.jsx
│  │  │  ├─ SupportersSection.jsx
│  │  │  ├─ WhyPartnerSection.jsx
│  │  │  ├─ RoadmapSection.jsx
│  │  │  └─ PartnerContactSection.jsx
│  │  │
│  │  ├─ about/
│  │  │  ├─ AboutHero.jsx
│  │  │  ├─ StorySection.jsx
│  │  │  ├─ VisionSection.jsx
│  │  │  ├─ TeamSection.jsx
│  │  │  └─ ContactSection.jsx
│  │  │
│  │  └─ order/
│  │     ├─ OrderHero.jsx
│  │     ├─ StarterKitSection.jsx
│  │     ├─ WhatsIncludedSection.jsx
│  │     ├─ AddOnsSection.jsx
│  │     └─ OrderFAQSection.jsx
│  │
│  ├─ pages/
│  │  ├─ HomePage.jsx
│  │  ├─ ProductPage.jsx
│  │  ├─ PartnersPage.jsx
│  │  ├─ AboutPage.jsx
│  │  └─ OrderPage.jsx
│  │
│  ├─ data/
│  │  ├─ navigation.js
│  │  ├─ homeContent.js
│  │  ├─ productContent.js
│  │  ├─ partnersContent.js
│  │  ├─ aboutContent.js
│  │  └─ orderContent.js
│  │
│  ├─ styles/
│  │  ├─ globals.css
│  │  ├─ variables.css
│  │  ├─ layout.css
│  │  └─ utilities.css
│  │
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ router.jsx
│
├─ .gitignore
├─ package.json
├─ README.md
└─ vite.config.js
```

---

## Why this structure works

This structure is good because it separates the project into clear layers.

### `pages/`
Contains the full pages tied to routes.
Examples:
- `/` → `HomePage.jsx`
- `/product` → `ProductPage.jsx`
- `/partners` → `PartnersPage.jsx`

### `components/`
Contains reusable UI sections and page-specific blocks.

This is useful because:
- the website stays modular
- each page remains readable
- future changes are easier

### `data/`
Contains text, FAQ items, navigation labels, and structured content.

This is very useful because the text is likely to change many times at the beginning. Keeping content outside the JSX makes the site easier to maintain.

### `styles/`
Keeps the visual system centralized:
- typography
- spacing
- colors
- button rules
- layout consistency

---

## Suggested routing

Use React Router with these routes:

- `/` → Home
- `/product` → Product
- `/partners` → Partners
- `/about` → About
- `/order` → Order

Example mental model:

```jsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/product" element={<ProductPage />} />
  <Route path="/partners" element={<PartnersPage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/order" element={<OrderPage />} />
</Routes>
```

---

## Page structure overview

## HomePage
Should include:
- Hero
- Problem
- Solution
- Why it works
- Short vision
- Final CTA

## ProductPage
Should include:
- Product hero
- The system
- How it works
- The vase
- The bulb
- The app
- Technology
- Sustainability
- FAQ

A clean accordion can be used here for the deeper technical explanations.

## PartnersPage
Should include:
- Hero
- Supported by
- Why partner with us
- Roadmap
- Contact

## AboutPage
Should include:
- Story
- Vision
- Team
- Contact

## OrderPage
Should include:
- Starter kit
- What is included
- Add-ons
- FAQ

The visual logic should be:
sell the system first, then show the extra purchases.

---

## Components that should exist early

At the beginning, I would build these first.

### Layout
- `Navbar`
- `Footer`
- `PageWrapper`

### Reusable UI
- `Button`
- `SectionTitle`
- `Card`
- `Accordion`
- `CTABox`

These components will be reused across the whole site and will give visual consistency.

---

## File building order

A good order for development would be:

1. create project
2. set up Git
3. install router
4. create global layout
5. create pages
6. build navbar and footer
7. build Home page sections
8. build Product page
9. build Order page
10. build Partners and About
11. refine styles and spacing
12. optimize assets and responsiveness

---

## Git – how to create a new project locally

### 1. Create the React project

With Vite:

```bash
npm create vite@latest clymind-website
```

Choose:
- framework: `React`
- variant: `JavaScript` or `TypeScript`

If you want maximum speed at the beginning, choose JavaScript.  
If you want stronger long-term structure, choose TypeScript.

Then enter the project folder:

```bash
cd clymind-website
```

Install dependencies:

```bash
npm install
```

Install router:

```bash
npm install react-router-dom
```

Start development server:

```bash
npm run dev
```

---

## Git – initialize repository locally

Inside the project folder:

```bash
git init
git add .
git commit -m "Initial React project setup"
```

This creates the local Git repository.

---

## GitHub – create the remote repository

On GitHub:

1. log in
2. click New repository
3. choose a name, for example: `clymind-website`
4. create it without adding README, `.gitignore`, or license if you already created the project locally

Then GitHub will show you commands similar to these:

```bash
git remote add origin https://github.com/YOUR-USERNAME/clymind-website.git
git branch -M main
git push -u origin main
```

Run them inside your project folder.

---

## If you already have a repo and want to import the project into it

If the remote repo already exists and is empty:

```bash
git remote add origin https://github.com/YOUR-USERNAME/clymind-website.git
git branch -M main
git push -u origin main
```

If the repo already contains files, first pull:

```bash
git pull origin main --allow-unrelated-histories
```

Then resolve conflicts if needed, and push again.

---

## Typical workflow after the first push

After making changes:

```bash
git add .
git commit -m "Add homepage structure"
git push
```

For the next feature:

```bash
git add .
git commit -m "Build product page sections"
git push
```

---

## Recommended branch strategy

At the beginning, a simple structure is enough:

- `main` → stable version
- `dev` → active development
- feature branches if needed:
  - `feature/homepage`
  - `feature/product-page`
  - `feature/order-page`

Example:

```bash
git checkout -b dev
git push -u origin dev
```

Then for a feature:

```bash
git checkout -b feature/homepage
```

This is cleaner than working only on `main`.

---

## Initial practical recommendation

If you want to move quickly, start like this:

- Vite + React
- JavaScript
- React Router
- simple CSS
- one clean layout
- page-by-page construction

Do not overcomplicate the project at the start with too many libraries.

The important thing now is:
- clear structure
- clean navigation
- reusable components
- fast iteration

---

## Next practical step

The smartest implementation sequence would be:

1. scaffold the project
2. configure routing
3. build the navbar with sticky `Order` button
4. create empty pages
5. build the Home page first
6. move to Product and Order

That gives you a visible brand skeleton immediately.
