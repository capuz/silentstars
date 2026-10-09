---
repo: "jankeesvw/omarchy-meeting-recorder"
name: "omarchy-meeting-recorder"
description: "Record meetings on Omarchy: mic and computer audio as two tracks, transcribed on your own machine, with speakers, chapters and a player."
readmeQualityOk: true
url: "https://github.com/jankeesvw/omarchy-meeting-recorder"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["gtk4", "hyprland", "libadwaita", "meeting-recorder", "omarchy", "rust", "speaker-diarization", "transcription", "whisper"]
stars: 346
forks: 37
openIssues: 5
closedIssues: 4
watchers: 3
contributors: 10
recentReleases: 10
createdAt: "2026-09-24T15:44:42Z"
lastCommitAt: "2026-10-09T18:55:56Z"
lastReleaseAt: "2026-10-05T16:07:11Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 81
undervaluedScore: 26
maintainers: ["jankeesvw", "gardnmi", "tomtorggler"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1385832170/c707f11a-029c-4c62-ac97-f4758306ed63"
---

# Meeting Recorder

A meeting recorder for [Omarchy](https://omarchy.org). It records your microphone and the computer audio as two tracks, and when you stop you get a transcript with speakers, chapters and a player. You can also drop in a recording you already have. Everything is transcribed on your own machine.

No bot joins your call, and no audio leaves your computer. It works with any meeting app, because it simply listens to what your computer plays and what you say.

Open the app, check that both meters move, and press **Start recording**. When you stop, [whisper.cpp](https://github.com/ggml-org/whisper.cpp) transcribes the meeting while a 90s animation keeps you company. You get the transcript with who said what, a player to listen back from any line, and chapters written by the coding agent you already use. Everything takes the colours of your Omarchy theme.

Built for Omarchy on Hyprland (GTK 4 and libadwaita, written in Rust).

## Install

Meeting Recorder is in the [Omarchy package repository](https://github.com/omacom/omarchy-pkgs):

```bash
yay -S omarchy-meeting-recorder
```

For now it is in the edge channel, so this works if you run Omarchy's edge packages;…
