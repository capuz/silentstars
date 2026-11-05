---
repo: "danything/denpa"
name: "denpa"
description: "A home TV recording server that works as soon as you plug in a tuner and start it. No config files are needed: from the program guide you can make reservations, commercials are skipped automatically, and both live and recorded shows can be watched in the browser with subtitles and data broadcasts. (For TV, use denpa-tv.) Runs on Linux, Mac, Windows, and Kubernetes."
originalDescription: "チューナーを挿して起動すれば使える、自宅用のテレビ録画サーバ。設定ファイルは書かず、番組表から予約、CM は自動で飛ばし、ライブも録画もブラウザで字幕・データ放送つきで観られる (テレビは denpa-tv)。Linux・Mac・Windows・Kubernetes で動く"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/danything/denpa"
homepage: "https://danything.github.io/denpa/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [69]
topics: ["dtv", "typescript", "tv-recorder", "arib", "av1", "b-cas", "docker", "dotnet", "dvr", "epg"]
stars: 77
forks: 12
openIssues: 3
closedIssues: 30
watchers: 1
contributors: 9
recentReleases: 7
createdAt: "2026-07-24T16:21:20Z"
lastCommitAt: "2026-11-05T08:05:47Z"
lastReleaseAt: "2026-08-11T15:36:41Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 42
maintainers: ["5ym", "github-actions[bot]", "doa-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9b7ad4c3d1111c223d0d0718f9da5f2f01e3c5d0b7d835c20e3b775efd6dc5c/danything/denpa"
fundingLinks: ["GITHUB:https://github.com/5ym", "KO_FI:https://ko-fi.com/yui5m"]
discussionCount: 3
---

# denpa

The documentation is also available at **[danything.github.io/denpa](https://danything.github.io/denpa/)**.

**A home TV recording server that works right away once you plug in a tuner and start it.**
No config files are needed. The tuner type (terrestrial / satellite) is detected automatically, so you just press scan on the screen.
Mirakurun, EDCB, and media servers are not required. Make reservations from the program guide, commercials are skipped automatically,
and you can watch both live and recorded programs in the browser with subtitles and data broadcasts. For TV, use the dedicated app
[denpa-tv](https://github.com/danything/denpa-tv).

If you are upgrading from 1.x, first read [what changed in 2.0](https://github.com/danything/denpa/blob/HEAD/docs/v2.md) (screen locations and removed settings).

For the other screens (program guide, clips, search, rules, settings), see [docs/screens.md](https://github.com/danything/denpa/blob/HEAD/docs/screens.md).

## Scope of use

denpa is for recording and watching **with your own B-CAS card, within your own household, for private use**.

- Do not show recordings or live streams to people outside your household
- Do not…
