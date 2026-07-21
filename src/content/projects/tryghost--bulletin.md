---
repo: "TryGhost/Bulletin"
name: "Bulletin"
description: "A newsletter theme for Ghost"
readmeQualityOk: true
url: "https://github.com/TryGhost/Bulletin"
homepage: "https://bulletin.ghost.io/"
language: "Handlebars"
languages: ["Handlebars", "CSS"]
languagePcts: [70, 24]
topics: ["ghost", "publishing", "ghost-theme", "newsletter"]
stars: 18
forks: 21
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 47
recentReleases: 0
createdAt: "2021-07-26T05:54:00Z"
lastCommitAt: "2026-07-21T06:10:46Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 77
undervaluedScore: 70
maintainers: ["renovate[bot]", "aileen", "cathysarisky"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef90d58f87dd3c391ee79dee6f582dc61b5b799641a4af29757dab37cf412f49/TryGhost/Bulletin"
fundingLinks: ["GITHUB:https://github.com/TryGhost", "OPEN_COLLECTIVE:https://opencollective.com/ghost"]
---

# Bulletin

> [!IMPORTANT]
> This repo is synced automatically with the [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

Bulletin is a minimal newsletter theme for [Ghost](https://github.com/TryGhost/Ghost). The theme divides your homepage into two sections. The left-hand section is optimized for capturing new email subscribers with a punchy background color. The right-hand section shows an excerpt from the latest issue you’ve published.

**Demo: https://bulletin.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Bulletin/archive/main.zip)
2. Log into Ghost, and go to the `Design` settings area to upload the zip file

# Development

Styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [pnpm](https://pnpm.io/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
pnpm install

# Run build & watch for changes
pnpm dev
```

Now you can edit…
