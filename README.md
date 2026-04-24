# Ticker Printer — Landing Site

Marketing site for **Ticker Printer**, a mobile app that turns your digital to-dos into printed thermal tickets. Local-first, private, no account required.

Built with React 18, TypeScript, Vite 6, Tailwind CSS v4, and `react-router` v7. Deployed to Cloudflare Pages.

---

## Getting started

```bash
pnpm install
pnpm dev
```

Open http://localhost:5173.

## Scripts

| Command            | What it does                       |
| ------------------ | ---------------------------------- |
| `pnpm dev`         | Vite dev server with HMR           |
| `pnpm build`       | Production build to `dist/`        |
| `pnpm preview`     | Preview the production build       |
| `pnpm typecheck`   | `tsc --noEmit` over `src/`         |

## Project layout

```
index.html
vite.config.ts            # React + Tailwind plugins, @ → src alias
tsconfig.json
wrangler.toml             # Cloudflare Pages config

src/
  main.tsx                # React entry
  vite-env.d.ts           # Ambient types for Vite + asset imports
  app/
    App.tsx               # <BrowserRouter> routes: / and /help
    pages/
      Home.tsx            # Marketing page
      Help.tsx            # FAQs & troubleshooting
    components/
      Hero.tsx, WorkflowVisual.tsx, AppScreenshots.tsx, AppIcon.tsx,
      HowItWorks.tsx, CTA.tsx, Footer.tsx, Logo.tsx
  imports/                # Compressed WebP/PNG assets
  styles/
    index.css             # Entry stylesheet
    tailwind.css          # Tailwind v4 + tw-animate-css
    theme.css             # Design tokens / CSS variables
    animations.css
```

## Deployment

Cloudflare Pages reads `wrangler.toml` (`pages_build_output_dir = "dist"`).
`pnpm build` produces the `dist/` folder that Pages serves.

## License

Uses shadcn/ui conventions (MIT) — see [`ATTRIBUTIONS.md`](./ATTRIBUTIONS.md).
