---
repo: "xmreur/prysm"
name: "prysm"
description: "Prysm is a privacy‑first, cross‑platform P2P messenger prototype built with Flutter, designed to operate over Tor for metadata‑resistant communication and onion‑routed transport."
url: "https://github.com/xmreur/prysm"
homepage: "https://www.prysmchat.xyz/"
language: "Dart"
languages: ["Dart"]
languagePcts: [81]
stars: 11
forks: 0
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2025-10-04T03:44:54Z"
lastCommitAt: "2026-06-27T00:47:59Z"
lastReleaseAt: "2026-04-19T16:46:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 64
maintainers: ["xmreur", "clayrootkit"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1069497943/a38d17b3-03d3-4b1d-8dfb-77131ae27767"
---

# Prysm

[🇬🇧 English](README.md) | [🇮🇹 Italiano](README.it.md)

</p>

Prysm is a Tor-only P2P messenger built with Flutter.

There is no central server. Each client exposes its own Tor hidden service, receives messages directly over its `.onion` address, and sends outbound messages through Tor. If a peer is offline, messages stay in a local queue and retry later.

## Overview

Prysm runs as a direct peer-to-peer messenger over Tor hidden services.

On desktop, Tor is started as a child process. On Android, it is started through a native service. The app also runs a local HTTP server with `shelf`, listening on port `12345`, which Tor exposes as `your-address.onion:80`. Outbound messages are sent through Tor's SOCKS5 proxy to `peer-address.onion:80/message`. `shelf` is a Dart server middleware library commonly used to compose lightweight HTTP servers, which matches this local transport model well [web:71][web:77].

There are no relay servers right now. Relay settings exist in the UI, but they are placeholders and are not implemented yet.

## Message flow

If both peers are online, messages usually arrive within a few seconds.

If the destination is offline or unreachable, Prysm…
