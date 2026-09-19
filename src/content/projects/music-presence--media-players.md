---
repo: "music-presence/media-players"
name: "media-players"
description: "A large collection of media player identifiers for the desktop and web"
readmeQualityOk: true
url: "https://github.com/music-presence/media-players"
homepage: "https://live.musicpresence.app/v3/players.json"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["music-presence"]
stars: 8
forks: 6
openIssues: 23
closedIssues: 12
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-10-06T14:28:14Z"
lastCommitAt: "2026-09-19T08:15:19Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 85
undervaluedScore: 76
maintainers: ["ungive"]
openGraphImageUrl: "https://opengraph.githubassets.com/364d90ac280f72ec5f2728bb8bfaee4c9658b7dd1354e4b46871e3daedd63774/music-presence/media-players"
---

# List of desktop and web media players

This repository contains a list of identifiers
for various media players on the desktop and the web.
These can be used to identify media players
that are playing media on a desktop device
and which report it through the operating system's native media integration,
i.e. SMTC on Windows, MediaRemote on macOS and MPRIS/DBUS on Linux.

This repository was mainly created for use with
[Music Presence](https://musicpresence.app),
but can also be used in other contexts
where uniquely identifying a media player is desirable.

For a visual overview of players in this repository visit
[musicpresence.pocha.moe](https://musicpresence.pocha.moe/)
(thanks [@mercurialworld](https://github.com/mercurialworld)).

## Public API

A public endpoint is maintained at `live.musicpresence.app`
which is a simple GitHub Pages site with static files,
the repository for which can be found here:
https://github.com/music-presence/live.

The current version of this endpoint is `v3`,
available at https://live.musicpresence.app/v3:

|File|Platforms|URL|
|-|-|-|
|`players.json`|All|https://live.musicpresence.app/v3/players.json|…
