---
repo: "netresearch/t3x-nr-llm"
name: "t3x-nr-llm"
description: "LLM Foundation for TYPO3 - Shared AI foundation: configure LLM providers once for every AI extension, with encrypted API keys and services for chat, translation, vision and embeddings."
readmeQualityOk: true
url: "https://github.com/netresearch/t3x-nr-llm"
homepage: "https://netresearch.github.io/t3x-nr-llm/"
language: "PHP"
languages: ["PHP"]
languagePcts: [93]
topics: ["ai", "claude", "llm", "openai", "php", "typo3", "typo3-extension", "anthropic", "gemini", "gpt"]
stars: 6
forks: 2
openIssues: 2
closedIssues: 152
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2025-12-22T23:35:44Z"
lastCommitAt: "2026-10-24T07:33:24Z"
lastReleaseAt: "2026-03-06T10:49:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 75
maintainers: ["CybotTM", "netresearch-project-bot[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3078ef04e02c31a47e98f87ccebd33a710de2750605907fb019b24d216d30051/netresearch/t3x-nr-llm"
discussionCount: 2
---

# LLM Foundation for TYPO3

**One LLM setup. Every extension. Full admin control.**

nr-llm is shared infrastructure for AI in TYPO3 — like the caching framework, but for language models.
Administrators configure providers once; every AI-powered extension on the site uses them automatically.

## The Problem

Every TYPO3 extension that wants AI capabilities today has to:

- Build its own provider integration (HTTP calls, auth, error handling, streaming)
- Store API keys in its own way (often plaintext in extension settings)
- Create its own backend configuration UI
- Leave administrators with no central overview of AI usage or costs

When a site runs three AI extensions, that's three separate API key configurations,
three places to check when something breaks, and no way to switch providers globally.

## The Solution

nr-llm provides the missing shared layer:

```
┌─────────────────────────────────────────────────┐
│  Your Extension  │  Cowriter  │ Backend AI Chat │
│  (3 lines of DI) │           │                 │
└────────┬─────────┴─────┬─────┴────────┬────────┘
         │               │              │
┌────────▼───────────────▼──────────────▼────────┐
│              nr-llm…
