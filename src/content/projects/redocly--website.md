---
repo: "Redocly/website"
name: "website"
description: "Redocly marketing and docs website"
url: "https://github.com/Redocly/website"
homepage: "https://redocly.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["docs-as-code", "redocly"]
stars: 5
forks: 7
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 89
recentReleases: 0
createdAt: "2025-05-28T15:59:49Z"
lastCommitAt: "2026-07-01T07:04:52Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 100
maintainers: ["github-actions[bot]", "illiaRedoc", "jacobator"]
openGraphImageUrl: "https://opengraph.githubassets.com/862afd7452bde9fbe2644936a135cf6d78d1b46df434e0243cef4cac6ed7c704/Redocly/website"
---

# Redocly website

This repo is the source of the Redocly website (https://redocly.com).

## Development

### Prerequisites

- Node.js (version specified in `.tool-versions`)
- npm

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

### Available Scripts

- `npm start` - Start the development server using Redocly CLI preview
- `npm run lint:markdown` - Lint markdown files
- `npm run lint:markdown:fix` - Fix markdown linting issues

## Project Structure

```
.
├── docs/           # Documentation content
├── pages/          # Website pages
├── static/         # Static assets
├── images/         # Image assets
├── blog/           # Blog content
├── learn/          # Learning resources
└── @theme/         # Theme components
```

## Remote content

The `/docs/cli`, `/docs/realm`, and `/docs/redoc` content are sourced from other repositories using the [remote content feature](https://redocly.com/docs/realm/setup/concepts/remote-content).

```treeview
docs
├── cli
├── realm
├── redoc
```

## Sidebars

The sidebars are located in the root of the repo:

- docs-cli.sidebars.yaml
- docs-realm.sidebars.yaml
- etc...

##…
