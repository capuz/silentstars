---
repo: "NotFaceGUI/yuris-kernel"
name: "yuris-kernel"
description: "YU-RIS compatible runtime kernel aligned to the official engine: pack parsing, script VM, soft/wgpu rendering, translation text and saves. YU-RIS engine-compatible runtime kernel: package parsing, script execution and rendering are gradually being aligned with the official engine, with support for localized text and unified encoding."
originalDescription: "YU-RIS compatible runtime kernel aligned to the official engine: pack parsing, script VM, soft/wgpu rendering, translation text and saves. YU-RIS 引擎兼容运行时内核：封包解析、脚本执行与渲染逐步对齐官方引擎，支持汉化文本与统一编码"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/NotFaceGUI/yuris-kernel"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["android", "galgame", "game-engine", "reimplementation", "rust", "visual-novel", "wgpu", "windows", "yu-ris"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-10-20T12:24:29Z"
lastCommitAt: "2026-11-24T14:08:20Z"
lastReleaseAt: "2026-11-20T09:20:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 54
maintainers: ["NotFaceGUI"]
openGraphImageUrl: "https://opengraph.githubassets.com/c581bbaaf20488aa752951c3c975eaafa616915ae8f0f83322a740219e85e352/NotFaceGUI/yuris-kernel"
---

Observable behavior of the official engine is the sole source of truth</p>

## Introduction

`yuris-kernel` is a compatible runtime for the YU-RIS engine. This repository does not contain official engine code, game data, or save files.

- **Multi-version coverage** — Official series BETA 2 / BETA 3 / BETA 4:
  BETA 4 mainline (0.450–0.495); BETA 3 (0.276–0.292) / BETA 2 (0.255) adaptation in progress;
  official commercial 5xx branch (v500 packages / v555 seven tables) adaptation in progress; 27 system variable ABI tables for 0.255–0.495 have been registered, plus a measured v555 1000-slot table (`docs/formats/v555-*`).
- **Dual rendering backends** — `soft` (CPU, deterministic reference) and `wgpu` (GPU, main path for desktop / Android).
- **Multiple hosts** — Windows desktop, headless / local service, browser presentation (debugging), Android.
- **Translation and saves** — Four text routes: `original` / `gbk` / `big5` / `tunnel`; `translate.json` replaces character/choice/UI/body text at runtime (CP932 automatic tunnel expansion); `.sd` saves are byte-identical to the desktop version.
