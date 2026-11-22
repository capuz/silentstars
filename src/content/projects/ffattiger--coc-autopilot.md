---
repo: "FFatTiger/coc-autopilot"
name: "coc-autopilot"
description: "Clash of Clans village automation: scheduled resource collection, worker checks, budget-based automatic upgrades, and an inspection dashboard. It operates a real device and does not touch the game process."
originalDescription: "部落冲突村庄自动化：定时收资源、检查工人、按预算自动升级，配巡检看板（真机操作，不碰游戏进程）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/FFatTiger/coc-autopilot"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["adb", "android", "automation", "clash-of-clans", "minitouch", "ocr", "opencv", "python"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-02T06:22:57Z"
lastCommitAt: "2026-11-22T02:03:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 23
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/953ac081e948f97c1a4e497d7352c538fef801be4358f8219021782e8456e205/FFatTiger/coc-autopilot"
---

# Clash of Clans Autopilot

Village automation for Clash of Clans: scheduled resource collection, checking workers and Victory Stars, budget-based automatic upgrades, and a dashboard that shows status, browses history, and compares before/after screenshots.

It operates a real device: actions use ordinary tap injection, with no process injection, no modification of game data, and no calls to game APIs.
Numbers can be read through either of two switchable paths: the **OCR backend** (default; screenshots and recognition, no root required) and the **memory backend** (root reads `/proc/<pid>/mem`, bit-exact, and self-heals when addresses become invalid). See "[Two backends](#两种后端ocr-与内存)".

| | |
|---|---|
|  |  |
| The view after entering the village. The account info in the top-left corner is blurred | Dashboard home |

Before-and-after comparison of one inspection round. On the right you can see that the bubbles were tapped and resources went up:
