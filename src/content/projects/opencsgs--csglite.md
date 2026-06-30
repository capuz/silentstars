---
repo: "OpenCSGs/csglite"
name: "csglite"
description: "CSGLite is a lightweight local LLM runner for the CSGHub platform. One command downloads, loads, and chats with models. It   ships a web UI, OpenAI-compatible API, llama.cpp inference, resumable downloads, marketplace browsing, and one-click AI app and   coding-agent setup—all in a single cross-platform binary."
url: "https://github.com/OpenCSGs/csglite"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [52, 21]
topics: ["inference", "ai-gateway", "ollama-api", "cc-switch"]
stars: 31
forks: 6
openIssues: 15
closedIssues: 27
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-03-11T14:45:09Z"
lastCommitAt: "2026-06-30T06:15:12Z"
lastReleaseAt: "2026-03-21T04:09:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 38
maintainers: ["ganisback", "zhendi"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f23295f9037a3c2aac1e4e68eff8cd32b48573417b7f3e4f75db4831efe69d1/OpenCSGs/csglite"
---

# CSGLite

</p>

A lightweight tool for running large language models locally, powered by models from the [CSGHub](https://opencsg.com) platform.

Inspired by [Ollama](https://ollama.com), CSGLite provides model download, local inference, interactive chat, and an OpenAI-compatible REST API — all from a single binary.

## Features

### Core

- **One command to start** — `csghub-lite run` downloads, loads, and chats
- **Model keep-alive** — models stay loaded after exit (default 5 min), instant reconnect
- **Auto-start server** — background API server starts automatically, no manual setup
- **Model download** from CSGHub platform (hub.opencsg.com or private deployments)
- **Local inference** via llama.cpp (GGUF models, SafeTensors auto-converted)
- **Interactive chat** with streaming output
- **REST API** compatible with Ollama's API format
- **Cross-platform** — macOS, Linux, Windows
- **Resume downloads** — interrupted downloads resume where they left off
- **Pause/Resume** — pause ongoing downloads and resume later

### Web UI

- **Model Library** — manage local models with download progress, pause/resume, and one-click run
- **Marketplace** — browse and download models/datasets…
