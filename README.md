# Print-It — Landing Site

Marketing site for **Print-It**, a mobile app that turns your digital to-dos into printed thermal tickets. Local-first, private, no account required.

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

**Git-connected Pages (dashboard):** set **Build command** to `pnpm run build`, **Build output directory** to `dist`, and leave **Deploy command** empty. Pages publishes `dist` automatically after a successful build. Do not use `npx wrangler deploy` there—that targets Workers and will fail without a Worker entry point.

**CLI:** `pnpm run build && npx wrangler pages deploy dist --project-name=taskerprinter`

## Waitlist form

The landing page form posts to the Pages Function at `functions/api/waitlist.js`.

To make submissions deliver to your inbox on Cloudflare Pages:

1. Enable Cloudflare Email Service / email sending for the domain you want to send from.
2. Confirm `support@print-it-app.com` is a valid destination address, or change the addresses in [`wrangler.toml`](./wrangler.toml).
3. Make sure the `WAITLIST_EMAIL` binding is present for the Pages project.

The current setup sends submissions to `support@print-it-app.com` and uses that same address as the sender by default.

## License

Uses shadcn/ui conventions (MIT) — see [`ATTRIBUTIONS.md`](./ATTRIBUTIONS.md).
