---
repo: "jamezrin/outpace-stream"
name: "outpace-stream"
description: "Open-source Ace Stream engine written in Rust. P2P live streaming, HLS, broadcasting and CLI without proprietary engine dependencies."
readmeQualityOk: true
url: "https://github.com/jamezrin/outpace-stream"
homepage: "https://github.com/jamezrin/outpace-stream/wiki"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["acestream", "acestream-engine", "open-source", "rust", "video-streaming", "ace-stream", "bittorrent", "broadcasting", "cli", "dht"]
stars: 14
forks: 2
openIssues: 18
closedIssues: 153
watchers: 0
contributors: 6
recentReleases: 6
createdAt: "2026-07-17T23:23:49Z"
lastCommitAt: "2026-11-12T11:25:48Z"
lastReleaseAt: "2026-10-31T21:24:36Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 59
maintainers: ["jamezrin"]
openGraphImageUrl: "https://opengraph.githubassets.com/f445a2dc953d1b68904cd17f64421e0dbb52d5372f171f4554b32a026348ce25/jamezrin/outpace-stream"
---

# outpace

outpace is a from-scratch Rust implementation of the public Acestream P2P live
streaming path. It joins Acestream swarms, pulls MPEG-TS media, and exposes the
result through a native daemon API, HLS, and CLI commands that work with players
such as VLC and downstream tools such as Jellyfin or dispatcharr.

**Documentation:** the [user wiki](https://github.com/jamezrin/outpace-stream/wiki) covers
installation, configuration, playback, broadcasting, deployment and troubleshooting.

The project does not use closed-source engine blobs at runtime. Reverse-engineering
fixtures, protocol captures, and reference binaries are kept under git-ignored
`re/` and `references/` directories when present on a development machine.

## Status

The live byte path is built and proven against real public swarms:

- protocol recovery and interop vectors are in place;
- the `ace-wire`, `ace-tracker`, `ace-peer`, `ace-swarm`, `ace-media`, and
  `ace-engine` crates are in the workspace;
- the daemon can discover peers, connect, download live media, and serve it over
  the native API;
- reciprocal upload, inbound seeding plumbing, signed broadcast origination,
  HTTP raw ingest, managed HTTP(S)…
