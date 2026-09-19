---
repo: "origamiofficial/aiub-notice-checker"
name: "aiub-notice-checker"
description: "A Python script that checks for new or edited posts on the AIUB Notice page and sends updates to a specified Telegram channel."
readmeQualityOk: true
url: "https://github.com/origamiofficial/aiub-notice-checker"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["aiub", "aiub-management-system", "american-international-university", "chatgpt", "notice", "notices", "openai", "openai-gpt3", "python", "python-script"]
stars: 8
forks: 4
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-12-08T19:27:18Z"
lastCommitAt: "2026-09-19T01:36:26Z"
lastReleaseAt: "2025-03-20T10:47:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 82
maintainers: ["actions-user"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/576000429/d31d8bd5-4bf1-46f2-a9ac-6d84f0cada48"
---

# AIUB Notice Checker

A Python script that monitors the [AIUB Notice page](https://www.aiub.edu/category/notices/) for new or edited posts and instantly sends updates to a specified Telegram channel.

---

## 📡 RSS Feed

Subscribe to get notices in any RSS reader:

```
https://github.com/origamiofficial/aiub-notice-checker/raw/main/rss.xml
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔄 Auto-update | Checks for script updates on every run and updates itself automatically |
| 🌐 Site health check | Verifies AIUB website is accessible before scraping |
| 🔍 XPath validation | Detects if the page structure has changed and alerts when XPaths need fixing |
| 🗄️ SQLite database | Stores all past notices locally to detect both new posts and edits |
| 📨 Telegram notifications | Sends formatted messages to your channel via the Telegram Bot API |
| 📰 RSS generation | Auto-generates an RSS 2.0 feed from the database after every run |

---

## 📋 Requirements

- Python 3.6 or higher
- `requests` library
- `lxml` library
- The following environment variables set with valid values:

| Variable | Purpose |
|---|---|
| `TELEGRAM_CHAT_ID` | The channel where notices are sent…
