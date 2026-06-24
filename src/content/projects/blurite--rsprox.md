---
repo: "blurite/rsprox"
name: "rsprox"
description: "RuneScape local proxy server that intercepts and records all the traffic."
url: "https://github.com/blurite/rsprox"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["osrs", "proxy", "runescape"]
stars: 105
forks: 57
openIssues: 7
closedIssues: 17
watchers: 5
contributors: 14
recentReleases: 0
createdAt: "2024-07-01T00:29:13Z"
lastCommitAt: "2026-06-24T00:20:11Z"
lastReleaseAt: "2024-11-26T01:08:57Z"
status: "thriving"
tags: ["solo_builder", "funded", "fork_magnet"]
healthScore: 89
undervaluedScore: 37
maintainers: ["Z-Kris"]
openGraphImageUrl: "https://opengraph.githubassets.com/3062c55a42931c71b154f998fbab0a03d01da920710a0fe16710039d4c005e2d/blurite/rsprox"
fundingLinks: ["GITHUB:https://github.com/blurite"]
---

# RSProx

## Introduction
RSProx is a locally hosted proxy server intended to act as a middleman between the clients and servers in Old School RuneScape.
Support for RuneScape 3 may be added later in the future, if a maintainer for packet decoders can be found.

RSProx will work by patching a root client, allowing it to connect to the locally-hosted proxy server rather than the real servers.
The original information that the patcher overwrote will be passed onto the proxy tool, allowing it to establish connections with
what the client had originally intended. We intend to support most java clients, as well as the C++ client.
A technical breakdown of the processes involved can be found in [issues/RSProx](https://github.com/blurite/rsprox/issues/1).

## Installer

> [!TIP]
> Use the installer for better compatibility and ease of use.

The installer for RSProx can be found [under releases](https://github.com/blurite/rsprox/releases),
the latest installer is [v1.0](https://github.com/blurite/rsprox/releases/tag/v1.0).

The installer comes with a bundled JDK which it utilizes. The launcher auto-updates
RSProx whenever a new version is published.

## Guide
Below is a quick guide…
