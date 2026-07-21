---
repo: "TryGhost/Digest"
name: "Digest"
description: "A newsletter theme for Ghost"
readmeQualityOk: true
url: "https://github.com/TryGhost/Digest"
homepage: "https://digest.ghost.io/"
language: "Handlebars"
languages: ["Handlebars", "CSS"]
languagePcts: [69, 25]
topics: ["ghost", "publishing", "ghost-theme", "newsletter"]
stars: 12
forks: 24
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 47
recentReleases: 0
createdAt: "2021-07-26T05:19:29Z"
lastCommitAt: "2026-07-21T06:10:46Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 77
undervaluedScore: 74
maintainers: ["renovate[bot]", "aileen", "cathysarisky"]
openGraphImageUrl: "https://opengraph.githubassets.com/350083fe9242baf15015bc4b763c700c36bcf4eeda794654f64177486fbdb631/TryGhost/Digest"
fundingLinks: ["GITHUB:https://github.com/TryGhost", "OPEN_COLLECTIVE:https://opencollective.com/ghost"]
---

# Digest

> [!IMPORTANT]
> This repo is synced automatically with the [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

A minimal newsletter theme for [Ghost](https://github.com/TryGhost/Ghost). This theme keeps your homepage dynamic and fresh by always displaying the latest issue you’ve published. From there, your audience can either navigate to the previous issue or see the archive of all the issues.

**Demo: https://digest.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Digest/archive/main.zip)
2. Log into Ghost, and go to the `Design` settings area to upload the zip file

# Development

Styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [pnpm](https://pnpm.io/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
pnpm install

# Run build & watch for changes
pnpm dev
```

Now you can edit `/assets/css/` files, which will be compiled to…
