---
repo: "amazeeio/amazee.ai"
name: "amazee.ai"
description: "amazee.ai backend"
readmeQualityOk: true
url: "https://github.com/amazeeio/amazee.ai"
homepage: "https://api.amazee.ai"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 54
forks: 1
openIssues: 2
closedIssues: 22
watchers: 2
contributors: 17
recentReleases: 9
createdAt: "2025-02-17T14:20:03Z"
lastCommitAt: "2026-11-09T07:39:04Z"
lastReleaseAt: "2026-09-17T08:00:40Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 60
maintainers: ["dspachos", "dan2k3k4", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/79507d87959e1f49c791e8106bd464f5eb5b3ca3125a3992d49ce3933b5da1ff/amazeeio/amazee.ai"
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
