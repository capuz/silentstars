---
repo: "loopwerk/loopwerk.io"
name: "loopwerk.io"
description: "The loopwerk.io website"
readmeQualityOk: true
url: "https://github.com/loopwerk/loopwerk.io"
homepage: "https://loopwerk.io"
language: "Swift"
languages: ["Swift"]
languagePcts: [80]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2015-12-11T18:51:36Z"
lastCommitAt: "2026-11-08T14:14:23Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 89
undervaluedScore: 73
maintainers: ["kevinrenskers"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0460c3c629ac7541c230805e7ac5d92d57d268addb46d4db222d2a1817c09bb/loopwerk/loopwerk.io"
fundingLinks: ["GITHUB:https://github.com/loopwerk", "BUY_ME_A_COFFEE:https://buymeacoffee.com/loopwerk"]
---

# loopwerk.io
The source of loopwerk.io, a static website generated with [Saga](https://github.com/loopwerk/Saga).

## Getting started
1. `git clone git@github.com:loopwerk/loopwerk.io.git`
2. `cd loopwerk.io`
3. `open Package.swift`

A standard build from Xcode or the command line (`saga dev`) skips the article images creation step, since it's rather slow. `saga build` does run this step.

## Development server with auto reload
```shell-session
$ brew install loopwerk/tap/saga
$ saga dev
```

Or if you use `just`: 

```shell-session
$ just run
```

This builds and serves the website. It then watches for changes in the `content` and `Sources` folders, recreates the website, and refreshes the browser.

## License
This repository is **not open source**.

The source is publicly available for educational purposes only, so others can learn how to build a website using [Saga](https://github.com/loopwerk/Saga).

All code, design, layout, and content are the intellectual property of Loopwerk and may not be reused, modified, or redistributed.
