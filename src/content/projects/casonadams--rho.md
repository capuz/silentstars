---
repo: "casonadams/rho"
name: "rho"
description: "rho is a local AI private and secure coding-agent written in Rust"
readmeQualityOk: true
url: "https://github.com/casonadams/rho"
homepage: "https://casonadams.github.io/rho/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["crates", "ollama", "rust", "ai", "harness", "tui", "private", "secure", "web", "gemini"]
stars: 8
forks: 1
openIssues: 2
closedIssues: 8
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-08-19T02:53:39Z"
lastCommitAt: "2026-11-22T02:05:29Z"
lastReleaseAt: "2026-09-05T00:39:59Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 61
maintainers: ["casonadams", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a3064ba9eb7aebbdb511d8fc1a1218a27511afdfb78a60c727c49eb83c06dd0/casonadams/rho"
---

# rho

`rho` is a fast, clean, local, private, and secure coding agent CLI built in Rust.

---

## Installation

```sh
cargo install rho
```

---

## Quick Start

```sh
# Start interactive REPL (no model is selected until you pick one with /model)
rho

# Run one-shot prompt (needs a saved default or --model)
rho -p "summarize this repository"

# Select model in <provider>/<model> format
rho --model anthropic/claude-3-7-sonnet
rho --model gemini/gemini-2.5-flash

# Resume a previous session
rho --resume <SESSION_ID>
# Or browse recent sessions interactively
rho --resume-picker
```

When a session that has content ends, rho prints `Resume this session: rho --resume <SESSION_ID>`
to stderr. In `/resume` and `--resume-picker`, each row is titled by the session name (see `/name`) or its first message,
with the age, turn count and session ID beside it.

In an interactive terminal, rho also writes the current session ID to
`~/.config/rho/terminal-sessions/<tty>` (for example `ttys004`; `$RHO_HOME` replaces
`~/.config/rho`). The file is rewritten when you switch sessions, so a terminal multiplexer can
resume the exact session of each pane with `rho --resume <id>`.

---
