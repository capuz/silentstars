---
repo: "allen-Jmc/jmcai-shotlist-builder"
name: "jmcai-shotlist-builder"
description: "JMCAI Cinematic-Grade Industrial Audiovisual Shotlist and Multimodal Production Ticket Builder System (Official Release)"
originalDescription: "JMCAI 电影级工业视听分镜与多模态工单构建系统（正式版）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/allen-Jmc/jmcai-shotlist-builder"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-14T09:57:11Z"
lastCommitAt: "2026-10-24T08:19:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 20
maintainers: ["allen-Jmc"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc34acbc9066ed43bd8971135695e874ea6ac225d03c3bb271ede6710c11aa8b/allen-Jmc/jmcai-shotlist-builder"
---

# JMCAI Shotlist Builder (Cinematic-Grade Industrial Shotlist and Visual Production Ticket Builder System)

> **JMCAI Shotlist Builder** is an **industrial-grade audiovisual shotlist breakdown, all-modal asset ledger planning, and offline self-contained HTML production ticket builder system** for AI films, commercial short dramas, and high-quality generative audiovisual content creation.
> This system deeply integrates two mainstream video models, **MiniMax H3 (Hailuo Video)** and **ByteDance Seedance 2.0 / 2.5**, and establishes a strict cinematic audiovisual engineering standard. It thoroughly addresses the pain points of industrial AI video production, including "lip-sync drift, character continuity breaks across shots, props reverting automatically, fragmented syntax between large models, camera movement without motivation, and operator upload misalignment."

---

## 1. System Overview Architecture and Dual-Engine Matrix

```mermaid
graph TD
    A[Literary script / creative proposal / short film text] --> B[JMCAI director engineering core and state machine]
    
    B --> C1[MiniMax H3 industrial long-series branch]
    B --> C2[ByteDance Seedance 2.0/2.5 branch]

    B -->…
