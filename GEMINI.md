# Project Mandates: 99event.co

This document contains foundational rules and architectural standards for the 99event.co project. These instructions take absolute precedence over general defaults.

## 🏛️ Architectural Standards

- **Tech Stack Compliance:** 
  - Always use **Astro 6.0** for routing and static generation.
  - Interactive components must be built with **React 19** and use `client:load` for immediate interactivity.
  - Styling must follow **Tailwind CSS 4.0** standards.
  - Motion and transitions should use **Framer Motion**.
- **Content Structure:**
  - All travel guides and articles must reside in `src/content/blog/` as MDX files.
  - High-resolution assets (images) must be stored in `public/images/` and referenced via absolute paths (`/images/filename.png`).
- **SEO First:** 
  - Every new page or blog post must use the `SEOhead` component.
  - Maintain absolute canonical URLs pointing to `https://99event.co`.
  - JSON-LD schemas must be updated for every new content type.

## 🎨 Design & Aesthetic

- **Tone:** Professional, editorial, and authoritative but welcoming.
- **Imagery:** Prefer professional aerial shots and vibrant tropical colors. All images should have a 4:5 or 21:9 aspect ratio where applicable.
- **Components:** Maintain the "rounded-3xl" border-radius convention for major UI elements (hero sections, cards, components).

## 🛠️ Tooling & Integration

- **Canva MCP:** Use the Canva MCP to generate professional-grade assets for blog headers and social sharing.
- **Google Workspace:** All data-heavy research should be verified via Google search or web fetch from local authoritative sources like Phuket 101.

## 📋 Data Management

- **Beaches:** The source of truth for beach data and links is `src/data/beaches.ts`. Any new guide must have its slug registered here to enable site-wide linkage.
