---
repo: "jonathanung/strike"
name: "strike"
description: "agentic TUI for coding agent workflows"
readmeQualityOk: true
url: "https://github.com/jonathanung/strike"
homepage: "https://strike.jonathanung.ca/"
language: "Go"
languages: ["Go"]
languagePcts: [82]
stars: 5
forks: 2
openIssues: 215
closedIssues: 745
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-07-23T21:58:27Z"
lastCommitAt: "2026-10-31T09:54:26Z"
lastReleaseAt: "2026-07-28T07:09:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 63
maintainers: ["jonathanung", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0974c586002bfd5dfae54be8cd2a36bc897b7f9257508f5ff223525753e8303/jonathanung/strike"
---

# strike

Website: https://strike.jonathanung.ca/

An agentic coding harness in Go. The engine emits protocol events; the web UI
is the primary client and the terminal UI is deprecated (`strike tui`).
Sessions are JSONL event logs.

Architecture is informed by deep-dives into
[opencode](https://github.com/sst/opencode) and
[codex](https://github.com/openai/codex). Full package map and dependency
rules: [docs/ARCHITECTURE.md](https://github.com/jonathanung/strike/blob/HEAD/docs/ARCHITECTURE.md).

**Supported platforms:** macOS, Linux, and Windows via WSL2. Native Windows
is not supported in v1.

## Install

```sh
curl -fsSL https://strike.jonathanung.ca/install | bash
```

That URL redirects to the install script on GitHub; binaries come from
[GitHub Releases](https://github.com/jonathanung/strike/releases). Details,
PATH, upgrade, and uninstall: [docs/install.md](https://github.com/jonathanung/strike/blob/HEAD/docs/install.md).

```sh
strike version
strike --upgrade    # or /upgrade in the TUI
strike daemon install --start
```

`strike daemon install` registers a per-user daemon and prints the matching
start commands. `--start` runs them. Linux writes a systemd user unit under…
