---
repo: "prestomation/ha-home-keeper"
name: "ha-home-keeper"
description: "Home Keeper is a Home Assistant plugin for tracking home maintenance and chores with deep HA integration "
readmeQualityOk: true
url: "https://github.com/prestomation/ha-home-keeper"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [59, 28]
topics: ["chores", "home-assistant"]
stars: 58
forks: 2
openIssues: 3
closedIssues: 22
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-13T19:54:08Z"
lastCommitAt: "2026-08-21T04:11:59Z"
lastReleaseAt: "2026-06-16T05:48:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 95
undervaluedScore: 40
maintainers: ["prestomation", "dependabot[bot]", "mdarocha"]
openGraphImageUrl: "https://opengraph.githubassets.com/15e8f74e4f6e65bc43a539a419121d8c2a3188dc3e9a42aeaa0768e5a5bb5e0f/prestomation/ha-home-keeper"
fundingLinks: ["KO_FI:https://ko-fi.com/prestomation"]
---

# Home Keeper

Track home **maintenance** and **chores** in Home Assistant (fridge/furnace filter
changes, water filters, taking medicine, and anything else that recurs).

> 📖 **Full documentation** (a browsable User Guide and Developer Guide) lives at
> **<https://prestomation.github.io/ha-home-keeper/>**. The site is generated from this
> README and `docs/`, so they never drift.

## Features at a glance

- **Tasks, five ways:** **floating** (every N units after last done), **fixed**
  (anchored calendar schedule), **one-off** (do-once, on a chosen due date),
  **triggered** (condition-driven, no schedule, armed/cleared by another integration),
  and **sensor-based** (driven by an entity: a usage meter, a threshold, or a state such
  as a binary sensor flipping on).
- **Used through native HA entities**: a `todo` list, an upcoming-tasks `calendar`,
  and per-device **button / next-due sensor / overdue binary_sensor** on a task's
  device page.
- **Dashboard task card**: a bundled, auto-registered `custom:home-keeper-card` with
  one-tap **Done**, inline add/edit, and rich filtering/grouping.
- **Markdown notes**: every notes field (task, appliance, part, completion) renders
  as…
