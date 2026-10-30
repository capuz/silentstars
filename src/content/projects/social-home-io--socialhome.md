---
repo: "social-home-io/socialhome"
name: "socialhome"
description: "Social Home — privacy-first federated social platform for households"
readmeQualityOk: true
url: "https://github.com/social-home-io/socialhome"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [77, 20]
stars: 9
forks: 0
openIssues: 1
closedIssues: 24
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-21T08:51:53Z"
lastCommitAt: "2026-10-30T11:03:27Z"
lastReleaseAt: "2026-05-13T20:29:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 52
maintainers: ["pvizeli", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b12b027fa2d2dce554026f1dfca5dbea8270ebf36f3c781815795b4e9e291cb/social-home-io/socialhome"
---

# Social Home — `core`

The Python + Preact application that runs inside a household. Federates
peer-to-peer with other households, optionally subscribes to a Global
Federation Server (GFS) for public spaces. Runs as a Home Assistant
add-on or a standalone Docker container.

## Develop

### VS Code + Dev Container (recommended)

The repo ships a Dev Container (`.devcontainer/devcontainer.json`)
that installs everything for you on first open: the Python project
in editable mode at the locked versions (`uv sync --locked --extra dev`),
the pre-commit hooks,
pnpm, and the frontend deps under `client/`.

1. Open the repo in VS Code with the **Dev Containers** extension
   installed; pick **Reopen in Container** when prompted.
2. Wait for the container to build (a few minutes the first time).
3. Press **Ctrl+Shift+B** (or **Terminal → Run Build Task…**) to
   launch **Dev: backend + frontend** — the backend boots in
   standalone mode against `/tmp/sh-dev`, and Vite starts at
   <http://localhost:5173> with `/api` + `/ws` proxied to the
   backend on `:8099`. Nothing is forwarded automatically: open the
   **Ports** view and forward `5173` (and `8099` if you need the API
   directly)…
