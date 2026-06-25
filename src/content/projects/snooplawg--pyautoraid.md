---
repo: "SnoopLawg/PyAutoRaid"
name: "PyAutoRaid"
description: "Headless Raid: Shadow Legends automation. BepInEx mod (HTTP API), Python tooling, dashboard. Battle logging + sim, CB optimizer, autonomous farm/rank-up loops, gear solver, DWJ/HellHades parity, asset extraction. Mod-API only - no screen automation."
url: "https://github.com/SnoopLawg/PyAutoRaid"
language: "Python"
languages: ["Python", "C#"]
languagePcts: [58, 36]
topics: ["asset-extraction", "bepinex", "dashboard", "game-automation", "harmony", "il2cpp", "plarium", "python", "raid-shadow-legends", "rank-up"]
stars: 28
forks: 10
openIssues: 3
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-07-29T20:29:59Z"
lastCommitAt: "2026-06-25T06:41:44Z"
lastReleaseAt: "2024-01-27T00:59:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 58
maintainers: ["SnoopLawg"]
openGraphImageUrl: "https://opengraph.githubassets.com/d53e88c081f0d3adaa3fa4c917d41b47a86784bbf7e14fdcd16d9ba20bc31f70/SnoopLawg/PyAutoRaid"
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

> See [`MISSION.md`](MISSION.md) for the project's purpose and non-negotiables, and [`docs/roadmap.md`](docs/roadmap.md) for the phased execution plan.

### Built With

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)

## Features

### Game Injection — BepInEx Mod
- HTTP API on port 6790 with 30+ endpoints
- Full hero roster (500+…
