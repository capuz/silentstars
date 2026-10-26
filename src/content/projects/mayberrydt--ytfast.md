---
repo: "MayberryDT/ytfast"
name: "ytfast"
description: "A native YouTube Music player for Omarchy, in Rust + egui. Audio only, themed by Omarchy, signed in through your browser."
readmeQualityOk: true
url: "https://github.com/MayberryDT/ytfast"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["egui", "hyprland", "linux", "music-player", "omarchy", "rust", "youtube-music"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-10-01T05:10:57Z"
lastCommitAt: "2026-10-26T18:06:30Z"
lastReleaseAt: "2026-10-09T18:43:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 53
maintainers: ["MayberryDT", "dedez1nn"]
openGraphImageUrl: "https://opengraph.githubassets.com/73cb38ba2792ace2f0a0884a257e3c1e92df0156f7bacb561f65c677940ab030/MayberryDT/ytfast"
---

# ytfast

A native YouTube Music player for [Omarchy](https://omarchy.org), written in Rust with egui. It looks and works like YouTube Music, opens in well under a second, plays audio only, and takes its colours from your Omarchy theme. In the app launcher it's called **Music**.

It's built on [fastframe](https://github.com/crmne/fastframe), [Carmine Paolino](https://github.com/crmne)'s foundation for native egui apps, and follows the pattern of his [ZapFast](https://github.com/crmne/zapfast) and [Spotifast](https://github.com/crmne/spotifast): no browser engine, no telemetry, no server of its own.

It's unofficial and not affiliated with YouTube or Google. It uses YouTube Music's private web API, so a change on YouTube's side can break it. It talks only to YouTube and Google, and to LRCLIB for timed lyrics (sending a song's title, artist, album and length, nothing else).

## Screenshots

| | |
| --- | --- |
|  |  |
|  |  |

Colours come from your Omarchy theme and change with it while the app is open. Here's the same album in a light theme:

These were taken signed out, so they show public YouTube Music rather than anyone's library, and the corner says "Signed out of YouTube…
