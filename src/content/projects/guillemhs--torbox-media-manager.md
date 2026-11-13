---
repo: "guillemhs/torbox-media-manager"
name: "torbox-media-manager"
description: "A self-hosted, local-first media catalog. Movie and series metadata comes from IMDb's public downloadable datasets, TV schedules come from TVMaze and are cached locally, and cloud library/music operations use TorBox when TORBOX_API_KEY is configured. No paid metadata API is used."
readmeQualityOk: true
url: "https://github.com/guillemhs/torbox-media-manager"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [60, 32]
topics: ["docker", "docker-compose", "docker-image", "dockerfile", "torbox"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-10-23T11:48:56Z"
lastCommitAt: "2026-11-13T05:42:35Z"
lastReleaseAt: "2026-11-12T10:35:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/01424420defc32afacd8b5bd5d47d83c15a327ac6f6b0e1be4b65716c6ab2f33/guillemhs/torbox-media-manager"
---

# TorBox Media Manager

A self-hosted, local-first media catalog. Movie and series metadata comes from IMDb's public downloadable datasets, TV schedules come from TVMaze and are cached locally, and cloud library/music operations use TorBox when `TORBOX_API_KEY` is configured. No paid metadata API is used. IMDb makes these datasets available for personal, non-commercial use under its dataset terms; review those terms before using or redistributing the imported data.

## Start with Docker

1. Copy `.env.example` to `.env` and optionally set `TORBOX_API_KEY`.
2. Set `HOST_MEDIA_PATH` to the media directory on the host.
3. Run `docker compose up --build -d` and open <http://localhost:8066>.

PostgreSQL and IMDb downloads persist under `./data`. Compose waits for PostgreSQL's health check before starting the app. On an empty or incomplete database, the app starts and begins/resumes its IMDb import in the background; the catalog fills as streaming batches are ingested. Large public datasets can take a while to download and import. Set `IMDB_AUTO_IMPORT=false` to disable startup import, then use `POST /admin/imdb/import` when ready. Compose restarts the app after failures, checks…
