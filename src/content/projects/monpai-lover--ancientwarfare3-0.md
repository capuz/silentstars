---
repo: "monpai-lover/AncientWarfare3.0"
name: "AncientWarfare3.0"
description: "Ancient Warfare 3.0 — WorldBox 0.51.0+ mod. Xia Dynasty civilization, Mandate system, policy classes, vassal overlord, etc. (based on AW2 restructured in the new version)"
originalDescription: "Ancient Warfare 3.0 — WorldBox 0.51.0+ mod. 夏朝文明、天命系统、政策阶级、附庸宗主等(基于 AW2 在新版重构)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/monpai-lover/AncientWarfare3.0"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-28T18:52:54Z"
lastCommitAt: "2026-07-17T05:58:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 47
maintainers: ["monpai-lover"]
openGraphImageUrl: "https://opengraph.githubassets.com/eaf4a6734a1694f8443125bf7a445148d1b5a2e2f076a1aa4964397c0844f4bc/monpai-lover/AncientWarfare3.0"
---

# AncientWarfare 3.0 Spring and Autumn

AncientWarfare 3.0 is a rewrite of the AncientWarfare series mod based on the new version of WorldBox 0.51.x, NeoModLoader, Harmony, and .NET Framework 4.8. The current theme is the Xia civilization, surname genealogy, kingdom history, national policy technology, officialdom, slavery, multiple armies, vassals, reasons for declaring war, and the Mandate Dynasty system.

This README is the current GitHub homepage description and recent development records. More detailed design plans are kept in `docs/superpowers/plans/`.

## Recent Updates: 2026-07-09

This round continues to complete the national-level behavior control points and the officialdom framework, and will be pushed to `master`:

- Added "Player Lock National Policy Node" feature: Players can lock any technology, social policy, or normal decision node in the national policy window, and once locked, neither players nor AI can choose that item.
- Locking will synchronize and clear the current research, normal decision queue, and independent core manufacturing slots; when `aw_decision_fabricate_core` is locked, core manufacturing will not continue in the background.
- Vassal war support…
