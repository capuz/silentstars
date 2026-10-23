---
repo: "RBND/Silas-Blue"
name: "Silas-Blue"
description: "Self-hosted Discord AI bot in Rust. Runs local models (Ollama, llama.cpp) or OpenAI-compatible APIs, with a web UI for permissions, prompts, and token limits."
readmeQualityOk: true
url: "https://github.com/RBND/Silas-Blue"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-04-19T23:26:53Z"
lastCommitAt: "2026-10-23T08:47:42Z"
lastReleaseAt: "2025-05-08T20:31:42Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 71
maintainers: ["RBND"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/969340335/60867137-cf07-47f6-84ed-9611fedb4441"
fundingLinks: ["KO_FI:https://ko-fi.com/robotsneverdie"]
discussionCount: 9
---

# Silas Blue

Silas Blue is a self-hosted Discord bot for running AI models in your server. Point it at local models through **Ollama** or **llama.cpp**, or hook it up to any OpenAI-compatible API (OpenRouter, OpenAI, Groq, DeepSeek, etc.).

v4 is a single Rust binary with a built-in web UI and SQLite baked in, so there's no Python environment or external database to set up.

## Features

- Switch between local models and remote APIs globally or per server.
- Configure your bot token, pick models, edit system prompts, and watch live logs from the browser (`http://127.0.0.1:8080`).
- Optional web search for current events via Bing, DuckDuckGo, Tavily, or Brave Search.
- Restrict who can chat with the bot, run web searches, or change models by Discord role or user ID.
- Set daily, weekly, or monthly token limits per role so one person doesn't burn through your GPU or API budget.
- Auto-reply to new posts in designated Discord Forum channels with custom instructions.
- Conversation history stays in RAM and expires automatically. Users can also run `/forget_me` anytime to wipe their messages from memory.

## Getting Started

### Docker

```bash
docker compose up -d --build
docker…
