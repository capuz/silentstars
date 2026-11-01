---
repo: "danything/denpa"
name: "denpa"
description: "A TV recording server that works just by plugging in a tuner. Runs on Linux, Mac, Windows, and Kubernetes, with support from PT3 to PX-Q3U4 and PX-S1UD. No config files needed; recording and live viewing both work in the browser."
originalDescription: "チューナーを挿すだけで動くテレビ録画サーバ。Linux・Mac・Windows・Kubernetes、PT3 から PX-Q3U4・PX-S1UD まで。設定ファイルは書かず、録画もライブもブラウザで観られる"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/danything/denpa"
homepage: "https://danything.github.io/denpa/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [71]
topics: ["dtv", "typescript", "tv-recorder", "arib", "av1", "b-cas", "docker", "dotnet", "dvr", "epg"]
stars: 69
forks: 11
openIssues: 4
closedIssues: 21
watchers: 1
contributors: 9
recentReleases: 10
createdAt: "2026-07-24T16:21:20Z"
lastCommitAt: "2026-11-01T10:44:51Z"
lastReleaseAt: "2026-08-11T15:36:41Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 42
maintainers: ["5ym", "github-actions[bot]", "doa-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/00fa205be8a1047b625c8a084be6f472b24575e604c5d3eceb406cd3f6cb4702/danything/denpa"
fundingLinks: ["GITHUB:https://github.com/5ym", "KO_FI:https://ko-fi.com/yui5m"]
discussionCount: 3
---

# denpa

The documentation is also available at **[danything.github.io/denpa](https://danything.github.io/denpa/)**.

**A home TV recording server that's ready to use as soon as you plug in a tuner and start it.**
No configuration files are needed. The tuner type (terrestrial / satellite) is detected automatically, and you just press Scan on the screen.
Mirakurun, EDCB, and media servers are not required. You can reserve recordings from the program guide, commercials are skipped automatically,
and both live and recorded content can be watched in the browser with subtitles and data broadcasting. For TV, use the dedicated app [denpa-tv](https://github.com/danything/denpa-tv).

If you're upgrading from 1.x, first read [what changed in 2.0](https://github.com/danything/denpa/blob/HEAD/docs/v2.md) (screen locations and removed settings).

For the other screens (program guide, clips, search, rules, settings), see [docs/screens.md](https://github.com/danything/denpa/blob/HEAD/docs/screens.md).

## Scope of use

denpa is intended for recording and watching **with your own B-CAS card, within your own household, for private use**.

- Do not let anyone outside your household watch recordings…
