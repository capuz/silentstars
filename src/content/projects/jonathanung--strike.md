---
repo: "jonathanung/strike"
name: "strike"
description: "agentic TUI for coding agent workflows"
readmeQualityOk: true
url: "https://github.com/jonathanung/strike"
homepage: "https://strike.jonathanung.ca/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 5
forks: 2
openIssues: 25
closedIssues: 512
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-07-23T21:58:27Z"
lastCommitAt: "2026-08-07T05:15:52Z"
lastReleaseAt: "2026-07-28T07:09:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 74
maintainers: ["jonathanung"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4924f9193306852277a3e19f1adb2d6dd7bd3256de1808d47ac2e74f5a16546/jonathanung/strike"
---

# strike-cli

Website: https://strike.jonathanung.ca/

An agentic coding TUI in Go/Bubble Tea. The engine emits protocol events; the
TUI consumes them. Sessions are JSONL event logs.

Architecture is informed by deep-dives into
[opencode](https://github.com/sst/opencode) and
[codex](https://github.com/openai/codex). Full package map and dependency
rules: [docs/ARCHITECTURE.md](https://github.com/jonathanung/strike/blob/HEAD/docs/ARCHITECTURE.md).

## Install

```sh
curl -fsSL https://strike.jonathanung.ca/install | bash
```

That URL redirects to the install script on GitHub; binaries come from
[GitHub Releases](https://github.com/jonathanung/strike-cli/releases). Details,
PATH, upgrade, and uninstall: [docs/install.md](https://github.com/jonathanung/strike/blob/HEAD/docs/install.md).

```sh
strike version
strike --upgrade    # or /upgrade in the TUI
```

## Quickstart (from source)

Requires Go 1.26+.

```sh
make setup          # one-time: ~/.strike (config + example agent/skill)
make restore        # repair missing/corrupt ~/.strike (or: strike restore)
make build          # builds ./strike (stamps version via git describe)
make run-echo       # offline dev loop — no API key…
