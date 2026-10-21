---
repo: "Sinity/polylogue"
name: "polylogue"
description: "A local evidence system for AI work—unifying ChatGPT, Claude, Codex, Gemini, and agent histories into one searchable, auditable archive."
readmeQualityOk: true
url: "https://github.com/Sinity/polylogue"
homepage: "https://sinity.github.io/polylogue/"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [65, 35]
topics: ["ai-agents", "ai-observability", "audit-trail", "chatgpt", "claude", "codex", "conversation-history", "digital-archive", "full-text-search", "gemini"]
stars: 10
forks: 2
openIssues: 2
closedIssues: 880
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-07T10:44:46Z"
lastCommitAt: "2026-10-21T21:15:03Z"
lastReleaseAt: "2026-07-17T20:28:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 58
maintainers: ["Sinity"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2c504cebc12cfa6fe399aaa8a47153f50b803bf3748a5a08b7922b1c29a46c4/Sinity/polylogue"
---

# Polylogue

Polylogue keeps every AI conversation and agent session your tools leave
behind (Claude Code, Codex, Gemini CLI, Grok CLI, Hermes, and exports from
ChatGPT, claude.ai, AI Studio, the Gemini app and others) in one local
archive, exactly as written, and lets you and your agents search, read,
measure and annotate it from the command line, over MCP or in a web reader.

This repository is the Rust rewrite. The Python predecessor is kept for
reference; the rewrite uses its own archive.

## Build

```sh
nix build .#polylogue          # or: nix develop -c cargo build -p polylogue
./result/bin/polylogue --help
```

## Run

Start the daemon, then talk to it from another terminal:

```sh
polylogue daemon                     # collects from every tool's own location
polylogue import ~/Downloads/chatgpt-export.zip
polylogue repo:polylogue since:7d    # a query: sessions in a repository this week
polylogue read claude-code:SESSION   # read one session
polylogue measure usage since:30d    # tokens and cost
```

The daemon owns the archive: it holds the archive lock, runs the loop that
collects and parses every input, runs the only writer, and serves clients
over a Unix socket.…
