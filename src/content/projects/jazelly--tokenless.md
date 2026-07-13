---
repo: "jazelly/tokenless"
name: "tokenless"
description: "Route unnecessary AI conversations to online chatgpt, claude and gemini"
readmeQualityOk: true
url: "https://github.com/jazelly/tokenless"
language: "JavaScript"
languages: ["JavaScript", "TypeScript", "Rust"]
languagePcts: [43, 32, 23]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-02T04:48:46Z"
lastCommitAt: "2026-07-13T06:38:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 40
maintainers: ["jazelly", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/463412106260106ecce98dde805c1e5e86fa1f21e861459d3f5e3432ed734c8f/jazelly/tokenless"
---

[中文](https://github.com/jazelly/tokenless/blob/HEAD/README.zh-CN.md) ｜ [English](https://github.com/jazelly/tokenless/blob/HEAD/README.md)

# Tokenless

Tokenless is a standalone project that helps agents save tokens by routing suitable work through the visible web version of ChatGPT, Claude, or Gemini that the user is already signed into.

## Install

You need Node.js 22+ and the Tokenless extension installed and enabled in Chrome, Brave, Edge, Arc, or Chromium. The extension and your provider sign-in are the only manual browser steps.

Install the Tokenless setup skill:

```bash
npx skills add https://github.com/jazelly/tokenless/tree/main/skills/tokenless-install --yes
```

Then send your agent this message:

```text
Use $tokenless-install to install Tokenless, install its main skill, and verify that it is ready.
```

The setup skill installs the main `tokenless` skill, provisions the latest CLI and local runtime, and finishes with `doctor`. It reports any required browser action directly. To upgrade or repair later, tell the agent: `Use $tokenless-install to upgrade Tokenless and verify it.`

## Why Tokenless

### 1. Save tokens first

Use the web subscription you already have…
