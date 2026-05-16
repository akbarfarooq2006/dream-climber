# <img src="public/favicon.svg" alt="The Dream Climber Logo" width="28" height="28" /> The Dream Climber

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

An educational, story-driven climbing game where players progress through 7 mountains of psychology and self-actualization using scenario-based challenges.

## Features

- 7 themed mountains with curated questions and explanations
- Interactive game flow with lives, score tracking, and progress persistence
- 3D mountain visuals and animated UI transitions
- Rich screen set: welcome, setup, world map, gameplay, feedback, and learning sections
- Sound effects for correct, wrong, transition, and completion events

## Tech Stack

| Category | Stack |
| --- | --- |
| Languages | TypeScript, HTML, CSS |
| Frameworks | React 19, Vite 6 |
| UI | Tailwind CSS 4, Motion (motion/react) |
| 3D / Visuals | React Three Fiber, Drei, Three.js, Particles |
| State | Zustand |
| Audio | Web Audio API (custom service) |
| Tooling | TypeScript, Vite, npm |

## Installation

### 1) Clone repository

```bash
git clone <your-repo-url>
cd the-dream-climber
```

### 2) Install dependencies

```bash
npm install
```

### 3) Environment setup

Copy the example env file and update values as needed:

```bash
cp .env.example .env
```

See Environment Variables for details.

### 4) Run locally

```bash
npm run dev
```

App runs at https://dream-climber.vercel.app/.

## Usage

Common commands:

```bash
npm run dev
npm run build
npm run preview
```

Screenshots:

> Add screenshots or GIFs of key screens here.

## Folder Structure

```
public/            # Static assets (favicon, etc.)
src/
   components/
      game/          # Game visuals (climber, mountain, progress)
      screens/       # Screen-level views (welcome, map, gameplay)
      ui/            # Reusable UI components (nav, overlays)
   data/            # Game data (mountains, questions)
   services/        # Client-side services (audio)
   store/           # Zustand game state and actions
   utils/           # Helpers for character and positioning
index.html         # Vite entry HTML
vite.config.ts     # Vite configuration
```

## API Endpoints

This repository is a frontend-only Vite app. No backend API endpoints are defined here.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run clean` | Remove the `dist` folder |
| `npm run lint` | Type-check with TypeScript |

## Environment Variables

Create a `.env` file based on `.env.example`.

| Variable | Required | Description |
| --- | --- | --- |
| `GEMINI_API_KEY` | Optional | API key for Gemini (injected in some environments; not currently used by client code) |
| `APP_URL` | Optional | App base URL (useful for self-referential links) |

## Deployment

1. Build the app:

```bash
npm run build
```

2. Deploy the `dist` folder to your static host (Vercel, Netlify, Cloudflare Pages, S3, etc.).

3. Set any required environment variables on your host.

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a pull request

## License

No LICENSE file was found in this repository. If you plan to distribute or open source this project, add a license file.
