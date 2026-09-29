---
repo: "velteyn/UnBattletech"
name: "UnBattletech"
description: "BattleTech: The Crescent Hawk's Inception reverse engeneering"
readmeQualityOk: true
url: "https://github.com/velteyn/UnBattletech"
language: "C"
languages: ["C", "C#"]
languagePcts: [72, 20]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-12-23T17:48:38Z"
lastCommitAt: "2026-09-29T10:04:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 51
maintainers: ["velteyn"]
openGraphImageUrl: "https://opengraph.githubassets.com/80a4a926469cbc25c4cffc62a808d963e052e218a3d9ffb6efda0cb027a857c9/velteyn/UnBattletech"
---

# UnBattletech

Reverse engineering of **BattleTech: The Crescent Hawk's Inception** (1988, MS-DOS; published by
Infocom, engine by **Westwood Associates**) — and an in-progress **Godot 4 / C# recreation** of it.

> **Read this section before trusting anything else in this repo.**
> The project is two efforts with very different maturity, and the word "phase" elsewhere in the
> docs means *code written*, **not** *behaviour proven*.

---

## 1. Two deliverables, built in parallel

This project produces **two artifacts at the same time**, and the second one *poses on* the first:

**(1) The documented reverse engineering.** The `reko/` decompilation, `docs/` specifications, the
Spice86 emulator with BattleTech-specific MCP tools, and the Python tooling. This is the real RE work:
file formats, story text, memory map, and a large part of engine logic are documented and
cross-checked against decompiler output and live emulator traces. It is a deliverable **in its own
right**, and it is also the **specification** for (2).

**(2) The recreation (`BattleTechCHI/`).** A Godot 4 C# program that **derives from (1)**: it reads
original data files (`.BLD`, `.MTP`, `.ANM`, `GAME*` saves) and…
