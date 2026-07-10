---
repo: "codehamr/codehamr"
name: "codehamr"
description: "A minimal, local-first coding agent for the terminal."
readmeQualityOk: true
url: "https://github.com/codehamr/codehamr"
homepage: "https://codehamr.com"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ai-agent", "coding-agent", "local-llm"]
stars: 184
forks: 16
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-04-29T10:56:17Z"
lastCommitAt: "2026-07-10T07:01:44Z"
lastReleaseAt: "2026-05-21T13:47:47Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 36
maintainers: ["plaxtoris", "anarcher"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1224508792/cea8cfa4-f209-40d7-a6eb-b994c7011085"
---

# codehamr

A minimal coding agent for the terminal. Built for local LLMs, also
runs on OpenAI-compatible endpoints.

## Simplicity

A coding agent built for local LLMs makes different decisions than one
built for frontier cloud models. Context is precious; every tool call
has to earn its place. codehamr picks simplicity over complexity, on
purpose, and stays small so the context window stays yours.

Three slash commands, one embedded system prompt, no router, no
sub-agents, no skill system, no MCP. That's it.

The agent runs one plain loop: it calls tools until the work is done,
then replies. It works with `bash`, `read_file`, `write_file`, and
`edit_file`, investigating your project directly rather than guessing,
and verifies its own work (running the tests, compiling, loading the
page) as a habit the system prompt instils, not a gate that blocks
progress.

## Install

Linux, macOS:

```bash
curl -fsSL https://codehamr.com/install.sh | bash
```

Windows:

```cmd
curl -fsSL https://codehamr.com/install.cmd -o install.cmd && install.cmd
```

> **Windows note:** codehamr's `bash` tool needs a POSIX shell (`/bin/sh`), so on Windows run it inside WSL2 or a devcontainer, not from a…
