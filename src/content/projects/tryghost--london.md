---
repo: "TryGhost/London"
name: "London"
description: "A free, open source theme for Ghost"
readmeQualityOk: true
url: "https://github.com/TryGhost/London"
homepage: "https://london.ghost.io"
language: "Handlebars"
languages: ["Handlebars", "CSS"]
languagePcts: [72, 20]
topics: ["ghost", "ghost-theme", "publishing", "blogging", "magazine"]
stars: 263
forks: 158
openIssues: 0
closedIssues: 0
watchers: 18
contributors: 55
recentReleases: 0
createdAt: "2018-12-02T16:07:26Z"
lastCommitAt: "2026-07-21T06:10:46Z"
lastReleaseAt: "2018-12-30T22:38:47Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 77
undervaluedScore: 41
maintainers: ["renovate[bot]", "aileen", "cathysarisky"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e59e20b8c747ffff9f5e6dd67f27c7eea3bfcd44602438336d054d1896ebe56/TryGhost/London"
fundingLinks: ["GITHUB:https://github.com/TryGhost", "OPEN_COLLECTIVE:https://opencollective.com/ghost"]
---

# London

> [!IMPORTANT]
> This repo is synced automatically with the [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

A custom, image-centric theme for [Ghost](https://github.com/TryGhost/Ghost). Made for publishers and portfolios with plenty of graphics to show off to the world.

**Demo: https://london.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/London/archive/main.zip)
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

The `zip` Gulp task packages the theme files into `dist/london.zip`, which you can then…
