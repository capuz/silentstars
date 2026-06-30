---
repo: "shiv3/ocpp-cp-simulator"
name: "ocpp-cp-simulator"
description: "OCPP CP simulator for AI agent testing & CSMS development"
url: "https://github.com/shiv3/ocpp-cp-simulator"
homepage: "https://shiv3.github.io/ocpp-cp-simulator/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ocpp", "ocpp-j", "ocpp16j", "charging-point", "charging-port", "simulator"]
stars: 34
forks: 20
openIssues: 3
closedIssues: 17
watchers: 2
contributors: 6
recentReleases: 9
createdAt: "2024-07-07T06:14:26Z"
lastCommitAt: "2026-06-30T06:50:46Z"
lastReleaseAt: "2026-06-29T04:41:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 97
undervaluedScore: 71
maintainers: ["shiv3"]
openGraphImageUrl: "https://opengraph.githubassets.com/439467cf2b454cd97d134c0bb1a69d77dd6ce61bfc2bf87e5c9d72be9b522817/shiv3/ocpp-cp-simulator"
---

# OCPP CP Simulator

OCPP 1.6J charge point simulator for **AI agent testing**, CI automation, and CSMS development. Comes with a browser UI, a headless CLI, and a Socket.IO control API that any agent or script can drive.

| Interface     | Description                                         | Docs                               |
| ------------- | --------------------------------------------------- | ---------------------------------- |
| **Browser**   | React + Tailwind web app / Tauri desktop app        | [docs/browser.md](docs/browser.md) |
| **Legacy v1** | Original single-page web UI                         | [docs/v1.md](docs/v1.md)           |
| **CLI**       | Headless mode for scripting, CI, and AI integration | [docs/cli.md](docs/cli.md)         |
| **Server**    | Long-running Socket.IO server, multi-CP per process | [docs/server.md](docs/server.md)   |
| **Docker**    | Pre-built image (daemon + web console) on GHCR      | [docs/docker.md](docs/docker.md)   |

## Quick Start

```bash
# Install dependencies
npm install

# Browser UI (dev server)
npm run dev

# CLI / Server mode (requires Bun)
ocpp-cp-sim --ws-url ws://localhost:9000/ocpp --cp-id CP001
```

### Install…
