---
repo: "Nachtalb/reverse_image_search_bot"
name: "reverse_image_search_bot"
description: "Image Reverse Search Bot🕵️‍♂️🔍: A handy Telegram bot for reverse image searches on images, videos, and GIFs, supporting multiple search engines. Unleash the power of reverse searching! 🚀🤖"
readmeQualityOk: true
url: "https://github.com/Nachtalb/reverse_image_search_bot"
homepage: "https://t.me/reverse_image_search_bot"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["python", "python3", "telegram", "python-telegram-bot", "bot", "iqdb", "tineye", "bing", "google", "telegram-bot"]
stars: 137
forks: 27
openIssues: 0
closedIssues: 10
watchers: 7
contributors: 2
recentReleases: 0
createdAt: "2017-10-14T11:31:06Z"
lastCommitAt: "2026-07-21T06:13:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 48
maintainers: ["Nachtalb", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5870a00d83a0e4c70bb5eb443671ff9443f4472a9944dbe9c776b2afe7e7d95a/Nachtalb/reverse_image_search_bot"
---

# Reverse Image Search Bot

A Telegram bot that performs reverse image searches across multiple engines
including Google, Yandex, SauceNAO, Trace, and more.

→ **[Usage & Commands](https://github.com/Nachtalb/reverse_image_search_bot/blob/HEAD/USAGE.md)**

## Quick Start

```yaml
# docker-compose.yml
services:
  ris-bot:
    image: ghcr.io/nachtalb/reverse_image_search_bot:latest
    restart: unless-stopped
    environment:
      TELEGRAM_API_TOKEN: ""
      SAUCENAO_API: ""
      TRACE_API: ""
      UPLOADER_URL: ""
      UPLOADER_PATH: /data/uploads
    volumes:
      - ris-data:/data

volumes:
  ris-data:
```

```bash
docker compose up -d
```

## Configuration

All configuration is done via environment variables.

### Required

| Variable | Description |
|---|---|
| `TELEGRAM_API_TOKEN` | Bot token from [@BotFather](https://t.me/BotFather) |
| `SAUCENAO_API` | [SauceNAO API key](https://saucenao.com/user.php?page=search-api) |
| `TRACE_API` | [Trace.moe API key](https://soruly.github.io/trace.moe-api/#/limits) |
| `UPLOADER_URL` | Public base URL for uploaded files |
| `UPLOADER_PATH` | Local directory to store uploads (when using `local` uploader) |

### Optional

| Variable |…
