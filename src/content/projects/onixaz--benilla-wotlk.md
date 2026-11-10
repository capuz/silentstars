---
repo: "Onixaz/benilla-wotlk"
name: "benilla-wotlk"
description: "An open-source World of Warcraft 3.3.5a client built with Rust and Bevy."
readmeQualityOk: true
url: "https://github.com/Onixaz/benilla-wotlk"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 77
forks: 16
openIssues: 142
closedIssues: 562
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-10-06T09:47:07Z"
lastCommitAt: "2026-11-10T11:38:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 34
maintainers: ["Onixaz", "SevenSpiders"]
openGraphImageUrl: "https://opengraph.githubassets.com/239695339f0019664ce4bcdf89d12129c6dba99343289ecb874b3af4d08837d8/Onixaz/benilla-wotlk"
---

# Benilla-Wotlk

Benilla-WotLK is an effort to preserve and recreate the original Wrath of the Lich King client experience using a modern, independently developed game engine.

Originally based on the [Benilla](https://github.com/samwhosung/benilla) project, which targets World of Warcraft 1.12.1, Benilla-WotLK has since evolved into a standalone project focused exclusively on version 3.3.5a (build 12340).

The client connects to compatible 3.3.5a servers using the original network protocol, loads game assets from your own WotLK installation, and runs the original interface directly from those files. The rendering engine, file format support, networking, and UI runtime are independently implemented in Rust, with the original 3.3.5a client serving as the behavioral reference.

This project does not distribute Blizzard's original client code or game assets. Users must provide their own game data.

## Status

> [!IMPORTANT]
> The 3.3.5a port is in progress. The client can authenticate, enter the world, and run the stock
> 3.3.5a interface, but parts of the data and gameplay layers still use 1.12.1 layouts or behavior.

Other client versions are not planned. Warden will come later.…
