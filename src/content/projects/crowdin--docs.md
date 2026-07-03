---
repo: "crowdin/docs"
name: "docs"
description: "Crowdin Knowledge Base and Dev Portal"
url: "https://github.com/crowdin/docs"
homepage: "https://support.crowdin.com"
language: "MDX"
languages: ["MDX"]
languagePcts: [98]
topics: ["crowdin", "docs", "hacktoberfest", "knowledge-base"]
stars: 15
forks: 195
openIssues: 0
closedIssues: 4
watchers: 4
contributors: 18
recentReleases: 0
createdAt: "2024-06-29T09:56:55Z"
lastCommitAt: "2026-07-03T06:23:34Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 82
maintainers: ["rohalskyy", "github-actions[bot]", "andrii-bodnar"]
openGraphImageUrl: "https://opengraph.githubassets.com/a442ca55d691b700e9ea23f7a9bb0313b29f7449a98bf5747bb2a7d94d20df4b/crowdin/docs"
---

# Crowdin Docs

This repository contains the website code and Markdown articles for [Crowdin Docs](https://support.crowdin.com).

If you would like to contribute to the documentation, please read the [Contribution Guidelines](CONTRIBUTING.md).

## Translations

This project uses [Crowdin](https://crowdin.com) to manage translations.

## Getting Started

Clone the repository and install the dependencies:

```console
git clone git@github.com:crowdin/docs.git

cd docs

pnpm install
```

Run the development server:

```console
pnpm dev
```

Open your browser and navigate to http://localhost:4321.

> **Note!**
> - Make sure you have Node.js v22 or higher installed on your machine.
> - This project uses [pnpm](https://pnpm.io) as the package manager. The required version is pinned via the `packageManager` field in `package.json` and can be installed with [Corepack](https://nodejs.org/api/corepack.html) (`corepack enable`).
> - This project uses the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages and PR titles.

### Project Structure

Some important files and directories:

- `astro.config.mjs` - Astro configuration file.
-…
