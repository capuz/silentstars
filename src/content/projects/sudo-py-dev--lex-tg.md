---
repo: "sudo-py-dev/lex-tg"
name: "lex-tg"
description: "A high-performance, modular Telegram management system built with Pyrogram and SQLAlchemy 2.0. Features deep localization (20+ languages), AI integration (Gemini/OpenAI), and a custom caching layer for maximum speed and reliability."
readmeQualityOk: true
url: "https://github.com/sudo-py-dev/lex-tg"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["high-performance", "mtproto", "pyrogram-bot", "telegram-bot-ai-assistant"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-03T15:05:08Z"
lastCommitAt: "2026-11-22T11:51:18Z"
status: "thriving"
tags: []
healthScore: 66
undervaluedScore: 32
maintainers: ["sudo-py-dev", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f3622c2f4bf306d5bf497a490844a08be7e5740aa34a960593848e032591c59/sudo-py-dev/lex-tg"
---

# Lex-TG

Lex-TG is a Telegram bot for moderating groups and automating channel posts. Admins can configure it from a private settings panel inside Telegram.

[עברית](https://github.com/sudo-py-dev/lex-tg/blob/HEAD/README.he.md) · [Quick start](#quick-start) · [Deployment](#deployment) · [Development](#development)

## What it does

- **Moderation** — Manage bans, mutes, warnings, and bulk message cleanup.
- **Group protection** — Configure anti-flood and anti-raid rules, CAPTCHA, filters, and blacklists.
- **Group automation** — Set welcome messages, rules, reminders, and scheduled chat locks.
- **Channel automation** — Add reactions, signatures, links, and watermarks to posts.
- **AI tools** — Configure the optional AI assistant and content guard from the admin panel.

## Quick start

You’ll need Python 3.12 or newer, `uv`, a bot token from BotFather, and an API ID and hash from `my.telegram.org`.

From the repository root, install dependencies and create a local configuration. If you already have a `.env`, keep it and edit it in place.

```sh
uv sync
test -f .env || cp .env.example .env
mkdir -p data sessions logs
```

Set these values in `.env`.
