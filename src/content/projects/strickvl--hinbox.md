---
repo: "strickvl/hinbox"
name: "hinbox"
description: "Hinbox is a flexible, domain-configurable entity extraction system designed for historians and researchers."
readmeQualityOk: true
url: "https://github.com/strickvl/hinbox"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["deep-research", "genai", "llm", "research"]
stars: 18
forks: 3
openIssues: 10
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-02-19T07:11:13Z"
lastCommitAt: "2026-11-14T22:00:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 53
maintainers: ["strickvl", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/f876ff1de6c55fd34c7887e6f1802078c1757e7c66606bb9cfa9cffe1c9189cf/strickvl/hinbox"
---

# hinbox

`hinbox` is a flexible, domain-configurable entity extraction system designed
for historians and researchers. It processes historical documents, academic
papers, news articles, and book chapters to extract structured information about
people, organizations, locations, and events. Originally designed for Guantánamo
Bay media coverage analysis, it now supports any historical or research domain
through a simple configuration system.

## 🎯 Key Features

- **Research-Focused**: Designed for historians, academics, and researchers
- **Flexible Sources**: Process historical documents, academic papers, news articles, book chapters
- **Domain-Agnostic**: Configure for any historical period, region, or research topic
- **Multiple AI Models**: Support for cloud models (Gemini, OpenAI, Anthropic,
  OpenRouter) and local models (Ollama) via direct SDK integration  
- **Entity Extraction**: Automatically extract people, organizations, locations, and events
- **Smart Deduplication**: RapidFuzz lexical blocking + embedding similarity with per-entity-type thresholds
- **Merge Dispute Agent**: Second-stage LLM arbitration for ambiguous gray-band entity matches
- **5-Layer Canonical Name…
