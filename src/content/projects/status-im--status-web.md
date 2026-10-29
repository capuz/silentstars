---
repo: "status-im/status-web"
name: "status-web"
description: "Packages for building user interfaces, websites, web applications, dapps, browser extensions, and APIs in the Status ecosystem."
readmeQualityOk: true
url: "https://github.com/status-im/status-web"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 104
forks: 53
openIssues: 33
closedIssues: 319
watchers: 7
contributors: 45
recentReleases: 0
createdAt: "2021-09-03T07:33:05Z"
lastCommitAt: "2026-10-29T12:25:50Z"
lastReleaseAt: "2023-06-29T12:04:50Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 50
maintainers: ["jinhojang6", "JulesFiliot", "markoburcul"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c0c899f65fd1196468cba7c7235b6a812278aae96b8920f95cee83ee192f683/status-im/status-web"
---

# status-web

Everything Status runs on the web lives in this monorepo: the status.app and Status Network
websites, the hub, portfolio and community dapps, the wallet and connector browser extensions, the
API the wallet reads from, plus the design tokens and components they share. It is one pnpm
workspace with Turborepo driving the builds.

## Apps

| App                                            | What it is                                                                        | Port |
| ---------------------------------------------- | --------------------------------------------------------------------------------- | ---- |
| [`apps/status.app`](https://github.com/status-im/status-web/blob/HEAD/apps/status.app)         | Marketing site, help centre, specs hub, blog and the admin screens behind them.   | 3001 |
| [`apps/get.status.app`](https://github.com/status-im/status-web/blob/HEAD/apps/get.status.app) | The download pages, cut out of status.app so they stay small.                     | 3005 |
| [`apps/status.network`](https://github.com/status-im/status-web/blob/HEAD/apps/status.network) | Status Network website; the blog comes from Ghost.                                |…
