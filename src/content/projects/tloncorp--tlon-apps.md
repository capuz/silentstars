---
repo: "tloncorp/tlon-apps"
name: "tlon-apps"
description: "A simple social messaging app that belongs to you 100%"
readmeQualityOk: true
url: "https://github.com/tloncorp/tlon-apps"
homepage: "https://tlon.io/"
language: "TypeScript"
languages: ["TypeScript", "hoon"]
languagePcts: [64, 24]
stars: 106
forks: 50
openIssues: 0
closedIssues: 0
watchers: 11
contributors: 46
recentReleases: 0
createdAt: "2022-04-04T22:04:03Z"
lastCommitAt: "2026-07-09T20:43:57Z"
lastReleaseAt: "2022-11-23T00:41:59Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 47
maintainers: ["janicduplessis", "patosullivan", "arthyn"]
openGraphImageUrl: "https://opengraph.githubassets.com/1727b796e6d022483b2c1c302cfa01d8f5cc8a655ea637845a6417d2626754c3/tloncorp/tlon-apps"
---

# Tlon Messenger (TM)

Tlon Messenger is a new kind of messenger which you can fully control. The user ID is your cryptographic property, while all your data is stored in a single file, yours to keep and yours to take. With TM, you own a distinct node on the network, which you can use to host a community, a blog, or run any other computation. This repository contains the source code of the two main components of TM:

- TM client, which is available on iOS, Android and Desktop
- TM backend, which is deployed on the Urbit platform

## Client

The client is written in React Native. The mobile version is available on iOS and Android, while the desktop version is available via browser (with a desktop app planned soon for macOS, Linux, and Windows).

## Backend

The TM backend consists of a number of independent components, called agents.

### %groups

%groups allows creation of communities that aggregate distinct communication channels. Each group sets its own rules by defining user roles and the entry policy, and defines a set of channels available for group members to subscribe to.

### %channels

%channels facilitates communication between any number of parties by designating one…
