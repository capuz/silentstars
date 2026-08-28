---
repo: "yjs/yhub"
name: "yhub"
description: "Alternative backend for y-websocket"
readmeQualityOk: true
url: "https://github.com/yjs/yhub"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 297
forks: 58
openIssues: 13
closedIssues: 21
watchers: 15
contributors: 8
recentReleases: 0
createdAt: "2017-08-12T22:13:25Z"
lastCommitAt: "2026-08-28T14:36:21Z"
lastReleaseAt: "2024-07-18T23:11:30Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 85
undervaluedScore: 36
maintainers: ["dmonad", "PabloSzx"]
openGraphImageUrl: "https://opengraph.githubassets.com/907af62da7a94bd4c63b8d5d8ba2b786fdb5a17a9266504acc47ca62eba57d5b/yjs/yhub"
fundingLinks: ["GITHUB:https://github.com/dmonad", "OPEN_COLLECTIVE:https://opencollective.com/y-collective"]
---

# y/hub :tophat:
> y-websocket compatible backend using Redis for scalability. **This is beta
> software!**

y/hub is an alternative backend for y-websocket. It only requires a redis
instance and a storage provider (S3 or Postgres-compatible).

* **Memory efficient:** The server doesn't maintain a Y.Doc in-memory. It
streams updates through redis. The Yjs document is only loaded to memory for the
initial sync.
* **Scalable:** You can start as many y/hub instances as you want to handle
a fluctuating number of clients. No coordination is needed.
- **Auth:** y/hub works together with your existing infrastructure to
authenticate clients and check whether a client has read-only / read-write
access to a document.
- **Database agnostic:** You can persist documents in S3-compatible backends, in
Postgres, or implement your own storage provider.

### Licensing

y/hub is dual-licensed (either [AGPL](https://github.com/yjs/yhub/blob/HEAD/LICENSE) or proprietary).

Please contact me to buy a license if you intend to use y/hub in your
commercial product: <kevin.jahns at pm.me>

Otherwise, you may use this software under the terms of the AGPL, which requires
you to publish your source code under…
