---
repo: "ThinkInAIXYZ/PublicProviderConf"
name: "PublicProviderConf"
description: "Public Provider Config for DeepChat"
readmeQualityOk: true
url: "https://github.com/ThinkInAIXYZ/PublicProviderConf"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 39
forks: 8
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-08-19T01:50:22Z"
lastCommitAt: "2026-11-25T13:19:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 59
maintainers: ["zerob13"]
openGraphImageUrl: "https://opengraph.githubassets.com/583a101691f75be899e0b108a18a5e96300f061ba5e0c912a145504e2a8d440e/ThinkInAIXYZ/PublicProviderConf"
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
