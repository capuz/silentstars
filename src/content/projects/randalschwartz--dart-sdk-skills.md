---
repo: "RandalSchwartz/dart-sdk-skills"
name: "dart-sdk-skills"
description: "Agent skills for Dart & Flutter SDK versioning, language features, widget migrations, and minSdk lookups"
readmeQualityOk: true
url: "https://github.com/RandalSchwartz/dart-sdk-skills"
language: "Dart"
languages: ["Dart"]
languagePcts: [100]
topics: ["agent-skills", "dart", "flutter", "llm", "metaprogramming"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-22T20:14:12Z"
lastCommitAt: "2026-09-01T08:51:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 21
maintainers: ["RandalSchwartz"]
openGraphImageUrl: "https://opengraph.githubassets.com/03df10170230a5ba841ac38195227cc4e55b47dab0aa50bfedb7ee97a04afc20/RandalSchwartz/dart-sdk-skills"
---

# Dart & Flutter SDK Skills (`dart-sdk-skills`) 🎯

Authoritative, version-by-version agent skills for the **Dart & Flutter SDKs**: language features, core APIs, experimental feature flags (`--enable-experiment`), static metaprogramming (Macros & Augmentations), widget deprecations, Material 3 migrations, `minSdk` compatibility, and **legacy codebase rescue (Dart 1.0 & Flutter 1.0 to modern Dart 3.13+ & Flutter 3.47+)**.

Designed to bridge LLM training cutoff gaps, ensuring AI coding agents (Claude Code, Google Antigravity, OpenAI Codex, GitHub Copilot, Cursor, Cline) write syntactically and semantically correct code across all target SDKs.

---

## 📦 Single-Command Universal Installation

Install both skills globally or into your local project workspace with any compatible package manager:

### Option 1: Using `npx skills` (Node / universal)
```bash
# Install globally for all agents
npx skills add RandalSchwartz/dart-sdk-skills -g

# Or install for a specific project
npx skills add RandalSchwartz/dart-sdk-skills
```

### Option 2: Using the Dart `skills` CLI
```bash
# Install globally
skills add https://github.com/RandalSchwartz/dart-sdk-skills --global --all

# Or install…
