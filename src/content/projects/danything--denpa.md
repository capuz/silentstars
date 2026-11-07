---
repo: "danything/denpa"
name: "denpa"
description: "A home TV recording server that works as soon as you plug in a tuner and start it. No configuration file is needed. Reserve recordings from the program guide, commercials are skipped automatically, and you can watch live and recorded content in the browser with subtitles and data broadcasting. (For TV, use denpa-tv.) Runs on Linux, Mac, Windows, and Kubernetes."
originalDescription: "チューナーを挿して起動すれば使える、自宅用のテレビ録画サーバ。設定ファイルは書かず、番組表から予約、CM は自動で飛ばし、ライブも録画もブラウザで字幕・データ放送つきで観られる (テレビは denpa-tv)。Linux・Mac・Windows・Kubernetes で動く"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/danything/denpa"
homepage: "https://danything.github.io/denpa/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [70]
topics: ["dtv", "typescript", "tv-recorder", "arib", "av1", "b-cas", "docker", "dotnet", "dvr", "epg"]
stars: 80
forks: 12
openIssues: 2
closedIssues: 36
watchers: 1
contributors: 10
recentReleases: 3
createdAt: "2026-07-24T16:21:20Z"
lastCommitAt: "2026-11-07T10:36:54Z"
lastReleaseAt: "2026-08-11T15:36:41Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 42
maintainers: ["github-actions[bot]", "5ym", "doa-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c98ebd5708519c04696713b38630479cc1a263749d8b2f2cd98a51706763c4e4/danything/denpa"
fundingLinks: ["GITHUB:https://github.com/5ym", "KO_FI:https://ko-fi.com/yui5m"]
discussionCount: 3
---

# denpa

The documentation is also available at **[danything.github.io/denpa](https://danything.github.io/denpa/)**.

**A home TV recording server that works out of the box as soon as you plug in a tuner.**
No configuration file is needed. The tuner type (terrestrial / satellite) is detected automatically, and you just press scan on the screen.
You don't need Mirakurun, EDCB, or a media server. Reserve programs from the program guide, commercials are skipped automatically,
and you can watch both live and recorded content in the browser with subtitles and data broadcasting. For TV, use the dedicated app
[denpa-tv](https://github.com/danything/denpa-tv).

If you're upgrading from 1.x, first read [What changed in 2.0](https://github.com/danything/denpa/blob/HEAD/docs/v2.md) (screen locations and removed settings).

For the other screens (program guide, clips, search, rules, settings), see [docs/screens.md](https://github.com/danything/denpa/blob/HEAD/docs/screens.md).

## Scope of use

denpa is meant only for recording and watching **with your own B-CAS card, within your own household, privately**.

- Don't show recordings or live streams to people outside your household
- Don't…
