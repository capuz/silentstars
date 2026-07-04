---
repo: "krelltunez/lifeGLANCE"
name: "lifeGLANCE"
description: "Your life, at a glance"
url: "https://github.com/krelltunez/lifeGLANCE"
homepage: "https://lifeglance.app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
topics: ["goals", "milestones", "privacy-first", "productivity", "pwa", "react", "self-hosted"]
stars: 131
forks: 9
openIssues: 4
closedIssues: 16
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-04-10T01:22:45Z"
lastCommitAt: "2026-07-04T19:20:10Z"
lastReleaseAt: "2026-06-07T05:23:57Z"
status: "thriving"
tags: ["needs_contributors", "funded", "release_machine"]
healthScore: 96
undervaluedScore: 36
maintainers: ["claude", "krelltunez", "win2ter"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cce4c96fda42cc80d29a82c8eb4c324f2c008f23f50aaecea840dc164af8540/krelltunez/lifeGLANCE"
fundingLinks: ["GITHUB:https://github.com/krelltunez", "KO_FI:https://ko-fi.com/krelltunez"]
---

# lifeGLANCE

**Your life, at a glance.** A zoomable personal timeline for milestones, past and future. Runs entirely in your browser, with no account, no server, and no sync. Your data never leaves your device.

Part of the **GLANCE family**: focused, standalone apps connected through a shared intent protocol. See also [dayGLANCE](https://github.com/krelltunez/dayGLANCE) (today), [lastGLANCE](https://github.com/krelltunez/lastGLANCE) (recent upkeep), and lifeGLANCE (your whole timeline).

---

---

## Quick Start

Use the hosted version at [lifeglance.app](https://lifeglance.app), or self-host with Docker.

### Self-host with Docker

```bash
docker run -d \
  -p 8080:80 \
  --restart unless-stopped \
  ghcr.io/krelltunez/lifeglance:latest
```

Or with Docker Compose:

```yaml
services:
  app:
    image: ghcr.io/krelltunez/lifeglance:latest
    ports:
      - "8080:80"
    restart: unless-stopped
```

Available at `http://localhost:8080`.

### Build from Source

Requires Node 20+.

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

```bash
npm run build   # outputs to /dist
npm run preview # serve the production build locally
```

The Docker…
