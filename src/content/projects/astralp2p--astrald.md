---
repo: "astralp2p/astrald"
name: "astrald"
description: "astral daemon"
readmeQualityOk: true
url: "https://github.com/astralp2p/astrald"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 15
forks: 4
openIssues: 84
closedIssues: 115
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2021-05-16T22:51:06Z"
lastCommitAt: "2026-10-29T10:37:02Z"
lastReleaseAt: "2026-06-15T12:00:52Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 65
maintainers: ["astral-intern0"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb2e7ef62c152b7f45ada070489a76abf34506dda1c8074b1877cb084b16e23e/astralp2p/astrald"
---

astrald
=======

## Overview

**The Astral Network** is an abstract, general-purpose peer-to-peer network layer that runs on top of multiple transports. **astrald** is a daemon that provides easy access to the network via local interface. It provides connectivity, identity, authentication, encryption and a set of core protocols apps and agents can use to easily interact over the network. The full documentation is [here](https://github.com/astralp2p/astral-docs/blob/master/README.md).

## Network architecture

All actors (nodes, apps, users and agents) on the network have a self-assigned identity based on a ECDSA key on the secp256k1 curve, the same as the Lightning Network or Bitcoin. Nodes form the core infrastructure of the network by establish encrypted and authenticated links with each other, exchanging certificates, gossip data and organizing complex p2p processes. Apps, agents and users access the network via the API exposed by the daemon via varoius transports - astral apphost protocol, HTTP, WSS, etc.

Actors send each other queries (similar to HTTP query path) over the network that can be rejected or accepted to establish a connection. The connection is then used to…
