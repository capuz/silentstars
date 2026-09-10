---
repo: "markokocic/kmet"
name: "kmet"
description: "pi inspired coding agent written in Clojure"
readmeQualityOk: true
url: "https://github.com/markokocic/kmet"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-28T19:01:54Z"
lastCommitAt: "2026-09-10T07:28:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 44
maintainers: ["markokocic"]
openGraphImageUrl: "https://opengraph.githubassets.com/5dc1ff2f0917a2238c745ae76527c4493c1b2ad455c44bc539e5cc4d104f1683/markokocic/kmet"
---

# kmet

A minimal coding agent built in Clojure/Babashka, featuring a terminal user interface (TUI)
with differential rendering, LLM integration, and tool execution.

Inspired by [pi](https://pi.dev) — a terminal-based AI coding agent.

## Overview

kmet provides an interactive terminal UI where you can chat with any of 39
cataloged LLM providers (opencode-go, deepseek, anthropic, google, openai,
openrouter, mistral, bedrock, ...) — the model registry, catalogs, auth and
wire APIs are a port of pi's provider subsystem (see `models.md`). The agent
has filesystem tools (read, write, edit, bash, grep, find, ls) plus skills,
extensions and prompt templates. Fully cross-platform: runs on Linux, macOS,
Windows, WSL, and Termux (Android).

### Features

- **TUI Framework** — differential rendering, component model, overlays, raw-mode input
  ([package docs](https://github.com/markokocic/kmet/blob/HEAD/src/kmet/tui/tui.md))
- **Multi-line Editor** — word-wrap, undo/redo, kill-ring, history, paste markers
- **Chat History** — user/assistant/tool message display with scrolling
- **Agent Loop** — orchestrates LLM calls and tool execution with streaming
- **Config System** —…
