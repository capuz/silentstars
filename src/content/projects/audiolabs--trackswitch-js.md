---
repo: "audiolabs/trackswitch.js"
name: "trackswitch.js"
description: "A Versatile Web-Based Audio Player for Presenting Scientific Results"
readmeQualityOk: true
url: "https://github.com/audiolabs/trackswitch.js"
homepage: "https://audiolabs.github.io/trackswitch.js/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["research", "audio", "player", "science"]
stars: 63
forks: 15
openIssues: 1
closedIssues: 10
watchers: 5
contributors: 7
recentReleases: 0
createdAt: "2017-04-11T10:44:13Z"
lastCommitAt: "2026-10-08T10:52:12Z"
lastReleaseAt: "2026-07-07T15:25:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 78
undervaluedScore: 33
maintainers: ["Curucail", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b49e457d7106c4e615b3826a17ac914123444f86e04add31d90df199047acfa/audiolabs/trackswitch.js"
---

trackswitch
==============

**trackswitch** is a web-based player for exploring related music representations — audio recordings, MIDI, sheet music and analysis results — in one interface.

It is built on three concepts. **Timelines** are the coordinate systems of individual media, expressed in seconds, measures or ticks. **Markers** identify discrete positions on a timeline and are grouped into marker sequences, such as beats, measures or structural boundaries. **Alignments** pair markers on different timelines as anchors, and interpolate between them to project any position from one timeline onto another.

Audio can be heard in two ways: *comparative listening*, where one track sounds at a time and listeners switch between alternatives without interrupting playback, and *simultaneous listening*, where tracks sharing a timeline mix together. Performances on distinct timelines are compared rather than mixed, unless time-scale-modified renditions are supplied, which the Sync control then plays together.

Live Demo
-------------

- See what **trackswitch** can do on our demo website: https://audiolabs.github.io/trackswitch.js/

Installation
------------

Install from npm:

```bash…
