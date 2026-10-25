---
repo: "taitai2661/MIX-agent"
name: "MIX-agent"
description: "A flexible open-source AI agent that can use models and tools."
originalDescription: "モデル、ツールが使える柔軟なオープンソースAIエージェント。"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/taitai2661/MIX-agent"
homepage: "https://mix-agent.ta26.top/"
language: "Rust"
languages: ["Rust", "TypeScript", "Python"]
languagePcts: [37, 33, 27]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-09-04T14:37:27Z"
lastCommitAt: "2026-10-25T08:40:23Z"
lastReleaseAt: "2026-10-01T10:20:59Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 53
maintainers: ["taitai2661"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef4765a9aa1f218a5d283d52232356f3fb35a6197cfc40945fa412cfe3703c3c/taitai2661/MIX-agent"
---

# MIX-agent

**A local, self-hosted AI workspace**

Japanese | [English](https://github.com/taitai2661/MIX-agent/blob/HEAD/README.en.md)

---

MIX-agent is a workspace for using AI safely on your own machine or within a trusted network, without depending on external cloud services.

This repository provides two editions, depending on your use case:

- **Desktop edition**: **"A desktop coding agent that works autonomously like OpenCode"**. A development partner that runs code exploration, planning, multi-file editing, and a test-and-fix loop directly on your local PC, using a persistent PTY terminal (Tauri 2 + Rust + React). It launches immediately from an installer without Docker.
- **Docker edition**: **"A self-hosted server for those who want to self-host a chat AI on a home server or NAS"** (FastAPI + PostgreSQL + React). It runs 24 hours a day, and you can access it from smartphones, tablets, laptops, and other devices throughout the home via a web browser.

> [!NOTE]
> **Development status**: This is an early development version. Do not use it for unrestricted public exposure on the internet, multi-tenant use by unspecified users, or safely executing unknown malicious code.…
