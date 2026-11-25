---
repo: "CharmingBlaze/cyberbasic"
name: "cyberbasic"
description: "A modern BASIC for 2D/3D games in the spirit of Blitz3D: Rust compiler, Babylon.js runtime, standalone web and desktop exports"
readmeQualityOk: true
url: "https://github.com/CharmingBlaze/cyberbasic"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [54, 29]
topics: ["babylonjs", "basic", "blitzbasic", "compiler", "game-engine", "gamedev", "rust"]
stars: 87
forks: 1
openIssues: 1
closedIssues: 5
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-09-02T09:33:52Z"
lastCommitAt: "2026-11-25T03:19:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 33
maintainers: ["CharmingBlaze"]
openGraphImageUrl: "https://opengraph.githubassets.com/cde434fa04390fc2375032bd62ca6130870091ed1f539473d9e90ba9ed4e52ad/CharmingBlaze/cyberbasic"
discussionCount: 3
---

# CyberBasic

A modern BASIC for making 2D and 3D games, in the spirit of Blitz3D and AGK2. You write in a simple BASIC, or later build games visually with nodes. Everything runs on a modern renderer (Babylon.js), and finished games export without the editor.

> **Status: early development.** This is a full rewrite; the old C++/raylib interpreter is in this repo's git history. Phase 0 is done and the core language works. Progress and roadmap are in [PLAN.md](https://github.com/CharmingBlaze/cyberbasic/blob/HEAD/PLAN.md).

```basic
Game "Pong-ish"
Graphics 800, 600

Global score

Function Paddle(y)
    If KeyDown(KEY_UP) Then y -= 400 * Delta
    If KeyDown(KEY_DOWN) Then y += 400 * Delta
    Return Max(0, Min(510, y))
End Function

While Not KeyHit(KEY_ESCAPE)
    y = Paddle(y)
    Cls
    Rect 30, y, 14, 90
    Text 10, 10, "Score: " + score
    Sync
Wend
```

## Quick start

Requires [Rust](https://rustup.rs) and a browser.

```sh
cargo run --release -- run examples/pong.cb
```
