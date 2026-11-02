---
repo: "jellydn/pi-clinepass-provider"
name: "pi-clinepass-provider"
description: "ClinePass provider for pi — 12 curated coding models (GLM-5.3, Kimi K3, DeepSeek V4.1 Flash, Muse Spark 1.3 Contributor, Qwen3.8 Max, and more) through Cline's $9.99/month subscription with 2-5x the usage compared to standard API rates."
readmeQualityOk: true
url: "https://github.com/jellydn/pi-clinepass-provider"
homepage: "https://jellydn.github.io/pi-clinepass-provider/"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [66, 30]
topics: ["pi", "pi-plugins"]
stars: 18
forks: 9
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2026-06-29T19:26:02Z"
lastCommitAt: "2026-11-02T11:36:39Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 93
undervaluedScore: 53
maintainers: ["renovate[bot]", "jellydn", "allcontributors[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/45da6614e88998a45ff98bbc61997a99e8de46915427f7c4d7091fd591a2a5b6/jellydn/pi-clinepass-provider"
fundingLinks: ["GITHUB:https://github.com/jellydn", "KO_FI:https://ko-fi.com/dunghd", "BUY_ME_A_COFFEE:https://buymeacoffee.com/dunghd", "POLAR:https://polar.sh/jellydn"]
---

# pi-clinepass-provider 🚀

> ClinePass provider for [pi](https://github.com/earendil-works/pi) — 12 curated coding models (GLM-5.3, Kimi K3, DeepSeek V4.1 Flash, Muse Spark 1.3 Contributor, Qwen3.8 Max, and more) through Cline's $9.99/month subscription with 2-5x the usage compared to standard API rates.

ClinePass uses Cline's **OpenAI-compatible Chat Completions API**, so no custom streaming protocol is needed — pi's built-in `openai-completions` streaming handles SSE parsing, tool calls, and usage tracking.

## 📦 Installation

### As a pi extension (recommended)

```sh
pi install npm:pi-clinepass-provider
# or from git
pi install git:github.com/jellydn/pi-clinepass-provider
# or local path
pi install /path/to/pi-clinepass-provider
```

### As an npm package

```sh
npm install pi-clinepass-provider
# or
pnpm add pi-clinepass-provider
```

> **Note:** This package requires `@earendil-works/pi-ai` and `@earendil-works/pi-coding-agent` as peer dependencies. They are automatically available when installed as a pi extension; install them manually when using as a standalone npm dependency.

## Pre-requirements

- [pi](https://github.com/earendil-works/pi) coding agent
- A…
