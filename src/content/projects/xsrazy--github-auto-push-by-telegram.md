---
repo: "xsrazy/GitHub-Auto-Push-by-Telegram"
name: "GitHub-Auto-Push-by-Telegram"
description: "This is a Node.js Telegram bot that automatically pushes a specified file to one or more GitHub repositories at a set interval. The bot is controlled via Telegram inline buttons and supports multiple users independently."
url: "https://github.com/xsrazy/GitHub-Auto-Push-by-Telegram"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-28T09:18:16Z"
lastCommitAt: "2026-06-27T00:48:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 72
maintainers: ["xsrazy"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fdd8d6736877d158729b05a945883b3d13de1efad32384161920376b3f7e8f4/xsrazy/GitHub-Auto-Push-by-Telegram"
---

# Auto Push GitHub Bot by Telegram

This is a Node.js Telegram bot that automatically pushes a specified file to one or more GitHub repositories at a set interval. The bot is controlled via Telegram inline buttons and supports multiple users independently.

Auto Push GitHub Bot by [Telegram](https://t.me/GitHubAutoPushbot)

## Features

- Set GitHub Token, Username, Repo(s) sequentially via guided prompts
- Specify file to push (default: log.md)
- Set delay between pushes (seconds)
- Start and stop the bot
- Runs continuously until stopped
- Supports multiple Telegram users independently
- User-friendly interface with Telegram inline buttons

## Setup

1. Clone this repository:
```bash
git clone https://github.com/xsrazy/GitHub-Auto-Push-by-Telegram.git
cd GitHub-Auto-Push-by-Telegram
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file and add your Telegram Bot Token:
```
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
```

4. Run the bot:
```bash
npm start
```

## Usage

Use the Telegram inline buttons to control the bot. The bot will guide you through setting up your GitHub token, username, repositories, file, and delay sequentially.

Main buttons:

-…
