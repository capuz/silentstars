---
repo: "d99kris/namp"
name: "namp"
description: "Terminal-based audio player for Linux and macOS"
readmeQualityOk: true
url: "https://github.com/d99kris/namp"
language: "C++"
languages: ["C++"]
languagePcts: [90]
topics: ["linux", "macos", "mp3-player", "audio-player", "ncurses", "console", "terminal-based", "tui"]
stars: 67
forks: 8
openIssues: 0
closedIssues: 3
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2015-09-29T14:26:42Z"
lastCommitAt: "2026-11-22T02:10:47Z"
lastReleaseAt: "2023-12-23T09:49:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 37
maintainers: ["d99kris"]
openGraphImageUrl: "https://opengraph.githubassets.com/afc81939de37c5500ff5885140dcb6c06290fef0641eaf2ec2f6611af5207e78/d99kris/namp"
discussionCount: 0
---

namp
====

| **Linux** | **Mac** |
|-----------|---------|
| [](https://github.com/d99kris/namp/actions?query=workflow%3ALinux) | [](https://github.com/d99kris/namp/actions?query=workflow%3AmacOS) |

namp is a terminal-based MP3 player for Linux and macOS, implemented in
C++ / Qt. For systems that do not have Qt available, a lite version of namp,
[namp-lite](https://github.com/d99kris/namp-lite) (Linux only), is available.

Features
--------
- Play local audio files and entire directories
- Search playlist and enqueue tracks to play next
- CD+G karaoke playback using .cdg sidecar files
- Lyrics from .lrc files, embedded tags or LRCLIB
- Real-time spectrum analyzer visualization
- Mouse control and Winamp-style key bindings
- Edit track tags using the external tool idntag
- Last.fm scrobbling with status indicator
- Shuffle and sequential playback modes
- Customizable color themes

Usage
=====
Usage:

    namp OPTION
    namp PATH...

Command-line Options:
