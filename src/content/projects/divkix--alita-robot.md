---
repo: "Divkix/Alita_Robot"
name: "Alita_Robot"
description: "🤖 Alita is a Telegram Group management bot made using Gotgbot and Go, which makes it modern and ⏩ faster than most of the Telegram chat managers. 💬"
readmeQualityOk: true
url: "https://github.com/Divkix/Alita_Robot"
homepage: "https://alita-docs.divkix.me"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["telegram", "telegram-bot", "bot", "golang", "gotgbot"]
stars: 251
forks: 323
openIssues: 7
closedIssues: 169
watchers: 7
contributors: 13
recentReleases: 0
createdAt: "2020-10-26T04:57:50Z"
lastCommitAt: "2026-10-21T20:00:27Z"
lastReleaseAt: "2023-07-30T16:50:10Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 98
undervaluedScore: 49
maintainers: ["Divkix", "breakneck-git", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e7f749f33b0b7b7d9ae4b7dfc482d65352e9b891a90967218a943c84e19dee3/Divkix/Alita_Robot"
fundingLinks: ["GITHUB:https://github.com/Divkix", "KO_FI:https://ko-fi.com/divkix"]
discussionCount: 1
---

# Alita Robot 🤖

Alita is a Telegram group-management bot written in Go. It provides moderation,
filters, notes, greetings, anti-spam, captcha, backups, and multi-language
support.

## Quick Start

Prerequisites: Docker, Docker Compose, a Telegram bot token from
[@BotFather](https://t.me/BotFather), and a Telegram user ID plus log-channel ID.

```bash
git clone https://github.com/divkix/Alita_Robot.git
cd Alita_Robot
cp sample.env .env
# Set BOT_TOKEN, OWNER_ID, MESSAGE_DUMP, WEBHOOK_DOMAIN, and WEBHOOK_SECRET in .env.
docker compose up -d
docker compose logs -f alita
```

PostgreSQL and Redis are included in the Compose stack.

## Documentation

For setup, configuration, deployment, and command references, see
[alita-docs.divkix.me](https://alita-docs.divkix.me). For contributor and
architecture guidance, see [AGENTS.md](https://github.com/Divkix/Alita_Robot/blob/HEAD/AGENTS.md).

## Development

```bash
make run
make lint
make test
```

## Contributing

Open an issue or pull request on GitHub. Please use conventional commits and
run the relevant checks before submitting changes.

## License

[MIT](https://github.com/Divkix/Alita_Robot/blob/HEAD/LICENSE) © 2020-2026 Divkix and…
