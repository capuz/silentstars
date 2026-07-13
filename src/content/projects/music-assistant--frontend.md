---
repo: "music-assistant/frontend"
name: "frontend"
description: "Repository hosting the source of the (Vue3) frontend of Music Assistant"
readmeQualityOk: true
url: "https://github.com/music-assistant/frontend"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [59, 40]
stars: 78
forks: 102
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 63
recentReleases: 0
createdAt: "2022-08-23T13:54:24Z"
lastCommitAt: "2026-07-13T06:39:42Z"
lastReleaseAt: "2023-08-03T00:48:21Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 90
undervaluedScore: 53
maintainers: ["marcelveldt", "MarvinSchenkel", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b018dc5ef13d09378704ac1ce2e57126e08f4bb699df8106f23817d4e0d3449/music-assistant/frontend"
fundingLinks: ["CUSTOM:https://www.openhomefoundation.org"]
---

# Music Assistant frontend (Vue PWA)

The Music Assistant frontend/panel is developed in Vue, development instructions below.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command…
