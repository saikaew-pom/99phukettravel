# 🏝️ 99event.co — Discover the Real Phuket

**Live Site:** [https://saikaew-pom.github.io/99phukettravel/](https://saikaew-pom.github.io/99phukettravel/)

**99event.co** is a modern, high-performance travel authority site dedicated to uncovering the authentic side of Phuket, Thailand. Built with a focus on local expertise, editorial-quality content, and interactive utility.

---

## 🚀 Tech Stack & Architectural Standards

Built with the latest web technologies to ensure speed, accessibility, and a premium user experience:

- **Framework:** [Astro 6.0](https://astro.build/) (Optimized SSG & Routing)
- **UI Library:** [React 19](https://react.dev/) (Interactive components with `client:load`)
- **Styling:** [Tailwind CSS 4.0](https://tailwindcss.com/) (Modern utility-first styling)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (Smooth transitions and interactions)
- **Content:** MDX (Markdown with JSX) for rich, interactive blog posts in `src/content/blog/`.

### 🏛️ Engineering Mandates
- **SEO First:** Automated sitemaps, JSON-LD schemas for all content types, and canonical URLs at `https://99event.co`.
- **Design Philosophy:** Professional, editorial tone with "rounded-3xl" border-radius conventions and high-resolution visual assets.
- **Integration:** Utilizes **Canva MCP** for on-brand asset generation and **Google Workspace** for verified data research.

---

## ✨ Key Features

- **🏖️ Beach Finder:** Interactive filtering system to find the perfect beach based on vibe (Party, Family, Luxury) and sand quality.
- **🛂 2026 Visa Checker:** Real-time lookup for entry requirements and mandatory TDAC forms for 90+ countries.
- **💰 Budget Calculator:** Personalized daily cost estimates across multiple global currencies.
- **📑 Editorial Guides:** Depth-first guides on Phuket's major areas, elephant sanctuaries, and hidden gems.

---

## 📂 Project Structure

```text
/
├── public/              # Static assets (images/, robots.txt, etc.)
├── src/
│   ├── components/      # React (TSX) & Astro components
│   ├── content/         # MDX blog posts organized by collection
│   ├── data/            # Source of truth (beaches.ts, etc.)
│   ├── layouts/         # BaseLayout and BlogPost structures
│   ├── pages/           # Dynamic [slug].astro and static routes
│   └── styles/          # Global CSS and Tailwind configuration
├── astro.config.mjs     # Astro & Vite integration
└── GEMINI.md            # Project mandates and standards
```

---

## 🛠️ Getting Started

### 📋 Prerequisites
- **Node.js:** `>= 22.12.0` (as specified in `package.json`)

### 🧞 Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the build locally |

---

## 🎨 Design & Aesthetic

All visual assets follow a consistent tropical-modern aesthetic.
- **Aspect Ratios:** 4:5 or 21:9 for major imagery.
- **Tone:** Authoritative yet welcoming.
- **Source:** Assets generated via professional aerial photography and curated AI designs.

---

## 🌴 Local Expertise

All content is curated by "Gemini Phuket," providing verified recommendations from street food to secret sunsets, prioritizing sustainable and ethical tourism.
