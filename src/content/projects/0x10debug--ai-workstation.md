---
repo: "0x10debug/ai-workstation"
name: "ai-workstation"
description: "Self-Hosted AI on VPS - Ollama + Open WebUI in One Command"
readmeQualityOk: true
url: "https://github.com/0x10debug/ai-workstation"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-08-17T07:21:40Z"
lastCommitAt: "2026-08-29T12:13:17Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 10
maintainers: ["0x10debug"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b3f90118645b6443c0ea2466eebfdce1c21815d9589dc6fd2524ad5585fa405/0x10debug/ai-workstation"
---

# Self-Hosted AI on VPS - Ollama + Open WebUI in One Command

Deploy your own private AI workstation on a VPS with **Ollama** and **Open WebUI** packaged in Docker. Run a self-hosted ChatGPT alternative on any CPU-only or NVIDIA GPU server, expose it through a Caddy reverse proxy with automatic HTTPS, and use the built-in OpenAI-compatible API from your own apps. Perfect for homelab, privacy, and full control over your models and data — no cloud bills, no rate limits, no vendor lock-in.

Part of the [0x10debug](https://github.com/0x10debug) VPS tool suite.

## Features

- **One-command deploy** — `./mb ai deploy` boots Ollama + Open WebUI
- **Production hardening** — pinned tags, loopback port binding, healthchecks, log rotation, GPU profile
- **CPU and GPU** — auto-detects NVIDIA GPUs; same image, auto-acceleration
- **Self-hosted ChatGPT** — Open WebUI gives a polished chat interface
- **OpenAI-compatible API** — drop-in base URL for Cursor, Continue, LangChain
- **Reverse proxy ready** — Caddyfile with security headers + optional auth
- **RAG support** — Chroma vector DB + document Q&A in one command
- **Model management** — pull, list, remove, and get recommendations by VPS…
