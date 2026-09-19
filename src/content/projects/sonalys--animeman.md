---
repo: "sonalys/animeman"
name: "animeman"
description: "A proof-of-concept for synchronizing your anime watchlist with your torrents"
readmeQualityOk: true
url: "https://github.com/sonalys/animeman"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["anime", "nyaa-si", "qbittorrent"]
stars: 26
forks: 1
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-02-05T08:20:54Z"
lastCommitAt: "2026-09-19T08:14:23Z"
lastReleaseAt: "2026-04-04T17:12:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: ["sonalys"]
openGraphImageUrl: "https://opengraph.githubassets.com/4352c39041335ac200f44c0c1dfb543fec96a8cb6d1270d1ffcdb9d90ae045d8/sonalys/animeman"
discussionCount: 0
---

# Animeman

Animeman is a service for synchronizing your anime list currently watching with a torrent source and QBittorrent.  
Currently it manages qBittorrent through it's WebUI, creating and managing a category of torrents.  
It automatically parses the torrent titles for tagging the show, season and episodes, while also searching for new releases.  
Torrent sources are pluggable; Animeman currently supports **Nyaa.si** and **NekoBT**, configured via `torrentSource.type`.

## Features

* **Automatic Downloads** weekly releases from your WatchList
* **Downloads batch releases**: from complete series from your WatchList
* **Tags**: all torrent entries under the configured category with [`!Serie name`, `Serie name S01E01`] as an example
* **Source and quality filter**: you can specify resolution and HEVC tag
* **Smart episode detection**: you don't need to worry about downloading the same episode twice
* **Custom torrent renaming logic**: you are able to write exactly how your torrents should be named using [expr-lang](https://expr-lang.org/docs/language-definition)

## How does it work?

0. Tag existing torrents in the configured category in **qBittorrent**
1. Fetch your…
