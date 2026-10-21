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
stars: 143
forks: 30
openIssues: 2
closedIssues: 82
watchers: 1
contributors: 31
recentReleases: 0
createdAt: "2026-02-26T13:47:37Z"
lastCommitAt: "2026-10-21T08:49:16Z"
lastReleaseAt: "2026-03-09T18:48:51Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 37
maintainers: ["ezynda3", "github-actions[bot]", "mge1512"]
openGraphImageUrl: "https://opengraph.githubassets.com/af38d60948d5e94cef6348f4567541be085f787db734061b9ac3130ace8aad93/mark3labs/kit"
---

# KIT (Knowledge Inference Tool)

A powerful, extensible AI coding agent CLI with multi-provider support, built-in tools, and a rich extension system.

## Features

- **Multi-Provider LLM Support**: Anthropic, OpenAI, Google Gemini, Ollama, Azure OpenAI, AWS Bedrock, OpenRouter, and more
- **Built-in Core Tools**: shell (configurable shell, bash by default, with interactive sudo password prompt), read, write, edit, grep, find, ls, subagent - no MCP overhead
- **Named Agents**: Reusable subagent presets defined in markdown with per-agent tool allowlists, advertised to the LLM for delegation. A built-in status bar above parent activity shows active runs and recent results
- **Smart @ Attachments**: Binary files auto-detected via MIME type, MCP resources via `@mcp:server:uri`
- **MCP Integration**: Connect external MCP servers for expanded capabilities
- **Extension System**: Write custom tools, commands, widgets, and UI modifications in Go
- **Theming**: 22 built-in color themes (KITT, Catppuccin, Dracula, Nord, etc.) with runtime switching, persistence, and custom theme files
- **Model Persistence**: Model and thinking level selections are automatically saved and restored across…
