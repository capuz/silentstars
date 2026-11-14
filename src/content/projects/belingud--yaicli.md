---
repo: "belingud/yaicli"
name: "yaicli"
description: "YAICLI: A powerful command-line AI assistant with 25+ LLM providers. Features chat, command execution, quick queries, function calling, MCP support, and persistent history. Seamlessly integrates into workflows with smart environment detection."
readmeQualityOk: true
url: "https://github.com/belingud/yaicli"
homepage: "https://belingud.github.io/yaicli/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cli", "gpt", "llm", "python", "typer", "chatgpt", "command-line-tool", "terminal", "function-call", "function-calling"]
stars: 19
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-03-31T11:25:08Z"
lastCommitAt: "2026-11-14T10:50:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 62
maintainers: ["belingud"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5043d1d235ab63e2bacb9a508f772e9e6b337578ce642dd9dd52eba82365f1f/belingud/yaicli"
---

# YAICLI: Your AI assistant in command line.

YAICLI is a powerful yet lightweight command-line AI assistant that brings the capabilities of Large Language Models (
LLMs) like GPT-5 directly to your terminal. Interact with AI through multiple modes: have natural conversations,
generate and execute shell commands, or get quick answers without leaving your workflow.

- **Tools out of the box** — 12 built-in tools load straight from the installed package; there is
  no install step before the model can use them.
- **Safe by default** — every tool call is confirmed before it runs, shell commands are
  risk-classified, every decision is written to an audit log, and file writes stay inside the
  workspace with backups + `/undo`.
- **Scriptable** — `-p/--print`, `--output-format json|stream-json`, stdin piping, documented exit
  codes, and clean stdout/stderr separation make it usable in scripts and CI.
- **Lightweight, with numbers** — startup, install size and memory are measured (see *Lightweight &
  scope* below); no background processes.
- **Any provider** — OpenAI, Anthropic, Gemini, Ollama and 30+ more through the Compatibility layer.

**Supports both standard and deep reasoning…
