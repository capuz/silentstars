---
repo: "BATorrent-app/BATorrent"
name: "BATorrent"
description: "A lightweight BitTorrent client built with C++, Qt 6, and libtorrent-rasterbar."
url: "https://github.com/BATorrent-app/BATorrent"
homepage: "http://batorrent.com/"
language: "C++"
languages: ["C++", "QML"]
languagePcts: [57, 38]
topics: ["bittorrent", "bittorrent-client", "cpp", "cross-platform", "libtorrent", "p2p", "privacy", "qml", "qt", "qt6"]
stars: 94
forks: 2
openIssues: 1
closedIssues: 11
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-03-16T04:11:02Z"
lastCommitAt: "2026-07-02T06:33:14Z"
lastReleaseAt: "2026-03-19T15:58:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 86
undervaluedScore: 34
maintainers: ["Mateuscruz19", "azizaktas"]
openGraphImageUrl: "https://opengraph.githubassets.com/b73af87fccb0b43bff7b801179d546723d36532c5505abdb2ea4db545e989fc7/BATorrent-app/BATorrent"
fundingLinks: ["GITHUB:https://github.com/Mateuscruz19"]
---

<b>English</b> | <a href="README.pt-BR.md">Português</a> | <a href="README.zh-CN.md">中文</a> | <a href="README.ja.md">日本語</a> | <a href="README.ru.md">Русский</a> | <a href="README.es.md">Español</a> | <a href="README.de.md">Deutsch</a> | <a href="README.ua.md">Українська</a>
</p>

</p>

<h1 align="center">BATorrent</h1>

  <i>A BitTorrent client that shows your downloads as cover art instead of spreadsheet rows.</i>
</p>

</p>

</p>

BATorrent is a desktop torrent client built on the [libtorrent](https://www.libtorrent.org/) engine, the same one qBittorrent and Deluge use. The front end reads each torrent's name, looks up the matching poster (movies and shows from TMDB, games from IGDB), and lays your downloads out as a grid of covers instead of a list of filenames. The covers sit on top of a client that actually holds up, and on an engine that's been [tuned, not just shipped stock](#the-engine).

It's free and open source. No ads, no telemetry, no "Pro" tier, no account. The only network request it makes on its own is the update check against GitHub, and there's a switch to turn that off. If you want to confirm that, the code is…
