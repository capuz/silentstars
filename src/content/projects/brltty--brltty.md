---
repo: "brltty/brltty"
name: "brltty"
description: "Screen reader for braille devices (Linux, Android, Windows)."
url: "https://github.com/brltty/brltty"
homepage: "https://brltty.app/"
language: "C"
languages: ["C"]
languagePcts: [69]
stars: 119
forks: 75
openIssues: 4
closedIssues: 2
watchers: 12
contributors: 49
recentReleases: 0
createdAt: "2014-01-05T02:38:15Z"
lastCommitAt: "2026-06-28T06:56:12Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 86
undervaluedScore: 46
maintainers: ["DaveMielke", "npitre", "hlub"]
openGraphImageUrl: "https://opengraph.githubassets.com/39bc52794d0ebb231068f07df6dc07b81978f5c74c024023e6cbb84938d2ec5a/brltty/brltty"
---

# BRLTTY

BRLTTY is a background daemon that gives a blind user access to text
consoles on Linux and similar systems via a refreshable braille
display. It can drive the display from very early in the boot
sequence, so the system is usable in single-user mode, during
recovery, and for ordinary day-to-day work.

Version 6.9.1, April 2026 · Copyright © 1995-2026 The BRLTTY
Developers · <http://brltty.app/>

## About refreshable braille

A refreshable braille display is a piece of hardware containing a
row of cells, each made up of small pins that can be raised or
lowered to render braille characters. BRLTTY drives the cells to
reflect a rectangular portion of the screen — referred to in the
documentation as *the window* — so the user can read what would
normally appear visually. Buttons or routing keys on the display
itself send commands back to BRLTTY: move the window around the
screen, toggle viewing options, copy text, switch virtual consoles,
and so on.

Synthesized speech is the more widely known accessibility technology
for blind computer users; the two complement each other rather than
competing, and BRLTTY can drive a speech synthesizer alongside the
braille display.

## What…
