---
repo: "SitoCH/hyperliquid-telegram-bot"
name: "hyperliquid-telegram-bot"
description: "A simple a Telegram bot for Hyperliquid"
url: "https://github.com/SitoCH/hyperliquid-telegram-bot"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 25
forks: 5
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2024-05-19T20:29:57Z"
lastCommitAt: "2026-06-29T07:23:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 42
maintainers: ["HermesBotCH", "dependabot[bot]", "SitoCH"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac054f831545804d34433a7807753903429f0f5fe12a6e7b458c9fd2562d04f2/SitoCH/hyperliquid-telegram-bot"
---

# hyperliquid-telegram-bot

A Telegram bot for Hyperliquid that monitors cryptocurrency trading positions, performs technical analysis (Wyckoff or LLM), and sends notifications for filled orders. Inspired by [Freqtrade](https://www.freqtrade.io/en/stable/). Requires Python 3.10.

## Features

- 🔍 Monitor open positions for any wallet address
- 📊 Real-time notifications for filled orders
- 📈 Support for custom trading strategies
- ⏰ Periodic coin analysis
- 🐳 Docker support for easy deployment

## Quick Start

1. Create a `docker-compose.yml` file:

```yaml
services:
  hyperliquid_bot:
    image: sito/hyperliquid-telegram-bot:latest
    container_name: hyperliquid_bot
    environment:
      HTB_TOKEN: "<TELEGRAM BOT TOKEN>"
      HTB_CHAT_ID: "<TELEGRAM CHAT ID>"
      HTB_USER_WALLET: "<ADDRESS TO WATCH>"
    restart: unless-stopped
```

2. Run the bot:
```bash
docker compose up -d
```

## Configuration

### Required Parameters

#### Telegram Setup
1. Create a new bot through [@BotFather](https://t.me/BotFather):
   - Send `/newbot` command
   - Follow the setup procedure
   - Copy the provided bot token to `HTB_TOKEN`
2. Get your chat ID from…
