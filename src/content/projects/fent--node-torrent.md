---
repo: "fent/node-torrent"
name: "node-torrent"
description: "Torrent reader, writer, and hash checker for node."
readmeQualityOk: true
url: "https://github.com/fent/node-torrent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["node", "torrent", "hashcheck"]
stars: 197
forks: 37
openIssues: 0
closedIssues: 20
watchers: 9
contributors: 15
recentReleases: 3
createdAt: "2011-08-11T17:25:35Z"
lastCommitAt: "2026-11-19T11:24:33Z"
lastReleaseAt: "2026-11-15T20:17:55Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 43
maintainers: ["fent", "Sainan", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/07e6dedf05e9e4dd8f83d8c4c36b93e9eb1e829a436b3f3342af1a773f333f25/fent/node-torrent"
---

# node-torrent

Read, make, and hash check torrents with node.js!

# Usage

## Read a torrent

```javascript
const nt = require('nt');

nt.read('path/to/file.torrent', (err, torrent) => {
  if (err) throw err;
  console.log('Info hash:', torrent.infoHash());
});
```

## Make a torrent

```javascript
const fs = require('node:fs');
const nt = require('nt');

let rs = nt.make('http://myannounce.net/url', __dirname + '/files');
rs.pipe(fs.createWriteStream('mytorrent.torrent'));

// from a stream, without a directory
nt.make('http://myannounce.net/url', fs.createReadStream('video.mp4'))
  .pipe(fs.createWriteStream('video.torrent'));

// callback style
nt.makeWrite('outputfile', 'http://announce.me', __dirname + '/files',
  ['somefile.ext', 'another.one', 'inside/afolder.mkv', 'afolder'],
  (err, torrent) => {
    if (err) throw err;
    console.log('Finished writing torrent!');
  });
```

## Hash check a torrent

```js
let hasher = torrent.hashCheck(file);

let p;
hasher.on('match', (i, hash, percent) => {
  p = percent;
});

hasher.on('end', () => {
  console.log('Hash Check:', p + '%', 'matched');
});
```
