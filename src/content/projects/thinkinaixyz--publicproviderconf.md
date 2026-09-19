---
repo: "ThinkInAIXYZ/PublicProviderConf"
name: "PublicProviderConf"
description: "Public Provider Config for DeepChat"
readmeQualityOk: true
url: "https://github.com/ThinkInAIXYZ/PublicProviderConf"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 35
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-08-19T01:50:22Z"
lastCommitAt: "2026-09-19T08:13:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 59
maintainers: ["zerob13"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d286e02affb7ae63ec4c8f3274a039a509aa06c64ba368fee5690d2f90ed40c/ThinkInAIXYZ/PublicProviderConf"
---

# PublicProviderConf

PublicProviderConf is a TypeScript CLI and library that aggregates the canonical [models.dev catalog](https://models.dev/api.json) together with several custom provider integrations (PPInfra, TokenFlux, Groq, Qiniu-hosted snapshots, and others). The tool normalizes capabilities, fills in missing metadata, and emits standardized JSON payloads that downstream apps can consume without bespoke adapters.

## Highlights
- Unified JSON schema for every provider with consistent capability flags
- Concurrent fetcher pipeline that merges live APIs with maintained templates
- Configurable CLI built with Commander + Vite for both dev (ts-node) and production builds
- Automated GitHub Actions workflow that can publish fresh `dist/` artifacts and sync them to CDN storage

## Data Sources & Coverage
The aggregated dataset starts with the upstream `https://models.dev/api.json`. During each run we overlay:
- Provider overrides from `manual-templates/`
- Live fetchers for operators that are not (yet) covered by models.dev, such as `ppinfra`, `tokenflux`, and `groq`
- Lightweight snapshots for ecosystems like `ollama` and `siliconflow`

After post-processing, the CLI writes the…
