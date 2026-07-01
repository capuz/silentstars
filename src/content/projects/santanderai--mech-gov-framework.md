---
repo: "SantanderAI/mech-gov-framework"
name: "mech-gov-framework"
description: "Mechanical Governance for LLM Decisions — model-agnostic governance regimes (R1/R2/R3), hard gates, entropy commit-reveal and governance metrics for high-stakes LLM decision systems."
url: "https://github.com/SantanderAI/mech-gov-framework"
homepage: "https://github.com/SantanderAI"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-governance", "ai-safety", "decision-systems", "learning-to-defer", "llm", "llm-evaluation", "machine-learning", "python", "responsible-ai"]
stars: 66
forks: 25
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-06-17T16:52:30Z"
lastCommitAt: "2026-07-01T07:04:11Z"
lastReleaseAt: "2026-06-17T16:53:24Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 24
maintainers: ["opensource-SantanderAI", "dependabot[bot]", "sammy995"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cfd77dfbf3a1372bf2862cbe463173171a450f51bc1122855e074c71206c78b/SantanderAI/mech-gov-framework"
---

# mech_gov — Mechanical Governance for LLM Decisions

A model-agnostic Python **framework** for enforcing and measuring governance on
LLM decisions in high-stakes settings — mechanical gates, governance metrics and
a synthetic decision dataset.

Open source by **Santander AI Lab**. It contrasts a text-only governance regime
(**R1**) with **mechanical enforcement** (**R2**) — hard gates, candidate
freezing, argument-quality checks, an ambiguity gate, and a commit–reveal
entropy step — plus an adaptive regime (**R3**).

> **Vendor-neutral by design.** Nothing in the core depends on a specific cloud
> or model provider. Bring your own LLM backend via a small adapter; the
> framework never needs to know which one you use.

## Installation

```bash
python -m venv .venv
# Windows
.venv\Scripts\activate
# Linux/macOS
# source .venv/bin/activate

pip install -e .
# optional extras:
#   pip install -e ".[dev]"      # tests
#   pip install -e ".[viz]"      # plotting helpers
#   pip install -e ".[bedrock]"  # AWS Bedrock/SageMaker backends
```

Requires Python 3.10+.

## Quickstart (offline, no credentials)

```python
from mech_gov.data.banking_case import BankingCase, TransactionType
from…
