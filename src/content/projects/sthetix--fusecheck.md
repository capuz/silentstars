---
repo: "sthetix/FuseCheck"
name: "FuseCheck"
description: "Nintendo Switch Fuse Compatibility Checker"
readmeQualityOk: true
url: "https://github.com/sthetix/FuseCheck"
language: "C"
languages: ["C"]
languagePcts: [95]
stars: 31
forks: 4
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2025-12-05T13:25:01Z"
lastCommitAt: "2026-09-10T08:20:45Z"
lastReleaseAt: "2026-06-16T09:29:16Z"
status: "thriving"
tags: ["funded"]
healthScore: 84
undervaluedScore: 29
maintainers: ["github-actions[bot]", "sthetix", "GooseWithAKnife"]
openGraphImageUrl: "https://opengraph.githubassets.com/514021d2c5ac07b5edd72c980dd5348ce418441ec595929edd550ce73e439942/sthetix/FuseCheck"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/sthetixofficial"]
---

# FuseCheck - Nintendo Switch Fuse Compatibility Checker

</p>

A Nintendo Switch payload that checks your console's burnt fuse count against the installed firmware version to determine if Official Firmware (OFW) will boot properly.

> **Based on:** [Lockpick_RCM_Pro](https://github.com/sthetix/Lockpick_RCM_Pro), with fuse checking logic inspired by the fuse-check project and UI design from [TegraExplorer](https://github.com/suchmememanyskill/TegraExplorer) and NCA Database checking from [NxNandManager](https://github.com/eliboa/NxNandManager)

## What is FuseCheck?

FuseCheck is a bare-metal payload that helps you understand if your Nintendo Switch will boot into Official Firmware (OFW) based on your current fuse count and installed firmware version. This is critical for users who have been using CFW and want to know if they can safely boot into stock firmware.

### Why Do Fuses Matter?

Nintendo uses a hardware anti-downgrade mechanism called "fuse burning." Each major firmware update burns additional fuses, and the console checks this count during boot:

- **Too few fuses burnt** = Console will black screen on OFW boot
- **Correct fuse count** = OFW will boot…
