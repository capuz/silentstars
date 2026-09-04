---
repo: "nshntarora/guidedreview"
name: "guidedreview"
description: "AI Guided Reviews For Github PRs"
readmeQualityOk: true
url: "https://github.com/nshntarora/guidedreview"
homepage: "https://guidedreview.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["ai", "chrome-extension", "code-review-assistant", "code-review-automation", "llm-tools", "pull-requests", "code-review", "code-reviews", "developer-tools", "developer-tools-ai-agent"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-07-19T12:42:08Z"
lastCommitAt: "2026-09-04T08:10:54Z"
lastReleaseAt: "2026-08-20T19:46:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 52
maintainers: ["nshntarora"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2f9d0a1c6659e7461e99d8f456bac0616eddd337838180c98e00a7d1b744e32/nshntarora/guidedreview"
---

# Guided Review

Chrome extension for GitHub pull requests that clusters related changes into ordered **review units** so you can actually read AI-generated code.

1. Open a pull request and hit **Start Guided Review**.
2. Your LLM clusters the diff into ordered units with short summaries — schema, then logic, then call-sites, then tests — instead of an alphabetical file dump.
3. Walk the change keyboard-first. AI structures the pass — **you still read the code and decide**.

Free, open source, bring your own LLM key. The extension talks to GitHub and your AI provider only — no Guided Review backend. Install from the [Chrome Web Store](https://chromewebstore.google.com/detail/pdnnimoajmnjpccboemeomoeomancodd), or build from source below. Site and docs: [guidedreview.dev](https://guidedreview.dev) · [docs](https://guidedreview.dev/docs).

- [Demo](#demo)
- [Why?](#why)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Running](#running)
  - [Development](#development)
  - [Building](#building)
  - [Testing](#testing)
- [Usage](#usage)
- [Configuration](#configuration)
- [License](#license)

## Demo

Click the image below to play

## Why?

AI agents are…
