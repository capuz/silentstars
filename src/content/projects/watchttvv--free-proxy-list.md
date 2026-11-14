---
repo: "watchttvv/free-proxy-list"
name: "free-proxy-list"
description: "free socks5 http https proxy-list, free socks5 proxies, socks5 crawler proxies, latest socks5"
originalDescription: "free socks5 http https proxy-list 免费socks5代理 socks5爬虫代理 最新socks5"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/watchttvv/free-proxy-list"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 166
forks: 57
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-09-19T21:31:55Z"
lastCommitAt: "2026-11-14T10:50:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 39
maintainers: ["watchttvv"]
openGraphImageUrl: "https://opengraph.githubassets.com/57de24a1b48ffb9e533700c6fa3a6f8a90f8ecfa4b14c0accc0c2c095b82c0b6/watchttvv/free-proxy-list"
---

# Proxy List

## Project Introduction

I found an online proxy website that's quite interesting. Its proxies update fairly quickly, so I crawled it. The proxies are basically all usable, not the kind where there are 10,000 proxies but only a few work.

The website https://tomcat1235.nyc.mn/ has a fairly comprehensive collection. If you're interested, go crawl it yourself.

## Features

- ⚡ Automatically fetches the latest proxy list
- 🔄 Scheduled updates (runs once every hour)
- 📝 Standard format output: `protocol://ip:port [location]`
- 🌍 Includes geographic location information
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
- 🔄 Keeps proxy information up to date

## Dependencies

- requests
- beautifulsoup4…
