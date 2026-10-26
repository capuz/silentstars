---
repo: "jonathanung/strike"
name: "strike"
description: "agentic TUI for coding agent workflows"
readmeQualityOk: true
url: "https://github.com/jonathanung/strike"
homepage: "https://strike.jonathanung.ca/"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 5
forks: 2
openIssues: 86
closedIssues: 622
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-07-23T21:58:27Z"
lastCommitAt: "2026-10-26T20:59:26Z"
lastReleaseAt: "2026-07-28T07:09:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 64
maintainers: ["jonathanung", "cursoragent", "dayvidpham"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cb16a55bcf37b61e7f7eb323ab348693e426844377c2ea28e417db6125222a5/jonathanung/strike"
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
```

## Quickstart (from source)

Requires Go 1.26+.

```sh
make setup          # one-time: ~/.strike (config + example agent/skill)
make restore        # repair missing/corrupt ~/.strike…
