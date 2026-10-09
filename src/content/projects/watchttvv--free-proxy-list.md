---
repo: "watchttvv/free-proxy-list"
name: "free-proxy-list"
description: "free socks5 http https proxy-list 免费socks5代理 socks5爬虫代理 最新socks5"
originalDescription: "free socks5 http https proxy-list 免费socks5代理 socks5爬虫代理 最新socks5"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/watchttvv/free-proxy-list"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 157
forks: 56
openIssues: 2
closedIssues: 1
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-09-19T21:31:55Z"
lastCommitAt: "2026-10-09T10:50:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 39
maintainers: ["watchttvv"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b9dcc70ba888e851a5cec0027e7bdda1957e4558f4cc295e9264ca8c6e60fae/watchttvv/free-proxy-list"
---

# Proxy List

## Project Overview

I found an online proxy webpage that's pretty interesting. Its proxies are updated fairly quickly, so I scraped it. The proxies are basically all usable. It's not one of those sites with 10,000 proxies where only a few actually work.

The page https://tomcat1235.nyc.mn/ is quite comprehensive. If you're interested, go scrape it yourself.

## Features

- ⚡ Automatically fetches the latest proxy list
- 🔄 Scheduled updates (runs once every hour)
- 📝 Standard format output: `protocol://ip:port [location]`
- 🌍 Includes geolocation information
- 📊 Supports multiple proxy protocols (HTTP, SOCKS5, etc.)

## Usage

### Manual Run

```bash
python generate_proxy_list.py
```

### Viewing Results

The proxy list is saved in the `proxy.txt` file, in the following format:

```
socks5://37.18.73.60:5566 [美国 加州 圣何塞]
http://123.143.162.221:6388 [韩国 首尔特别市]
socks5://35.183.59.99:5080 [加拿大 魁北克省 蒙特利尔]
```

## Automatic Updates

This project uses GitHub Actions for automated updates:

- 🕐 Runs automatically once every hour
- 📝 Automatically commits the updated proxy list
- 🔄 Keeps proxy information up to date in real time

## Dependencies

- requests
-…
