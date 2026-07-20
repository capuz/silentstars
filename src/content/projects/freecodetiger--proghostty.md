---
repo: "freecodetiger/ProGhostty"
name: "ProGhostty"
description: "A modern MacOS terminal based on libghostty"
originalDescription: "基于 libghostty 的现代 MacOS 终端"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/freecodetiger/ProGhostty"
homepage: "https://ghostty.praw.top"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-15T04:56:44Z"
lastCommitAt: "2026-07-20T06:33:49Z"
lastReleaseAt: "2026-06-02T05:07:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 57
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/7cc5b8e048735675e24af402af982fd870b23cfec22f0475c9466058890e277e/freecodetiger/ProGhostty"
---

# ProGhostty

ProGhostty is a native macOS terminal aimed at combining the terminal semantics of Ghostty with an interaction layer more suitable for developers' daily work.

It is not a tool that re-invents the Shell. Your zsh, dotfiles, prompt, completions, tmux, vim, fzf, htop, Codex, Claude Code, and other TUI tools still run along the real PTY and normal terminal input/output paths.

> ProGhostty is not the official version of Ghostty and is not affiliated with the Ghostty project. This repository vendored Ghostty and uses `libghostty-vt` as the terminal semantics layer.

## Highlights

- **Ghostty terminal semantics**: The underlying access to `libghostty-vt` aims to let the real VT layer handle terminal state, style, cursor, scrolling viewport, and other semantics as much as possible.
- **Reading experience oriented towards Codex / AI TUI**: When scrolling history, it won't easily be pulled back to the bottom by new output, making it suitable for reading and continuing input in long contexts, long answers, and long logs.
- **Bypass input box**: Each pane can call up its own lightweight input box with a shortcut key, allowing commands or prompts to be entered while browsing…
