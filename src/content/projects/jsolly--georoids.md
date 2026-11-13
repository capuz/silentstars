---
repo: "jsolly/GeoRoids"
name: "GeoRoids"
description: "A multiplayer Asteroids game"
readmeQualityOk: true
url: "https://github.com/jsolly/GeoRoids"
homepage: "https://georoids.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["asteroids", "game", "typescript"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2022-06-30T15:42:34Z"
lastCommitAt: "2026-11-13T17:33:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 75
maintainers: ["jsolly", "solly-agent", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/187ed8d7f1a479b832454cddd9d08e70bd1f3995834c9cade750d5302682d98d/jsolly/GeoRoids"
---

# GeoRoids

A cooperative open-world spaceship game with surveying, asteroid towing, and shared mineral deliveries. Play at [www.georoids.com](https://www.georoids.com).

Astro produces the static pages, and Svelte 5 with shadcn-svelte owns the interfaces. The TypeScript canvas engine renders and predicts the local ship. A Node WebSocket server owns the shared world, combat, asteroid field, NPCs and rewards.

## Local development

Use Node 26 (`nvm use`). `package.json` requires `^26.0.0`; jsdom accepts that major from 26.0.0. On macOS, the native `canvas` dependency requires Cairo, Pango, libjpeg, giflib and librsvg.

```sh
git clone git@github.com:jsolly/GeoRoids.git
cd GeoRoids
npm ci
npm run dev
```

Astro serves the client at `http://localhost:5173`; the game server listens on port 3001. `npm run dev` routes `/ws` and `/logs` through Astro's Vite proxy to the local server, including custom dev ports. A public HTTPS tunnel to Astro therefore also carries the game WebSocket, so phones never connect to their own `localhost`. Direct Astro and production endpoint configuration is documented in `config/app/.env.example`.

Choose a ship, enter the game, steer with the mouse or…
