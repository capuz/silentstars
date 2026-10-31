---
repo: "retransmission/retransmission"
name: "retransmission"
description: "Shift Transmission to a higher gear. A fast, easy and free Bittorrent Client For macOS, Windows and Linux "
readmeQualityOk: true
url: "https://github.com/retransmission/retransmission"
homepage: "https://retransmission.org"
language: "C++"
languages: ["C++"]
languagePcts: [74]
topics: ["bittorrent", "transmission"]
stars: 102
forks: 9
openIssues: 20
closedIssues: 32
watchers: 2
contributors: 290
recentReleases: 0
createdAt: "2026-06-10T20:41:21Z"
lastCommitAt: "2026-10-31T09:53:03Z"
lastReleaseAt: "2026-07-26T04:08:16Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 31
maintainers: ["ckerr", "tearfur", "lolgear"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ff84c5382b04a52d0f3b292c72ff8fce84a650129d467cb64a2e404b7691989/retransmission/retransmission"
discussionCount: 5
---

## About

Retransmission is a fast, easy, and free BitTorrent client. It comes in several flavors:
  * A native macOS GUI application
  * GTK+ and Qt GUI applications for Linux, BSD, etc.
  * A Qt-based Windows-compatible GUI application
  * A headless daemon for servers and routers
  * A web UI for remote controlling any of the above
  
Visit https://retransmission.org/ for more information.

## Documentation

[Retransmission's documentation](https://github.com/retransmission/retransmission/blob/HEAD/docs/README.md) is currently out-of-date, but the team has recently begun a new project to update it and is looking for volunteers. If you're interested, please feel free to submit pull requests!

## Command line interface notes

Retransmission is fully supported in transmission-remote, the preferred cli client.

Three standalone tools to examine, create, and edit .torrent files exist: transmission-show, transmission-create, and transmission-edit, respectively.

Prior to development of transmission-remote, the standalone client transmission-cli was created. Limited to a single torrent at a time, transmission-cli is deprecated and exists primarily to support older hardware dependent…
