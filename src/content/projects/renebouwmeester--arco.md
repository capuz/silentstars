---
repo: "renebouwmeester/arco"
name: "arco"
description: "Apple Music on your Roon zones, from the Mac menu bar"
readmeQualityOk: true
url: "https://github.com/renebouwmeester/arco"
language: "Swift"
languages: ["Swift"]
languagePcts: [83]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-10-06T17:57:04Z"
lastCommitAt: "2026-11-15T08:28:12Z"
lastReleaseAt: "2026-10-21T15:40:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 69
undervaluedScore: 54
maintainers: ["renebouwmeester"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c30dafa827497e35d56e6d9b9087f5f8ad4dbfe2bd0297163ec71fcefc4160c/renebouwmeester/arco"
discussionCount: 0
---

# Arco

Play Apple Music and Spotify on your Roon zones, from a small app in your Mac's menu bar.

Arco takes what the Music app or Spotify plays on your Mac and hands it to Roon as a live source, with the
title, artist, album and cover of each track. Roon does the rest: your zones, your DSP, your endpoints — including the
ones that only speak RAAT. Arco can also play to UPnP and OpenHome renderers on your network, or to a DAC on the Mac
itself.

> **Status:** beta. It works well in daily use here; expect rough edges, and please report them.

## What you get

- **Any Roon zone, from the menu bar.** Pick the zone, switch on *Enable*, press play in Music or Spotify. The
  Roon app doesn't need to be open — a laptop on your lap with Music is enough.
- **Apple Music and Spotify.** Arco follows whichever of the two plays. Spotify always arrives at 44.1 kHz; the clock
  per track below is for the Music app.
- **Also without Roon.** UPnP and OpenHome renderers (a Linn, a WiiM, HQPlayer) get a stream per track, gapless also
  across a change of sample rate where the renderer allows it. Under *Local*, a DAC on the Mac follows each track's rate.
- **A clock per track.** Arco sets its output…
