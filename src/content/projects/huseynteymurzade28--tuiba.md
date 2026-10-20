---
repo: "Huseynteymurzade28/tuiba"
name: "tuiba"
description: "Game Boy Advance emulator in your terminal (Rust + Ratatui)"
readmeQualityOk: true
url: "https://github.com/Huseynteymurzade28/tuiba"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["emulator", "gameboy-advance", "gameboy-advance-emulator", "gba", "terminal-ui", "tui"]
stars: 20
forks: 2
openIssues: 3
closedIssues: 32
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-20T20:26:56Z"
lastCommitAt: "2026-10-20T08:50:00Z"
lastReleaseAt: "2026-10-07T10:47:10Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 51
maintainers: ["Huseynteymurzade28", "xun-li99"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ac04d0ad170acc33e01d3bb824387f07bd4f645b7ac4dc0f153a9eb90d06b74/Huseynteymurzade28/tuiba"
---

A Game Boy Advance emulator that runs in your terminal, written in Rust with <a href="https://ratatui.rs">Ratatui</a>.

---

In terminals that can show images the 240×160 framebuffer is shown as real
pixels, upscaled by the largest integer factor that fits: through the Kitty
graphics protocol (Kitty, Ghostty, WezTerm, Konsole), Sixel (foot, Windows
Terminal, mintty, mlterm) or iTerm2's inline images. Everywhere else it is drawn with
Unicode half-block characters and 24-bit colour, so a 240×80-cell terminal
shows the full screen at 1:1. Smaller terminals get a downscaled picture;
the status bar shows the current scale and the size needed for 1:1. Sound
plays through the default audio device (`M` mutes it, `-` and `+` set the
volume).

  Game: <a href="https://gauauu.itch.io/anguna">Anguna: Warriors of Virtue</a> © 2008 Nathan Tolbert and Chris Hildenbrand, released under the MIT License (code and assets).</sub>

## Features

| Area     | What works                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| CPU      |…
