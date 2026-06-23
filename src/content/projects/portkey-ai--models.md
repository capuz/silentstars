---
repo: "Portkey-AI/models"
name: "models"
description: "This repository contains comprehensive pricing and configuration data for LLMs. It powers cost attribution for 200+ enterprises running 400B+ tokens through Portkey AI Gateway every day."
url: "https://github.com/Portkey-AI/models"
homepage: "https://portkey.ai/models"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [66, 34]
topics: ["ai", "llms", "llms-benchmarking", "models"]
stars: 106
forks: 27
openIssues: 7
closedIssues: 1
watchers: 0
contributors: 33
recentReleases: 0
createdAt: "2025-12-26T07:24:38Z"
lastCommitAt: "2026-06-23T06:42:07Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 28
maintainers: ["prabhash-varma", "whysumedh", "naresh4dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/a35605a9b699ab9c4709d9a53fa85a80494daad4c1070aee20ec44c66c605507/Portkey-AI/models"
---

<h3 align="center">Portkey Models</h3>

</p>

</p>

---

This repository contains comprehensive pricing and configuration data for LLMs. It powers cost attribution for 200+ enterprises running 400B+ tokens through [Portkey AI Gateway](https://github.com/Portkey-AI/gateway) every day.

## Why This Exists

LLM pricing is a mess. Every team building on LLMs ends up maintaining its own spreadsheet — and it's stale by Friday.

- **The Naming Problem** — `gpt-5`, `gpt-5.2-pro-2025-12-11`, `o1`, `o3-mini` are all different models with different prices
- **The Units Problem** — OpenAI charges tokens, Google charges characters, Cohere uses "generations" and "summarization units"
- **The Hidden Dimensions Problem** — Thinking tokens, cache writes vs. reads, context thresholds, per-request fees, multimodal surcharges
- **The Velocity Problem** — DeepSeek dropped R1 pricing 75% in weeks. Google releases new tiers mid-quarter with no announcement

We built this as an open, community-maintained database to solve that problem.

## API

> 🔓 **Free API. No authentication required.**

### Get Provider Pricing Data

```bash
curl https://configs.portkey.ai/pricing/{provider}.json
```

```bash
#…
