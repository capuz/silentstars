---
repo: "julwrites/llm-nvim"
name: "llm-nvim"
description: "Neovim plugin for llm CLI"
readmeQualityOk: true
url: "https://github.com/julwrites/llm-nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [85]
stars: 9
forks: 1
openIssues: 4
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-04-14T13:42:12Z"
lastCommitAt: "2026-10-24T00:15:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 64
maintainers: ["google-labs-jules[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0acb0240653f2b2ff2632bee4f16b7013096f6a5bb6f6ae6d34526290f9a7d8/julwrites/llm-nvim"
---

# llm-nvim

A Neovim plugin for integrating with [Simon Willison's llm CLI tool](https://github.com/simonw/llm).

## Feature Demos

### Model, Plugin and Key Management
https://github.com/user-attachments/assets/d8c9b2f8-4617-4534-9a64-05a2447d9380

### LLM Chat

## Feature List

- Unified LLM command interface (`:LLM`)
- Interactive prompting with fragments support
- Process selected text or entire files with LLMs 
- Explain code in current buffer
- Support for custom models and system prompts
- API key management for multiple providers
- Fragment management (files, URLs, GitHub repos)
- Unified manager window (`:LLMConfig`) with views for:
  - Models
  - Plugins
  - API Keys
  - Fragments
- Markdown-formatted responses with syntax highlighting
- Asynchronous command execution

## Requirements

- Neovim 0.7.0 or later
- Lua 5.2+ (Neovim bundles LuaJIT 2.1+ which is compatible)
- [llm CLI tool](https://github.com/simonw/llm) installed (`pip install llm` or `brew install llm`)

### Lua Compatibility Note

This plugin uses Lua 5.2+ APIs (`table.unpack`) for forward compatibility. Neovim bundles LuaJIT 2.1+ which provides these APIs, so no additional Lua installation is required.

##…
