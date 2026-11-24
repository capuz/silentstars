---
repo: "anbola/tvbox"
name: "tvbox"
description: "TVBox multi-repo subscription configuration (on-demand + live sources), long-term stable hosting"
originalDescription: "TVBox 多仓订阅配置（点播+直播源），长期稳定托管"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/anbola/tvbox"
homepage: "https://anbola.github.io/tvbox/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-25T00:55:02Z"
lastCommitAt: "2026-11-24T14:06:45Z"
status: "thriving"
tags: []
healthScore: 70
undervaluedScore: 43
maintainers: ["anbola", "bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/10be4a60c1d705da4300549de770f931f3f8acb137963d99a4b8e465ebf3b721/anbola/tvbox"
---

# TVBox Configuration —— Shaanxi Mobile Broadband Optimized Edition

> Customized for "Shaanxi Shangluo · China Mobile Broadband · TV-side TVBox".
> All sources are sorted by **the bitrates measured on this broadband connection**, not randomly copied public sources.

---

## 📌 Current Version v3.3（2026-11-24）

**The truth about live-stream "slowness" (measured)**: The streams themselves start instantly. `dbiptv.sn.chinamobile.com` has a first packet of 124ms plus a first segment of 417ms, for 0.54s total. Across 105 channels, the first-entry P50 is 119ms and P90 is 173ms.
If it feels slow, the delay is **the m3u list download when opening the live page** (GitHub jitter of 1–4 seconds), not playback stalling.
China Mobile Shaanxi OTTX multicast (239.10.3.x) is an intranet range and is unreachable from the public internet. Playing it requires a bridged optical modem multicast VLAN plus an always-on soft router running udpxy, which a home TV connected directly cannot use.
