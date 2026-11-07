---
repo: "tempus2016/taskmate"
name: "taskmate"
description: "Family chore management with smart rewards for Home Assistant"
readmeQualityOk: true
url: "https://github.com/tempus2016/taskmate"
homepage: "https://tempus2016.github.io/taskmate/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [52, 48]
topics: ["chores", "family", "hacs", "home-assistant", "home-assistant-integration", "chore-tracker", "custom-integration", "gamification", "kids", "lovelace"]
stars: 45
forks: 11
openIssues: 0
closedIssues: 310
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2026-03-20T08:53:51Z"
lastCommitAt: "2026-11-07T22:51:38Z"
lastReleaseAt: "2026-03-23T18:53:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "community_hub"]
healthScore: 100
undervaluedScore: 47
maintainers: ["tempus2016", "dependabot[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1187022755/2b1691e1-199d-419d-a216-e9d7dd7f744f"
fundingLinks: ["GITHUB:https://github.com/tempus2016", "BUY_ME_A_COFFEE:https://buymeacoffee.com/johnmackinnon"]
discussionCount: 135
---

A Home Assistant integration for family chore management, rewards, and streak tracking.

---

## How it works

1. **Create chores** — assign them to children, set point values and schedules
2. **Kids complete chores** — tap the child card to tick them off, earn points, build streaks
3. **Parents approve** — chores marked "requires approval" land in a pending queue
4. **Kids claim rewards** — points are only deducted once a parent approves the claim

Everything is managed from the **TaskMate panel** in the Home Assistant sidebar, and surfaced on your dashboards through 33 Lovelace cards.

All data stays inside your Home Assistant instance. Nothing is sent to any external service.

---

## Install

TaskMate is in the default catalogue of the **Home Assistant Marketplace** (formerly HACS) — no custom repository needed.

**Home Assistant 2026.11 or newer**

1. **Settings → Marketplace** → search **"TaskMate"** → **Install**
2. TaskMate's setup opens straight away — pick your points name (Stars, Coins, Bucks…) and icon. That's the whole config flow.

**Older Home Assistant (HACS)**

1. Open **HACS** → search **"TaskMate"** → **Download**
2. **Restart Home Assistant**
3. **Settings →…
