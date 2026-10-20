---
repo: "muthokaricky-alt/AniTrack"
name: "AniTrack"
description: "Anime and Manga tracker built with React + Vite."
readmeQualityOk: true
url: "https://github.com/muthokaricky-alt/AniTrack"
homepage: "https://anitrack-0pyj.onrender.com/"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [77, 22]
topics: ["anime", "manga", "react", "vite"]
stars: 20
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-12T13:32:42Z"
lastCommitAt: "2026-10-20T08:48:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 36
maintainers: ["muthokaricky-alt"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fc826b9bf1450e8628a7c854855484a827d4e9554db4bbc479dc55db1ef8a69/muthokaricky-alt/AniTrack"
---

# AniTrack

A personal anime watchlist tracker, in the spirit of MyAnimeList. Search the
anime catalog, log what you're watching, rate and review, and see your stats.

## Stack

- **Frontend**: React 18 + Vite, React Router, plain CSS (no framework)
- **Backend**: Express + better-sqlite3
- **Auth**: JWT + bcrypt
- **Anime data**: [AniList GraphQL API](https://anilist.gitbook.io/anilist-apiv2-docs/) — no key required

Your own database only stores accounts and each user's list entries
(status, score, progress, reviews). Anime metadata (titles, covers,
synopses) is fetched live from AniList and cached briefly on the server.

## Project structure

```
anitrack/
  backend/     Express API (auth, list, anime proxy) + SQLite
  frontend/    React app (Vite)
```

## Running locally

### 1. Backend

```
cd backend
npm install
cp .env.example .env   # then edit JWT_SECRET
npm run dev
```

API runs on `http://localhost:5000`. SQLite file `anitrack.db` is created
automatically on first run.

### 2. Frontend

```
cd frontend
npm install
npm run dev
```

App runs on `http://localhost:5173` and proxies `/api` calls to the backend.

## Features

- Anime catalogue: search with genre filters,…
