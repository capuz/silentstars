---
repo: "trypsynth/backtalk"
name: "backtalk"
description: "A fork of Google's TalkBack screen reader for Android"
readmeQualityOk: true
url: "https://github.com/trypsynth/backtalk"
language: "Java"
languages: ["Java"]
languagePcts: [82]
stars: 66
forks: 34
openIssues: 33
closedIssues: 75
watchers: 17
contributors: 32
recentReleases: 2
createdAt: "2026-09-25T18:38:31Z"
lastCommitAt: "2026-10-31T09:54:45Z"
lastReleaseAt: "2026-10-02T12:49:26Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 39
maintainers: ["aaron-gh", "trypsynth", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cbb61fa3092709dbc704d6caeb289ccc924f4b7de3e641aba70d89bc0173947/trypsynth/backtalk"
---

# Backtalk

Backtalk is a fork of [Google's TalkBack](https://github.com/google/talkback), the screen reader for blind and visually-impaired users of Android. It adds fixes and features on top of Google's source releases. It is not affiliated with Google.

## Goals

*   Make Backtalk faster and more responsive for people who use their phone quickly.
*   Bring back useful behavior from older TalkBack and other screen readers.
*   Keep the build working on Windows, Linux, and macOS.
*   Move the code to Kotlin over time. New code is written in Kotlin. Google's Java files are converted only when they already need large changes, so that new Google releases stay easy to merge.
*   Stay close to Google's releases, and merge each new one.

## Differences from TalkBack

Backtalk speaks sooner after each swipe and screen change, and can play its sounds and speech through a low-latency audio path. It adds a two-finger rotor, a circle menu, Pause Backtalk, direct touch for audio games, sound themes with control sounds in 3D, a vibration for every sound, a status gesture, and braille keyboard dots that follow how you hold the device. It also changes some defaults and fixes problems in…
