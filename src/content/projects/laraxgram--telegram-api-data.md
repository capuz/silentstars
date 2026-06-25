---
repo: "laraXgram/telegram-api-data"
name: "telegram-api-data"
description: "Automated scraper for the Telegram Bot API. Parses the official docs and stores structured data as JSON."
url: "https://github.com/laraXgram/telegram-api-data"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["laragram", "laraquest", "telegram"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-07T09:54:17Z"
lastCommitAt: "2026-06-25T02:07:37Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 36
maintainers: ["github-actions[bot]", "AmirHkrg"]
openGraphImageUrl: "https://opengraph.githubassets.com/64dde505b94709613759674348a1f3b64f3ef33ad88b25ac1c61b1ffb2b987c6/laraXgram/telegram-api-data"
---

# telegram-api-data

Automated scraper for the [Telegram Bot API](https://core.telegram.org/bots/api). Parses the official docs and stores structured data as JSON — used by [laraXgram/laraquest](https://github.com/laraXgram/laraquest) to generate PHP code.

## How it works

1. GitHub Actions fetches `core.telegram.org/bots/api`
2. Parses all methods and types from the HTML
3. Saves `telegram-api.json` and commits it to this repo
4. Laraquest fetches the JSON from raw content and generates PHP files

## JSON structure

```json
{
  "scraped_at": "2026-06-07T00:00:00+00:00",
  "version": "10.0",
  "source": "https://core.telegram.org/bots/api",
  "methods": {
    "sendMessage": {
      "name": "sendMessage",
      "description": "...",
      "parameters": [
        { "name": "chat_id", "type": "Integer or String", "required": true, "description": "..." }
      ]
    }
  },
  "types": {
    "Message": {
      "name": "Message",
      "description": "...",
      "fields": [
        { "name": "message_id", "type": "Integer", "description": "..." }
      ]
    }
  }
}
```

## Schedule

Runs automatically **every 24 hours at 00:00 UTC** via GitHub Actions.

## Raw content URL

```…
