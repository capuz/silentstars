---
repo: "danything/denpa"
name: "denpa"
description: "A TV recording server that works just by plugging in a tuner. Runs on Linux, Mac, Windows, and Kubernetes, from PT3 to PX-Q3U4 and PX-S1UD. No configuration files are needed, and both recording and live viewing work in the browser."
originalDescription: "チューナーを挿すだけで動くテレビ録画サーバ。Linux・Mac・Windows・Kubernetes、PT3 から PX-Q3U4・PX-S1UD まで。設定ファイルは書かず、録画もライブもブラウザで観られる"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/danything/denpa"
homepage: "https://danything.github.io/denpa/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
topics: ["dtv", "typescript", "tv-recorder", "arib", "av1", "b-cas", "docker", "dotnet", "dvr", "epg"]
stars: 42
forks: 7
openIssues: 1
closedIssues: 18
watchers: 1
contributors: 7
recentReleases: 10
createdAt: "2026-07-24T16:21:20Z"
lastCommitAt: "2026-10-25T08:40:56Z"
lastReleaseAt: "2026-08-11T15:36:41Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 48
maintainers: ["5ym", "github-actions[bot]", "doa-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3bc6b76013e3ffc6d94d61e663df5820b51b894b47d9ac22557221557c3ab1f0/danything/denpa"
fundingLinks: ["GITHUB:https://github.com/5ym", "KO_FI:https://ko-fi.com/yui5m"]
discussionCount: 1
---

# denpa

The documentation is also available at **[danything.github.io/denpa](https://danything.github.io/denpa/)**.

**A home TV recording server that works as soon as you plug in a tuner and start it.**
No configuration files. The tuner type (terrestrial / satellite) is detected automatically, and you just press scan on the screen.
You don't need Mirakurun, EDCB, or a media server. Reserve from the program guide, and CMs are skipped automatically.
Both live and recorded programs can be watched in the browser with subtitles and data broadcasting. For TV, use the dedicated app [denpa-tv](https://github.com/danything/denpa-tv).

If you're upgrading from 1.x, read [what changed in 2.0](https://github.com/danything/denpa/blob/HEAD/docs/v2.md) first (screen locations and removed settings).

For the other screens (program guide, search, rules, settings), see [docs/screens.md](https://github.com/danything/denpa/blob/HEAD/docs/screens.md).

## Scope of use

denpa is meant for recording and watching **privately, within your own household, using your own B-CAS card**.

- Don't let anyone outside the household watch recordings or live streams.
- Don't distribute the card's keys to devices…
