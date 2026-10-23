---
repo: "naamfung/dsc"
name: "dsc"
description: "Reimplementation of DeepSeek Harness in Golang"
originalDescription: "使用Golang重新实现DeepSeek Harness"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/naamfung/dsc"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 16
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-16T13:13:12Z"
lastCommitAt: "2026-10-23T09:33:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 49
maintainers: ["naamfung"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc8d68e310e705b1e5ff6ff51641e136ef709d5c988fb891b0e00d8f0d634217/naamfung/dsc"
---

# DSC

This project is a programming agent system implemented in Golang. It follows the design philosophy of DeepSeek Harness, in which everything is a plugin, and plugins can be loaded or unloaded through hot-plugging.

## Clone Guide

General users should download the official release binary directly. For development, clone the **master** branch:

```bash
git clone -b master https://github.com/naamfung/dsc.git
```

## Core Features

- **Plugin architecture**: A host-and-plugin communication mechanism based on `go-plugin` and gRPC, supporting hot-plug loading or unloading.
- **Hot Reload**: Supports online hot reload of five plugin types: dsc / agent / llm / tool / policy, allowing plugin versions to be updated without restarting the main program. It almost never holds a global lock, and a failure does not affect the old instance.
- **Multiple LLM support**: Supports mainstream LLM providers such as OpenAI, Anthropic, and Ollama. Among them, the `llm-openai` and `llm-anthropic` plugins support the local LlamaCpp inference engine.
- **ReAct loop**: Implements the Reasoning and Acting loop for agents, supporting multi-turn reasoning and tool execution.
- **Tool invocation and…
