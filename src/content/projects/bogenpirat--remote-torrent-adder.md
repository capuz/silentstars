---
repo: "bogenpirat/remote-torrent-adder"
name: "remote-torrent-adder"
description: "A handy Chrome/Firefox extension to add torrent files to torrent clients"
readmeQualityOk: true
url: "https://github.com/bogenpirat/remote-torrent-adder"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["chrome-extension", "torrent-management"]
stars: 311
forks: 95
openIssues: 1
closedIssues: 385
watchers: 9
contributors: 16
recentReleases: 0
createdAt: "2015-08-24T10:27:15Z"
lastCommitAt: "2026-11-21T13:28:31Z"
lastReleaseAt: "2026-06-19T15:58:12Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 40
maintainers: ["bogenpirat", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2ade424d2ea4f85e7f7105df43c3ced45b081c7b06f2594cad6ba2ab61d20fe/bogenpirat/remote-torrent-adder"
---

# Remote Torrent Adder

**Send torrents and magnet links from your browser straight to your BitTorrent client — local or remote — with a single click.**

[Install](#-installation) · [Features](#-features) · [Supported clients](#-supported-clients) · [Build from source](#-building-from-source) · [Contributing](#-contributing)

---

## 🤔 What is this?

Chrome doesn't let extensions hand a downloaded `.torrent` file over to a desktop application. *Remote Torrent Adder* (RTA) works around this by talking directly to the **WebUI of your BitTorrent client**: click a torrent or magnet link, and RTA uploads it to your client's web API instead of saving a file to disk. Because everything happens over HTTP(S), it works just as well with a client running on your own machine as with one on a seedbox, NAS, or home server on the other side of the world.
