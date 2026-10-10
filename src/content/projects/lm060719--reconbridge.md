---
repo: "lm060719/reconbridge"
name: "reconbridge"
description: "General-purpose reverse-engineering analysis KernelSU module: the phone side only provides atomic capabilities, and all the intelligence lives on the PC side (Claude Code + MCP). For authorized security research and educational use only."
originalDescription: "通用逆向分析 KernelSU 模块：手机侧只做原子能力，智能全在 PC 侧（Claude Code + MCP）。仅限授权安全研究与教育用途。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lm060719/reconbridge"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [53, 23]
topics: ["androguard", "android", "android-hooking", "apk-analysis", "claude-code", "ctf-tools", "dex-dump", "dexkit", "frida-alternative", "ghidra"]
stars: 28
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-18T09:59:39Z"
lastCommitAt: "2026-10-10T10:05:22Z"
lastReleaseAt: "2026-08-07T12:22:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 44
maintainers: ["lm060719"]
openGraphImageUrl: "https://opengraph.githubassets.com/d62827e91a92e51b0efa2b07384bc509defae9250112a2de918bca0856d66825/lm060719/reconbridge"
---

**Chinese** | [English](https://github.com/lm060719/reconbridge/blob/HEAD/README_en.md)

>QQ discussion group: 1076516767

# ReconBridge — General-Purpose Reverse-Engineering KernelSU Module

A **general-purpose reverse-engineering capability backend** that runs on Android devices (KernelSU root). The phone side only provides atomic capabilities (pulling packages / reading files / listing .so files / injecting hooks). All intelligence (locating functions, generating hooks, analyzing results) is done on the PC side (Claude Code + MCP).

> 📌 **One-page quick reference for AI agents / new sessions: [`AGENTS_QUICKSTART.md`](https://github.com/lm060719/reconbridge/blob/HEAD/AGENTS_QUICKSTART.md)** — all MCP tool signatures, M5 usage, typical workflows, and frequent pitfalls. One read is enough to get started.

> Progress: **M1 / M2 / M3 / M4 / M5 are all complete and verified on real devices** (Xiaomi SM8750 / Android 16 / KernelSU + ZygiskNext + LSPosed).
> - **M5**: General-purpose Java trace and live tampering with an Action Pipeline (LSPosed module, `trace_java` / `patch_java`) — see [`m5/README.md`](https://github.com/lm060719/reconbridge/blob/HEAD/m5/README.md) and…
