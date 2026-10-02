---
repo: "watchttvv/free-proxy-list"
name: "free-proxy-list"
description: "Free SOCKS5 HTTP HTTPS proxy list - free SOCKS5 proxy, SOCKS5 crawler proxy, latest SOCKS5"
originalDescription: "free socks5 http https proxy-list 免费socks5代理 socks5爬虫代理 最新socks5"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/watchttvv/free-proxy-list"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 157
forks: 54
openIssues: 2
closedIssues: 1
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-09-19T21:31:55Z"
lastCommitAt: "2026-10-02T10:00:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 39
maintainers: ["watchttvv"]
openGraphImageUrl: "https://opengraph.githubassets.com/3536a72c4f5186c68d155609271f4fafc0319d72a1168c498064e34d8094f27e/watchttvv/free-proxy-list"
---

# Proxy List

## Project Introduction

I found an interesting online proxy website with frequent proxy updates, so I scraped it. The proxies are basically usable - not like those garbage ones where you have 10,000 proxies but only a few work. The website https://tomcat1235.nyc.mn/ is quite comprehensive; feel free to scrape it yourself if interested.

## Features

- ⚡ Auto-fetch latest proxy list
- 🔄 Scheduled updates (runs every hour)
- 📝 Standard format output: `protocol://ip:port [location]`
- 🌍 Includes geographic location information
- 📊 Supports multiple proxy protocols (HTTP, SOCKS5, etc.)

## Usage

### Manual Execution

```bash
python generate_proxy_list.py
```

### View Results

The proxy list will be saved in the `proxy.txt` file in the following format:

```
socks5://37.18.73.60:5566 [USA California San Jose]
http://123.143.162.221:6388 [South Korea Seoul]
socks5://35.183.59.99:5080 [Canada Quebec Montreal]
```

## Automatic Updates

This project uses GitHub Actions for automated updates:

- 🕐 Runs automatically every hour
- 📝 Automatically commits updated proxy list
- 🔄 Keeps proxy information updated in real-time

## Dependencies

- requests
- beautifulsoup4…
