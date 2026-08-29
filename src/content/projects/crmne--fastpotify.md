---
repo: "crmne/fastpotify"
name: "fastpotify"
description: "Spotify, native and fast. One lightweight Rust app for your whole library, local playback, and Spotify Connect on Linux, macOS, and Windows."
readmeQualityOk: true
url: "https://github.com/crmne/fastpotify"
homepage: "https://fastpotify.rocks"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["audio", "cross-platform", "desktop-app", "egui", "gui", "librespot", "linux", "macos", "mpris", "music"]
stars: 426
forks: 24
openIssues: 6
closedIssues: 22
watchers: 4
contributors: 10
recentReleases: 5
createdAt: "2026-08-27T12:46:32Z"
lastCommitAt: "2026-08-29T10:20:28Z"
lastReleaseAt: "2026-08-28T12:07:09Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 88
undervaluedScore: 29
maintainers: ["crmne", "mikenoired", "dappermint"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1348483831/375eabcd-7d99-42b7-903d-198a6e7eac4e"
fundingLinks: ["GITHUB:https://github.com/crmne", "BUY_ME_A_COFFEE:https://buymeacoffee.com/crmne"]
---

# Fastpotify

**Spotify, native and fast.** A lightweight Spotify client written in Rust with
[egui](https://github.com/emilk/egui), playing music through
[librespot](https://github.com/librespot-org/librespot). It runs on Linux,
macOS, and Windows, starts in well under a second, and stays small while it
runs. There is no browser engine anywhere in the process.

Fastpotify follows in the footsteps of
[Omarchy Spotify](https://github.com/stappmus/Omarchy-Spotify) and
[spotify-tui](https://github.com/Rigellute/spotify-tui): the familiar Spotify
layout, access to your library, and a Spotify Connect receiver in one desktop
application rather than a shell plugin.

**Documentation:** [fastpotify.rocks](https://fastpotify.rocks/): what it is, getting started, everyday use, and how it connects to Spotify.

## What it does

- **Plays music on this computer.** Fastpotify is a Spotify Connect device.
  Pick it from your phone, or press play here. Gapless, up to 320 kbps, with
  optional volume normalisation and an on-disk audio cache.
- **Controls other devices.** Move playback to a speaker, a phone, or
  another computer from the device picker, and keep controlling it: play,
  pause, skip,…
