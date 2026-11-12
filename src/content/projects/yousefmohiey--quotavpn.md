---
repo: "YousefMohiey/QuotaVPN"
name: "QuotaVPN"
description: "QuotaVPN: a personal VPN for Windows and Android that routes traffic through the data package you pick (gaming, streaming)"
readmeQualityOk: true
url: "https://github.com/YousefMohiey/QuotaVPN"
homepage: "https://quotavpn.app"
language: "HTML"
languages: ["HTML", "Rust"]
languagePcts: [30, 24]
topics: ["android", "gaming", "quota", "rust", "streaming", "tauri", "vless", "vpn", "vpn-client", "windows"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-13T06:57:16Z"
lastCommitAt: "2026-11-12T05:38:35Z"
lastReleaseAt: "2026-10-23T19:01:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 64
maintainers: ["YousefMohiey"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea5a534cc61f82252765653e91b1c0002562bac60b2238fb96d44c9585c23023/YousefMohiey/QuotaVPN"
---

&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;

## The idea in thirty seconds

Some ISPs sell separate quota buckets: a gaming package, a streaming package, and a general pool. They sort each connection into a bucket by reading the server name in the TLS handshake at the start of the connection.

QuotaVPN puts the server name of the package you chose into that handshake. Pick a Gamerz card and the session bills to your gaming package. Pick a Streamerz card and it bills to streaming. That is the whole product.

## Screens

| Valorant voice chat | Server list | Arabic interface |
|---|---|---|
|  |  |  |

Windows app shown. The Android app uses the same theme and the same two packages; try it live in the [Android demo](https://quotavpn.app/phone/).

## What the app does

- **Two packages, Gamerz and Streamerz.** Each has its own server list (EA, Riot, Steam, YouTube, Meta, Prime Video and more), plus any custom server name you add.
- **Three transports, labelled honestly.** Standard keeps the package quota. WireGuard and Hysteria2 spend general quota and are the raw-speed options.
- **Per-app routing on both platforms.** Whole device, only these apps, or everything…
