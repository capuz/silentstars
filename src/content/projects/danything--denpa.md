---
repo: "danything/denpa"
name: "denpa"
description: "A TV recording server that works just by plugging in a tuner. Linux, Mac, Windows, and Kubernetes; from PT3 to PX-Q3U4 and PX-S1UD. No configuration files needed, and recording and live viewing both work in the browser."
originalDescription: "チューナーを挿すだけで動くテレビ録画サーバ。Linux・Mac・Windows・Kubernetes、PT3 から PX-Q3U4・PX-S1UD まで。設定ファイルは書かず、録画もライブもブラウザで観られる"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/danything/denpa"
homepage: "https://danything.github.io/denpa/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [70]
topics: ["dtv", "typescript", "tv-recorder", "arib", "av1", "b-cas", "docker", "dotnet", "dvr", "epg"]
stars: 67
forks: 10
openIssues: 2
closedIssues: 21
watchers: 1
contributors: 8
recentReleases: 10
createdAt: "2026-07-24T16:21:20Z"
lastCommitAt: "2026-10-31T07:45:12Z"
lastReleaseAt: "2026-08-11T15:36:41Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 43
maintainers: ["5ym", "github-actions[bot]", "doa-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/87b0f80634f23bf283ad27f7acb5ba145843f7a820310cfef763b4a6f1f7a379/danything/denpa"
fundingLinks: ["GITHUB:https://github.com/5ym", "KO_FI:https://ko-fi.com/yui5m"]
discussionCount: 3
---

# denpa

The documentation is also available at **[danything.github.io/denpa](https://danything.github.io/denpa/)**.

**A home TV recording server that works as soon as you plug in a tuner and start it.**
No configuration files. The tuner type (terrestrial / satellite) is detected automatically, and then you just press scan on the screen.
You don't need Mirakurun, EDCB, or a media server. Reserve recordings from the program guide, commercials are skipped automatically,
and you can watch both live and recorded programs in the browser with subtitles and data broadcasts. For TV, use the dedicated app
[denpa-tv](https://github.com/danything/denpa-tv).

If you are upgrading from 1.x, read [what changed in 2.0](https://github.com/danything/denpa/blob/HEAD/docs/v2.md) first (screen locations and removed settings).

For the other screens (program guide, search, rules, settings), see [docs/screens.md](https://github.com/danything/denpa/blob/HEAD/docs/screens.md).

## Scope of use

denpa is intended for recording and watching **privately, within your own household, using your own B-CAS card**.

- Do not let people outside your household watch recordings or live streams
- Do not distribute…
