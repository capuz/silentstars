---
repo: "watchttvv/free-proxy-list"
name: "free-proxy-list"
description: "Free socks5 http https proxy list"
originalDescription: "free socks5 http https proxy-list 免费socks5代理 socks5爬虫代理 最新socks5"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/watchttvv/free-proxy-list"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 147
forks: 48
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-09-19T21:31:55Z"
lastCommitAt: "2026-07-16T06:00:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 34
maintainers: ["watchttvv"]
openGraphImageUrl: "https://opengraph.githubassets.com/be49ee8d58f5e6004e5df3a6385181ef76157b5390468d95d80ff4d17ce2771d/watchttvv/free-proxy-list"
---

# Proxy List

## Project Introduction

I found an online proxy webpage quite interesting, the proxies update quickly, so I crawled it. The proxies are mostly usable, not like those with 10,000 proxies where only a few are usable junk.

The webpage https://tomcat1235.nyc.mn/ is quite comprehensive, feel free to crawl it yourself if you're interested.

## Features

- ⚡ Automatically fetch the latest proxy list
- 🔄 Scheduled updates (executed once every hour)
- 📝 Standard format output: `protocol://ip:port [location]`
- 🌍 Includes geographical location information
- 📊 Supports multiple proxy protocols (HTTP, SOCKS5, etc.)

## Usage

### Manual Run

```bash
python generate_proxy_list.py
```

### View Results

The proxy list will be saved in the `proxy.txt` file, formatted as follows:

```
socks5://37.18.73.60:5566 [USA California San Jose]
http://123.143.162.221:6388 [South Korea Seoul]
socks5://35.183.59.99:5080 [Canada Quebec Montreal]
```

## Automatic Updates

This project uses GitHub Actions for automated updates:

- 🕐 Automatically runs once every hour
- 📝 Automatically commits the updated proxy list
- 🔄 Keeps proxy information updated in real-time

## Dependencies

-…
