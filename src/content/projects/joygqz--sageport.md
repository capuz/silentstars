---
repo: "joygqz/sageport"
name: "sageport"
description: "SSH workbench with integrated SFTP, credential management, and an AI assistant."
readmeQualityOk: true
url: "https://github.com/joygqz/sageport"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [63, 36]
topics: ["radix-ui", "sftp-client", "ssh", "ssh-client", "terminal", "terminal-emulator", "tuari", "xterm", "agent", "ai-client"]
stars: 70
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-29T14:49:34Z"
lastCommitAt: "2026-07-11T05:57:40Z"
lastReleaseAt: "2026-07-04T15:13:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 40
maintainers: ["joygqz"]
openGraphImageUrl: "https://opengraph.githubassets.com/26013725b8cbc8abd20c6a6dc4974969687c22ad8abf3df7eb84003130317880/joygqz/sageport"
---

# Sageport

**SSH workbench with integrated SFTP, credential management, and an AI assistant**

[Download](https://github.com/joygqz/sageport/releases/latest) · [Features](#features) · [Quick start](#quick-start) · [Security](#security)

</div>

---

Sageport consolidates the tools of routine server operations — terminal, file transfer, key management, and command snippets — into a single desktop application with a VSCode-style layout: activity bar, side bar, tabbed editor area, bottom panel, and command palette. All data is stored in a local SQLite database; optional multi-device sync transmits only end-to-end encrypted ciphertext.

## Features

**Terminal** — GPU-accelerated rendering via xterm.js with WebGL, built on a pure-Rust SSH stack (russh). Tabbed concurrent sessions that persist in the background without reflow, keepalives with one-click reconnect, scrollback search (<kbd>⌘</kbd> <kbd>F</kbd>), clickable links, and full Unicode support. Inline autocomplete suggests commands from your history as you type, and input can be broadcast to every connected session at once. Local shell tabs run alongside SSH sessions, and typing `user@host` in the command palette connects…
