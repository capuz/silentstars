---
repo: "tmazitov/42-ad-bachelors"
name: "42-ad-bachelors"
description: "Tool that helps students track the progress of Bachelors Degree at 42 Abu Dhabi."
readmeQualityOk: true
url: "https://github.com/tmazitov/42-ad-bachelors"
homepage: "https://tmazitov.github.io/42-ad-bachelors/"
language: "Go"
languages: ["Go", "Vue"]
languagePcts: [57, 27]
topics: ["open-source", "42-school", "vue3"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-25T06:27:14Z"
lastCommitAt: "2026-11-07T22:48:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 35
maintainers: ["tmazitov"]
openGraphImageUrl: "https://opengraph.githubassets.com/18f7757307dd3aaad512b534a27d2cd87bc0ef4415a9e0118bc1a7989674422b/tmazitov/42-ad-bachelors"
---

# 42 AD Bachelor's Tracker
A web app for 42 school students to track their progress toward the AD Bachelor's degree.

Log in with your 42 account to see which modules you've completed, how many credits you've earned per category, and how close you are to the 132-credit graduation requirement.

## Stack

- Frontend: Vue 3 + TypeScript + Vite, PrimeVue + Tailwind CSS v4, Chart.js
- Backend: Go + Fiber v3 + SQLite (`backend/`), 42 Network OAuth 2.0 API

## Setup

1. Create a 42 OAuth app and register the redirect URI `http://localhost:5173/auth/callback`.
2. Backend:
   ```sh
   cd backend
   cp .env.example .env   # set FT_CLIENT_ID and FT_CLIENT_SECRET
   make run               # http://localhost:8080
   ```
3. Frontend (no env needed; Vite proxies `/api` to the backend):
   ```sh
   cd frontend
   npm install
   npm run dev            # http://localhost:5173
   ```

## Deploy (Docker Compose, e.g. Coolify)

`compose.yaml` runs three containers. Only **nginx** is an entry point; it routes by URL prefix:

| Prefix | Service |
|---|---|
| `/api/*` | **backend** (Go + SQLite on the `backend-data` volume) |
| `/*` | **frontend** (static SPA) |

No service publishes host ports and the…
