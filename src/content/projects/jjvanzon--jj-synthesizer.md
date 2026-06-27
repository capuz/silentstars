---
repo: "jjvanzon/JJ.Synthesizer"
name: "JJ.Synthesizer"
description: "🎹 Software for making music. Connect a MIDI keyboard to it, and the program generates the sound for the notes you play. Also functions as an API for generating sounds programmatically."
url: "https://github.com/jjvanzon/JJ.Synthesizer"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["midi", "music", "synthesizer", "api", "audio"]
stars: 10
forks: 0
openIssues: 5
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-11-13T13:21:45Z"
lastCommitAt: "2026-06-27T00:34:31Z"
lastReleaseAt: "2022-11-18T22:16:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 61
undervaluedScore: 34
maintainers: ["jjvanzon"]
openGraphImageUrl: "https://opengraph.githubassets.com/1601935bd372fdade4dcecbffbe6715a61ef661d0114b8e483b6911f756c45cf/jjvanzon/JJ.Synthesizer"
---

JJ.Synthesizer
==============

Release 0.250 - "Additive Engine"
---------------------------------

*2015-03-10*

This release introduces the foundational __Additive Engine__, laying the groundwork for future synthesizer development. While there is no user interface or real-time audio playback yet, core functionality is implemented and validated through test programs in the form of unit tests.

### Main Features

- __Operators__: Manages how data or signals are processed within the synthesizer, enabling various operations for sound generation.
- __Curves__: Modulation curves that evolve over time, shaping sound dynamically.
- __Samples__: Supports audio samples for playback and manipulation of pre-recorded sounds.
- __Audio File Output__: Generates and exports synthesized sound as files.
- __WAV Header__: Adds the file header needed to make audio output playable in standard media players.
- __WAV Header Detection__: Detects whether input files are standard WAV format before attempting to read them.

### Supported Operators

This version of the engine supports various types of synthesis and signal manipulation, including:

- __Sines__ (pure tone waveforms,…
