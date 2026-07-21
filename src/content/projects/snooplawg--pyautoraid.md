---
repo: "SnoopLawg/PyAutoRaid"
name: "PyAutoRaid"
description: "Headless Raid: Shadow Legends automation. BepInEx mod (HTTP API), Python tooling, dashboard. Battle logging + sim, CB optimizer, autonomous farm/rank-up loops, gear solver, DWJ/HellHades parity, asset extraction. Mod-API only - no screen automation."
readmeQualityOk: true
url: "https://github.com/SnoopLawg/PyAutoRaid"
language: "Python"
languages: ["Python", "C#"]
languagePcts: [64, 33]
topics: ["asset-extraction", "bepinex", "dashboard", "game-automation", "harmony", "il2cpp", "plarium", "python", "raid-shadow-legends", "rank-up"]
stars: 30
forks: 12
openIssues: 3
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-07-29T20:29:59Z"
lastCommitAt: "2026-07-21T06:11:44Z"
lastReleaseAt: "2024-01-27T00:59:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 58
maintainers: ["SnoopLawg"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc6373a50adbab87111dc649e9384b6e46f14cb5130e1fa903967b736b5d4da7/SnoopLawg/PyAutoRaid"
---

<br />
  </a>

<h3 align="center">PyAutoRaid</h3>

    Full-stack automation for Raid: Shadow Legends — from daily task farming to UNM Clan Boss optimization with real-time battle telemetry.
    <br />
    &middot;
    &middot;
  </p>
</div>

## About

PyAutoRaid started as a simple PyAutoGUI screen clicker and evolved into a full game-data automation platform. It now uses a **BepInEx IL2CPP mod** injected into the Unity game process to read and control everything via an HTTP API — no screen scraping needed for most tasks.

Runs headless on a Windows 10 VM (QEMU/KVM), fully automated on a cron schedule.

> See [`MISSION.md`](https://github.com/SnoopLawg/PyAutoRaid/blob/HEAD/MISSION.md) for the project's purpose and non-negotiables, and [`docs/roadmap.md`](https://github.com/SnoopLawg/PyAutoRaid/blob/HEAD/docs/roadmap.md) for the phased execution plan.

### Built With

## Features

### Game Injection — BepInEx Mod
- HTTP API on port 6790 with 30+ endpoints
- Full hero roster (500+ heroes with stats, skills, masteries, artifacts)
- All artifacts (2,600+ including vault) with substats, glyphs, Divine enhancement
- Account data (Great Hall, Arena league, Clan level)
- Game's own stat…
