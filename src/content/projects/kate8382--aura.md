---
repo: "kate8382/AURA"
name: "AURA"
description: "AURA: Behavioral datasets, matrices, and offline validation tooling to detect manipulation, deception, and grey-zone threats in human–AI interactions."
readmeQualityOk: true
url: "https://github.com/kate8382/AURA"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["behavioral-dataset", "case-generator", "deception", "llm-interactions", "prompt-manipulation", "validation-library", "threat-matrices", "ai-safety", "red-teaming"]
stars: 6
forks: 2
openIssues: 17
closedIssues: 39
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-07-15T14:32:47Z"
lastCommitAt: "2026-11-26T12:42:15Z"
lastReleaseAt: "2026-11-18T16:39:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 59
maintainers: ["kate8382", "AmirhosseinAgrest", "MMVS-79"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1301710496/70ebd959-066c-4cf1-a046-48caf74db7b6"
discussionCount: 1
---

# AURA: AI User Risk Assessment Framework

**AURA** (AI User Risk Assessment) is an open-source library of structured behavioral matrices, heuristics, and validation tooling designed to detect manipulation, deception, and grey-zone threats in human–AI interactions.

**AURA** provides behavioral datasets (`synthetic_cases/` and `real_cases/`), signal mappings, and deterministic scoring scripts that run locally on case data. Because the scoring is deterministic and does not rely on an external LLM call, detectors built on these matrices can evaluate requests locally without incurring additional LLM inference costs or latency.

The repository currently focuses on dataset structure, heuristics, and offline evaluation tooling (not a live proxy gateway).

_Found this project useful or interesting? Drop a ⭐ — plus to your developer karma and a great sign for us that we're on the right track!_

## Key Features

- **Granular Threat Categorization** — Structured cases divided into three core domains: `MANIPULATION`, `FRAUD`, or `ACCESS`, in two origins: synthetic (`SC-`) and real (`RC-`, with per-case provenance).
