---
repo: "TryGhost/Journal"
name: "Journal"
description: "A newsletter theme for Ghost"
readmeQualityOk: true
url: "https://github.com/TryGhost/Journal"
homepage: "https://journal.ghost.io/"
language: "Handlebars"
languages: ["Handlebars", "CSS"]
languagePcts: [68, 26]
topics: ["ghost", "publishing", "ghost-theme", "newsletter"]
stars: 66
forks: 106
openIssues: 0
closedIssues: 0
watchers: 16
contributors: 47
recentReleases: 0
createdAt: "2021-07-26T05:57:02Z"
lastCommitAt: "2026-07-21T06:10:46Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 77
undervaluedScore: 56
maintainers: ["renovate[bot]", "aileen", "cathysarisky"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9dfb88615fb4ce409a461a4c4e3154507275ff3599ae509162e1522dc91e04e/TryGhost/Journal"
fundingLinks: ["GITHUB:https://github.com/TryGhost", "OPEN_COLLECTIVE:https://opencollective.com/ghost"]
---

# Journal

> [!IMPORTANT]
> This repo is synced automatically with the [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

A minimal, typography-heavy newsletter theme for [Ghost](https://github.com/TryGhost/Ghost).

**Demo: https://journal.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Journal/archive/main.zip)
2. Log into Ghost, and go to the `Design` settings area to upload the zip file

# Development

Styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [pnpm](https://pnpm.io/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
pnpm install

# Run build & watch for changes
pnpm dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/journal.zip`, which you can then upload to your site.

```bash
pnpm zip
```

## Theme translations…
