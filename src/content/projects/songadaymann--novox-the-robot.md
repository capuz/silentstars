---
repo: "songadaymann/novox-the-robot"
name: "novox-the-robot"
description: "Make your computer sing: an open source singing robot for Mac (app, AU and VST3)"
readmeQualityOk: true
url: "https://github.com/songadaymann/novox-the-robot"
homepage: "https://songaday.studio/plugins"
language: "C++"
languages: ["C++"]
languagePcts: [52]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-10-19T17:28:50Z"
lastCommitAt: "2026-10-21T21:09:42Z"
lastReleaseAt: "2026-10-21T21:16:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 36
maintainers: ["songadaymann"]
openGraphImageUrl: "https://opengraph.githubassets.com/e758a75d45e2b2a617f1b5e342da18321d7b59a4d15ec60b24025ce79e039fea/songadaymann/novox-the-robot"
---

# Novox The Robot

A modern take on Myriad's **Virtual Singer** (from Harmony Assistant): a formant-synthesis
singing voice that sings any lyrics on any melody. Deliberately synthetic, deliberately
old-school, but easy to use.

Goals:

- **One engine, many front ends.** A small C++ core with a plain C API that can sit behind a
  DAW plugin (AU/VST3 for Logic and friends), Python, and JavaScript (WebAssembly).
- **Fast lyric + melody entry.** Type a lyric line and it flows onto the notes by syllable. Play
  a MIDI keyboard into it, or sing into it (or drop in a sung take) to get the melody and words.
- **Many voices.** Presets modeled on the kinds of voices the original shipped with (std, robot,
  male/female/kid, soprano/alto/tenor/bass, gregorian, choirs, crooner…), all built from the
  same knobs.

## Download

**[songaday.studio/plugins](https://songaday.studio/plugins)**, for:

- **Mac** (Apple Silicon, macOS 13.3 or later): one installer adds the standalone app and the Audio
  Unit and VST3 instrument plugins (Logic Pro, GarageBand, Ableton Live, Reaper and other hosts).
- **Windows** (10 or 11, 64-bit): one installer adds the standalone app and the VST3 (Ableton
  Live,…
