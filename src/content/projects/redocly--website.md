---
repo: "Redocly/website"
name: "website"
description: "Redocly marketing and docs website"
readmeQualityOk: true
url: "https://github.com/Redocly/website"
homepage: "https://redocly.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["docs-as-code", "redocly"]
stars: 5
forks: 7
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 92
recentReleases: 0
createdAt: "2025-05-28T15:59:49Z"
lastCommitAt: "2026-09-01T08:40:22Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 100
maintainers: ["adamaltman", "h0pped", "n0rahh"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d5707c80c380817e0e51842205b0f762d1fd6ba1a129b4fc7f9325156496f3a/Redocly/website"
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
- `npm run link-marketing-pages` - Link a local build of `@redocly/marketing-pages` via yalc
- `npm run unlink-marketing-pages` - Remove the yalc link and restore the registry version

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

The `/docs/cli`, `/docs/realm`, and `/docs/redoc` content are sourced from other repositories using the [remote content feature](https://redocly.com/docs/realm/setup/concepts/remote-content).…
