---
repo: "anniemaybytes/fetcher"
name: "fetcher"
description: "NodeJS application for fetching and uploading airing shows"
readmeQualityOk: true
url: "https://github.com/anniemaybytes/fetcher"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2018-12-28T23:23:26Z"
lastCommitAt: "2026-07-04T22:18:27Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 80
undervaluedScore: 41
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/8e181e6cc16e0dfbcbaaaa79e73ea38516f5c0fa662ca3ad04f1745d3f51f30a/anniemaybytes/fetcher"
---

# fetcher

fetcher is our bot for fetching and uploading airing show.

Support is present for these types of downloaders:

- Torrent (via webtorrent, both `.torrent` and magnet links)
- HTTP

Following fetchers are available:

- IRC
- RSS

## Usage

The format of `shows.json` is currently undocumented.

Following commands are available to anyone in IRC control channel:

- `!reload` - instantly reloads `shows.json` from remote
- `!fetch` - instantly refreshes all sources and releasers

In addition, HTTP server is available on port specified in config.
The interface should be protected by access control; fetcher does not implement any kind of security on it.
The web interface can be used to view detailed information about database and to abort current
downloads as well as to remove state information for specific episodes.

## Installation

fetcher requires NodeJS v24.11 or later and [pnpm](https://pnpm.io/).
Additionally you need these external tools present in `PATH`:

- `mktorrent` >= 1.1
- `MediaInfo` CLI + Lib >= 18.03

```sh
pnpm install && pnpm build
node dist/index.js
```

Example systemd unit file:

```systemd
[Unit]
Description=fetcher
After=network.target

[Service]…
