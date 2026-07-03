---
repo: "1ay1/agentty"
name: "agentty"
description: "AI pair programming in your terminal — one static binary, sub-ms startup, any model"
url: "https://github.com/1ay1/agentty"
homepage: "https://agentty.org"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["ai-agent", "anthropic", "claude", "claude-code", "cli", "cpp26", "llm", "terminal", "tui", "agentic-coding"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-04-17T12:44:40Z"
lastCommitAt: "2026-07-03T06:26:14Z"
lastReleaseAt: "2026-06-24T21:44:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["1ay1"]
openGraphImageUrl: "https://opengraph.githubassets.com/7df4b24be53f2b6608761aa2dcd8e4b4078210115d9773372eec0b1b03db8f0d/1ay1/agentty"
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

First launch opens auth — OAuth (uses your Claude Pro/Max subscription) or paste an API key. Then type and hit Enter.

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
read · write · edit · bash · grep · glob · git · web · search_docs · task — each with a purpose-built widget.

### 🧠 Learns your codebase
Agent Skills + remember/forget memory. Teach it once, every session…
