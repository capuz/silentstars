---
repo: "1ay1/agentty"
name: "agentty"
description: "AI pair programming in your terminal — one static binary, sub-ms startup, any model"
readmeQualityOk: true
url: "https://github.com/1ay1/agentty"
homepage: "https://agentty.org"
language: "C++"
languages: ["C++"]
languagePcts: [95]
topics: ["ai-agent", "anthropic", "claude", "claude-code", "cli", "cpp26", "llm", "terminal", "tui", "agentic-coding"]
stars: 82
forks: 6
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-17T12:44:40Z"
lastCommitAt: "2026-07-20T06:34:24Z"
lastReleaseAt: "2026-07-12T15:13:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 41
maintainers: ["1ay1", "qb2014"]
openGraphImageUrl: "https://opengraph.githubassets.com/d03f45526194cd2e2144499ce62ba790f7773c1f08e5d1a9c3c97e2e010f1c2c/1ay1/agentty"
---

<h1 align="center">agentty</h1>

  <b>AI pair programming in your terminal</b><br>
  One static binary. Sub-millisecond startup. Any model.
</p>

</p>

</p>

## Getting Started

```bash
curl -fsSL https://raw.githubusercontent.com/1ay1/agentty/master/install.sh | sh
cd your-project
agentty
```

First launch opens auth — OAuth (uses your Claude Pro/Max subscription) or paste an API key. Once you're in, a first-run welcome card suggests a few things to try; just type and hit Enter.

## Features

<table>
<tr>
<td width="50%">

### ⚡ Instant startup
Cold start under 1ms. No Node, no Python, no npm install. Just a static binary.

### 🔌 Any model
Claude, GPT, Groq, OpenRouter, Ollama, or any OpenAI-compatible endpoint. Switch live with `^P`.

### 🛡️ Sandboxed by default
Every shell call runs inside bwrap (Linux) / sandbox-exec (macOS). File tools refuse paths outside your workspace.

</td>
<td width="50%">

### 🌐 Air-gapped mode
Run on a box with no internet. Your laptop relays the bytes over SSH with TLS pinned end-to-end.

### 🔧 Full tool suite
read · write · edit · bash · grep · glob · git · web · search_docs · search_code · task — each with a purpose-built widget.

### 🧠 Learns…
