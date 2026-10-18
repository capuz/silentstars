---
repo: "danything/denpa"
name: "denpa"
description: "A TV recording server that works just by plugging in a tuner. Linux, Mac, Windows, Kubernetes; from PT3 to PX-Q3U4 and PX-S1UD. No configuration files needed; you can watch both recordings and live TV in the browser."
originalDescription: "チューナーを挿すだけで動くテレビ録画サーバ。Linux・Mac・Windows・Kubernetes、PT3 から PX-Q3U4・PX-S1UD まで。設定ファイルは書かず、録画もライブもブラウザで観られる"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/danything/denpa"
homepage: "https://danything.github.io/denpa/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [72]
topics: ["dtv", "typescript", "tv-recorder", "arib", "av1", "b-cas", "docker", "dotnet", "dvr", "epg"]
stars: 29
forks: 5
openIssues: 1
closedIssues: 16
watchers: 1
contributors: 7
recentReleases: 10
createdAt: "2026-07-24T16:21:20Z"
lastCommitAt: "2026-10-18T08:18:40Z"
lastReleaseAt: "2026-08-11T15:36:41Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 51
maintainers: ["5ym", "github-actions[bot]", "doa-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bb5941ed1cbd65f25f4b5ee7ddb3905233fb4c0b51845a0d8c91be9b3b9c0b8/danything/denpa"
fundingLinks: ["GITHUB:https://github.com/5ym", "KO_FI:https://ko-fi.com/yui5m"]
discussionCount: 1
---

# denpa

The documentation is also available at **[danything.github.io/denpa](https://danything.github.io/denpa/)**.

**A home TV recording server that works as soon as you plug in a tuner and start it.** No configuration files are needed. It automatically identifies the tuner type (terrestrial / satellite), so all you have to do is press Scan on the screen. You don't need Mirakurun, EDCB, or a media server. Reserve recordings from the program guide, CM segments are skipped automatically, and you can watch live and recorded programs in the browser with subtitles and data broadcasting. For TV viewing, use the dedicated app [denpa-tv](https://github.com/danything/denpa-tv).

For the other screens (program guide, "Rules", tuners, settings), see [docs/screens.md](https://github.com/danything/denpa/blob/HEAD/docs/screens.md).

## Permitted use

denpa is intended for recording and watching **with your own B-CAS card, within your own household, for private use**.

- Do not let people outside your household watch live or recorded content
- Do not distribute the card's keys to devices outside your household
- Do not rewrite the card

The thinking behind this is summarized in [Discussion…
