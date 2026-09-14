---
repo: "MoLow/reporters"
name: "reporters"
description: "A collection of reporters for `node:test`"
readmeQualityOk: true
url: "https://github.com/MoLow/reporters"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
stars: 62
forks: 8
openIssues: 2
closedIssues: 17
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2022-12-11T00:01:01Z"
lastCommitAt: "2026-09-14T09:12:22Z"
lastReleaseAt: "2023-02-28T11:04:45Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 51
maintainers: ["MoLow", "pr-opener-bot[bot]", "mdkitzman"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c54f672a60ed78b337aead653426d6d01ba451cadc98fccfe617e2521da63b0/MoLow/reporters"
fundingLinks: ["GITHUB:https://github.com/MoLow"]
---

[](https://codecov.io/gh/MoLow/reporters)

# reporters

Everything the built-in `node:test` reporters don't do: live interactive trees,
browser-viewable runs you can share by link, GitHub Actions annotations, an
interactive watch REPL, bail-on-failure, the whole mocha reporter ecosystem —
and a multiplexer that picks the right ones per environment, so one
`--test-reporter` flag covers your laptop and your CI.

That `report at` link is [`@reporters/web`](https://github.com/MoLow/reporters/blob/HEAD/packages/web)'s run being delivered
— it opens as an interactive tree in the browser
(**[live demo](https://molow.github.io/reporters/?src=https://raw.githubusercontent.com/MoLow/reporters/5393ed7b104f42d90bb930ad89854d8fdff6785b/packages/web/assets/demo-run.ndjson)**):

## TL;DR — what you probably want

Register [`@reporters/mux`](https://github.com/MoLow/reporters/blob/HEAD/packages/mux) once and let a config decide per
environment: a live interactive tree while developing, a GitHub-annotated log
plus a shareable browser report in CI.

```bash
npm i -D @reporters/mux @reporters/live @reporters/gh @reporters/web @reporters/sink
```

```js
// mux.config.mjs
import { httpServer } from…
