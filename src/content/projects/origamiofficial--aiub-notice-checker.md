---
repo: "origamiofficial/aiub-notice-checker"
name: "aiub-notice-checker"
description: "A Python script that checks for new or edited posts on the AIUB Notice page and sends updates to a specified Telegram channel."
url: "https://github.com/origamiofficial/aiub-notice-checker"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["aiub", "aiub-management-system", "american-international-university", "chatgpt", "notice", "notices", "openai", "openai-gpt3", "python", "python-script"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-12-08T19:27:18Z"
lastCommitAt: "2026-06-24T23:37:29Z"
lastReleaseAt: "2025-03-20T10:47:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 80
maintainers: ["actions-user", "origamiofficial", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/576000429/d31d8bd5-4bf1-46f2-a9ac-6d84f0cada48"
---

# AIUB Notice Checker

### A Python script that checks for new or edited posts on the [AIUB Notice page](https://www.aiub.edu/category/notices/) and sends updates to a specified Telegram channel.

## RSS Feed | [![Valid RSS](https://validator.w3.org/feed/images/valid-rss-rogers.png)](http://validator.w3.org/feed/check.cgi?url=https%3A//github.com/origamiofficial/aiub-notice-checker/raw/main/rss.xml) 
```
https://github.com/origamiofficial/aiub-notice-checker/raw/main/rss.xml
```

## Features

- Automatically checks for updates to the script and updates itself if necessary.
- Checks if the AIUB website is up before attempting to access the notice page.
- Checks if the XPaths values are working or needs to be updated.
- Saves information about old posts in a SQLite database to check for edits.
- Sends formatted updates to a specified Telegram channel using the Telegram Bot API.
- Generates RSS feed from the SQLite database using RSS 2.0 format.

## Requirements

- Python 3.6 or higher
- `requests` library
- `lxml` library
- `TELEGRAM_CHAT_ID`, `TELEGRAM_ADMIN_CHAT_ID`, `TELEGRAM_BOT_API_KEY` and `GITHUB_RUN_NUMBER` environment variables with valid values

## Usage

1. Clone or…
