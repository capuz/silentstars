---
repo: "watchttvv/free-proxy-list"
name: "free-proxy-list"
description: "free socks5 http https proxy-list, free socks5 proxies, socks5 scraping proxies, latest socks5"
originalDescription: "free socks5 http https proxy-list 免费socks5代理 socks5爬虫代理 最新socks5"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/watchttvv/free-proxy-list"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 166
forks: 55
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-09-19T21:31:55Z"
lastCommitAt: "2026-10-29T05:50:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 39
maintainers: ["watchttvv"]
openGraphImageUrl: "https://opengraph.githubassets.com/1efbbdbf5ee755d48cff37e38d9202c437c3ec5ca3b62c96d27ebe3e80134be7/watchttvv/free-proxy-list"
---

# Proxy List

## Project Introduction

I found an online proxy webpage that's pretty interesting. Its proxies update quite quickly, so I scraped it. The proxies are basically all usable, not the kind of "10,000 proxies where only a few work" junk.

The website https://tomcat1235.nyc.mn/ has a fairly comprehensive list. If you're interested, go scrape it yourself.

## Features

- ⚡ Automatically scrapes the latest proxy lists
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

The proxy list is saved in `proxy.txt`, formatted as follows:

```
socks5://37.18.73.60:5566 [United States California San Jose]
http://123.143.162.221:6388 [South Korea Seoul Special City]
socks5://35.183.59.99:5080 [Canada Quebec Province Montreal]
```

## Automatic Updates

This project uses GitHub Actions for automated updates:

- 🕐 Runs automatically once every hour
- 📝 Automatically commits the updated proxy list
- 🔄 Keeps proxy information up to date

##…
