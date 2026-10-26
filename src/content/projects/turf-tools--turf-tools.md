---
repo: "turf-tools/turf-tools"
name: "turf-tools"
description: "Open source canvassing platform and mobile app"
readmeQualityOk: true
url: "https://github.com/turf-tools/turf-tools"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [63, 36]
stars: 14
forks: 2
openIssues: 6
closedIssues: 5
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-27T18:41:36Z"
lastCommitAt: "2026-10-26T03:03:10Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 88
undervaluedScore: 44
maintainers: ["freeman-lab", "joolean", "alexwade13"]
openGraphImageUrl: "https://opengraph.githubassets.com/49298c72c45b440d76cbaeafa407b6651e9abeac05a1cd28073af41da78e131b/turf-tools/turf-tools"
---

# Turf Tools

Open source canvassing platform and mobile app.

The software in this repository includes three key components: (1) performant voter file data processing (including a fully open-source geocoding pipeline) (2) a canvassing application that runs natively on iOS and Android (3) a web platform for creating segments, scripts, and campaigns, and for cutting turf.

The project is in active development and currently undergoing early testing.

## Prerequisites

You'll need to have these installed to run the development environment.

- [Node.js](https://nodejs.org/) >= 22.12
- [pnpm](https://pnpm.io/) enabled via `corepack enable`
- [Docker](https://www.docker.com/) (for the development Postgres)
- [uv](https://docs.astral.sh/uv/) `curl -LsSf https://astral.sh/uv/install.sh | sh`
- [Quickwit](https://quickwit.io/) `curl -L https://install.quickwit.io | sh` (move binary to `/usr/local/bin/`)
- [osmium-tool](https://osmcode.org/osmium-tool/) (for OSM geocoding)
- [Xcode](https://developer.apple.com/xcode/) (optional, for iOS simulator)

## Setup

Once the above are installed, run this to install both Node and Python dependencies.

```bash
pnpm bootstrap
```

Then create local…
