---
repo: "TryGhost/Dawn"
name: "Dawn"
description: "A minimal newsletter theme for Ghost"
readmeQualityOk: true
url: "https://github.com/TryGhost/Dawn"
homepage: "https://dawn.ghost.io/"
language: "Handlebars"
languages: ["Handlebars", "CSS"]
languagePcts: [56, 38]
topics: ["ghost", "ghost-theme", "publishing", "blogging", "magazine"]
stars: 300
forks: 231
openIssues: 0
closedIssues: 0
watchers: 28
contributors: 51
recentReleases: 0
createdAt: "2020-02-09T10:00:23Z"
lastCommitAt: "2026-07-21T06:10:46Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 77
undervaluedScore: 42
maintainers: ["renovate[bot]", "aileen", "cathysarisky"]
openGraphImageUrl: "https://opengraph.githubassets.com/6cf64f44ea2464576c40df81db8db2ac0b911e81915e213831b7c2c3caa0c52d/TryGhost/Dawn"
fundingLinks: ["GITHUB:https://github.com/TryGhost", "OPEN_COLLECTIVE:https://opencollective.com/ghost"]
---

# Dawn

> [!IMPORTANT]
> This repo is synced automatically with the [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

A highly functional [Ghost](https://github.com/TryGhost/Ghost) theme that adapts to the reader's preferences. Let them read, search, subscribe, navigate, and more with ease.

**Demo: https://dawn.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Dawn/archive/main.zip)
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

The `zip` Gulp task packages the theme files into `dist/dawn.zip`, which you can then…
