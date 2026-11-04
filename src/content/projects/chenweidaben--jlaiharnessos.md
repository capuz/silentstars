---
repo: "chenweidaben/JLAIharnessos"
name: "JLAIharnessos"
description: "Hangzhou Jianlan Technology · New-generation digital-intelligent hospital industrial-grade agent operating system — making medical AI simpler and more practical, aiming to be the Android of the medical AI era"
originalDescription: "杭州健澜科技 · 新一代数智医院工业级智能体操作系统 — 让医疗AI更简单更落地，做医疗AI时代的安卓"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/chenweidaben/JLAIharnessos"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [46, 30]
topics: ["medical-ai", "agent-os", "clinical-decision-support", "healthcare", "llm", "low-code", "open-source", "ai-agent", "apache2", "digital-health"]
stars: 8
forks: 7
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-18T07:25:25Z"
lastCommitAt: "2026-11-04T13:03:57Z"
lastReleaseAt: "2026-10-02T03:17:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 70
undervaluedScore: 58
maintainers: ["chenweidaben"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1375527563/e1d181af-fa37-4c89-82be-671e4a1c9b73"
---

# Jianlan AI-Native Hospital Operating System OS

> Repository perspective: **GitCode `JLMEDAIOS` main repository** (BFF / backend services / AI orchestration / data foundation / FHIR gateway / CDS / electronic medical records / internet hospital / knowledge platform / voice / multi-tenancy).
> For the frontend workbench, Vite build, deployment and operations, and secondary development guidance, see [`README.dev.md`](https://github.com/chenweidaben/JLAIharnessos/blob/HEAD/README.dev.md) (the developer mirror perspective on GitHub `JLAIharnessos`).

---

## 1. Project Overview

**Jianlan AI-Native Hospital Operating System OS (`jlmedaios`)** is an AI-native hospital foundation for tertiary public hospitals. It is not a "traditional HIS with an AI add-on". Instead, it fuses **BFF, domain services, AI orchestration, data foundation, FHIR gateway, and CDS** into the same Bun runtime and the same PostgreSQL 16 schema:

- **Access layer**: Bun-native `Bun.serve` simultaneously serves REST (`/api/v1/*`), WebSocket (`/ws/chat`, SSE-style streaming dialogue and critical-value broadcasting), and Prometheus `/metrics`.
- **Domain layer**: Outpatient, inpatient, nursing, pharmacy, surgery,…
