---
repo: "mindscaper-org/Soundscaper"
name: "Soundscaper"
description: "A free web-based reimplementation of Audacity 4 with additional features"
readmeQualityOk: true
url: "https://github.com/mindscaper-org/Soundscaper"
homepage: "https://soundscaper.org"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [70, 26]
topics: ["audacity", "audio-editor", "local-storage", "video-editor", "web-based"]
stars: 18
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-13T23:36:21Z"
lastCommitAt: "2026-11-02T10:50:16Z"
lastReleaseAt: "2026-10-03T22:06:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 56
maintainers: ["LeoWattenberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/97fb07d9e665e3c7f51670077c57676eb0f8ab97633de9341c5f026c9136096e/mindscaper-org/Soundscaper"
---

# Soundscaper

[Soundscaper](https://soundscaper.org) is a re-implementation of Audacity 4 on the web. It aims to be fully compatible to Audacity 4, keeping layout, design and features closely aligned, while also introducing a range of new features, such as basic video editing capabilities. 

The repository now builds two focused products from the same local-first mixed-media editor and canonical project schema. Soundscaper provides the complete audio/DAW surface at `/<locale>/`; Framescaper provides video effects and compositing at `/framescaper/<locale>/`. On the web, both routes deliberately share the same origin, IndexedDB/OPFS library, and project locks. Either product can preserve, render, and hand a project to the other without copying its media.

Scape is the lossless portable project format for both products. Each writes its own suffix — Soundscaper saves `.sscape` and Framescaper `.fscape` — and both open `.sscape`, `.fscape`, the reserved `.liscape`, and the legacy `.scape` interchangeably, because the archive behind every one of them is the same. Audacity `.aup3` and `.aup4` exports remain explicitly audio-only interchange formats.

## Why Soundscaper

Soundscaper was…
