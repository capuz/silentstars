---
repo: "tgarrpro/tgarr"
name: "tgarr"
description: "NZB-tier quality for the few who knew. Telegram-grade safety for the millions who never could. A Newznab-compatible Telegram indexer bridge for Sonarr, Radarr, and the *arr stack."
readmeQualityOk: true
url: "https://github.com/tgarrpro/tgarr"
homepage: "https://tgarr.me"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["arr-stack", "casaos", "docker-compose", "home-server", "indexer", "jellyfin", "media-automation", "mtproto", "newznab", "plex"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-05-12T21:21:27Z"
lastCommitAt: "2026-11-15T08:28:30Z"
lastReleaseAt: "2026-11-15T08:28:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 62
undervaluedScore: 27
maintainers: ["tgarrpro"]
openGraphImageUrl: "https://opengraph.githubassets.com/4089e311a1a60f3eeed2b2776dd574bb2dcd025406d75a076519d73dd2155292/tgarrpro/tgarr"
discussionCount: 3
---

# tgarr — Telegram-as-source for Sonarr, Radarr & friends

> **NZB-tier quality for the few who knew. Telegram-grade safety for the millions who never could.**  
> Make Telegram channels look like a Newznab indexer — Sonarr, Radarr, and the rest of the *arr stack discover, grab, and import without knowing the difference.

---

## Three sources, and a household

**New in 0.5.9: it works before you give it any account.** The Internet Archive is a third source - old films, radio plays, audiobooks, books and magazines that anybody may download: search it on the Archive page, press Get, and Radarr can ask for its films through tgarr with nothing configured but tgarr itself. Public Telegram channels can be followed and browsed without signing in; the Telegram app id is asked for when you first want to play a file, not before. Small things posted whole on Usenet - a book, an album, a set of pictures - are fetched by tgarr itself. And what a browser cannot play (a DVD or Blu-ray image, an avi, an mkv with sound it has no decoder for) is converted while it is watched, so a phone or a tablet can play it.

**Telegram and Usenet, one indexer.** Since 0.5.8 tgarr reads Usenet as well: give it…
