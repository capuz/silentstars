---
repo: "hqhq1025/clipaste"
name: "clipaste"
description: "Screenshot clipboard paste fix for Claude Code, Codex & Cursor — works on macOS, SSH remote, WSL2. Tiny background daemon (9 MB RAM, 0% CPU), zero config."
readmeQualityOk: true
url: "https://github.com/hqhq1025/clipaste"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["claude-code", "cli", "clipaste", "clipboard", "codex", "cursor", "developer-tools", "macos", "paste", "productivity"]
stars: 59
forks: 6
openIssues: 4
closedIssues: 4
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2026-04-12T05:26:46Z"
lastCommitAt: "2026-09-24T08:41:50Z"
lastReleaseAt: "2026-09-08T04:39:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 24
maintainers: ["hqhq1025", "lodyai[bot]", "gabenidolcs-creator"]
openGraphImageUrl: "https://opengraph.githubassets.com/0929bc29a149658ddf4101eae2cb417185d7a1b446e639e037c72f0cd1079ecd/hqhq1025/clipaste"
---

# clipaste

Fix screenshot paste in terminal AI tools — locally, over SSH, and in WSL2.

**[hqhq1025.github.io/clipaste](https://hqhq1025.github.io/clipaste/)** · [AGENTS.md](https://github.com/hqhq1025/clipaste/blob/HEAD/AGENTS.md) · [Issues](https://github.com/hqhq1025/clipaste/issues)

**clipaste** is a lightweight Rust clipboard daemon for developers who use terminal-based AI coding tools like Claude Code, Codex CLI, and Cursor. It fixes local screenshot paste on macOS and Windows, bridges their clipboards to remote servers over SSH, and connects Windows to WSL2. Graphical Linux hosts can also serve clipboard PNG images over SSH using the read-only backend described below.

**Problem:** You take a screenshot, switch to Claude Code / Codex / Cursor in your terminal, press **Ctrl+V** — nothing happens. Or you're SSH'd into a remote server and can't paste screenshots at all.

**Why:** macOS screenshots only put raw image data (TIFF/PNG) on the clipboard. Terminals like Ghostty and Alacritty can only Cmd+V paste text or file URLs — they can't paste raw image data. Over SSH, the remote server has no access to your local clipboard whatsoever.

**Solution:** clipaste is a background…
