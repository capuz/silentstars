---
repo: "TryGhost/Wave"
name: "Wave"
description: "A podcast theme for Ghost"
readmeQualityOk: true
url: "https://github.com/TryGhost/Wave"
homepage: "https://wave.ghost.io/"
language: "Handlebars"
languages: ["Handlebars", "CSS"]
languagePcts: [63, 26]
topics: ["ghost", "ghost-theme", "publishing", "blogging", "magazine"]
stars: 83
forks: 42
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 54
recentReleases: 0
createdAt: "2019-12-01T14:21:00Z"
lastCommitAt: "2026-07-21T06:10:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 77
undervaluedScore: 50
maintainers: ["renovate[bot]", "aileen", "cathysarisky"]
openGraphImageUrl: "https://opengraph.githubassets.com/446b3c242c8d6cc04a9aa3e506811522c78587a127e1514928d4adb9e799053f/TryGhost/Wave"
fundingLinks: ["GITHUB:https://github.com/TryGhost", "OPEN_COLLECTIVE:https://opencollective.com/ghost"]
---

# Wave

> [!IMPORTANT]
> This repo is synced automatically with the [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

Wave is a [Ghost](https://github.com/TryGhost/Ghost) theme dedicated to podcasters. Share your voice and words with your audience.

**Demo: https://wave.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Wave/archive/main.zip)
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

The `zip` Gulp task packages the theme files into `dist/wave.zip`, which you can then upload to your site.

```bash
pnpm zip
```…
