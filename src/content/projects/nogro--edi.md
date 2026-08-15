---
repo: "NoGRo/Edi"
name: "Edi"
description: "Easy Device Integrator"
readmeQualityOk: true
url: "https://github.com/NoGRo/Edi"
language: "C#"
languages: ["C#"]
languagePcts: [91]
stars: 21
forks: 6
openIssues: 4
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2022-12-12T23:17:36Z"
lastCommitAt: "2026-08-15T04:03:23Z"
lastReleaseAt: "2026-08-15T04:06:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 56
maintainers: ["NoGRo", "Seele-Vollerei32"]
openGraphImageUrl: "https://opengraph.githubassets.com/f45694fad0e5dfca4c07d1de89cacc918167a8766ad71e5f3531e6be32382c6f/NoGRo/Edi"
---

# **Easy Device Integration (EDI) for Videogames**

Easy Device Integration (EDI) is a Windows application developed in C# that synchronizes game events with interactive sex toys. Running as a standalone program, it can be controlled through a REST API from any game. Its modular and simple architecture makes it a powerful, flexible, and easy-to-integrate tool for any game.

EDI operates as an independent service that:
- Runs as a Windows application separate from your game
- Exposes a REST API for complete control of device playback and settings
- Handles all device communication, funscripts and synchronization
- Can be integrated with any game engine or framework that supports HTTP requests

### Download and requirements

Download `Edi.exe` from
[GitHub Releases](https://github.com/NoGRo/Edi/releases/latest) and run it.

The published build requires:

- Windows 10/11 x64 (build 19041 or newer).
- A Bluetooth LE adapter enabled in Windows for local Handy Bluetooth connections.

The executable is self-contained, so users do not need to install .NET separately. Developers who
intentionally make a framework-dependent build can install the
[.NET 8 Desktop Runtime…
