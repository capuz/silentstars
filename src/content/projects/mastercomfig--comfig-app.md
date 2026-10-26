---
repo: "mastercomfig/comfig-app"
name: "comfig-app"
description: "The mastercomfig web app"
readmeQualityOk: true
url: "https://github.com/mastercomfig/comfig-app"
homepage: "https://comfig.app"
language: "Astro"
languages: ["Astro", "TypeScript"]
languagePcts: [48, 39]
topics: ["tf2", "tf2-config", "source-engine", "valve", "team-fortress-2", "hactoberfest"]
stars: 30
forks: 7
openIssues: 13
closedIssues: 29
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2020-06-02T15:18:47Z"
lastCommitAt: "2026-10-26T18:06:42Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 92
undervaluedScore: 60
maintainers: ["mastercoms"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a90c03cb238768c991e6b3c6212b23ca25d93096cd63e1a3a785328a0d28946/mastercomfig/comfig-app"
fundingLinks: ["GITHUB:https://github.com/mastercoms", "KO_FI:https://ko-fi.com/mastercoms", "LIBERAPAY:https://liberapay.com/mastercoms", "CUSTOM:https://comfig.app/support_me", "CUSTOM:https://steamcommunity.com/tradeoffer/new/?partner=85845165&token=M9cQHh8N"]
---

# comfig web app

The [web app](https://comfig.app/) for comfig.

## Color Scheme

We use [a material color scheme](https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=009688&secondary.color=00BFA5).

## Project Structure

You'll see the following folders and files:

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any Astro/React [components](https://docs.astro.build/en/core-concepts/astro-components/) are put in `src/components/`.

Astro [layouts](https://docs.astro.build/en/core-concepts/layouts/) are put in `src/layouts/`.

Any static assets, like images, scripts, CSS, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm install` | Installs dependencies…
