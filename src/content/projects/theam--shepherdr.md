---
repo: "theam/shepherdr"
name: "shepherdr"
description: "A native macOS console for herding your coding agents across Herdr machines"
readmeQualityOk: true
url: "https://github.com/theam/shepherdr"
language: "Swift"
languages: ["Swift"]
languagePcts: [95]
topics: ["ai-agents", "claude-code", "codex", "coding-agents", "herdr", "macos", "pixel-art", "swiftui", "terminal"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 13
recentReleases: 10
createdAt: "2026-10-05T17:57:02Z"
lastCommitAt: "2026-11-18T12:05:18Z"
lastReleaseAt: "2026-10-16T00:28:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 58
maintainers: ["javiertoledo", "didelco"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8689e1d7b856a049e4c4ce1e026b7da9d2bf4e1bf1eae12528b635166c49b4f/theam/shepherdr"
---

**A native macOS console for herding your coding agents.**

Claude Code, Codex, Gemini, opencode… on every [Herdr](https://herdr.dev/) machine you run, in one prioritized queue.

[Download](https://github.com/theam/shepherdr/blob/HEAD/../../releases/latest) · [Guide](https://github.com/theam/shepherdr/blob/HEAD/docs/GUIDE.md) · [Hacking](https://github.com/theam/shepherdr/blob/HEAD/docs/DEVELOPMENT.md) · [MIT License](https://github.com/theam/shepherdr/blob/HEAD/LICENSE)

---

## What's Herdr?

[Herdr](https://herdr.dev) ([source](https://github.com/herdrdev/herdr)) is "the runtime your coding agents live on". It is a single Rust binary that owns the terminals your agents run in: Claude Code, Codex, opencode, Gemini and friends keep working in a background server when you close the client or lose your SSH connection. Every pane is marked working, blocked or idle, local and SSH machines share one agent list, and agents can drive Herdr themselves through its CLI and socket API. Its own client is a keyboard-and-mouse TUI that runs in any terminal.
