---
repo: "TryGhost/Ruby"
name: "Ruby"
description: "A multi-column theme with a unique card layout for Ghost"
readmeQualityOk: true
url: "https://github.com/TryGhost/Ruby"
homepage: "https://ruby.ghost.io/"
language: "Handlebars"
languages: ["Handlebars", "CSS"]
languagePcts: [65, 27]
topics: ["ghost", "ghost-theme", "publishing", "blogging", "magazine"]
stars: 67
forks: 61
openIssues: 0
closedIssues: 0
watchers: 12
contributors: 48
recentReleases: 0
createdAt: "2019-04-29T16:44:50Z"
lastCommitAt: "2026-07-21T06:10:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 77
undervaluedScore: 56
maintainers: ["renovate[bot]", "aileen", "cathysarisky"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e59e20b8c747ffff9f5e6dd67f27c7eea3bfcd44602438336d054d1896ebe56/TryGhost/Ruby"
fundingLinks: ["GITHUB:https://github.com/TryGhost", "OPEN_COLLECTIVE:https://opencollective.com/ghost"]
---

# Ruby

> [!IMPORTANT]
> This repo is synced automatically with the [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

A multi-column [Ghost](https://github.com/TryGhost/Ghost) theme with a unique card layout. Make your publication more organized with cards and widgets.

**Demo: https://ruby.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Ruby/archive/main.zip)
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

The `zip` Gulp task packages the theme files into `dist/ruby.zip`, which you can then upload to your site.…
