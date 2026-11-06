---
repo: "GeFengJue/hotspot-crawler-app"
name: "hotspot-crawler-app"
description: "`Hot News Crawler App - includes crawler, database, API and frontend`"
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
lastCommitAt: "2026-11-06T02:44:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 79
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c2c5030b678f2ae3b653bd76daea62ab9885ecffef9dcfcb9e8306134883266/GeFengJue/hotspot-crawler-app"
---

# Hotspot Focus Data Crawling System

This is a complete system for crawling and displaying hot news, today's hotspots, community hot posts, financial calendar and other content.

## Features

- 🔥 **Hot News**: Real-time crawling of trending news
- 📈 **Today's Hotspots**: Displays popular topics of the day
- 💬 **Community Hot Posts**: Popular discussion posts in the community
- 📅 **Financial Calendar**: Calendar of important financial events
- 🌐 **RESTful API**: Provides a complete data interface
- 📱 **Responsive Frontend**: Interface adapted to various devices

## Quick Start

### 1. Install dependencies
```bash
pip install -r requirements.txt
```

### 2. Start the API server
```bash
python api_server.py
```

### 3. Start the static file server
```bash
python static_server.py
```

### 4. Access the frontend
Open in your browser: http://localhost:8081/index.html

## API Endpoints

### Get hot news
```
GET /api/hot_news
Parameters: limit (optional, default 50)
```

### Get today's hotspots
```
GET /api/today_hotspot
Parameters: limit (optional, default 20)
```

### Get community hot posts
```
GET /api/community_posts
Parameters: limit (optional, default 50)
```

### Get…
