---
repo: "PavelDemyanov/screenmate-dash"
name: "screenmate-dash"
description: "Custom native dashboard for Tesla Screenmate (overlay + stock-dashboard patcher)"
readmeQualityOk: true
url: "https://github.com/PavelDemyanov/screenmate-dash"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [87]
stars: 10
forks: 1
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-06-16T18:00:24Z"
lastCommitAt: "2026-09-10T08:19:30Z"
lastReleaseAt: "2026-07-09T15:59:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 75
undervaluedScore: 43
maintainers: ["PavelDemyanov"]
openGraphImageUrl: "https://opengraph.githubassets.com/9359560071c7e6462996c043ef4196a3da929816102e554c43c1990d5ab35d35/PavelDemyanov/screenmate-dash"
---

# ScreenMate Dash

A custom native dashboard for the **Tesla Screenmate** box (Android 14) — a sleek speedometer
overlay that replaces the stock dashboard, fed with live vehicle data from the stock app.

</div>

## Requirements

- A **Tesla Screenmate** box running the **stock Screenmate app v1.8**. The patch is built for
  v1.8 — on other stock versions it won't apply correctly. (Check on the box: stock Settings →
  Software.)
- Install over any previous version of this app — your data and the patch are preserved
  (same signing key).

## Features

- **Five dashboard styles** — Stock, Arc, Stack, Strip, Mini.
- **5-tap ring switch** — five quick taps on the dashboard cycle
  `Stock → Arc → Stack → Strip → Mini → Stock`, round and round. No menus.
- **Live data** — speed, gear, battery, temperatures, speed limit, autopilot, turn signals,
  high beam, seatbelt — straight from the car.
- **КМ/Ч** — speed localized to km/h. 12-hour (AM/PM) clocks are supported too.
- **In-Settings panel** — a *SM DASH* block inside the stock *Display* settings: a master
  toggle, the five style thumbnails, and a **transparency** slider that controls the dashboard
  live. The highlighted style follows…
