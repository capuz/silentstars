---
repo: "ketraterm/KetraTerm"
name: "KetraTerm"
description: "A fast, allocation-conscious terminal emulator for the JVM, built for modern TUI and IDE integrations."
url: "https://github.com/ketraterm/KetraTerm"
homepage: "https://ketraterm.github.io/KetraTerm/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
topics: ["jvm", "kotlin", "terminal", "ansi", "console", "terminal-emulator", "tui", "xterm"]
stars: 17
forks: 0
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-02-11T18:38:13Z"
lastCommitAt: "2026-07-03T12:21:42Z"
lastReleaseAt: "2026-07-02T18:36:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 54
maintainers: ["gagik894", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b15b87c706d6f8bb7e93c63f3e9a1e1b664175e13903d0c9bc68cdc44d0c4f6f/ketraterm/KetraTerm"
discussionCount: 0
---

# KetraTerm Terminal

**KetraTerm**  is a next-generation, high-performance, strictly modular terminal emulator library written in **Kotlin/JVM 21**.

Designed for embedding into IDEs, developer tools, and standalone desktop applications, KetraTerm provides a clean, fast, and modern terminal architecture. It rejects the bloated legacy compatibility of the 1980s (like printer passthroughs or Tektronix vector graphics) to focus on contemporary shells and text-user interfaces (TUIs).

---

## Features

* **Native Pseudo-Terminal (PTY) Integration**: Seamless cross-platform native execution using JetBrains [Pty4J](https://github.com/traff/pty4j) with full Windows ConPTY support, built to handle modern shells (Zsh, Fish, PowerShell) and prompt size propagation.
* **Modern TUI & vt100/xterm Compliance**: Passes most tests of the rigorous `vttest` suite, ensuring flawless rendering for heavy interactive TUI applications like Neovim, Tmux, Htop, Fzf, and lazygit.
* **Richer Styling & 24-Bit TrueColor**: Bypasses the limits of standard 256-color palettes with full 24-bit TrueColor RGB mapping. Renders overline decorations and modern underline styles (Single, Double, Curly, Dotted, Dashed)…
