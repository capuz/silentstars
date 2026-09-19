---
repo: "axelfreeman/yandex-wordstat-guide"
name: "yandex-wordstat-guide"
description: "Yandex Wordstat API skill for AI agents — collect RU search semantics, frequency, and trends automatically."
originalDescription: "Yandex Wordstat API skill for AI agents — collect RU search semantics, frequency, and trends automatically."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/axelfreeman/yandex-wordstat-guide"
homepage: "https://axelfreeman.ru"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "api", "keyword-research", "russian", "semantics", "seo", "wordstat", "yandex"]
stars: 35
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-21T15:00:28Z"
lastCommitAt: "2026-09-19T02:47:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 19
maintainers: ["axelfreeman"]
openGraphImageUrl: "https://opengraph.githubassets.com/4285b13495f969746e0f89f0c78de1128ab406e6b0331c914f416de2f4469817/axelfreeman/yandex-wordstat-guide"
---

# 📊 Yandex.Wordstat API — skill for AI agents

**Connect Wordstat to your AI agent and collect search semantics automatically. No interface, no copy-paste, no Excel.**

```bash
npx hermes skill install axelfreeman/yandex-wordstat-guide
```

---

## Why you need this

Yandex.Wordstat is the only source of real search statistics on the Runet. Previously, to collect semantics you had to sit in the interface, copy, and paste into Excel. Days of work.

**Through the API you get automatic collection via an AI agent.** 100 requests per hour, the output is structured data that can be immediately fed to a neural network for content generation.

```
You → Agent → Wordstat API → 500 phrases per hour → DeepSeek → Ready pages
```

**For whom:**
- Context specialists and targeting specialists — daily demand monitoring
- SEO specialists — semantic core in an hour instead of a week
- AI marketers — data for generating pages via LLM
- Business owners — understanding what clients really search for

## Installation

### As a skill for Hermes Agent

```bash
npx hermes skill install axelfreeman/yandex-wordstat-guide
```

### As a separate script

```bash
git clone…
