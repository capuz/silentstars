---
repo: "ImagineBrkr/web-novel-scraper"
name: "web-novel-scraper"
description: "Python tool that allows you to scrape web novels from various sources and save them to more readable formats like EPUB."
url: "https://github.com/ImagineBrkr/web-novel-scraper"
homepage: "https://pypi.org/project/web-novel-scraper"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 2
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-23T02:27:58Z"
lastCommitAt: "2026-06-24T23:37:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 84
maintainers: ["ImagineBrkr", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/68dff6a770ce813ddc19415b877afc56532cd7dae777fa5a60f192247027c04b/ImagineBrkr/web-novel-scraper"
---

# Web Novel Scraper CLI

## 🔑 Why Use Web Novel Scraper?

- **Read Offline**: Download your favorite novels and read them anywhere, even without internet
- **Device Friendly**: EPUB format optimized for e-readers and mobile devices
- **Resource Efficient**: Smart caching system prevents unnecessary downloads
- **Server Friendly**: Prevents accidental server overloads
- **Simple Interface**: Basic and direct commands for a hassle-free experience
- **Automatic Organization**: Keep your novels organized and easy to find

## 🌟 Main Features

- Downloads and converts web novels to EPUB format
- Smart caching: downloads chapters only once
- Simple and straightforward command-line interface
- Support for multiple web novel sites

## 🚀 Quick Tutorial

### 1. Installation
``` bash
pip install web-novel-scraper
```
### 2. Download Your First Novel

1. **Create a new novel**:
``` bash
web-novel-scraper create-novel -t "My First Novel" --toc-main-url "https://novelbin.me/novel/my-novel/toc"
```
2. **Convert to EPUB**:
``` bash
web-novel-scraper save-novel-to-epub -t "My First Novel" --sync-toc
```
3. **Find your files**:
``` bash
web-novel-scraper show-novel-dir -t "My First Novel"
```
###…
