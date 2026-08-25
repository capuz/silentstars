---
repo: "Kometa-Team/Defaults-Image-Creation"
name: "Defaults-Image-Creation"
description: "Tools and scripts to create posters and artwork for default collections and overlays"
readmeQualityOk: true
url: "https://github.com/Kometa-Team/Defaults-Image-Creation"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [93]
stars: 5
forks: 1
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-08-19T19:09:05Z"
lastCommitAt: "2026-08-25T04:10:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 53
maintainers: ["bullmoose20", "Gilmoursa"]
openGraphImageUrl: "https://opengraph.githubassets.com/614c09d17d0218a49b92e9b129cf987555d97a3e36007e6f90336a4bcd628f79/Kometa-Team/Defaults-Image-Creation"
---

# Defaults‑Image‑Creation

This repository brings together **two complementary toolsets** for building and maintaining visual assets used across your media libraries:

- **Cross‑Platform People Posters Pipeline (Python)** — an end‑to‑end workflow that discovers missing people, fetches images, removes backgrounds, updates your People‑Images repos with a *remote‑always‑wins* strategy, generates README grids, and optionally pushes changes. See **Orchestrator** below.
- **Create Defaults (PowerShell)** — a purpose‑built defaults generator that produces standardized “default” posters (genres, networks, countries, ratings, etc.) plus a one‑off poster composer. See **create_defaults** below.

---

## Quick Start

Choose the path that matches your task.

### A) Build / refresh People posters (Python orchestrator)

1. Python 3.10+ and `pip` installed
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. First‑run bootstraps `./config/.env` from the example:
   ```bash
   python orchestrator.py --all
   # then edit ./config/.env and set at least: TMDB_KEY=your_api_key
   ```
4. Typical runs:
   ```bash
   # Full publish flow (includes final push)
   python…
