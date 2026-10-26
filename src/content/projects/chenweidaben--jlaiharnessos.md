---
repo: "chenweidaben/JLAIharnessos"
name: "JLAIharnessos"
description: "Hangzhou Jianlan Technology · Next-generation digital-intelligent hospital industrial-grade intelligent agent operating system — making medical AI simpler and more practical, the Android of the medical AI era"
originalDescription: "杭州健澜科技 · 新一代数智医院工业级智能体操作系统 — 让医疗AI更简单更落地，做医疗AI时代的安卓"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/chenweidaben/JLAIharnessos"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [47, 30]
topics: ["medical-ai", "agent-os", "clinical-decision-support", "healthcare", "llm", "low-code", "open-source", "ai-agent", "apache2", "digital-health"]
stars: 8
forks: 7
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-18T07:25:25Z"
lastCommitAt: "2026-10-26T18:05:59Z"
lastReleaseAt: "2026-10-02T03:17:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 70
undervaluedScore: 58
maintainers: ["chenweidaben"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1375527563/e1d181af-fa37-4c89-82be-671e4a1c9b73"
---

# Jianlan AI-Native Hospital Operating System OS

### Let every clinical encounter accumulate into system capability

> Primary visual color: **Deep Sea Blue** (`#0A2540`).
>
> The mainline runtime is **Bun + TypeScript BFF (`src/`, port 8080) + React frontend (`web/`)**; `services-java/`, `services-python/`, `services/radar-inference/`, and `miniprogram/` are side-path/reference implementations that are not part of the default mainline orchestration; see the "Architecture Layers and Measured Inventory" section below.

---

> 🏥 **Architecture Layers and Measured Inventory (local command statistics, reviewed 2026-10)**
>
> | Layer / Component | Role | Tech Stack | Measured Scale | Ports (container / host) |
> |---|---|---|---|---|
> | TS BFF aggregation layer | **Mainline** | Bun + TypeScript (`src/bff/`) | **5084** registered REST routes (deduplicated by method+path; 5211 expanded entries, including **127** duplicate registrations pending consolidation); **2402** route files and **1945** pure-function aggregator modules (static audit with `audit-bff.mjs`, snapshot 2026-10-25) | 8080 / `127.0.0.1:8080` |
> | React workbench | **Mainline** | React 19 + Vite + AntD 5 (`web/`) |…
