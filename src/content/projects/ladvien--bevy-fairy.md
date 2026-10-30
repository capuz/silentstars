---
repo: "Ladvien/bevy_fairy"
name: "bevy_fairy"
description: "An agentic debugger for Bevy games: a plugin that exposes a game's state over BRP, and an MCP server that lets a coding agent read and drive it"
readmeQualityOk: true
url: "https://github.com/Ladvien/bevy_fairy"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 28
forks: 4
openIssues: 2
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-17T06:35:33Z"
lastCommitAt: "2026-10-30T11:02:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 58
maintainers: ["Ladvien"]
openGraphImageUrl: "https://opengraph.githubassets.com/16ba36dbafc4a8c512a43c2988f61515c7d771e2d978f6ac249e26fed3022321/Ladvien/bevy_fairy"
---

# bevy_fairy

**Let a coding agent look inside a running Bevy game, drive it, and ask the person playing it for
help — without touching your desktop.**

`bevy_fairy` is two things in one crate:

- **a Bevy plugin** your game links, which adds debugging methods to the
  [Bevy Remote Protocol](https://docs.rs/bevy_remote) (BRP);
- **an [MCP](https://modelcontextprotocol.io) server**, `bevy-fairy`, which gives an agent such as
  Claude Code tools to read the game's state, run the game's own commands, capture what it shows,
  and inject input.

```text
coding agent ──MCP over stdio──▶ bevy-fairy ──BRP over HTTP :15702──▶ your game + DebuggerPlugin
                                                                            │
                                                        guide card on screen ▼
                                                              the person at the keyboard
```

> [!NOTE]
> This crate was written by an AI agent working from a human's direction. It is tested against a
> fixture game and used against a real one, but it has had no line-by-line human audit.

## See it work

**A scripted tour.** Every reply is the real server's output; every picture is the…
