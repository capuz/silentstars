---
repo: "taketwo/llm-ollama"
name: "llm-ollama"
description: "LLM plugin providing access to models running on an Ollama server"
readmeQualityOk: true
url: "https://github.com/taketwo/llm-ollama"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 373
forks: 37
openIssues: 1
closedIssues: 38
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2024-01-17T16:10:05Z"
lastCommitAt: "2026-10-23T12:04:23Z"
lastReleaseAt: "2024-11-06T09:07:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 37
maintainers: ["taketwo", "JimmyLiuJia", "adamchainz"]
openGraphImageUrl: "https://opengraph.githubassets.com/f299599d891cc7252ea7c50dfc70ffc8aa91bddb8836cd13b1613d1ef7195532/taketwo/llm-ollama"
---

# llm-ollama

[LLM](https://llm.datasette.io/) plugin providing access to models running on an [Ollama](https://ollama.ai) server.

## Installation

Install this plugin in the same environment as [LLM](https://llm.datasette.io/).

```bash
llm install llm-ollama
```

## Quickstart

By default, the plugin connects to a local Ollama server. Ensure the server is running and has some models available. Alternatively, the plugin can connect to a remote or managed Ollama cloud server; see [Connecting to Ollama server](#connecting-to-ollama-server) for configuration instructions.

The plugin automatically discovers all models available on the server and registers them with LLM. To see the list of models and their capabilities, run:

```bash
llm ollama models
```
```bash
model                             digest          capabilities
gemma3:latest                     c0494fe00251    completion, vision
gpt-oss:120b-cloud                569662207105    completion, tools, thinking
mxbai-embed-large:latest          468836162de7    embedding
qwen3:4b                          2bfd38a7daaf    completion, tools, thinking
```

Once registered, models are available for prompting, chatting, and…
