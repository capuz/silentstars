---
repo: "wang-yi-bit64/dsh-desktop"
name: "dsh-desktop"
description: "Rust + Tauri 2.0 desktop shell for DeepSeek Harness (DSH)"
readmeQualityOk: true
url: "https://github.com/wang-yi-bit64/dsh-desktop"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [48, 44]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-09-04T02:53:13Z"
lastCommitAt: "2026-09-20T08:44:50Z"
lastReleaseAt: "2026-09-19T06:18:56Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: ["wang-yi-bit64"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcd8765e58f85860a2008511e17983772a4b691e0666e824ab757971271c68a6/wang-yi-bit64/dsh-desktop"
discussionCount: 0
---

# DSH Desktop (Tauri)

> [中文文档 (Chinese)](https://github.com/wang-yi-bit64/dsh-desktop/blob/HEAD/README.zh-CN.md)

A desktop window shell for [DeepSeek Harness](https://github.com/deepseek-ai/dsh) rebuilt with **Rust + Tauri 2.0**.

This project is a from-scratch Rust/Tauri port of the Electron-based `dataelement/dsh-desktop` wrapper. It mimics the original's behavior so the desktop app and the Harness web UI stay feature-identical, while replacing the heavy Electron runtime with a much slimmer, faster Tauri shell.

## Features

> **Status legend**: ✅ wired (on the runtime path) · ⚠️ not wired (implemented and tested, but no runtime caller) · 🟡 partial · ❌ not implemented · 🗄️ archived (was implemented, now deleted and formally dropped) · 🕓 planned (no code, and deliberately not now).
> Code evidence and call sites for every row live in [`AGENTS.md` §7 Claim Discipline](https://github.com/wang-yi-bit64/dsh-desktop/blob/HEAD/AGENTS.md#7-宣称纪律claim-discipline). This file and AGENTS.md must agree; changing one means changing the other.
>
> As of the batch A~G close-out on 2026-09-10 there are **no "not wired" rows left**: everything wireable was wired, and everything else was…
