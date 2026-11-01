---
repo: "LegendApp/legend-spark"
name: "legend-spark"
description: "Native desktop application framework built on React Native and Expo Desktop"
readmeQualityOk: true
url: "https://github.com/LegendApp/legend-spark"
language: "TypeScript"
languages: ["TypeScript", "Objective-C++"]
languagePcts: [64, 22]
stars: 44
forks: 2
openIssues: 205
closedIssues: 140
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-09-12T15:17:48Z"
lastCommitAt: "2026-10-31T14:26:47Z"
lastReleaseAt: "2026-10-26T09:51:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 37
maintainers: ["jmeistrich", "sethwebster", "adelbeke"]
openGraphImageUrl: "https://opengraph.githubassets.com/e061e6cf7c8357fba04ee44a4b587c4ec3ff50471b38bc7308d3a0a16aba24cc/LegendApp/legend-spark"
---

# Legend Spark

Legend Spark is a full desktop framework built on React Native and Expo Desktop. Build native apps with menus, windows, filesystem access, drag and drop, keyboard shortcuts, rich text, and Liquid Glass—all from React. Your UI uses React Native's native renderer, and your application JavaScript runs in Hermes.

macOS 14+ (Apple Silicon) supported; Windows preview, not yet verified

## Quick start

Install Node 24.19.0 or newer, then create an app from the prerelease channel:

```sh
npm create @legendapp/spark@next MyApp
cd MyApp
npm run macos
```

Choose a channel explicitly with any supported package manager:

| Manager | Next preview | Latest |
| --- | --- | --- |
| npm | `npm create @legendapp/spark@next MyApp -- --next` | `npm create @legendapp/spark@latest MyApp -- --latest` |
| Bun | `bun create @legendapp/spark@next MyApp --next` | `bun create @legendapp/spark@latest MyApp --latest` |
| pnpm | `pnpm create @legendapp/spark MyApp --next` | `pnpm create @legendapp/spark MyApp --latest` |
| Yarn (including Yarn 1) | `yarn create @legendapp/spark MyApp --next` | `yarn create @legendapp/spark MyApp --latest` |

pnpm can drop the creator tag, and Yarn 1 cannot take…
