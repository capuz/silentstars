---
repo: "epogonii/nowplaying-card"
name: "nowplaying-card"
description: "GNOME Shell extension: Now Playing card with cover art, seek bar and transport controls for any MPRIS player"
readmeQualityOk: true
url: "https://github.com/epogonii/nowplaying-card"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [85]
topics: ["gjs", "gnome", "gnome-shell", "gnome-shell-extension", "media-player", "mpris", "quick-settings", "spotify"]
stars: 37
forks: 0
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-19T06:07:57Z"
lastCommitAt: "2026-10-16T08:26:23Z"
lastReleaseAt: "2026-10-11T08:20:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 85
undervaluedScore: 43
maintainers: ["epogonii"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7e9bdb814f2963d29e2d6b6a5b46fbf9f87ab831f64d011ad391a98ca9798ba/epogonii/nowplaying-card"
fundingLinks: ["GITHUB:https://github.com/epogonii", "CUSTOM:https://www.paypal.com/paypalme/pogonii"]
---

An animated equalizer in the top panel and a media card for any MPRIS player.

## What does this extension do?

Shows what is playing: an animated equalizer in the top panel and a media card
with cover art, a seekable progress bar and transport controls for any MPRIS
player.

> [!TIP]
> **Nothing to configure to get going, nothing to install beside it.**
> Enable it and it picks up whatever is already playing.

## Screenshots

The card in its own popup, opened from the panel button:

Several players at once: the one playing keeps the open card, the rest wait as
rows and open on a click.

The track and the transport in the panel itself:

In place of the bars, a spectrum analyzer that moves with the sound itself:

Or no button of its own, and the card at the bottom of Quick Settings:

Preferences:

## Features

- Every MPRIS player, however it is packaged: native, Flatpak, Snap
- Cover art however the player hands it over: a file, a URL, or the picture
  itself inline; a browser that writes the file a moment after it announces the
  track is waited for, and a player whose artwork sits in a sandbox the shell
  cannot read falls back to its own application icon
- Artwork fills the…
