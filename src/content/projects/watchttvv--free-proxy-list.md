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
stars: 143
forks: 45
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-09-19T21:31:55Z"
lastCommitAt: "2026-07-05T21:00:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 33
maintainers: ["watchttvv"]
openGraphImageUrl: "https://opengraph.githubassets.com/db8b5ec904d3bb32528d7e5145216193d07f93d3ab2cfc12bd9d8ee5e0cb2a74/watchttvv/free-proxy-list"
---

# Proxy List

## Project Introduction

I found an online proxy webpage quite interesting, the proxies update quickly, so I crawled it. The proxies are mostly usable, not the kind where out of 10,000 proxies, only a few are usable garbage.

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
