---
repo: "ChiefGyk3D/Skid-Finder"
name: "Skid-Finder"
description: "Tool I am trying to hack together for foxhunt BLE Spam attacks on my new uConsole whilst at Hacker Summer Camp 2026"
readmeQualityOk: true
url: "https://github.com/ChiefGyk3D/Skid-Finder"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [50, 48]
stars: 7
forks: 0
openIssues: 8
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-08-03T18:43:23Z"
lastCommitAt: "2026-09-19T01:18:02Z"
lastReleaseAt: "2026-09-19T01:18:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 44
maintainers: ["ChiefGyk3D"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e3d782e0daec838e5a2c0d44b2178d7d871ec78b267c00ec1d2c38fca1e085b/ChiefGyk3D/Skid-Finder"
---

# Skid Finder

Defensive BLE monitoring toolkit for conference environments (DEF CON, BSides). Skid Finder detects scripted BLE spam and flood tooling — the kind run by "skids" — and lets you foxhunt the source. It is optimized for the ClockworkPi uConsole but runs on other Linux devices too.

Skid Finder started out focused on a single rig — the ClockworkPi uConsole paired with the HackerGadgets AIO v2 — and has since expanded to run on more hardware. The longer-term goal is to grow it into a distributed sensor net, with multiple cooperating nodes monitoring an environment together rather than a single hand-carried device.

Hardware support:
- **Optimized for** the ClockworkPi uConsole with AIO v2 — the defaults, docs, and field workflow are all tuned for this rig.
- **Runs on** any Linux device with a compatible Bluetooth adapter (laptops, mini PCs, SBCs). The same scripts work here; you just supply your own adapter and interface config.

uConsole-specific behavior (AIO feature profiles, dual-adapter assumptions) is layered on top and stays out of the way on other hardware, so nothing here is uConsole-only.

This toolkit is designed for a dual-adapter setup:
- CM4 built-in…
