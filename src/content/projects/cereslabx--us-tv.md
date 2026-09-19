---
repo: "CeresLabX/us-tv"
name: "us-tv"
description: "US TV Playlist and EPG for IPTV/TiviMate"
readmeQualityOk: true
url: "https://github.com/CeresLabX/us-tv"
homepage: "https://cereslabx.github.io/us-tv/"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-21T23:12:31Z"
lastCommitAt: "2026-09-19T02:47:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 42
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/52e8039019f1d23a189f280c044c4335e1ffdab622415aacbe2329ff0fcde496/CeresLabX/us-tv"
---

# US TV Playlist & EPG

Filtered to US-accessible, English-language channels only. Single group per channel.

**Playlist URL:** `https://CeresLabX.github.io/us-tv/playlist.m3u`

**EPG URL:** `https://CeresLabX.github.io/us-tv/epg.xml`

**Channel count:** ~676 channels

---

## Source

**iptv-org US** — `https://iptv-org.github.io/iptv/countries/us.m3u`

---

## Groups

General, News, Sports, Entertainment, Movies, Series, Kids, Religious, Lifestyle, Music, Documentary, Comedy, Culture, Business, Education, Outdoor, Local News, Local News | PNW

---

## Usage in TiviMate

1. Add playlist: `https://CeresLabX.github.io/us-tv/playlist.m3u`
2. Add EPG: `https://CeresLabX.github.io/us-tv/epg.xml`

---

## Auto-Update

Playlist and EPG regenerate every 12 hours via GitHub Actions (`update.yml` workflow).

Programme schedules are placeholder (3-hour blocks). This gives channel names, logos, and categories in TiviMate.

---

## Filtering Rules

### Always Applied
- **Source:** iptv-org US only (no Free-TV, no iptv-org English)
- **Language:** English only — no Spanish, no non-English channels
- **VOD platforms blocked:** Pluto TV, Plex, Roku Channel, Samsung TV Plus, Tubi
- **Non-Latin…
