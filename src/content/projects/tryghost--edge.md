---
repo: "TryGhost/Edge"
name: "Edge"
description: "A visually aesthetic portfolio theme for Ghost"
readmeQualityOk: true
url: "https://github.com/TryGhost/Edge"
homepage: "https://edge.ghost.io/"
language: "Handlebars"
languages: ["Handlebars", "CSS"]
languagePcts: [62, 21]
topics: ["ghost", "ghost-theme", "publishing", "blogging", "magazine"]
stars: 96
forks: 46
openIssues: 0
closedIssues: 0
watchers: 11
contributors: 48
recentReleases: 0
createdAt: "2019-07-02T09:25:56Z"
lastCommitAt: "2026-07-21T06:10:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 77
undervaluedScore: 48
maintainers: ["renovate[bot]", "aileen", "cathysarisky"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0742d170a66fdb69d78495aaebac592702d4731b422978c58b9f5df12c0e3bb/TryGhost/Edge"
fundingLinks: ["GITHUB:https://github.com/TryGhost", "OPEN_COLLECTIVE:https://opencollective.com/ghost"]
---

# Edge

> [!IMPORTANT]
> This repo is synced automatically with the [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

A visually aesthetic [Ghost](https://github.com/TryGhost/Ghost) theme designed for creative professionals. Showcase your works with minimal style and presentation.

**Demo: https://edge.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Edge/archive/main.zip)
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

The `zip` Gulp task packages the theme files into `dist/edge.zip`, which you can then upload to…
