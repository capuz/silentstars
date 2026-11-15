---
repo: "jimbos-slop-shop/shredarr"
name: "shredarr"
description: "Delete it in Jellyfin or Plex, and it's gone everywhere: Sonarr/Radarr, Seerr and your torrent client, with seeding rules, Undo and Redownload."
readmeQualityOk: true
url: "https://github.com/jimbos-slop-shop/shredarr"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["arr", "docker", "jellyfin", "jellyseerr", "qbittorrent", "radarr", "selfhosted", "sonarr", "deluge", "overseerr"]
stars: 10
forks: 0
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-15T17:48:22Z"
lastCommitAt: "2026-11-15T11:17:20Z"
lastReleaseAt: "2026-10-17T09:56:39Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 54
maintainers: ["LeahyCC", "dependabot[bot]", "jschaef80"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1421125569/3652ec21-b8cb-42cb-98b9-2a498e306983"
discussionCount: 0
---

When you delete a movie, show, season or episode in **Jellyfin** or **Plex**, Shredarr cleans it up everywhere
else: **Sonarr / Radarr** (including extra instances, such as a 4K one), **Seerr** (Jellyseerr/Overseerr) and your
torrent client (**qBittorrent**, **Transmission** or **Deluge**). It keeps the torrent seeding until
your seeding rule is met, then removes the torrent and its download, with an **Undo** in the meantime and a
**Redownload** afterwards.

---

## Features

- **One delete, everywhere.** Movies and whole shows are removed from Radarr/Sonarr (optionally with an import
  exclusion) and Seerr. Single episodes and seasons are unmonitored in Sonarr so they aren't downloaded again,
  while the show itself stays for future episodes.
- **Seeding rules.** Keep seeding until a minimum seed time and/or ratio is reached ("either", "both", "time
  only", "ratio only"), with extra rules per **category**, **show or movie**, or **tracker**, plus per-torrent
  overrides. Mark anything **Never delete** to protect it.
- **Tracker rules by name.** Trackers are named the way Sonarr/Radarr and Prowlarr know them ("TorrentDay"), so one
  rule covers all of a tracker's announce…
