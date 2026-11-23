---
repo: "cuttlefisch/mae"
name: "mae"
description: "AI-native Emacs successor — Rust core, R7RS Scheme, collaborative editing, LSP/DAP, Babel, 130+ AI tools, GUI + terminal"
readmeQualityOk: true
url: "https://github.com/cuttlefisch/mae"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["ai-ide", "ai-editor", "ai-agent", "rust", "scheme", "lisp", "emacs", "collaborative-editing", "crdt", "lsp"]
stars: 6
forks: 0
openIssues: 217
closedIssues: 232
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-15T21:47:36Z"
lastCommitAt: "2026-11-23T09:25:12Z"
lastReleaseAt: "2026-05-14T23:16:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 90
undervaluedScore: 51
maintainers: ["cuttlefisch", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f628967c2554e5e5149f3b6e94d146515e4d4c042537979a0a2f3777f80afc36/cuttlefisch/mae"
---

# MAE — Modern AI Editor

An AI-native lisp machine IDE — a programmable development environment where the
human and the AI are peer actors calling the same Scheme primitives. Built on a
Rust core with an embedded R7RS-small runtime. GUI + terminal.

## Features

- **AI as peer actor** — every editor command is exposed as an AI tool, and the AI
  calls the exact same `dispatch_builtin()` your keybindings do. No shadow API,
  no simulated keystrokes, no "AI mode" with a narrower feature set than yours.
- **Collaborative editing** — CRDT sync engine (yrs/YATA) with daemon,
  WAL persistence, per-user undo, awareness protocol, PSK authentication, and
  mDNS peer discovery. Collaborative KB sharing enables real-time knowledge base
  sync across instances with offline edit + reconnect support.
- **Org-mode babel** — Execute code blocks in 12 languages (Python, Ruby, Perl,
  Bash, JS, Lua, R, Rust, Go, C, C++, Scheme), noweb expansion, `:tangle`
  directive, `:var` cross-references, configurable compilers, safety policies.
  Export to HTML and Markdown with TOC, syntax highlighting, tag filtering.
- **Runtime redefinability** — Embedded R7RS Scheme (mae-scheme).
