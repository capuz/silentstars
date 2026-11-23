---
repo: "manta-plan/manta"
name: "manta"
description: "Open-source platform for energy system modelling, workflow orchestration, and results exploration - built for transparent, interoperable, enterprise-grade planning."
readmeQualityOk: true
url: "https://github.com/manta-plan/manta"
homepage: "https://manta-plan.org/"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [48, 46]
stars: 28
forks: 10
openIssues: 180
closedIssues: 80
watchers: 1
contributors: 11
recentReleases: 0
createdAt: "2026-07-14T19:00:29Z"
lastCommitAt: "2026-11-23T10:16:08Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 78
undervaluedScore: 40
maintainers: ["KristijanFaust-OET", "shantiii", "mikoding9"]
openGraphImageUrl: "https://opengraph.githubassets.com/264203da8a8668acedf7e7660ea921d7f5bd3fe48bdaa9d6b3ec5434d0ad951f/manta-plan/manta"
discussionCount: 1
---

# Manta

Manta is an open-source energy modeling tool, designed to make cutting-edge
energy models accessible to all.

For more details on the vision and roadmap, see our website: https://manta-plan.org/

> **Note**
>
> This repository and the instructions below are for **developers**. If you
> want to use Manta or join as a beta tester, please wait for the MVP, which
> will be available at a public URL in the near future.

## Running Manta locally

The quickest way to try Manta is to run the whole stack on your own machine:
the supporting services in Docker, and the backend and frontend from source.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) with Docker Compose
  (Docker Desktop includes it; on Linux, add the
  [Compose plugin](https://docs.docker.com/compose/install/linux/))
- [uv](https://docs.astral.sh/uv/getting-started/installation/) (it installs
  the right Python for you)
- [Node.js](https://nodejs.org/en/download) and pnpm (run
  `corepack enable pnpm` to get the version pinned in
  [`frontend/package.json`](https://github.com/manta-plan/manta/blob/main/frontend/package.json), or see the
  [pnpm docs](https://pnpm.io/installation))
