---
repo: "YodaMMM/NightfirePort"
name: "NightfirePort"
description: "Nightfire Rust: a native Windows PC port of 007: Nightfire (PS2), written in Rust"
readmeQualityOk: true
url: "https://github.com/YodaMMM/NightfirePort"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["007", "game-port", "james-bond", "nightfire", "pc-port", "ps2", "rust", "windows"]
stars: 11
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-09T20:37:24Z"
lastCommitAt: "2026-11-13T07:44:38Z"
lastReleaseAt: "2026-10-20T01:33:52Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 80
undervaluedScore: 49
maintainers: ["YodaMMM"]
openGraphImageUrl: "https://opengraph.githubassets.com/c79a8cff628ad64268dcb82d4786382bed8885a6ec838897b53ac1857c565a6f/YodaMMM/NightfirePort"
---

# Nightfire Rust

> [!WARNING]
> ## This port is not finished.
> Nightfire Rust is a work in progress. Expect bugs, missing features, and levels that don't yet play like the original. The driving missions can't be played yet. If you hit a problem, press **F10** in game (or **Report crash** in the launcher) to send a report.

Nightfire Rust is a native Windows PC port of 007: Nightfire (PS2), written in Rust. This 007 Nightfire port is rebuilt from the game's own data and logic (the PlayStation 2 release, NTSC-U SLUS-20579), runs natively on Windows with no emulator, and treats mouse and keyboard as first-class input. The repository is named NightfirePort.

## What this is, and isn't

- It is a port. The game's behaviour is re-implemented in Rust, using a Ghidra decompile of the disc's executables as the reference for what the original code does.
- It is not an emulator and not a static recompiler. No PS2 code runs.
- You need your own disc. The port reads your disc image at run time (picked in the launcher, or `NF_ISO` / a path on the command line). No game files are in this repository, and nothing the tools extract is committed.
- The 2002 PC "Nightfire" is a different game…
