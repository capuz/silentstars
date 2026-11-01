---
repo: "surajmandalcell/hushpen"
name: "hushpen"
description: "AI powered desktop transcription app with real time speech recognition, file transcription, global hotkeys, and SRT subtitle export."
readmeQualityOk: true
url: "https://github.com/surajmandalcell/hushpen"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [70, 21]
topics: ["asr", "mac", "macapp", "asrpro"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2025-09-08T00:15:25Z"
lastCommitAt: "2026-11-01T10:44:12Z"
lastReleaseAt: "2026-11-01T10:42:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 81
maintainers: ["surajmandalcell"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9c9dee5e037ff2dfeecd85a596456749578bceccf9d49b4fd0f3be6827a018d/surajmandalcell/hushpen"
---

# Hushpen

## What Hushpen is

Hushpen is a private, local dictation app. Hold a key and speak. Hushpen
transcribes your speech on your own computer, cleans up the text, and pastes
it into the app you are using. It is an open-source, local-first take on
tools like Wispr Flow. Your audio and text never leave the machine unless you
choose an endpoint yourself.

Hushpen 2.0 is written in Rust. The window uses GPUI, and the speech engine
runs whisper.cpp in a child process.

## Features

- Hold-to-talk dictation with a global key (Right Option on macOS, Right Alt
  on Linux by default). Tap, double-tap, and Esc to cancel. Any key or chord
  the system reports can be a shortcut, media keys included; a shortcut that
  another app uses shows how to free it. Each shortcut has a switch to turn
  it off and a button to reset it.
- Local transcription with Parakeet v3 Q4 (recommended), Whisper Large v3
  Turbo Q5 for other languages, Whisper Small Q5 for translation to English,
  and Whisper Base Q5 for older or slower computers. Metal on macOS, CPU on
  Linux.
- Models view in three sections: speech recognition, text cleanup, and
  voices. It marks the recommended model of each kind, and a…
