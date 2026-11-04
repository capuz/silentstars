---
repo: "tui-lipan/rozi"
name: "rozi"
description: "A modern, cross-platform tiling terminal multiplexer that feels like a window manager - with self-arranging panes, persistent sessions, live configuration, and coding-agent awareness."
readmeQualityOk: true
url: "https://github.com/tui-lipan/rozi"
homepage: "https://rozi.tui-lipan.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["command-line", "cross-platform", "developer-tools", "hyprland", "pty", "ratatui", "rust", "session-management", "terminal", "terminal-multiplexer"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-21T23:04:36Z"
lastCommitAt: "2026-11-04T13:04:46Z"
lastReleaseAt: "2026-08-27T14:40:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 63
maintainers: ["Razuer"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1342287896/857174b5-4d07-4295-a3e2-8602275b724a"
fundingLinks: ["GITHUB:https://github.com/Razuer"]
---

A tiling terminal multiplexer. Your terminals, tiled like a window manager.

  ·
  ·

rozi arranges panes as you open them, keeps named sessions running after you leave, reaches other
machines over SSH, and shows which coding agents need you. You can change any of it live, from
inside rozi: themes, pane frames, layouts, and keys preview as you browse and save to one config
file. Everything you can do interactively, you can also script from the CLI, hooks, and extensions.

| Tiling workspace | Persistent sessions | Remote machines |
| --- | --- | --- |
| Seven tiling layouts, plus floating and fullscreen panes | Live processes and scrollback survive detach | Attach to saved hosts through SSH |
| **Agent activity** | **Shared sessions** | **Automation and extensions** |
| See which coding agents are working or need input | Follow another client or take layout control | Inspect, control, and extend rozi from the CLI |

Tiling behavior and keyboard flow take their cues from the
[Hyprland](https://hypr.land) window manager.

## Install

```bash
curl -fsSL https://rozi.tui-lipan.dev/install | bash
```

```powershell
irm https://rozi.tui-lipan.dev/install.ps1 | iex
```

You can also…
