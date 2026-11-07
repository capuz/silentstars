---
repo: "rockorager/rush"
name: "rush"
description: "rockorager's user-friendly shell"
readmeQualityOk: true
url: "https://github.com/rockorager/rush"
homepage: "https://rush.horse"
language: "Zig"
languages: ["Zig"]
languagePcts: [89]
stars: 39
forks: 6
openIssues: 14
closedIssues: 38
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-06-07T17:55:13Z"
lastCommitAt: "2026-11-07T10:37:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 40
maintainers: ["ampagent", "rockorager", "hspak"]
openGraphImageUrl: "https://opengraph.githubassets.com/64ea95a8bf8d2a5c7df2c28e5b65c43a88cadd6793ef9dfd5f0ffc1e55f510a8/rockorager/rush"
---

# rush

Rush is a POSIX shell with dash-class speed, Bash-shaped conveniences, async
prompts, autosuggestions, and a modern interactive editor.

Keep portable scripts boring. Make daily command lines pleasant with
Unicode-aware editing, fast searchable history, structured completions,
non-blocking prompt data, and terminal-native rendering.

## Highlights

- `rush --posix` targets POSIX.1-2024 / Issue 8 shell semantics, including the
  shell language, expansion, redirection, job control, and builtins.
- Default Rush keeps valid POSIX scripts meaningful while accepting selected
  Bash-shaped extensions for migration and interactive use.
- Emacs and vi editing modes, styled diagnostics, fish-style abbreviations,
  structured completions, and history-backed autosuggestions are built in.
- Prompt segments can fetch Git state, tool versions, or project metadata in
  the background while the editor remains responsive.
- Command history is stored in SQLite with full-text search, timestamps,
  status, duration, hostname, session, and current-directory context.
- Rush probes terminal capabilities and uses synchronized output, Unicode
  grapheme widths, bracketed paste, modern keys, and…
