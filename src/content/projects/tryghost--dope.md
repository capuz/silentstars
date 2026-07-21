---
repo: "TryGhost/Dope"
name: "Dope"
description: "A unique tag-based theme for Ghost"
readmeQualityOk: true
url: "https://github.com/TryGhost/Dope"
homepage: "https://dope.ghost.io/"
language: "Handlebars"
languages: ["Handlebars", "CSS"]
languagePcts: [53, 36]
topics: ["ghost", "ghost-theme", "publishing", "blogging", "magazine"]
stars: 58
forks: 40
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 47
recentReleases: 0
createdAt: "2019-04-23T10:09:03Z"
lastCommitAt: "2026-07-21T06:10:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 77
undervaluedScore: 55
maintainers: ["renovate[bot]", "aileen", "cathysarisky"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae764172c99ff13b3df9f61f9c1b4e6d77ac75962a92a393e51a03d9e13d8cf6/TryGhost/Dope"
fundingLinks: ["GITHUB:https://github.com/TryGhost", "OPEN_COLLECTIVE:https://opencollective.com/ghost"]
---

# Dope

> [!IMPORTANT]
> This repo is synced automatically with the [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

A unique tag-based [Ghost](https://github.com/TryGhost/Ghost) theme to arrange your publications into collections. Keep organized and let your readers explore your publications with beautifully designed tag columns.

**Demo: https://dope.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Dope/archive/main.zip)
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

The `zip` Gulp task packages the theme…
