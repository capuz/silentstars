---
repo: "TryGhost/Ease"
name: "Ease"
description: "A minimal documentation theme for Ghost"
readmeQualityOk: true
url: "https://github.com/TryGhost/Ease"
homepage: "https://ease.ghost.io/"
language: "Handlebars"
languages: ["Handlebars", "CSS"]
languagePcts: [59, 31]
topics: ["ghost", "ghost-theme", "publishing", "blogging", "magazine"]
stars: 89
forks: 57
openIssues: 0
closedIssues: 0
watchers: 13
contributors: 48
recentReleases: 0
createdAt: "2019-05-16T13:53:11Z"
lastCommitAt: "2026-07-21T06:10:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 77
undervaluedScore: 50
maintainers: ["renovate[bot]", "aileen", "cathysarisky"]
openGraphImageUrl: "https://opengraph.githubassets.com/79935c5c81d4debf66655bc3eb7e11aa54b3008dd833519fcbca99c26ed09c6b/TryGhost/Ease"
fundingLinks: ["GITHUB:https://github.com/TryGhost", "OPEN_COLLECTIVE:https://opencollective.com/ghost"]
---

# Ease

> [!IMPORTANT]
> This repo is synced automatically with the [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

A versatile [Ghost](https://github.com/TryGhost/Ghost) theme suitable for documentation. Publish your posts or business information with ease.

**Demo: https://ease.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Ease/archive/main.zip)
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

The `zip` Gulp task packages the theme files into `dist/ease.zip`, which you can then upload to your site.

```bash…
