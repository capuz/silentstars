---
repo: "AndrewDongminYoo/wakatime-svg"
name: "wakatime-svg"
description: "Generate SVG cards from WakaTime stats for the last 7 days. GitHub Actions refreshes the SVGs daily and publishes the artifacts to the output branch."
readmeQualityOk: true
url: "https://github.com/AndrewDongminYoo/wakatime-svg"
homepage: "https://github.com/marketplace/actions/wakatime-svg"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["github-actions", "github-marketplace-action", "wakatime", "wakatime-api", "wakatime-stats"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-01-07T09:15:29Z"
lastCommitAt: "2026-10-26T03:01:59Z"
lastReleaseAt: "2026-08-18T23:59:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 63
maintainers: ["AndrewDongminYoo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/42a94a0288de3c056eef690ad0f49b83b14f46dbff347043caca8825daa7e102/AndrewDongminYoo/wakatime-svg"
---

# wakatime-svg (transparent svg image)

Generate SVG cards from WakaTime stats for the last 7 days. GitHub Actions refreshes the SVGs daily and publishes the artifacts to the `output` branch.

## Key Features

- Visualizes the top 5 languages by time and percentage
- Visualizes the top 5 projects by time, with each bar scaled against the busiest project
- Language color mapping with percentage bars
- Daily scheduled refresh (00:00 UTC)

## Quick Start (Local)

1. Install Python 3.14+
2. Install dependencies
   ```bash
   uv sync --frozen
   ```
3. Set environment variable
   ```bash
   export WAKATIME_API_KEY=YOUR_KEY
   ```
4. Generate SVGs
   ```bash
   mkdir -p generated
   uv run --frozen python scripts/generate-wakatime-svg.py
   ```
   Output: `generated/languages.svg`, `generated/projects.svg`

## GitHub Actions Setup

1. Add `WAKATIME_API_KEY` to repository Secrets
2. Enable Actions for the repo
3. Run the `Generate WakaTime SVG` workflow manually or wait for the schedule
4. Confirm `generated/languages.svg` and `generated/projects.svg` appear on the `output` branch

## GitHub Action Usage (Marketplace)

Example workflow using this repo as an action (defaults only):…
