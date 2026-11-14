---
repo: "nujievik/mux-media"
name: "mux-media"
description: "CLI utility to mux (merge) video, audio, and subtitles"
readmeQualityOk: true
url: "https://github.com/nujievik/mux-media"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 18
forks: 0
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2024-09-16T23:29:57Z"
lastCommitAt: "2026-11-14T21:58:23Z"
lastReleaseAt: "2026-01-29T22:28:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 64
maintainers: ["nujievik"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee15feb9d146acf79c8b3cec7746e2e8e62c682b4e5b0d9ae6fa3a1a345d9c38/nujievik/mux-media"
---

# mux-media

CLI utility to mux (merge) video, audio, and subtitles.

https://github.com/nujievik/mux-media/actions/workflows/tests.yml)

## Quick Start
1. [Download](https://github.com/nujievik/mux-media/releases) an
archive for your system.
2. Unpack it.
3. Run the unpacked `mux-media` in a media directory.

## Default Behaviour
- Saves muxed files to the `muxed` subdirectory.
- Muxes all media extension files in a CWD directory and 16 its
subdirectories.
- Muxes all files with a same filename prefix 
(eg., **Death Note - 01**.mkv and **Death Note - 01**.eng.aac) to
single MKV-container.
- Skips orphan files without an other same filename prefix file.
- Attaches all found `*.OTF` & `*.TTF` fonts to each output MKV.

## Auto Features
- Convert subtitles encoding to UTF-8.
- Fix "delay relative to video" for external audio.
- Merge matroska linked video.
- Set stream titles & langs by parse filenames.
- Setup default & forced flags.
- Streams sort.

## Streams Info
To print streams info run `mux-media --info`.

This shows first mediafiles group, their parsed streams, sorted
streams order, additional external fonts. This takes all `[options]`
user settings, so may use for setup…
