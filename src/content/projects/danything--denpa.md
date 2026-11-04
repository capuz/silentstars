---
repo: "danything/denpa"
name: "denpa"
description: "A home TV recording server that works as soon as you plug in a tuner and start it. No configuration file is needed: schedule from the program guide, commercials are skipped automatically, and live and recorded programs can be watched in the browser with subtitles and data broadcasts (for TV, use denpa-tv). Runs on Linux, Mac, Windows, and Kubernetes."
originalDescription: "チューナーを挿して起動すれば使える、自宅用のテレビ録画サーバ。設定ファイルは書かず、番組表から予約、CM は自動で飛ばし、ライブも録画もブラウザで字幕・データ放送つきで観られる (テレビは denpa-tv)。Linux・Mac・Windows・Kubernetes で動く"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/danything/denpa"
homepage: "https://danything.github.io/denpa/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [70]
topics: ["dtv", "typescript", "tv-recorder", "arib", "av1", "b-cas", "docker", "dotnet", "dvr", "epg"]
stars: 75
forks: 11
openIssues: 3
closedIssues: 26
watchers: 1
contributors: 9
recentReleases: 9
createdAt: "2026-07-24T16:21:20Z"
lastCommitAt: "2026-11-04T02:57:53Z"
lastReleaseAt: "2026-08-11T15:36:41Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 42
maintainers: ["5ym", "github-actions[bot]", "doa-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/796fecb3830f1e59606850d6dfdc6ee6ca7df5b0a2f8e1480a1d0c80043df7de/danything/denpa"
fundingLinks: ["GITHUB:https://github.com/5ym", "KO_FI:https://ko-fi.com/yui5m"]
discussionCount: 3
---

# denpa

The documentation is also available at **[danything.github.io/denpa](https://danything.github.io/denpa/)**.

**A home TV recording server that works as soon as you plug in a tuner and start it.**
No configuration file is needed. The tuner type (terrestrial / satellite) is detected automatically, and then you just press scan on the screen.
You don't need Mirakurun, EDCB, or a media server. Schedule recordings from the program guide, commercials are skipped automatically,
and live and recorded programs can be watched in the browser with subtitles and data broadcasts. For TV, use the dedicated app
[denpa-tv](https://github.com/danything/denpa-tv).

If you are upgrading from 1.x, first read [What changed in 2.0](https://github.com/danything/denpa/blob/HEAD/docs/v2.md) (screen locations and removed settings).

For the other screens (program guide, clips, search, rules, settings), see [docs/screens.md](https://github.com/danything/denpa/blob/HEAD/docs/screens.md).

## Permitted use

denpa is meant for recording and watching privately, **within your own household, using your own B-CAS card**.

- Do not show recordings or live streams to people outside your household
- Do not…
