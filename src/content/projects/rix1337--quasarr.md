---
repo: "rix1337/Quasarr"
name: "Quasarr"
description: "Quasarr connects JDownloader with Radarr, Sonarr, Lidarr and Magazarr. It also decrypts links protected by CAPTCHAs."
readmeQualityOk: true
url: "https://github.com/rix1337/Quasarr"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 171
forks: 17
openIssues: 0
closedIssues: 91
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2024-08-05T19:47:02Z"
lastCommitAt: "2026-11-18T12:07:42Z"
lastReleaseAt: "2024-08-25T17:04:21Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 43
maintainers: ["rix1337"]
openGraphImageUrl: "https://opengraph.githubassets.com/5381387d28f1ae627677fce32a271b870f20554288ca3e36ac3cf73056d62305/rix1337/Quasarr"
fundingLinks: ["GITHUB:https://github.com/rix1337"]
---

#

Quasarr connects JDownloader with Radarr, Sonarr, Lidarr and Magazarr. It reads download sites, offers their releases
to your apps and sends the ones they pick to JDownloader, including links protected by CAPTCHAs.

To your apps, Quasarr looks like a `Newznab Indexer` and a `SABnzbd client`. It does not work with real usenet
indexers and does not know what NZB files are.

# Getting started

1. Set up and run [JDownloader 2](https://jdownloader.org/download/index).
2. Run Quasarr, preferably with [Docker](#docker).
3. Open the web UI and follow the setup: My JDownloader login, then at least one site.
4. Add Quasarr to [Radarr, Sonarr and Lidarr](#radarr--sonarr--lidarr), [Prowlarr](#prowlarr) or
   [Magazarr](#magazarr).
5. Optional: set up [flaresolverr-next](https://github.com/rix1337/flaresolverr-next) for sites that show a browser
   check.

> **Finding your Quasarr URL and API key**
> Both are shown in the console output under **API Information** and in the web UI.

> **Authentication** is optional but strongly recommended.
> - 🔐 Set `USER` and `PASS` to enable form-based login (30-day session).
> - 🔑 Set `AUTH=basic` to use HTTP Basic Authentication instead.
