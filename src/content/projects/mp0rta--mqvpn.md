---
repo: "mp0rta/mqvpn"
name: "mqvpn"
description: "Multipath VPN using MASQUE and Multipath QUIC"
readmeQualityOk: true
url: "https://github.com/mp0rta/mqvpn"
homepage: "https://docs.mqvpn.org/"
language: "C"
languages: ["C", "Shell"]
languagePcts: [54, 21]
topics: ["http3", "network-programming", "quic", "tls13", "vpn", "multipath-quic", "bonding", "tunnel", "starlink", "connect-ip"]
stars: 119
forks: 25
openIssues: 16
closedIssues: 18
watchers: 5
contributors: 7
recentReleases: 0
createdAt: "2026-02-16T13:45:21Z"
lastCommitAt: "2026-10-18T08:16:27Z"
lastReleaseAt: "2026-04-24T16:57:42Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 89
undervaluedScore: 35
maintainers: ["mp0rta", "pylaterreur", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1159239539/8d67d64a-2a37-4c6b-b6df-83eb9bffea09"
discussionCount: 3
---

<source
        media="(prefers-color-scheme: dark)"
        srcset="website/public/img/mqvpn-lockup-violet-dark.svg">
      <img
        src="website/public/img/mqvpn-lockup-violet-light.svg"
        alt="mqvpn"
        width="400">

      <img
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        alt="Get it on Google Play"
        height="80">
      <img
        src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png"
        alt="Get it on F-Droid"
        height="80">

mqvpn is an open-source VPN that combines multiple internet connections—such as Wi-Fi, cellular, Starlink, and multiple ISPs—for bandwidth aggregation and seamless failover.

Example: an 8 Mbps SRT live stream over two 6 Mbit uplinks — a single connection (left) vs the same two connections bonded by mqvpn (right):

https://github.com/user-attachments/assets/9862b717-a00f-4faf-a098-0e10d912b8a5

## Table of Contents

- [Supported Platforms](#supported-platforms)
- [Features](#features)
- [Key Use Cases](#key-use-cases)
- [Installation](#installation)
  - [Server](#server)
  - [Client (deb package)](#client-deb-package)
  - [Windows…
