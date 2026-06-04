# Frontend Development Skill

Use this skill when developing frontend templates, components, styles, animations, and user interfaces.

## Premium Design Rules

- **Rich Aesthetics**: Avoid browser default fonts and plain, generic colors (e.g., standard red/green/blue). Use curated color palettes (HSL/OKLCH) and sleek, balanced dark modes.
- **Visual Contrast & Typography**: Use premium web fonts (e.g., Inter, Outfit, Roboto via Google Fonts) with varied weights, line heights, and letter spacing. Keep line lengths readable.
- **Depth & Dimension**: Use glassmorphism, subtle drop shadows (`box-shadow`), card borders, and smooth gradients to create hierarchical structure.
- **Dynamic Interactions**: Implement hover states, focus outlines, and micro-animations to make the application feel responsive and alive.
- **Performance**: Optimize bundle assets, implement image lazy loading, and use hardware-accelerated animations (`transform`, `opacity`).

## Coding Conventions

- **Vanilla CSS Systems**: Prioritize Vanilla CSS with custom properties (`:root { --primary: ... }`) for themes. Avoid bloated utility classes unless the project explicitly uses them (e.g., Tailwind).
- **Responsive Layouts**: Utilize modern layout engines (CSS Grid, Flexbox) with media queries to ensure compatibility from mobile viewports to wide desktops.
- **SEO & Semantics**: Use structural tags (`<header>`, `<main>`, `<section>`, `<footer>`) with correct heading hierarchies (one `<h1>` per page) and meaningful metadata.
- **Component Componentization**: Keep components focused, atomic, and reusable. Avoid nesting cards-within-cards indefinitely.
- **Deterministic IDs**: Ensure interactive components have unique, descriptive IDs for automated test engines.
