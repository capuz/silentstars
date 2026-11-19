---
repo: "wushuai0802/myfinder-device-battery"
name: "myfinder-device-battery"
description: "macOS-style mouse and headset battery indicator card for Windows and MyDockFinder (ATK Mouse & HyperX Headset)"
originalDescription: "macOS-style mouse and headset battery indicator card for Windows and MyDockFinder (ATK Mouse & HyperX Headset)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wushuai0802/myfinder-device-battery"
language: "Python"
languages: ["Python", "C#"]
languagePcts: [52, 42]
stars: 336
forks: 24
openIssues: 786
closedIssues: 94
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-10-16T10:49:33Z"
lastCommitAt: "2026-11-19T04:05:29Z"
lastReleaseAt: "2026-10-18T15:51:46Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 77
undervaluedScore: 23
maintainers: ["wushuai0802", "TupolevGT", "xing403"]
openGraphImageUrl: "https://opengraph.githubassets.com/065a284d3bc380b57eac33a582b0de31bb127b582404bdce064199bf7223fda1/wushuai0802/myfinder-device-battery"
---

# MyFinder Device Battery

A Windows battery card for multi-brand wireless mice, headsets, and keyboards. It supports MyDockFinder / MyFinder and can also run on its own as a system tray app.

Current source version **1.3.11-beta.17** (beta), for Windows 10/11 x64. The native UI uses the system .NET Framework. Release packages include the built-in device reading component, so users do not need to install Python or vendor drivers, or enter VID/PID. For publicly downloadable versions, see the Releases page. Older versions are kept in the historical Releases.

1.3.11-beta.17 adds 2.4G receiver battery candidates for the Weikav NUT75 and Veekos Shine 60 keyboards, plus 2.4G battery and charging candidates for the ROG Prism 2 headset. The 前行者 X23 Pro mouse only listens to the battery level reported by its 2.4G receiver. The 前行者 X87 original keyboard shows its battery level after verifying the receiver model through a read-only identity page. All five are awaiting feedback from real devices on this version.
