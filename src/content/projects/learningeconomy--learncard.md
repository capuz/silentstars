---
repo: "learningeconomy/LearnCard"
name: "LearnCard"
description: "✨ Open-source lifelong learning passport that empowers learners to collect, own, and share their skills and experiences. 💖"
readmeQualityOk: true
url: "https://github.com/learningeconomy/LearnCard"
homepage: "https://www.learncard.com"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [63, 22]
topics: ["currency", "did", "education", "learning", "verifiable-credentials", "wallet", "work"]
stars: 69
forks: 12
openIssues: 0
closedIssues: 15
watchers: 10
contributors: 45
recentReleases: 0
createdAt: "2022-04-27T05:19:45Z"
lastCommitAt: "2026-10-09T18:39:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 53
maintainers: ["goblincore", "Custard7", "TaylorBeeston"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/486055750/ce425bd2-7b20-4e83-98e6-a72aab53a814"
---

[<img src="https://github.com/user-attachments/assets/3bff1da1-8293-4ddf-856b-6f9aee6747d0" width="215"/>](https://learncard.com)

# LearnCard

**LearnCard** is a lifelong learning passport that empowers learners to collect, own, and share their skills and experiences.

**5 verbs: Issue, Earn, Store, Share, Map.**

**LearnCloud** is an open, API-driven platform that seamlessly integrates learning providers, tech systems, credentials and AI-driven ecosystems, enabling rapid scaling and interoperability for the future of education and employment.

## Documentation

All LearnCard documentation can be found at:
https://docs.learncard.com

## Installation

Use [Bun](https://bun.sh/) to install LearnCard.

```bash
bun install
```

## Building and Testing

This repository uses [Nx](https://nx.dev) to manage package relationships. Use the provided scripts to ensure everything is built in the correct order and that tests run against fresh artifacts:

```bash
bun run build              # builds all packages (excluding docs and example apps) according to the dependency graph
bun run test:e2e           # builds dependencies then runs the end-to-end tests
bun run run-network-tests  # builds…
