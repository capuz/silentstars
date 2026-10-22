---
repo: "rononline/soccerlive"
name: "soccerlive"
description: "HomeAssistant Integration for Soccer - Leagues - Champions League and more"
readmeQualityOk: true
url: "https://github.com/rononline/soccerlive"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["custom-integration", "hacs", "home-assistant", "homeassistant", "soccer"]
stars: 9
forks: 0
openIssues: 2
closedIssues: 12
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-04T10:04:55Z"
lastCommitAt: "2026-10-22T08:51:35Z"
lastReleaseAt: "2026-06-17T07:27:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 49
maintainers: ["rononline", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/50b360c1b11193b68f7f9650918075bd012ba1532ba50d8fbe138bddcce655e4/rononline/soccerlive"
fundingLinks: ["GITHUB:https://github.com/rononline", "KO_FI:https://ko-fi.com/rononline"]
---

# ⚽ Soccer Live — Home Assistant Integration

Real-time football data in Home Assistant via ESPN, with optional API-Football support for users who provide their own API key.

> Built on ideas from [Calcio Live](https://github.com/Bobsilvio/calcio-live) by @Bobsilvio

---

## 🚀 Quick start

New here? This gets you a live team card in a few minutes:

1. **Install the integration** via HACS (see [Installation](#-installation-via-hacs) below) and restart Home Assistant.
2. **Add the integration**: *Settings → Devices & Services → Add Integration → Soccer Live*. For the data source, pick **ESPN** — it's free and needs no API key.
3. **Choose what to follow**: pick **Team** (the default).
4. **Find your team**: select the league, then the team (for example *Eredivisie → Feyenoord*).
5. **Install the [Soccer Live Card](https://github.com/rononline/soccerlive-card)** via HACS.
6. **Add a card** to your dashboard: *Add card → Soccer Live Card*, and select your team's entity.
7. **Pick the suggested sensor**: the Team, Countdown and Match Center cards use the **`next_*`** sensor (`soccer_live_next_{competition}_{team}`). See **Which sensor do I need?** below.

> Want predictions, odds and…
