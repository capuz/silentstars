---
repo: "nekonihq/nekoni"
name: "nekoni"
description: "Local AI agent on your home machine, accessible from your phone via P2P WebRTC. Ollama + RAG + Skills + cron - no cloud, no subscription, your data stays on your hardware."
readmeQualityOk: true
url: "https://github.com/nekonihq/nekoni"
homepage: "https://nekoni.dev"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [66, 27]
topics: ["ai", "ai-agent", "ai-agents", "ai-assistant", "ai-safety", "ai-tools", "chatbot", "chromadb", "llama", "ollama"]
stars: 16
forks: 2
openIssues: 13
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-21T03:20:03Z"
lastCommitAt: "2026-10-24T00:15:34Z"
lastReleaseAt: "2026-03-27T18:40:00Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "under_pressure"]
healthScore: 81
undervaluedScore: 12
maintainers: ["malykhin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1187697542/edacc2a9-7ae9-4c2b-96b0-4e1d55694f84"
---

# 🐱 Nekoni — Local AI Agent You Control From Your Phone

**[nekoni.dev](https://nekoni.dev)** · **[app.nekoni.dev](https://app.nekoni.dev)** · **[iOS App](https://apps.apple.com/us/app/nekoni/id6760954228)** · **[Demo](https://youtu.be/pDFwqkeD8Sc)**

> Run your own AI. Own your data. Access it from your phone — no cloud required.

Nekoni is a self-hosted AI agent that runs on your machine and connects directly to your phone via WebRTC.

No cloud. No subscriptions. No data leaving your hardware.

## Features

- **Fully local** — LLM inference via Ollama, embeddings via sentence-transformers, vector search via ChromaDB
- **Phone access** — connect from mobile or web over direct WebRTC DataChannel
- **No cloud relay for data** — public signaling is used only for SDP/ICE exchange
- **Key-pair security** — Ed25519 identity keys and mutual authentication
- **RAG** — ingest documents (PDF, DOCX, XLSX, PPTX, HTML, images) with OCR and query them from chat
- **Skills** — reusable prompt templates with cron scheduling
- **Extensible** — add tools in a few lines of Python
- **Observable** — live trace stream in the dashboard

## Quick Start

```bash
curl -sSL…
