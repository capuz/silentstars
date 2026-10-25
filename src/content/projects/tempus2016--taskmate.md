---
repo: "tempus2016/taskmate"
name: "taskmate"
description: "Family chore management with smart rewards for Home Assistant"
readmeQualityOk: true
url: "https://github.com/tempus2016/taskmate"
homepage: "https://tempus2016.github.io/taskmate/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [54, 46]
topics: ["chores", "family", "hacs", "home-assistant", "home-assistant-integration", "chore-tracker", "custom-integration", "gamification", "kids", "lovelace"]
stars: 43
forks: 11
openIssues: 2
closedIssues: 295
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2026-03-20T08:53:51Z"
lastCommitAt: "2026-10-25T09:01:45Z"
lastReleaseAt: "2026-03-23T18:53:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "community_hub"]
healthScore: 99
undervaluedScore: 46
maintainers: ["tempus2016", "dependabot[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1187022755/2b1691e1-199d-419d-a216-e9d7dd7f744f"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/johnmackinnon"]
discussionCount: 126
---

A Home Assistant integration for family chore management, rewards, and streak tracking.

---

## How it works

1. **Create chores** — assign them to children, set point values and schedules
2. **Kids complete chores** — tap the child card to tick them off, earn points, build streaks
3. **Parents approve** — chores marked "requires approval" land in a pending queue
4. **Kids claim rewards** — points are only deducted once a parent approves the claim

Everything is managed from the **TaskMate panel** in the Home Assistant sidebar, and surfaced on your dashboards through 32 Lovelace cards.

All data stays inside your Home Assistant instance. Nothing is sent to any external service.

---

## Install

TaskMate is a **default HACS integration** — no custom repository needed.

1. Open **HACS** → search **"TaskMate"** → **Download**
2. **Restart Home Assistant**
3. **Settings → Devices & Services → Add Integration → TaskMate**
4. Pick your points name (Stars, Coins, Bucks…) and icon — that's the whole config flow

&nbsp;

Requires **Home Assistant 2024.7+** and a current browser (Chrome, Firefox, Edge, or Safari).

For manual installation and the first-run walkthrough, see…
