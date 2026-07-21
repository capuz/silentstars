---
repo: "TryGhost/Solo"
name: "Solo"
description: "A personal theme for Ghost"
readmeQualityOk: true
url: "https://github.com/TryGhost/Solo"
homepage: "https://solo.ghost.io"
language: "Handlebars"
languages: ["Handlebars", "CSS"]
languagePcts: [57, 37]
topics: ["blog", "ghost", "ghost-theme", "newsletter", "personal"]
stars: 49
forks: 78
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 48
recentReleases: 0
createdAt: "2022-09-12T11:20:35Z"
lastCommitAt: "2026-07-21T06:10:46Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 77
undervaluedScore: 60
maintainers: ["renovate[bot]", "aileen", "cathysarisky"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe0bcbcde3b6aded3a69678921eef0617b79235ac0d01b4ca3abd3b94b25e8ab/TryGhost/Solo"
fundingLinks: ["GITHUB:https://github.com/TryGhost", "OPEN_COLLECTIVE:https://opencollective.com/ghost"]
---

# Solo

> [!IMPORTANT]
> This repo is synced automatically with the [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

Solo is a minimal theme for [Ghost](https://github.com/TryGhost/Ghost) focused on showcasing the work of an individual writer or creator. This theme is highly customizable, with a few simple settings that allow you to quickly apply your own personal style to your site.

**Demo: https://solo.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Solo/archive/main.zip)
2. Log into Ghost, and go to the `Design` settings area to upload the zip file

# Development

Styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [pnpm](https://pnpm.io/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
pnpm install

# Run build & watch for changes
pnpm dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/`…
