---
repo: "hello-sebastian/Energy-Horizon"
name: "Energy-Horizon"
description: "A Lovelace card for Home Assistant that compares cumulative energy usage between the current period and a corresponding historical period (eg. year-over-year or month-over-year), with a chart, summary stats, and optional forecast."
readmeQualityOk: true
url: "https://github.com/hello-sebastian/Energy-Horizon"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["data", "energy", "homassistant", "visualization", "hacs", "hacs-dashboard", "hacs-plugin", "chart", "dashboard"]
stars: 71
forks: 7
openIssues: 8
closedIssues: 41
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2026-03-05T17:11:34Z"
lastCommitAt: "2026-11-08T10:40:54Z"
lastReleaseAt: "2026-11-07T14:00:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 42
maintainers: ["hello-sebastian", "tRoOlos"]
openGraphImageUrl: "https://opengraph.githubassets.com/2570a32a8b29cd61adf2455257f1c3442b9e82006b934a1efbbe7f9a1346c581/hello-sebastian/Energy-Horizon"
fundingLinks: ["KO_FI:https://ko-fi.com/hellosebastian", "BUY_ME_A_COFFEE:https://buymeacoffee.com/hello.sebastian", "CUSTOM:https://buycoffee.to/hello.sebastian"]
discussionCount: 6
---

# Energy Horizon Card

Elegant energy comparisons for Home Assistant dashboards — **cumulative usage** now vs a historical reference, with optional forecast.

&ensp;
  
&ensp;

**Energy Horizon Card** is a high-performance Lovelace dashboard card for Home Assistant. It enables period-over-period visualization and analytical comparison of cumulative energy consumption and solar generation. 

By querying Home Assistant's **Long-Term Statistics (LTS)**, Energy Horizon overlays current progress against historical baselines (e.g., Year-over-Year, Month-over-Month) to immediately reveal whether your energy trajectory is ahead of or behind expected trends.

> This card is built for **long-term statistics** (energy history), not live power charts.

## Quick start (copy/paste)

### 1) Install

- **Marketplace (HA 2026.11+, recommended)**: Settings → **Marketplace** → search for **Energy Horizon** (or **Add from link** → `https://github.com/hello-sebastian/Energy-Horizon`) → **Install** → reload the browser. The dashboard resource is added automatically.
- **HACS (HA < 2026.11)**: HACS → **Frontend** → **Add repository** → install **Energy Horizon Card** → restart Home Assistant.
-…
