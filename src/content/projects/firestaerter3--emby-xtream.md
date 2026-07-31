---
repo: "firestaerter3/emby-xtream"
name: "emby-xtream"
description: "Emby Server plugin for Xtream-compatible IPTV — Live TV, VOD Movies, Series, EPG, and built-in dashboard"
readmeQualityOk: true
url: "https://github.com/firestaerter3/emby-xtream"
language: "C#"
languages: ["C#"]
languagePcts: [70]
stars: 41
forks: 16
openIssues: 1
closedIssues: 37
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-02-17T14:45:48Z"
lastCommitAt: "2026-07-31T06:30:29Z"
lastReleaseAt: "2026-02-19T21:54:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 42
maintainers: ["firestaerter3", "techpg22", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/b090766d98e27151972ac44a2e4d48f877cb8b77a9155fd4dcfededc40ababd2/firestaerter3/emby-xtream"
---

</p>

<h1 align="center">Xtream Tuner</h1>

  An Emby Server plugin that turns any Xtream-compatible IPTV service into a full Live TV, Movies, and Series library — with EPG, metadata matching, and a built-in dashboard.
</p>

</p>

---

## Features

### Live TV & EPG

Full Live TV integration with Emby's native TV guide.

- **M3U playlist generation** with channel metadata, logos, and EPG channel IDs
- **XMLTV electronic program guide** with configurable fetch window (1-14 days)
- **Category-based filtering** — select which channel groups to include
- **Stream format selection** — MPEG-TS or HLS (M3U8)
- **Adult content filtering** — opt-in toggle for adult-flagged channels
- **DVB subtitle declaration** — optional toggle that surfaces DVB subtitle tracks for live TV without re-enabling stream probing (see [ADR-009](https://github.com/firestaerter3/emby-xtream/blob/HEAD/docs/decisions/009-dvb-subtitle-static-declaration.md))
- **Automatic caching** — M3U (15 min) and EPG (30 min) with thread-safe invalidation

### VOD Movie Library

Sync on-demand movies as STRM files that Emby treats as a native movie library.

- **STRM file generation** — one file per movie, Emby handles metadata…
