---
repo: "go-i2p/go-i2p"
name: "go-i2p"
description: "Go implementation of the I2P Router protocol. Usable with NTCP2, I2CP, and I2PControl"
url: "https://github.com/go-i2p/go-i2p"
homepage: "https://go-i2p.github.io/go-i2p/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["anonymity", "i2p", "i2p-router", "go-i2p"]
stars: 99
forks: 12
openIssues: 1
closedIssues: 6
watchers: 7
contributors: 12
recentReleases: 6
createdAt: "2021-04-20T00:36:37Z"
lastCommitAt: "2026-06-26T21:27:29Z"
lastReleaseAt: "2026-06-07T19:14:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 97
undervaluedScore: 53
maintainers: ["eyedeekay"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f98729bdd6aa39191a634fcf3aaf357ad6b1856371b0351a704dd4240cb3e96/go-i2p/go-i2p"
discussionCount: 1
---

# `go-i2p`

A pure Go implementation of the I2P router.

## Status

`go-i2p` is in active development. We recently completed several significant milestones including:

- **Complete I2CP Protocol Server**: Full session lifecycle management, message routing, and client support
- **End-to-End Message Routing**: Complete message routing system connecting I2CP clients through tunnels to other destinations with garlic encryption
- **Tunnel System**: Automatic tunnel building, pool management, and cryptographic processing
- **Transport Layer**: Full NTCP2 implementation with session management

The core router functionality is now operational. We have tested functionality using i2psnark-standalone against our I2CP API server. Basic compatibility is available. We are now focused application layer protocols. We have a mostly-complete I2CP client, a prototype of a Streaming library, and a pretty boring Datagrams library, all of which are requirements for SAMv3.3(which we also have), which is what all our applications use. Refining these components and making them production-ready is the immediate goal.

**`go-i2p` is still in very early development.** It has bugs. It is probably very…
