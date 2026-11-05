---
repo: "watscho/chat-gpt-telegram-bot"
name: "chat-gpt-telegram-bot"
description: "A private AI-powered Telegram assistant with text and voice chat, image generation and editing, web search, document analysis, projects, memory, scheduled tasks, and usage controls. Built with TypeScript and OpenAI."
readmeQualityOk: true
url: "https://github.com/watscho/chat-gpt-telegram-bot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 17
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-04-26T18:51:37Z"
lastCommitAt: "2026-11-05T14:04:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 35
maintainers: ["watscho"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/633087715/61eecad2-7408-4b19-a6f6-29907b27cea5"
---

# Telegram AI Bot Pro

A private TypeScript Telegram assistant with text and voice conversations, photo analysis and editing, image generation, web search with sources, document questions, projects, named conversations, explicit saved memory, usage controls, streaming replies and durable background jobs. MIT licensed.

“Pro” names this repository's feature set. It does not grant a ChatGPT subscription or provider account access.

## Get started

Requirements: Node.js **26.13+ within Node 26**, npm 11, a Telegram bot token, an OpenAI project API key with billing and model access. Outgoing voice messages require **FFmpeg with libopus**; the Docker image includes it. Incoming voice transcription needs no FFmpeg.

```sh
nvm use
npm ci
cp .env.example .env
# Fill in required settings before starting.
npm run dev
```

Required settings:

- `TELEGRAM_API_KEY`: token from [@BotFather](https://t.me/BotFather).
- `OPENAI_API_KEY`: private OpenAI project key.
- `ALLOWED_TELEGRAM_USER_IDS`: comma-separated numeric IDs. Only these users in private chats are processed.

Default chat model: `gpt-6.1-sol`. Override it with `OPENAI_CHAT_MODEL` using a Responses model supporting vision, document…
