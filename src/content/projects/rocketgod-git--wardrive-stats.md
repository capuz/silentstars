---
repo: "RocketGod-git/wardrive-stats"
name: "wardrive-stats"
description: "Live, graphical, aggregate usage stats for the Wardrive Go app (GA4 → GitHub Pages)."
readmeQualityOk: true
url: "https://github.com/RocketGod-git/wardrive-stats"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-01T05:21:02Z"
lastCommitAt: "2026-10-25T08:40:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 46
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/14727f77058b5eeab50dd79f2152adbffcc8bb4debb3398d887eb88ed4e50e77/RocketGod-git/wardrive-stats"
---

# Wardrive Go · Live Stats

A graphical, auto-refreshed dashboard of **aggregate, anonymous** usage stats for the Wardrive Go app,
built from the [Google Analytics Data API (GA4)](https://developers.google.com/analytics/devguides/reporting/data/v1).

- A scheduled GitHub Action (`.github/workflows/stats.yml`) pulls GA4 every ~30 min and commits
  `docs/data/stats.json`.
- The static dashboard in `docs/` (served by **GitHub Pages**) renders that JSON with Chart.js.
- The Wardrive Go app's hidden stats page loads this site in a WebView.

**No secrets live in this repo.** The service-account key is injected at runtime from a GitHub Actions secret
and is never printed or committed. Only aggregate dimensions are queried (event counts, active users, app
version, country, device model, OS version) — **no user- or device-level data**.

Live site: `https://rocketgod-git.github.io/wardrive-stats/` (after Pages is enabled + the secret is set).

---

## One-time setup (owner)

Everything below is done once, in the Google Cloud / Analytics consoles and this repo's settings. The code is
already wired to consume it.

### 1. Create a service account + grant it GA4 read access
1. In **Google Cloud…
