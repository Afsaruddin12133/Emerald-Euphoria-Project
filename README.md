# Emerald Euphoria — Project Handover Guide

> A professional, production-ready web application built with **React 19**, **Vite 8**, and **Tailwind CSS 4**.

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Getting the Project Files](#2-getting-the-project-files)
3. [Installing Dependencies](#3-installing-dependencies)
4. [Running the Project Locally](#4-running-the-project-locally)
5. [Building for Production](#5-building-for-production)
6. [Project Structure](#6-project-structure)
7. [Technology Stack](#7-technology-stack)
8. [Available Scripts](#8-available-scripts)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. Prerequisites

Before you begin, make sure the following software is installed on your machine.

### Node.js (Required — v18 or higher)

This project requires **Node.js version 18 or above**.

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS (Long Term Support)** version
3. Run the installer and follow the on-screen steps
4. Verify installation by opening a terminal and running:
   ```bash
   node --version
   ```
   You should see something like `v20.x.x` or higher.

### npm (Comes with Node.js)

npm is installed automatically with Node.js. Verify it with:
```bash
npm --version
```

### Git (Recommended)

If you received the project as a Git repository, install Git from [https://git-scm.com](https://git-scm.com).

---

## 2. Getting the Project Files

### Option A — You received a ZIP file

1. Locate the ZIP file (e.g., `Emerald-Euphoria-Project.zip`)
2. Right-click → **Extract All** (Windows) or double-click (macOS)
3. Place the extracted folder somewhere easy to find, e.g., your Desktop or Documents

### Option B — You received a Git repository link

Open a terminal and run:

```bash
git clone <repository-url>
cd Emerald-Euphoria-Project
```

Replace `<repository-url>` with the actual link provided to you.

---

## 3. Installing Dependencies

> **This step is required every time you set up the project on a new machine.**

Open a terminal inside the project folder:

**Windows:** Right-click inside the project folder → **Open in Terminal** (or open Command Prompt / PowerShell and navigate to the folder)

```bash
# Navigate into the project folder (if not already there)
cd Emerald-Euphoria-Project

# Install all required packages
npm install
```

This will download all libraries listed in `package.json` into a `node_modules/` folder. It may take 1–2 minutes on the first run.

---

## 4. Running the Project Locally

Once dependencies are installed, start the development server:

```bash
npm run dev
```

The terminal will display something like:

```
  VITE v8.x.x  ready in 500ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

Open your browser and go to **[http://localhost:3000](http://localhost:3000)**.

The browser should open **automatically**. The page will **hot-reload** (update instantly) whenever you save a file — no manual refresh needed.

To stop the server, press `Ctrl + C` in the terminal.

---

## 5. Building for Production

When the project is ready to be deployed to a live server, run:

```bash
npm run build
```

This compiles and optimizes all files into the `dist/` folder. You can then preview the production build locally before deploying:

```bash
npm run preview
```

The `dist/` folder is what you upload to your hosting provider (e.g., Netlify, Vercel, cPanel, etc.).

---

## 6. Project Structure

```
Emerald-Euphoria-Project/
│
├── public/                     # Static assets (images, fonts, icons)
│
├── src/                        # All source code lives here
│   ├── assets/                 # Images and media used in components
│   ├── components/
│   │   ├── ui/                 # Reusable UI primitives (Button, Card, Badge, Spinner)
│   │   └── shared/             # Composition-level components (Navbar, Footer, AuthModal, OfferPopup)
│   │
│   ├── hooks/                  # Custom React hooks
│   ├── layouts/                # Page layout wrappers
│   ├── lib/                    # Utility/helper functions
│   ├── pages/
│   │   ├── home/               # All homepage sections (Hero, HowToPlay, ChooseUs, etc.)
│   │   ├── About.jsx           # About page
│   │   ├── Home.jsx            # Homepage entry (assembles all sections)
│   │   └── NotFound.jsx        # 404 page
│   │
│   ├── router/
│   │   └── index.jsx           # All routes defined here
│   ├── styles/
│   │   └── globals.css         # Global styles and Tailwind design tokens
│   └── main.jsx                # Application entry point
│
├── index.html                  # HTML shell
├── vite.config.js              # Vite configuration (port, aliases)
├── eslint.config.js            # Linting rules
├── package.json                # Project metadata and scripts
└── README.md                   # This file
```

### Key Conventions

| Convention | Detail |
|---|---|
| Import alias `@` | Maps to `src/` — use `@/components/...` instead of `../../components/...` |
| UI components | Small, single-purpose: `Button`, `Card`, `Badge`, `Spinner` |
| Shared components | Larger, composed: `Navbar`, `Footer`, `AuthModal`, `OfferPopup` |
| Routing | All routes are lazy-loaded and defined in `src/router/index.jsx` |
| Styling | Tailwind CSS 4 utilities + custom tokens in `src/styles/globals.css` |

---

## 7. Technology Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 19 | UI library |
| [Vite](https://vite.dev) | 8 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Animations & transitions |
| [React Router](https://reactrouter.com) | 7 | Client-side routing |
| [Lucide React](https://lucide.dev) | latest | Icon library |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | latest | Conditional class utilities |

---

## 8. Available Scripts

Run these commands from inside the project folder:

| Command | What it does |
|---|---|
| `npm install` | Installs all project dependencies |
| `npm run dev` | Starts the local development server at `http://localhost:3000` |
| `npm run build` | Builds optimized production files into `dist/` |
| `npm run preview` | Serves the production build locally for testing |
| `npm run lint` | Runs ESLint to check for code quality issues |

---

## 9. Troubleshooting

### ❌ `npm install` fails or shows errors

- Make sure Node.js v18+ is installed: `node --version`
- Delete the `node_modules/` folder and `package-lock.json`, then re-run `npm install`

### ❌ Port 3000 is already in use

Another program is using port 3000. Either stop that program, or temporarily change the port in `vite.config.js`:

```js
server: {
  port: 3001, // change to any free port
}
```

### ❌ Page shows a blank screen or error in browser

- Open browser DevTools (`F12` → Console tab) and look for red error messages
- Make sure `npm run dev` is still running in the terminal
- Try a hard refresh: `Ctrl + Shift + R`

### ❌ Changes not showing up

- Make sure you saved the file (`Ctrl + S`)
- Check the terminal — Vite may have shown a compilation error
- Restart the dev server: press `Ctrl + C`, then run `npm run dev` again

### ❌ `node_modules` folder is missing

This folder is never included in ZIP deliveries or Git repos (it's too large). Always run `npm install` first.

---

## Need Help?

If you encounter any issues not covered above, please reach out to the development team with:

1. A screenshot of the error (browser console **and** terminal)
2. Your operating system (Windows / macOS / Linux)
3. Output of `node --version` and `npm --version`

---

*Built with ❤️ — Emerald Euphoria Project*
