---
repo: "Covai-Labs/decant"
name: "decant"
description: "Shared extraction layer for AI conversations (ChatGPT, Claude, Gemini, Perplexity, DeepSeek) and web articles into Markdown."
readmeQualityOk: true
url: "https://github.com/Covai-Labs/decant"
homepage: "http://decant.js.org/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
topics: ["ai", "browser-extension", "chatgpt", "claude", "copilot", "deepseek", "extraction", "gemini", "local-first", "markdown"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-17T13:00:35Z"
lastCommitAt: "2026-10-20T08:49:51Z"
lastReleaseAt: "2026-09-07T21:37:52Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 59
maintainers: ["deadrat-in", "semantic-release-bot", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f7cea3365057a0b1c44bd5556a360fa3797b1cf9a8708d87087d2a2137388a9/Covai-Labs/decant"
fundingLinks: ["GITHUB:https://github.com/deadrat-in"]
discussionCount: 1
---

# decant-core

**A shared extraction layer for the modern web — including AI conversations.**

Every AI chat exporter ends up solving the same problem: extracting conversations from ChatGPT, Claude, Gemini, Perplexity, DeepSeek and other constantly changing AI interfaces.

And every time one of those platforms changes its UI, seriously re-renders a message, or ships a new feature, **somebody's parser breaks**.

`decant-core` provides reusable parsers, platform detection, and web article extraction so developers don't have to build and maintain the same fragile parsing layer over and over again.

### Origin & Purpose

Existing chat exporters often suffer from two major flaws: they break whenever platform DOMs update, and many route user conversations through third-party servers.

`decant-core` was created to solve both at the foundation. Originally built to power local-first extensions like [AI Chat Exporter](https://ace.covai.org/) and [Decant](https://decant.covai.org/), it decouples fragile platform parsing from presentation. By sharing this engine under AGPL-3.0, any browser extension, web clipper, archiver, or research tool can rely on a maintained, local-first extraction…
