---
repo: "tonquoc0407/capybara"
name: "capybara"
description: "Terminal trace debugger for AI agents."
readmeQualityOk: true
url: "https://github.com/tonquoc0407/capybara"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["agent-tools", "ai-agents", "cli-tool", "debugging", "golang", "llm", "llmops", "opentelemetry", "tracing"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2026-07-24T07:27:03Z"
lastCommitAt: "2026-11-01T22:59:11Z"
lastReleaseAt: "2026-10-14T03:29:05Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 49
maintainers: ["tonquoc0407", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/04163d873c5586b7e3c947b074cca886a817bad678284350087f193631c526e1/tonquoc0407/capybara"
---

A terminal trace debugger for AI agents.<br>
  It records what an agent did and shows you where it went wrong.

## Contents

- [Install](#install)
- [Getting a trace in](#getting-a-trace-in)
- [Reading a trace](#reading-a-trace)
- [What it looks for](#what-it-looks-for)
- [Other commands](#other-commands)
- [Config](#config)
- [Architecture](#architecture)

## Install

```sh
brew install tonquoc0407/tap/capybara
```

Or `go install github.com/tonquoc0407/capybara/cmd/capybara@latest`, or grab a binary from the [releases page](https://github.com/tonquoc0407/capybara/releases). One file, no CGo, no runtime dependencies.

## Getting a trace in

Run it with no arguments. It opens the TUI, listens for OTLP on `127.0.0.1:4318` and `127.0.0.1:4317`, and tails `~/.claude/projects` when that directory exists:

```sh
capybara
```

Traces land in `capybara.db` in the working directory. Point somewhere else with `-db`, and drop prompt and tool bodies with `-no-content`. With an empty database, the middle pane shows what it's listening on and how to send it something — there's nothing to look up.

If something else already holds 4317 or 4318 — a collector, Jaeger, another tracing UI — capybara…
