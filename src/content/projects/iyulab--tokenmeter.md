---
repo: "iyulab/TokenMeter"
name: "TokenMeter"
description: ".NET library for accurate token counting, cost calculation, and session-based usage tracking across 12 LLM providers including OpenAI, Anthropic, Google, Azure, and more."
readmeQualityOk: true
url: "https://github.com/iyulab/TokenMeter"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["ai", "cost-tracking", "dotnet", "llm", "nuget", "token-counting"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-01-26T05:15:26Z"
lastCommitAt: "2026-10-20T08:48:29Z"
lastReleaseAt: "2026-10-13T20:42:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 78
maintainers: ["zizixmas", "birdnamoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7fa6aea471c30cbebe37f9925ad3e369a3abc38eae2ca94c831576e178c5013/iyulab/TokenMeter"
---

# TokenMeter

LLM model metadata catalog and cost calculator for .NET.

Provides context windows, pricing, capability flags (vision, audio, reasoning, tool calling, prompt caching), and thinking/reasoning format metadata for 12+ providers including OpenAI, Anthropic, Google, xAI, Mistral, DeepSeek, and more.

## Packages

| Package | Description |
|---------|-------------|
| `TokenMeter` | Bundled model metadata catalog (`ModelCatalog`, `ModelInfo`) + cost calculation (`CostCalculator`) — no dependencies, AOT/trim compatible |

## Installation

```bash
dotnet add package TokenMeter
```

## Features

Everything is available as soon as the package is referenced — the catalog is embedded and loads on first use; there is
no DI extension or setup call. Register `ICostCalculator` yourself if you want it injected.

| Feature | Entry point | How to use |
|---------|-------------|------------|
| Model lookup by id or alias (Bedrock/Vertex prefixes, date suffixes) | `ModelCatalog.FindModel(id)` | Default: full fuzzy matching |
| Bounded / confidence-aware lookup | `ModelCatalog.FindModel(id, AliasMatchType)`, `ModelCatalog.FindModelMatch(id)` → `ModelMatch.MatchKind` | Pass…
