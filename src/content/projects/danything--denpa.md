---
repo: "danything/denpa"
name: "denpa"
description: "A home TV recording server that works as soon as you insert a tuner and start it. No configuration files are needed: it detects the tuner type (terrestrial or satellite) automatically, you reserve recordings from the program guide, commercials are skipped automatically, and you can watch live and recorded content in the browser with subtitles and data broadcasts (for TV, use denpa-tv). Runs on Linux, Mac, Windows, and Kubernetes."
originalDescription: "チューナーを挿して起動すれば使える、自宅用のテレビ録画サーバ。設定ファイルは書かず、番組表から予約、CM は自動で飛ばし、ライブも録画もブラウザで字幕・データ放送つきで観られる (テレビは denpa-tv)。Linux・Mac・Windows・Kubernetes で動く"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/danything/denpa"
homepage: "https://danything.github.io/denpa/"
language: "TypeScript"
languages: ["TypeScript", "C#"]
languagePcts: [65, 23]
topics: ["dtv", "typescript", "tv-recorder", "arib", "av1", "b-cas", "docker", "dotnet", "dvr", "epg"]
stars: 94
forks: 12
openIssues: 2
closedIssues: 62
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2026-07-24T16:21:20Z"
lastCommitAt: "2026-11-16T04:26:43Z"
lastReleaseAt: "2026-08-11T15:36:41Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 36
maintainers: ["5ym", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a24d0829b72d1f3f387138a042ed92918e46bc321b16d3f81460d8924640801/danything/denpa"
fundingLinks: ["GITHUB:https://github.com/5ym", "KO_FI:https://ko-fi.com/yui5m"]
discussionCount: 3
---

# denpa

The documentation is also available at **[danything.github.io/denpa](https://danything.github.io/denpa/)**.

**A home TV recording server that works right out of the box once you insert a tuner and start it.**
No configuration files are needed. The tuner type (terrestrial or satellite) is detected automatically, so you just press scan on the screen.
You don't need Mirakurun, EDCB, or a media server. Reserve recordings from the program guide, commercials are skipped automatically,
and you can watch both live and recorded content in the browser with subtitles and data broadcasts. For TV, use the dedicated app
[denpa-tv](https://github.com/danything/denpa-tv).

If you are upgrading from 1.x, read [what changed in 2.0](https://github.com/danything/denpa/blob/HEAD/docs/v2.md) first (screen locations and removed settings).

For the other screens (program guide, clips, search, rules, settings), see [docs/screens.md](https://github.com/danything/denpa/blob/HEAD/docs/screens.md).

## Scope of use

denpa is meant for recording and watching **privately, within your own household, with your own B-CAS card**.

- Do not show recordings or live streams to people outside your household
-…
