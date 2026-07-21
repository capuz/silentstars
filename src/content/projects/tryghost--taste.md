---
repo: "TryGhost/Taste"
name: "Taste"
description: "Recipe-focused Ghost theme for food publishers"
readmeQualityOk: true
url: "https://github.com/TryGhost/Taste"
language: "Handlebars"
languages: ["Handlebars", "CSS"]
languagePcts: [73, 21]
topics: ["ghost", "ghost-theme", "newsletter", "publishing"]
stars: 5
forks: 13
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 29
recentReleases: 0
createdAt: "2022-12-13T12:12:43Z"
lastCommitAt: "2026-07-21T06:10:46Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 77
undervaluedScore: 84
maintainers: ["renovate[bot]", "aileen", "cathysarisky"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae915e0de618b6fb84325bdff30ef8720adce471cfcc5b8aaf1fe9661334c230/TryGhost/Taste"
fundingLinks: ["GITHUB:https://github.com/TryGhost", "OPEN_COLLECTIVE:https://opencollective.com/ghost"]
---

# Taste

> [!IMPORTANT]
> This repo is synced automatically with the [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

Taste is a recipe-focused [Ghost](https://github.com/TryGhost/Ghost) theme for food publishers who want magazine-style sections, email signup prompts, and configurable homepage topics.

**Demo: https://taste.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Taste/archive/main.zip)
2. Log into Ghost, and go to the `Design` settings area to upload the zip file

# Development

Styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [pnpm](https://pnpm.io/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
pnpm install

# Run build & watch for changes
pnpm dev
```

Now you can edit `/assets/css/` or `/assets/js/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into…
