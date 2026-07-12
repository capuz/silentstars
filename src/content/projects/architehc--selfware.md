---
repo: "architehc/selfware"
name: "selfware"
description: "Your personal AI workshop — software you own, software that lasts"
readmeQualityOk: true
url: "https://github.com/architehc/selfware"
language: "Rust"
languages: ["Rust"]
languagePcts: [68]
stars: 20
forks: 2
openIssues: 13
closedIssues: 11
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-02-10T14:40:58Z"
lastCommitAt: "2026-07-12T06:17:23Z"
lastReleaseAt: "2026-03-27T22:52:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 83
undervaluedScore: 38
maintainers: ["galic1987"]
openGraphImageUrl: "https://opengraph.githubassets.com/a371a8886d5a2f1028a6006afb761cb43f86aa0534e14ceabbb6e656b9725ca7/architehc/selfware"
fundingLinks: ["GITHUB:https://github.com/architehc"]
discussionCount: 1
---

# Selfware

```
       /\___/\
      ( o   o )    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      (  =^=  )    selfware — Your Personal AI Workshop
       )     (     Software you own. Software that knows you.
      (       )    Software that lasts.
     ( |     | )   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      \|     |/
```

An **agentic coding harness** for local LLMs that runs entirely on your hardware. 70+ tools, multi-agent swarm, evolution engine, hooks, MCP integration, LSP intelligence, ZED extension, TUI dashboard, and a fox mascot — all local-first, no cloud required.

> **TL;DR** — Point it at any OpenAI-compatible endpoint (vLLM, Ollama, llama.cpp, LM Studio), give it a task, and watch it work a tool-use (ReAct) loop — reading, editing, running tests, and committing. A lightweight Plan→Execute phase structures each run; it is not a full task decomposer, so scope large goals into concrete tasks. Then let the evolution engine iterate.

---

## What It Looks Like

### Interactive Chat (`selfware chat`)

```
╭─── selfware workshop ────────────────────────────────────╮
│                                                           │
│   /\___/\…
