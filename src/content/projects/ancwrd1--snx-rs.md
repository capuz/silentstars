---
repo: "ancwrd1/snx-rs"
name: "snx-rs"
description: "Open Source Client For Check Point VPN Tunnels"
readmeQualityOk: true
url: "https://github.com/ancwrd1/snx-rs"
language: "Rust"
languages: ["Rust", "Fluent"]
languagePcts: [67, 22]
topics: ["client", "network", "rust", "snx", "vpn", "checkpoint", "ipsec", "linux"]
stars: 483
forks: 45
openIssues: 5
closedIssues: 151
watchers: 12
contributors: 18
recentReleases: 0
createdAt: "2023-04-08T13:48:45Z"
lastCommitAt: "2026-09-09T08:19:22Z"
lastReleaseAt: "2024-01-11T10:03:54Z"
status: "thriving"
tags: ["funded"]
healthScore: 98
undervaluedScore: 36
maintainers: ["ancwrd1", "dependabot[bot]", "yabanana"]
openGraphImageUrl: "https://opengraph.githubassets.com/e33d5d6db820070a2348697ad3c8e45616b6853008bf702f8d79f30f30ee1a06/ancwrd1/snx-rs"
fundingLinks: ["GITHUB:https://github.com/ancwrd1"]
---

# Open Source Client for Check Point VPN Tunnels

If you like this application and my other open-source projects, please consider [supporting](https://github.com/sponsors/ancwrd1) it.

This project contains the source code for an unofficial client for Check Point VPN, written in Rust.
Currently supported platforms: Linux, Windows, macOS.

## Key Features

* IPsec and SSL tunnel support
* Browser-based SSO, username/password, certificate, HSM token and MFA authentication
* GUI frontend with tray icon
* Split DNS for better privacy
* OS keychain integration
* Multiple connection profiles
* Persistent IPsec session for fast reconnect after network drops or suspend/resume — see [`ike-persist`](https://github.com/ancwrd1/snx-rs/blob/HEAD/docs/persistent-ipsec-session.md)

## Package Repository

Signed APT and DNF repositories with the latest release builds are published at [ancwrd1.github.io/snx-rs](https://ancwrd1.github.io/snx-rs/).
The page lists the installation commands for Debian/Ubuntu and Fedora/RHEL/openSUSE.
Only the default (non-webkit) builds are served from the repository; the `-webkit` variant remains available as a direct download from the [Releases…
