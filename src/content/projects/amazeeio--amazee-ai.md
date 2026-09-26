---
repo: "amazeeio/amazee.ai"
name: "amazee.ai"
description: "amazee.ai backend"
readmeQualityOk: true
url: "https://github.com/amazeeio/amazee.ai"
homepage: "https://api.amazee.ai"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 6
forks: 1
openIssues: 2
closedIssues: 22
watchers: 2
contributors: 16
recentReleases: 9
createdAt: "2025-02-17T14:20:03Z"
lastCommitAt: "2026-09-26T05:56:06Z"
lastReleaseAt: "2026-09-17T08:00:40Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 89
maintainers: ["dspachos", "dan2k3k4", "amazee-ai-automation[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/79bf3bafdac51ac2a23afec741a4e2b1fa801a7f55b44920beb9bb93f5eaceec/amazeeio/amazee.ai"
postedAt: "2026-09-22T08:53:36.022Z"
---

# amazee.ai

This repository contains the backend and frontend services for the amazee.ai application. The project is built using a modern tech stack including Python FastAPI for the backend, Next.js with TypeScript for the frontend, and PostgreSQL for the database.

## 🚀 Tech Stack

- **Backend**: Python FastAPI
- **Frontend**: Next.js + TypeScript
- **Database**: PostgreSQL
- **Testing**: Pytest (backend), Jest (frontend)
- **Containerization**: Docker & Docker Compose
- **Orchestration**: Kubernetes with Helm

## 📦 Releasing and deploying

Three steps, all of them yours to start.

1. **Run the `Release` workflow** from the Actions tab. Pick `patch`, `minor` or
   `major`; optionally give a commit on `dev` to release instead of its tip.
2. **Review and merge the `Deploy vX.Y.Z to production` pull request** it opens.
3. **Promote `main` to prod in Lagoon**, by hand. Nothing before this touches
   production.

### What the Release workflow does

- Reads the newest `vX.Y.Z` tag and raises the part you chose.
- Cuts `release/vX.Y.Z` from `main`, merges `dev` into it, then writes the new
  version into every file that carries one.
- Tags that commit and creates the GitHub Release,…
