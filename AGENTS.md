# AGENTS.md — Quick instructions for AI coding agents

Purpose: Help AI coding agents quickly understand and operate on this repo with minimal friction.

Essential commands

```
npm install
npm run dev    # start Vite dev server
npm run build  # build for production
npm run preview# preview built output
npm run lint   # run ESLint across the codebase
```

Where to look (high-value files)

- `package.json` — scripts and dependencies.
- `vite.config.js` — dev server config and import aliasing.
- `src/main.jsx` — application bootstrap.
- `src/router/index.jsx` — routing, lazy-loaded pages, route layout mapping.
- `src/pages/` — route page implementations.
- `src/components/` — UI primitives (`ui/`) and shared composition (`shared/`).
- `src/layouts/` — page layout components.
- `src/styles/globals.css` — Tailwind-based global styles and design tokens.

Conventions and patterns

- Import alias `@` points to `src/` (configured in `vite.config.js`). Prefer that alias for internal imports.
- Components: `ui/` contains small reusable primitives; `shared/` contains composition-level components and layout pieces.
- Routing: Pages are lazy-loaded and wrapped with a Suspense fallback. Check `FullPageSpinner` usage in `router`.
- Styling: Tailwind CSS utilities and custom theme tokens live in `src/styles/globals.css`.

What agents should do first

1. Run `npm ci` or `npm install` and `npm run dev` to confirm the dev server starts.
2. Read `src/router/index.jsx` and `src/main.jsx` to understand app entry and routing.
3. Run `npm run lint` to catch style or quick correctness issues.
4. Link, don't copy: when documenting behavior, link to existing docs (`README.md`) rather than duplicating content.

Missing / useful additions (suggested)

- An app-specific `README.md` with environment variables, deployment steps, and Node version. Link to [README.md](README.md).
- `CONTRIBUTING.md` with repo workflow and lint/prettier hooks.
- A basic `test` script and sample tests if CI will enforce them.

Contacts and context

- This project uses React + Vite. No tests are present and the README is minimal — assume you must infer conventions from code.

If you want, I can:

- Draft a focused `README.md` with run/build/deploy steps.
- Add a `CONTRIBUTING.md` or a small `copilot-instructions.md` under `.github/` instead of `AGENTS.md`.
