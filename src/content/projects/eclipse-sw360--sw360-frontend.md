---
repo: "eclipse-sw360/sw360-frontend"
name: "sw360-frontend"
description: "SW360 Frontend Project"
readmeQualityOk: true
url: "https://github.com/eclipse-sw360/sw360-frontend"
homepage: "https://www.eclipse.org/sw360/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 30
forks: 110
openIssues: 25
closedIssues: 390
watchers: 9
contributors: 44
recentReleases: 0
createdAt: "2023-03-01T13:36:33Z"
lastCommitAt: "2026-10-29T10:37:12Z"
lastReleaseAt: "2026-07-29T09:54:57Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 70
maintainers: ["dependabot[bot]", "GMishx", "rudra-superrr"]
openGraphImageUrl: "https://opengraph.githubassets.com/a653e2874384ea7198a1f79db761a0a3658e07986bd49f11c34033ba988b8941/eclipse-sw360/sw360-frontend"
discussionCount: 9
---

# Eclipse SW360 Frontend

This is the main UI interface for SW360 project.

The current implementation is now in test stage and can be used in companion with SW360 20.0.0 beta release.

Please read our code [Code of Conduct](https://github.com/eclipse-sw360/sw360-frontend/blob/HEAD/CODE_OF_CONDUCT.md) before to help with the well being of the community.

For new contributors, please read the [contributing guideline](https://github.com/eclipse-sw360/sw360-frontend/blob/HEAD/CONTRIBUTING.md)

## Docker Deployment

For instructions on running SW360 Frontend with Docker or Podman, see
[README_DOCKER.md](https://github.com/eclipse-sw360/sw360-frontend/blob/HEAD/README_DOCKER.md).

## SW360 Frontend — Playwright UI Tests

End-to-end UI tests for the SW360 Frontend, powered by [Playwright](https://playwright.dev/).
Tests live in [`tests/e2e/`](https://github.com/eclipse-sw360/sw360-frontend/blob/HEAD/e2e) and are organized by application module.

---

### Prerequisites

- **Node.js** and **pnpm** installed
- A running **SW360 Frontend** (default `http://localhost:3000`) and **backend API** (default `http://localhost:8080`).
  - In headless mode, the frontend dev server starts…
