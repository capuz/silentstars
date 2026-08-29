---
repo: "aluedtke7/dlna_player"
name: "dlna_player"
description: "A DLNA Audio Player made with Flutter."
readmeQualityOk: true
url: "https://github.com/aluedtke7/dlna_player"
language: "Dart"
languages: ["Dart"]
languagePcts: [73]
topics: ["audio-player", "dart", "dlna", "flutter", "flatpak"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-08-20T09:41:20Z"
lastCommitAt: "2026-08-29T17:27:50Z"
lastReleaseAt: "2026-05-26T18:51:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 41
maintainers: ["aluedtke7"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbf1a8d1090b96520d9fb6257c1d87a13119bc1eab702454c935d2fdddd45460/aluedtke7/dlna_player"
---

# dlna_player

A DLNA ([Digital Living Network Alliance](https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance)) music player made with Flutter.

## Overview

The idea for this app came through the lack of a simple DLNA player for linux. Nevertheless, 
this app works on Windows, macOS, iOS and Android as well.

This app has been tested so far with MiniDLNA and Jellyfin. Both DLNA servers were installed 
on an OpenMediaVault NAS server. MiniDLNA was installed directly while Jellyfin was running in a
Docker container.

The displayed categories depend on the used DLNA server. That's why the categories are
different in the screenshots. The installed DLNA server was using German, so some texts are
in German even though the app language was set to English.

The implemented search functionality is not searching on the server. Instead, the
received lists (tracks, artists, albums, etc.) are searched/filtered on the client.

## Features

- Dart 3 and Flutter 3.47 compatible
- Media keys work on Linux again (Wayland and X11)
- Github action to build Linux flatpak
- several themes (Material 3)
- two player widget sizes (click on player title to change)
- localization (English and…
