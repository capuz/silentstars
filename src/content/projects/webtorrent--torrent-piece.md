---
repo: "webtorrent/torrent-piece"
name: "torrent-piece"
description: "Torrent piece abstraction"
readmeQualityOk: true
url: "https://github.com/webtorrent/torrent-piece"
homepage: "https://webtorrent.io"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["torrent", "webtorrent", "bittorrent", "nodejs", "javascript", "browser", "piece"]
stars: 28
forks: 8
openIssues: 1
closedIssues: 7
watchers: 3
contributors: 22
recentReleases: 0
createdAt: "2015-08-19T13:54:52Z"
lastCommitAt: "2026-10-15T08:32:49Z"
lastReleaseAt: "2026-05-26T21:31:35Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 77
undervaluedScore: 37
maintainers: ["renovate[bot]", "DiegoRBaquero", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce81a5e0cc40385019eb17bb69bcc68ba7f8a512f18c081e4f6b7d48ff91c504/webtorrent/torrent-piece"
fundingLinks: ["GITHUB:https://github.com/webtorrent", "GITHUB:https://github.com/feross"]
---

# torrent-piece [][ci-url] [][npm-url] [][downloads-url] [][standard-url]

[ci-image]: https://img.shields.io/github/actions/workflow/status/webtorrent/torrent-piece/ci.yml
[ci-url]: https://github.com/webtorrent/torrent-piece/actions
[npm-image]: https://img.shields.io/npm/v/torrent-piece.svg
[npm-url]: https://npmjs.org/package/torrent-piece
[downloads-image]: https://img.shields.io/npm/dm/torrent-piece.svg
[downloads-url]: https://npmjs.org/package/torrent-piece
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

### Torrent piece abstraction

Also works in the browser with [browserify](http://browserify.org/)! This module is used by [WebTorrent](http://webtorrent.io) and [torrent-stream](https://npmjs.com/package/torrent-stream).

## install

```
npm install torrent-piece
```

## usage

```js
import Piece from 'torrent-piece'

Piece.BLOCK_LENGTH // 16384

const pieceLength = Piece.BLOCK_LENGTH * 5
const piece = new Piece(pieceLength)
piece.missing // 81920

piece.reserve() // 0
piece.set(0, someBuffer0)

piece.reserve() // 1
piece.reserve() // 2
piece.reserve() // 3

piece.set(1, someBuffer1)
piece.set(2,…
