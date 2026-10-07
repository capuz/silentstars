---
repo: "freemkv/libfreemkv"
name: "libfreemkv"
description: "4K UHD / Blu-ray / DVD drive library — open source raw disc access"
readmeQualityOk: true
url: "https://github.com/freemkv/libfreemkv"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["4k", "blu-ray", "disc-ripping", "dvd", "linux", "open-source", "optical-drive", "rust", "uhd"]
stars: 13
forks: 5
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-06T16:51:50Z"
lastCommitAt: "2026-10-07T10:31:29Z"
lastReleaseAt: "2026-04-13T02:14:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 54
maintainers: ["MattJackson"]
openGraphImageUrl: "https://opengraph.githubassets.com/c736c45486566d1ac0df2ae4a551283db73e8b2b027b6299d14668ca4aad9738/freemkv/libfreemkv"
fundingLinks: ["GITHUB:https://github.com/MattJackson"]
---

# libfreemkv

Rust library for 4K UHD / Blu-ray / DVD optical drives. Drive access, disc scanning, stream labels, AACS decryption, CSS decryption, and content reading in one crate. Drive-level unlocking is handled internally; consumers work with disc access and decryption only.

DVDs (CSS) decrypt out of the box. Blu-ray and UHD (AACS) require disc-specific volume unique keys, supplied by the consumer (e.g. via [freemkv-keysources](https://github.com/freemkv/freemkv-keysources), which owns `keydb.cfg` lookup/download); libfreemkv itself never reads `keydb.cfg` or downloads keys, and no AACS key material is compiled in.

**12+ MB/s** sustained read speeds on BD. Drive prep (`init()`) handles unlocking internally via the `freemkv-unlock` crate — clients never see it; when no drive unlock applies, the library rips via the host-certificate AACS handshake.

Multi-lingual by design — the library outputs structured data and numeric error codes, never English text. Build any UI or localization on top.

**[Source & API](https://github.com/freemkv/libfreemkv)** · **[Changelog](https://github.com/freemkv/libfreemkv/blob/HEAD/CHANGELOG.md)**

Part of the [freemkv](https://github.com/freemkv)…
