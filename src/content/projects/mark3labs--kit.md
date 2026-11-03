---
repo: "mark3labs/kit"
name: "kit"
description: "KIT (Knowledge Inference Tool) — A lightweight AI agent for coding"
readmeQualityOk: true
url: "https://github.com/mark3labs/kit"
homepage: "http://go-kit.dev/"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 150
forks: 30
openIssues: 1
closedIssues: 101
watchers: 1
contributors: 31
recentReleases: 0
createdAt: "2026-02-26T13:47:37Z"
lastCommitAt: "2026-11-03T12:48:08Z"
lastReleaseAt: "2026-03-09T18:48:51Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 38
maintainers: ["ezynda3", "github-actions[bot]", "mge1512"]
openGraphImageUrl: "https://opengraph.githubassets.com/087ae7606bba6f809b3882f44102f4184c2037476643217bec6d7a00494e77e2/mark3labs/kit"
---

# KIT (Knowledge Inference Tool)

## SDK guides

- [Decision API](https://go-kit.dev/sdk/decisions): typed probabilistic questions, not chat.
- [Authentication](https://go-kit.dev/sdk/authentication): credential resolution and host-controlled login.
- [Public API index](https://go-kit.dev/sdk/api-reference): every public declaration, with Go reference links.

A powerful, extensible AI coding agent CLI with multi-provider support, built-in tools, and a rich extension system.

## Features

- **Multi-Provider LLM Support**: Anthropic, OpenAI, Google Gemini, Ollama, Azure OpenAI, AWS Bedrock, OpenRouter, and more
- **Built-in Core Tools**: shell (configurable shell, bash by default, with interactive sudo password prompt), read, write, edit, grep, find, ls, subagent - no MCP overhead
- **Named Agents**: Reusable subagent presets defined in markdown with per-agent tool allowlists, advertised to the LLM for delegation. A built-in status bar above parent activity shows active runs and recent results
- **Smart @ Attachments**: Binary files auto-detected via MIME type, MCP resources via `@mcp:server:uri`
- **MCP Integration**: Connect external MCP servers for expanded capabilities
-…
