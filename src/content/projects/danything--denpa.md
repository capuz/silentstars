---
repo: "danything/denpa"
name: "denpa"
description: "A TV recording server that works just by inserting a tuner. Linux, Mac, Windows, Kubernetes, from PT3 to PX-Q3U4, PX-S1UD. No configuration files needed, and you can watch both recordings and live TV on your browser."
originalDescription: "チューナーを挿すだけで動くテレビ録画サーバ。Linux・Mac・Windows・Kubernetes、PT3 から PX-Q3U4・PX-S1UD まで。設定ファイルは書かず、録画もライブもブラウザで観られる"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/danything/denpa"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [66]
topics: ["dtv", "typescript", "tv-recorder", "arib", "av1", "b-cas", "docker", "dotnet", "dvr", "epg"]
stars: 15
forks: 2
openIssues: 2
closedIssues: 8
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-07-24T16:21:20Z"
lastCommitAt: "2026-10-05T10:48:08Z"
lastReleaseAt: "2026-08-11T15:36:41Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 96
undervaluedScore: 53
maintainers: ["github-actions[bot]", "5ym", "doa-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6cfd6c7e1eabdc0b2e8452b28e492df7d71d3543740e387cddfb95354772c9a0/danything/denpa"
fundingLinks: ["KO_FI:https://ko-fi.com/yui5m"]
discussionCount: 0
---

# denpa

**A home TV recording server that works simply by inserting a tuner and starting it up**.
You don't need to write a single line of configuration file. The tuner type (terrestrial / satellite) is automatically distinguished.
For devices like PX-Q3U4, the drivers are included in the agent image, so nothing needs to be installed on the host.
After that, just press scan on the tuner screen. There's no need to set up Mirakurun or EDCB separately, and all settings you want to change can be changed from the screen.

Reservations are made simply by pressing from the program guide. Commercials are automatically skipped, and you can watch both live and recorded programs on your browser with subtitles and data broadcasting. For TV, you can download it with a dedicated app ([denpa-tv](https://github.com/danything/denpa-tv)) and watch it with your favorite player. You don't need a media server.

A list of screens is available at [docs/screens.md](https://github.com/danything/denpa/blob/HEAD/docs/screens.md) (actual device screens. Program guide, rules, tuner, settings, etc.).

## How it works

There are only **two components: tuner agent** (channel selection) and **denpa** (program…
