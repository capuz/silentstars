---
repo: "GeFengJue/hotspot-crawler-app"
name: "hotspot-crawler-app"
description: "Hot News Crawler Application - Includes crawler, database, API, and frontend"
originalDescription: "`热点资讯爬虫应用 - 包含爬虫、数据库、API和前端`"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/GeFengJue/hotspot-crawler-app"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-09-17T13:11:21Z"
lastCommitAt: "2026-07-04T23:15:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 67
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e84987b975784bd377cdbe910e403de2dcc75f9d641869b4b7bb9895e1b99d7b/GeFengJue/hotspot-crawler-app"
---

# Hot Focus Data Crawling System

This is a complete system for crawling and displaying hot news, today's hot topics, community hot posts, financial calendar, and other content.

## Features

- 🔥 **Hot News**: Real-time crawling of hot news information
- 📈 **Today's Hot Topics**: Display of popular topics of the day
- 💬 **Community Hot Posts**: Community hot discussion posts
- 📅 **Financial Calendar**: Calendar of important financial events
- 🌐 **RESTful API**: Provides a complete data interface
- 📱 **Responsive Frontend**: Interface adaptable to various devices

## Quick Start

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Start API Server
```bash
python api_server.py
```

### 3. Start Static File Server
```bash
python static_server.py
```

### 4. Access Frontend
Open the browser and visit: http://localhost:8081/index.html

## API Interface

### Get Hot News
```
GET /api/hot_news
Parameters: limit (optional, default 50)
```

### Get Today's Hot Topics
```
GET /api/today_hotspot
Parameters: limit (optional, default 20)
```

### Get Community Hot Posts
```
GET /api/community_posts
Parameters: limit (optional, default 50)
```

### Get…
