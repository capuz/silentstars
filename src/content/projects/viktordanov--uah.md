---
repo: "viktordanov/uah"
name: "uah"
description: "A terminal coding agent that works like Codex, running on unreal-agent"
readmeQualityOk: true
url: "https://github.com/viktordanov/uah"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["ai-agents", "bubbletea", "codex", "coding-agent", "go", "llm", "mcp", "terminal", "tui"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 8
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-23T22:18:59Z"
lastCommitAt: "2026-11-05T11:24:43Z"
lastReleaseAt: "2026-09-30T23:48:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 61
maintainers: ["viktordanov"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f4eeb5a538b8d53f93023be12cd2afb4986abe6a0b9695132614ec4bea3f2e8/viktordanov/uah"
---

# uah

uah is a fully featured coding agent harness for the terminal, written in Go. It runs the agent loop in process on [uah-core](https://github.com/viktordanov/uah-core), executes the model's tool calls in the operating system's sandbox behind command rules and approvals, and keeps sessions on disk to resume, search, and rewind. It runs on a ChatGPT subscription through the Codex login, or on an API key ([providers and sign-in](#providers-and-sign-in)).

```sh
brew install viktordanov/tap/uah
codex login    # once, for the ChatGPT subscription
uah            # in a repository
```

uah runs on macOS and Linux, on arm64 and x86_64; there is no Windows build. It has a TUI, and `uah exec` and `uah review` for scripts and CI.

Contents:

1. [Features](#features)
2. [Where to start](#where-to-start)
3. [Get started](#get-started), with the [keys](#keys)
4. [Providers and sign-in](#providers-and-sign-in)
5. [Coming from Codex or Claude Code](#coming-from-codex-or-claude-code)
6. [Context preparation](#context-preparation)
7. [Configuration](#configuration)
8. [Development](#development), with the [code map](#code-map)
9. [License and acknowledgements](#license-and-acknowledgements)…
