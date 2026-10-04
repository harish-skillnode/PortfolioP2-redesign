# Sriharish Eswarathas — Portfolio

A single-screen personal portfolio with a persistent profile and tabs for About,
Experience, Projects, Research, and SkillNode. The original dark palette, logo,
pixel-art portrait, resume, publication PDF, links, and portfolio content are retained.

## Development

```sh
npm ci
npm run dev
```

## Validation and production

```sh
npm run typecheck
npm run build
npm start
```

Content lives in `src/data/portfolio.ts` and `src/app/page.tsx`. Styles live in
`src/app/globals.css`. The contact form uses the existing Formspree form.

The page fits the viewport. On smaller screens, dropdowns select projects and roles;
page controls reveal the longer About and Research content. Tabs support arrow keys,
Home, and End. Each section has a shareable URL fragment, for example `/#research`.
An individual content panel can scroll when text is enlarged or the window is unusually
short, keeping all information accessible. The page itself stays in place.
