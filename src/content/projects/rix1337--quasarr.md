---
repo: "rix1337/Quasarr"
name: "Quasarr"
description: "Quasarr connects JDownloader with Radarr, Sonarr, Lidarr and Magazarr. It also decrypts links protected by CAPTCHAs."
readmeQualityOk: true
url: "https://github.com/rix1337/Quasarr"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 167
forks: 17
openIssues: 1
closedIssues: 86
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2024-08-05T19:47:02Z"
lastCommitAt: "2026-10-29T10:36:36Z"
lastReleaseAt: "2024-08-25T17:04:21Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 97
undervaluedScore: 43
maintainers: ["rix1337", "github-actions[bot]", "baudner"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd0ff492bc6a78972690bcd3bce8cfa7d5f592d159b0978b1e7035e7f989ce16/rix1337/Quasarr"
fundingLinks: ["GITHUB:https://github.com/rix1337"]
---

#

Quasarr connects JDownloader with Radarr, Sonarr, Lidarr and Magazarr. It also handles links protected by
CAPTCHAs.

Quasarr pretends to be both `Newznab Indexer` and `SABnzbd client`. Therefore, do not try to use it with real usenet
indexers. It simply does not know what NZB files are.

Quasarr includes a solution to quickly and easily decrypt protected links.
[Active monthly Sponsors get access to SponsorsHelper to do so automatically.](https://github.com/rix1337/Quasarr?tab=readme-ov-file#sponsorshelper)
Alternatively, follow the link from the console output (or notification) to solve CAPTCHAs in your browser.
This requires [Tampermonkey](https://www.tampermonkey.net/) and the matching Quasarr userscript. The CAPTCHA page
guides you through installing both once. Solve the CAPTCHA on the crypter's own page and the userscript sends the
links back, so Quasarr can confidently handle the rest.

If a link crypter's CAPTCHAs become temporarily unsolvable, you can disable it under **Web UI → Link Protection**.
Affected releases then fail so your *arr app grabs an alternative instead of stalling.

# Instructions

1. Set up and run [JDownloader…
