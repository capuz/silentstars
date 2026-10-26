---
repo: "materkey/ccfullsearch"
name: "ccfullsearch"
description: "TUI tool for searching and browsing Claude Code, Codex and OpenCode session history"
readmeQualityOk: true
url: "https://github.com/materkey/ccfullsearch"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-01T17:25:09Z"
lastCommitAt: "2026-10-26T19:17:43Z"
lastReleaseAt: "2026-04-12T17:56:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 51
maintainers: ["materkey", "marbleVHS"]
openGraphImageUrl: "https://opengraph.githubassets.com/1258c10f0a2f483a9e4d2caf5595336206e8c763a0d4a3918e6cc9cef453d465/materkey/ccfullsearch"
---

# ccs

Search, inspect, and resume local Claude Code, Claude Desktop, Codex, and Opencode sessions from the terminal.

Use `ccs` when you remember a topic, command, file path, stack trace, or decision from an old agent session, but not the session itself.

## Install

The package is named `ccfullsearch`; the installed command is `ccs`.

Homebrew:

```bash
brew install materkey/ccs/ccs
```

Shell installer:

```bash
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/materkey/ccfullsearch/releases/latest/download/ccfullsearch-installer.sh | sh
```

Cargo:

```bash
cargo install ccfullsearch --locked
```

cargo-binstall:

```bash
cargo binstall ccfullsearch
```

Requirements:

- `rg` from [ripgrep](https://github.com/BurntSushi/ripgrep) must be available in `PATH`. The Homebrew formula installs it automatically.
- `claude` must be available in `PATH` to resume Claude Code sessions and to use AI search.
- `codex` must be available in `PATH` to resume Codex sessions.
- `opencode` must be available in `PATH` to resume Opencode sessions.

## Claude Code plugin

The repository includes a Claude Code plugin in `.claude-plugin/` and a `ccs` skill in `.claude/skills/ccs/`.

Install the…
