---
repo: "leikaiwei/rss"
name: "rss"
description: "Subscribe to RSS feeds and push them to a Telegram channel"
originalDescription: "订阅rss推送到telegram频道"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/leikaiwei/rss"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-18T07:08:27Z"
lastCommitAt: "2026-10-25T02:46:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 63
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b214185398f4d73ca9928e570f7ef4421bdd1194e59f5e6f0cdca64576fbb33/leikaiwei/rss"
---

# RSS Telegram Bot

A lightweight RSS subscription push script: it periodically fetches RSS feeds, pushes the latest content to Telegram or a Webhook, and uses a local history record to avoid sending duplicates.

> English version: [README_EN.md](https://github.com/leikaiwei/rss/blob/HEAD/README_EN.md)

## Features
- Maintain RSS feed URLs in `rss.config`, one link per line.
- Record pushed entries in `data.json` to avoid duplicates.
- Supports multi-channel push to Telegram and Webhook, which can be enabled individually or together.
- Provides a Telegram message format with a source identifier, a bold title, and a summary.
- Can run on a schedule via GitHub Actions.

## Directory Structure
- `rss_bot.py`: main script.
- `rss.config`: RSS feed list configuration.
- `data.json`: push history record.
- `.github/workflows/rss_bot.yml`: scheduled task workflow configuration.

## Quick Start
1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Configure RSS URLs:
   ```text
   # In rss.config, enter one RSS URL per line
   https://news.google.com/rss
   ```
3. Configure message channels:
   ```bash
   export TELEGRAM_BOT_TOKEN="your bot Token"
   export…
