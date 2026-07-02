---
repo: "LuciusChen/ytm-radio"
name: "ytm-radio"
description: "Emacs audio player for YouTube and YouTube Music"
url: "https://github.com/LuciusChen/ytm-radio"
language: "Emacs Lisp"
languages: ["Emacs Lisp", "Rust"]
languagePcts: [63, 37]
stars: 5
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-06-23T15:42:12Z"
lastCommitAt: "2026-07-02T06:32:34Z"
lastReleaseAt: "2026-07-02T02:31:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 71
maintainers: ["LuciusChen", "0WD0"]
openGraphImageUrl: "https://opengraph.githubassets.com/70bedd7ff3c78208ab9a9357d49cb1cf754da882850ca82407eefe1a0073977c/LuciusChen/ytm-radio"
---

# ytm-radio

An experimental Emacs audio player for YouTube and YouTube Music.

`yt-dlp` discovers URL metadata for transient URL playback, and `mpv` plays
audio with video disabled. Emacs owns playback state, selection commands, and
the YouTube Music browser UI.

The UI is Emacs-native: regular `special-mode` buffers plus optional
side-window and child-frame now-playing views. Terminal Emacs is supported
through those Emacs surfaces; ytm-radio does not provide or target a standalone
terminal TUI outside Emacs.

YouTube Music account access is a separate Rust CLI. It is not an Emacs
dynamic module and does not run as a resident service. Emacs starts one
process for a request, reads a versioned JSON response, and the process exits.

## Status

Implemented:

- play YouTube and YouTube Music URLs transiently through `yt-dlp`;
- normalize playlists, channels, and tracks into a local catalog;
- play through `mpv --no-video`;
- pause, next, previous, stop, and seek through mpv IPC;
- show YouTube Music browse pages in a regular buffer;
- show the current cover, playback progress, and controls in child-frame,
  side-window, or regular-buffer now-playing views;
- expose current-track…
