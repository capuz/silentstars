---
repo: "TryGhost/Alto"
name: "Alto"
description: "A clean, minimalist theme featuring a light and dark mode for Ghost"
readmeQualityOk: true
url: "https://github.com/TryGhost/Alto"
homepage: "https://alto.ghost.io/"
language: "Handlebars"
languages: ["Handlebars", "CSS"]
languagePcts: [61, 30]
topics: ["ghost", "ghost-theme", "publishing", "blogging", "magazine"]
stars: 125
forks: 116
openIssues: 0
closedIssues: 0
watchers: 15
contributors: 49
recentReleases: 0
createdAt: "2019-04-23T10:06:38Z"
lastCommitAt: "2026-07-21T06:10:46Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 77
undervaluedScore: 50
maintainers: ["renovate[bot]", "aileen", "cathysarisky"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b7ab3427b5ac133e480c1b986947e13da2d5768bf1cd2831e3653f2bf525093/TryGhost/Alto"
fundingLinks: ["GITHUB:https://github.com/TryGhost", "OPEN_COLLECTIVE:https://opencollective.com/ghost"]
---

# Alto

> [!IMPORTANT]
> This repo is synced automatically with the [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

A clean, minimalist [Ghost](https://github.com/TryGhost/Ghost) theme featuring a light and dark mode. Launch your online publications with flair.

**Demo: https://alto.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Alto/archive/main.zip)
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

The `zip` Gulp task packages the theme files into `dist/alto.zip`, which you can then upload to your site.…
