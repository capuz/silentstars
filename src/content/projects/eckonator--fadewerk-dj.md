---
repo: "eckonator/fadewerk-dj"
name: "fadewerk-dj"
description: "Two-deck DJ player with a playlist per deck and auto-fade. Virtual turntables, motor-style start/stop, headphone cueing, no library import. Rust, macOS · Windows · Linux."
readmeQualityOk: true
url: "https://github.com/eckonator/fadewerk-dj"
homepage: "https://github.com/eckonator/fadewerk-dj/releases"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["audio", "audio-player", "automix", "bpm", "crossfade", "desktop-app", "dj", "dj-software", "egui", "linux"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-21T07:02:14Z"
lastCommitAt: "2026-11-03T11:15:00Z"
lastReleaseAt: "2026-10-31T14:26:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 57
maintainers: ["eckonator"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1428002279/9b3542f3-32e7-4c4c-83f9-7996f7a0e95e"
---

**Two decks, two playlists, auto-fade.** A DJ player for macOS, Windows and Linux,
written in Rust. Click a folder and start playing: no database, no library import.

*The screenshots show self-generated demo tracks (`scripts/make-demo-tracks.py`).*

## Two ways to work

The switch at the top of the window chooses how FadeWerk DJ looks:

- **Live** – for mixing by hand: two decks with turntable, waveform, pitch and filter, the mixer with
  EQ, level meters and crossfader in the middle, effect pads, headphones and loops.
- **Automatic** – for a night that runs by itself: one bar across the top shows what is playing now
  and what comes up next (each with play/pause and stop for its deck), the level meters, the coming
  transition and the auto-fade controls with master fader and REC. Below, both playlists get the full width, each with an
  overview waveform to jump within its track. The folder browser slides in from the left (click “FOLDERS”
  or ⌘/Ctrl+B).

On small screens (lower than 720 points, e.g. 1024×600 netbooks) FadeWerk DJ starts in the automatic
view; otherwise in the live view. The choice is remembered.

## Features

### Auto-fade and the transition bar

- **Two decks,…
