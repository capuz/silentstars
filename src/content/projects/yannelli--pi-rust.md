---
repo: "yannelli/pi-rust"
name: "pi-rust"
description: "Rust-only port of the pi coding agent harness"
readmeQualityOk: true
url: "https://github.com/yannelli/pi-rust"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["agent-client-protocol", "ai", "ai-agent", "anthropic", "claude", "cli", "coding-agent", "llm", "mcp", "model-context-protocol"]
stars: 12
forks: 2
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-12T19:05:01Z"
lastCommitAt: "2026-11-12T05:42:38Z"
lastReleaseAt: "2026-10-14T09:42:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 55
maintainers: ["yannelli", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1416021660/d41be069-2424-4af6-a8f9-a6979e5fc1c3"
---

# pi-rust

pi-rust is a Rust port of the [pi](https://github.com/earendil-works/pi) coding agent harness. It has these parts:

- A streaming API for large language models (LLMs) from many providers.
- An agent loop that calls tools.
- The `pi` coding agent, which has a command-line interface (CLI).

pi-rust does not need Node.js or a different JavaScript runtime. In this file, "upstream pi" is the original pi, which is written in TypeScript.

## Install

Linux and macOS:

```sh
curl -fsSL https://raw.githubusercontent.com/yannelli/pi-rust/main/install.sh | sh
```

Windows (PowerShell):

```powershell
irm https://raw.githubusercontent.com/yannelli/pi-rust/main/install.ps1 | iex
```

Homebrew (macOS and Linux):

```sh
brew install yannelli/tap/pi
```

The script downloads the latest release, compares it with `SHA256SUMS`, and installs `pi`. For script options, manual install, and build from source, see [Install](https://github.com/yannelli/pi-rust/blob/HEAD/crates/pi-coding-agent/docs/install.md).

## Quick start

```sh
export ANTHROPIC_API_KEY=...        # or OPENAI_API_KEY, GEMINI_API_KEY, ...; or run /login
pi                                  # interactive session in the current…
