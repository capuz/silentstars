---
repo: "paperlesspaper/integrations"
name: "integrations"
description: "paperlesspaper base integrations (e.g. the ones we maintain)"
url: "https://github.com/paperlesspaper/integrations"
homepage: "https://paperlesspaper.de/en"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [52, 48]
topics: ["html", "integrations", "js"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-19T18:29:54Z"
lastCommitAt: "2026-06-28T06:57:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 42
maintainers: ["Utzel-Butzel"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c10f3dd8e7bdedb5197572a6c8be10c073e11e4fb22daeae42f1e299e447909/paperlesspaper/integrations"
---

# paperlesspaper Integrations

This repository contains a Docker-ready collection of paperlesspaper Open Integrations. Each integration is a small HTML/CSS/JS provider that exposes a manifest, a render page, and optionally a settings page or server-side data route.

The structure is based on the official [paperlesspaper Open Integration overview](https://docs.paperlesspaper.de/open-integration/overview). That documentation defines the core contract this repo follows: a public `config.json`, a deterministic `render.html` surface for screenshot generation, optional `settings.html`, and loading markers that let paperlesspaper wait until async content is ready.

## Quick Start

Install dependencies and start the local provider:

```sh
npm install
npm start
```

The server listens on `http://localhost:3000` by default. Check the health endpoint with:

```sh
curl http://localhost:3000/health
```

## How It Works

Integrations live in `applications/<slug>/`.

| File               | Purpose                                                         |
| ------------------ | --------------------------------------------------------------- |
| `config.json`      | Install manifest consumed by…
