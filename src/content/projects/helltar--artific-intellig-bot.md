---
repo: "Helltar/artific-intellig-bot"
name: "artific-intellig-bot"
description: "Telegram bot with OpenAI-powered AI features"
readmeQualityOk: true
url: "https://github.com/Helltar/artific-intellig-bot"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["openai", "telegram-bot", "chatbot", "image-generation", "openai-api", "kotlin", "llm", "self-hosted"]
stars: 24
forks: 2
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2023-01-20T13:43:58Z"
lastCommitAt: "2026-11-07T22:50:54Z"
lastReleaseAt: "2024-05-19T14:23:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 60
maintainers: ["Helltar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/05dfdbc241362147c95664071194a98788e3b7b283229010d69807c60e679823/Helltar/artific-intellig-bot"
---

# AI Bot for Telegram

A Telegram bot for group chats that answers questions, describes images, and generates new ones with the OpenAI API.

## Installation

### Docker Compose

Download the configuration files:

```bash
repo=https://raw.githubusercontent.com/Helltar/artific-intellig-bot/master
mkdir aibot && cd aibot && \
  curl -fsSLO "$repo/{compose.yaml,.env.example}" && mv .env.example .env
```

Edit **.env** and fill in your values:

- `CREATOR_ID` — your Telegram user ID, e.g. `1234567890` (this user becomes the bot's owner)
- `BOT_TOKEN` and `BOT_USERNAME` — the bot's token and username (e.g. `artific_intellig_bot`)
- `OPENAI_API_KEY` — your [OpenAI API key](https://platform.openai.com/api-keys)
- PostgreSQL connection settings (host, database name, user, password)

> **Note:** Compose includes a ready-to-use PostgreSQL service, so `POSTGRESQL_HOST=postgres` works out of the box. To use your own external database instead, set `POSTGRESQL_HOST` to its host and remove the `postgres` service from `compose.yaml`.

Start the bot:

```bash
docker compose up -d
```

### Build from source

To run your own build instead of the published image, clone the repository, create **.env**…
