---
repo: "andrewdavidmackenzie/flow"
name: "flow"
description: "Exploration of a data-flow programming paradigm"
readmeQualityOk: true
url: "https://github.com/andrewdavidmackenzie/flow"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["data-flow", "distributed-computing", "iced", "webassembly", "flow"]
stars: 40
forks: 3
openIssues: 15
closedIssues: 1349
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2015-11-28T15:21:34Z"
lastCommitAt: "2026-10-08T10:51:48Z"
lastReleaseAt: "2023-09-19T10:50:22Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 56
maintainers: ["andrewdavidmackenzie", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a9ad2c14d009c48bf3f9049b3e71339bad46e8ddff080d15eb06b33036b35bf/andrewdavidmackenzie/flow"
fundingLinks: ["KO_FI:https://ko-fi.com/andrew", "PATREON:https://patreon.com/andrewmackenzie"]
discussionCount: 3
---

# flow — Dataflow Programming System

`flow` is a system for defining, compiling and running parallel
[dataflow programs](https://en.wikipedia.org/wiki/Dataflow_programming).
Flows are defined declaratively as graphs of connected processes — using a
visual editor or text files — compiled to a manifest, and executed by a runner.
The suite of tools (runner, debugger, remote executor) work together over the
network, discovering each other via mDNS for distributed flow execution.

### Install everything with a single command

```bash
curl -sL https://github.com/andrewdavidmackenzie/flow/releases/latest/download/install-flow.sh | bash
```

## Your First Flow

Here's a flow that generates the fibonacci sequence:

This flow has two **functions** connected together:
- `add` — a library function from `flowstdlib` that adds two numbers
- `stdout` — a **context function** provided by the runner for printing to the terminal

The `add` function has two inputs (`i1` and `i2`) with **initializers**: `i1` is
set to `0` and `i2` to `1` at startup (shown as "once" — they're only set once).

Three **connections** carry data between functions:
- `add`'s output feeds back to its own `i2` input (the…
