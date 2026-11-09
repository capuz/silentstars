---
repo: "mindsdb/cowork"
name: "cowork"
description: "Minds-cowork frontend app - Desktop & Web"
readmeQualityOk: true
url: "https://github.com/mindsdb/cowork"
homepage: "https://mindshub.ai"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [58, 38]
stars: 13
forks: 7
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 21
recentReleases: 0
createdAt: "2026-03-07T05:21:00Z"
lastCommitAt: "2026-11-09T03:31:08Z"
lastReleaseAt: "2026-06-30T20:08:00Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 66
maintainers: ["pnewsam", "mindsdb-release-train[bot]", "torrmal"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbd2b76e960f16bb13764892f343b26cf2aa8b551e4ac60c7e4edea3b9f280e6/mindsdb/cowork"
---

# MindsHub Cowork - Frontend

The Electron desktop app and web SPA for **MindsHub Cowork** — MindsDB's AI coworker platform. Cross-platform (macOS + Windows), auto-installs the backend on first run, and provides a chat-based UI backed by a FastAPI server, with Minds integration.

The project is split across two repos:

| Repo | Purpose | Language |
|------|---------|----------|
| [`mindsdb/cowork`](https://github.com/mindsdb/cowork) (this repo) | Electron shell + React SPA | TypeScript / React |
| [`mindsdb/cowork-server`](https://github.com/mindsdb/cowork-server) | FastAPI backend — projects, conversations, agent orchestration | Python |

The frontend and backend are developed and released independently. At runtime, the Electron main process spawns `cowork-server` as a local sidecar and communicates with it over HTTP (`127.0.0.1:26866`). Both the UI and server support over-the-air updates — see [Over-the-Air Updates](#over-the-air-updates).

---

## Shared projects

On deployments with selective project sharing, a recipient sees shared projects in Projects with a read-only file view. Files are addressed by project UUID, so an owned project with the same name stays separate.…
