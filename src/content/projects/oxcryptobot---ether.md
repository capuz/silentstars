---
repo: "OxCryptobot/-ETHER"
name: "-ETHER"
description: "Core Identity @ETHER is a local-first super-agentic LLM system built on three pillars:  Modular Intelligence — 8 specialized gems with strongly-typed interfaces Verified Execution — Every code artifact is sandboxed, tested, and scored before the user sees it Controlled Evolution — The system can extend itself via template-based tool generation"
readmeQualityOk: true
url: "https://github.com/OxCryptobot/-ETHER"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-24T18:57:54Z"
lastCommitAt: "2026-09-08T08:18:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["OxCryptobot"]
openGraphImageUrl: "https://opengraph.githubassets.com/6031a29845796b11f17a27f157db03e1e715d3a99c0693b46164b94b2a14dd06/OxCryptobot/-ETHER"
---

# @ETHER

**Local-first super-agentic coding system** — modular intelligence, verified execution, controlled evolution.

Every code artifact is sandboxed and scored **before** you see it. Tools the system invents stay quarantined until a promotion gate clears them. Memory compounds via Citrine/Qdrant when available.

| Pillar | What it means |
|--------|----------------|
| **Modular Intelligence** | 8 typed gems (plan, code, sandbox, audit, critique, memory, evolve, tools) |
| **Verified Execution** | Clear Quartz sandbox + asserts + audit before delivery |
| **Controlled Evolution** | Grandidierite fabricate → quarantine → gated promote |

**Version:** 0.2.0 · **Python:** ≥3.11 · **License:** MIT

## Requirements

- Ollama + a ≤4B coder model (default `qwen3.5:4b` for GTX 1650 / 12GB hosts)
- Docker recommended (sandbox + Qdrant); local backend works with weaker isolation

## Install (60 seconds)

```bash
git clone https://github.com/OxCryptobot/-ETHER.git && cd -ETHER
python -m venv .venv && source .venv/bin/activate   # Windows: .\.venv\Scripts\Activate.ps1
pip install -e ".[dev]"
cp .env.example .env                                  # Windows: copy .env.example .env
ether…
