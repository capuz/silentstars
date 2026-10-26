---
repo: "Mainkill1/Floggfy"
name: "Floggfy"
description: "Spotify FLAC/OGG saver"
readmeQualityOk: true
url: "https://github.com/Mainkill1/Floggfy"
language: "C++"
languages: ["C++"]
languagePcts: [89]
stars: 11
forks: 0
openIssues: 1
closedIssues: 5
watchers: 3
contributors: 1
recentReleases: 6
createdAt: "2026-09-30T09:07:14Z"
lastCommitAt: "2026-10-26T03:03:29Z"
lastReleaseAt: "2026-10-26T02:53:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 52
maintainers: ["Mainkill1"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bf51438369436b545fb37ca75962d488b3352dafecddb8f85af32ff5fbbdd0d/Mainkill1/Floggfy"
---

# Floggfy

Save the music you play in Spotify on Windows.

- Saves fully played songs with available artwork, metadata and lyrics.
- Organizes music by album artist and album.
- Skips existing songs unless better audio is available, and can fill in missing metadata.

## Install

- Requires the **Windows x64 Spotify desktop app**.
- Quit Spotify completely before installing or upgrading.
- Download your preferred option from [Releases](https://github.com/Mainkill1/Floggfy/releases):
- **Always on:** put `version.dll` beside `Spotify.exe`, then start Spotify normally.
- **Launcher:** put `Floggfy.exe` and `Floggfy.dll` beside `Spotify.exe`, then run `Floggfy.exe`.
- The Spotify folder is usually `%APPDATA%\Spotify`.
- Use **one installation option**. Remove Floggfy's `version.dll` when switching to the launcher.
- The launcher closes and restarts Spotify. To run without Floggfy, quit Spotify and start it normally.

## Save music

- Downloads are enabled by default. Open Spotify's top-left menu → **To Disk** to change settings.
- Play songs from beginning to end without skipping or seeking.
- **Disable Automix** under **Edit → Preferences → Playback**. It trims songs and prevents…
