---
repo: "holepunchto/blind-peering"
name: "blind-peering"
description: "Peer side mirror manager"
readmeQualityOk: true
url: "https://github.com/holepunchto/blind-peering"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 13
contributors: 12
recentReleases: 3
createdAt: "2025-02-13T14:59:52Z"
lastCommitAt: "2026-10-21T21:14:43Z"
lastReleaseAt: "2026-07-31T12:05:52Z"
status: "thriving"
tags: ["hidden_gem", "community_watch"]
healthScore: 84
undervaluedScore: 69
maintainers: ["HDegroote", "volstas", "mafintosh"]
openGraphImageUrl: "https://opengraph.githubassets.com/12254d49a8a3159d543a5bb4ca13891c110fd92bb32337d3cd9864d4dc4d1ec2/holepunchto/blind-peering"
---

# Blind Peering

Client for interacting with [blind peers](https://github.com/holepunchto/blind-peer), sending RPC requests to keep hypercores and autobases available.

## Installl

```
npm install blind-peering
```

## API

#### `const blindPeering = new BlindPeering(dht, store, opts)`

Create a new Blind Peering instance. `dht` is a HyperDHT instance and `store` is a Corestore instance.

`opts` include:

- `blindPeers`: a list of `{ key, group }` blind peers (mirrors) to use. You should always set this, otherwise there are no mirrors to contact. `group` is optional and indicates where the blind peer is hosted, so that mirrors for the same core are picked from different groups where possible.
- `suspended`: whether to start in suspended state (default `false`)
- `wakeup`: a Wakeup object
- `notificationRateLimit`: `{ capacity: 10, interval: 1000, timeout: 10000 }` rate limit for `sendNotification`. Pass `null` to disable.
- `client`: `{ name, version }` optional identifier of the application using blind-peering, sent to blind peers in the connection handshake.
- `skipConnectionMetadata` if set to `true`, client does not include any non-essential metadata in the connection to the…
