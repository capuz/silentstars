---
repo: "mgriesslehner/SafariKeePassXC"
name: "SafariKeePassXC"
description: "Safari Web Extension that connects to KeePassXC via its browser integration protocol"
readmeQualityOk: true
url: "https://github.com/mgriesslehner/SafariKeePassXC"
homepage: "https://griesslehner.at/safarikeepassxc.html"
language: "Swift"
languages: ["Swift", "JavaScript"]
languagePcts: [70, 24]
stars: 12
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2026-09-22T17:10:39Z"
lastCommitAt: "2026-10-18T08:16:57Z"
lastReleaseAt: "2026-10-16T04:44:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 30
maintainers: ["mgriesslehner"]
openGraphImageUrl: "https://opengraph.githubassets.com/78cd5fd7c691b32a5a05e8194ed38bfa157eac9420f27f07e9b50cf2747c9ae1/mgriesslehner/SafariKeePassXC"
---

# SafariKeePassXC

A Safari Web Extension that connects Safari to [KeePassXC](https://keepassxc.org) using the same
[KeePassXC-Browser protocol](https://github.com/keepassxreboot/keepassxc-browser) implemented by the
official browser extensions for Chrome and Firefox. It lets you autofill logins, save new entries, and
generate passwords directly from Safari on macOS, backed by your local KeePassXC database.

## How it works

KeePassXC exposes a local Unix domain socket that browser extensions connect to and encrypt messages
over using NaCl/libsodium public-key crypto (the same handshake used by the official KeePassXC-Browser
extension).

Safari Web Extensions, however, run in a sandboxed app extension process and cannot reach that socket
directly. SafariKeePassXC works around this with a small relay:

```
Safari Extension (sandboxed)  <--Unix socket-->  Host App (BridgeServer)  <--Unix socket-->  KeePassXC
```

- The **host app** (`SafariKeePassXC`) is not sandboxed and talks to KeePassXC's socket directly via
  `KeePassXCClient` / `KeePassXCCrypto`, using [Sodium](https://github.com/jedisct1/swift-sodium) for
  the crypto.
- It also runs a `BridgeServer` that listens on a Unix…
