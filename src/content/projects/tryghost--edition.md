---
repo: "TryGhost/Edition"
name: "Edition"
description: "The newsletter theme for Ghost"
readmeQualityOk: true
url: "https://github.com/TryGhost/Edition"
homepage: "https://edition.ghost.io/"
language: "JavaScript"
languages: ["JavaScript", "Handlebars"]
languagePcts: [64, 21]
topics: ["ghost", "ghost-theme", "publishing", "newsletter"]
stars: 84
forks: 112
openIssues: 0
closedIssues: 0
watchers: 14
contributors: 49
recentReleases: 0
createdAt: "2020-11-12T06:31:13Z"
lastCommitAt: "2026-07-21T06:10:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 77
undervaluedScore: 54
maintainers: ["renovate[bot]", "aileen", "cathysarisky"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b7ab3427b5ac133e480c1b986947e13da2d5768bf1cd2831e3653f2bf525093/TryGhost/Edition"
fundingLinks: ["GITHUB:https://github.com/TryGhost", "OPEN_COLLECTIVE:https://opencollective.com/ghost"]
---

# Edition

> [!IMPORTANT]
> This repo is synced automatically with the [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

The newsletter theme for [Ghost](https://github.com/TryGhost/Ghost). A beautiful way to share stories with your growing audience.

**Demo: https://edition.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Edition/archive/main.zip)
2. Log into Ghost, and go to the `Design` settings area to upload the zip file

# Development

Edition styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [pnpm](https://pnpm.io/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
pnpm install

# Run build & watch for changes
pnpm dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/edition.zip`, which you can then upload to your site.…
