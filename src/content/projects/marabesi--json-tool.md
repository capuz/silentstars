---
repo: "marabesi/json-tool"
name: "json-tool"
description: "json-tool the privacy first tool that allows you to quick format json, everything runs locally."
readmeQualityOk: true
url: "https://github.com/marabesi/json-tool"
homepage: "https://marabesi.github.io/json-tool"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["json", "productivity", "snap", "utility", "reactjs"]
stars: 9
forks: 2
openIssues: 5
closedIssues: 21
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-08-03T06:13:22Z"
lastCommitAt: "2026-10-31T15:58:18Z"
lastReleaseAt: "2021-11-28T13:43:59Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 94
undervaluedScore: 76
maintainers: ["dependabot[bot]", "marabesi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/392210945/6c20ed3a-ab5f-45a3-9a44-3105d3a3f03b"
fundingLinks: ["GITHUB:https://github.com/marabesi", "BUY_ME_A_COFFEE:https://buymeacoffee.com/marabesi"]
discussionCount: 1
---

Are you tired of accessing **free websites just to format your json content**? Me too. Besides the "data protection"
issue sometimes we just want to have it formatted to move on.

According to [ThoughtWorks in the tech radar 27 (item 76 under **Tools**)](https://www.thoughtworks.com/content/dam/thoughtworks/documents/radar/2022/10/tr_technology_radar_vol_27_en.pdf) developers should hold
the practice of formatting or sharing information in formatting tools that are not complying with data jurisdiction.

# Try out the [online version (source code server is from branch gh-pages)](https://marabesi.github.io/json-tool)!

# Documentation

The full documentation lives at **[marabesi.github.io/json-tool/docs](https://marabesi.github.io/json-tool/docs)**.
Its source is in the [`docs/`](https://github.com/marabesi/json-tool/blob/HEAD/docs) folder and it is built with
[VitePress](https://vitepress.dev/):

```sh
pnpm docs:dev    # start the docs dev server
pnpm docs:build  # build the docs into public/docs
```

The screenshots in the user manual are generated automatically with
[Playwright](https://playwright.dev/) and saved to `docs/public/screenshots/`:

```sh
pnpm docs:screenshots  #…
