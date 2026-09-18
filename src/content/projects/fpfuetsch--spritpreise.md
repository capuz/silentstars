---
repo: "fpfuetsch/Spritpreise"
name: "Spritpreise"
description: "Interactive Telegram Fuel Price Bot "
readmeQualityOk: true
url: "https://github.com/fpfuetsch/Spritpreise"
homepage: "https://t.me/when_to_refuel_bot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["telegram-bot", "express", "js", "raspberry-pi", "raspi", "docker", "docker-compose", "nodejs", "bot", "gas"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2019-07-21T13:59:22Z"
lastCommitAt: "2026-09-18T14:03:20Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 83
maintainers: ["dependabot[bot]", "github-actions[bot]", "fpfuetsch"]
openGraphImageUrl: "https://opengraph.githubassets.com/50f59dca62b688f900e93866a70162d1023177e285f410aaf8fcc375cbc52043/fpfuetsch/Spritpreise"
---

# Telegram Spritpreis Bot

Telegram bot that tracks gas station prices and notifies users about relevant price changes.
It uses the Tankerkonig API for fuel data and MongoDB for persistence.

Note: The bot currently supports German only.

## Features

- Subscribe to gas stations and fuel types
- Get regular updates about price changes
- Query stations by text or location
- Pause and resume notifications

## Requirements

- Node.js (LTS recommended)
- npm
- MongoDB
- Telegram bot token
- Tankerkonig API key

## Environment Variables

Create a .env file and set the following values:

- API_KEY: Tankerkonig API key
- DB_URL: MongoDB connection string
- SERVER_PORT: Port for the HTTP server (default: 8080)
- WEBHOOK_HOST: Public HTTPS host for Telegram webhook mode (optional)
- TELEGRAM_TOKEN: Telegram bot token
- UPDATE_CYCLE: Price update interval in minutes
- CLEANUP_CYCLE: Cleanup minute within each hour for old snapshots
- SEARCH_RADIUS: Search radius in km for nearby stations

If WEBHOOK_HOST is set, the bot uses webhook mode. If not, it uses polling mode.

## Local Development

1. Install dependencies:

	npm install

2. Create environment files:

- Copy .env_template to .env…
