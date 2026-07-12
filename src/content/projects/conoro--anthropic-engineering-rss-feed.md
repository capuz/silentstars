---
repo: "conoro/anthropic-engineering-rss-feed"
name: "anthropic-engineering-rss-feed"
description: "RSS Feed for the Anthropic Engineering Blog"
readmeQualityOk: true
url: "https://github.com/conoro/anthropic-engineering-rss-feed"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-06-27T05:57:45Z"
lastCommitAt: "2026-07-12T06:18:33Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 50
maintainers: ["conoro"]
openGraphImageUrl: "https://opengraph.githubassets.com/d530e1734239df45843b79255f63406bfaf50791898b94b31d42bb671767a18e/conoro/anthropic-engineering-rss-feed"
---

# Anthropic Engineering RSS Feed Generator

This script generates an RSS feed for Anthropic's engineering blog posts using Playwright to scrape the client-side rendered content.

Feed URL: https://conoro.github.io/anthropic-engineering-rss-feed/anthropic_engineering_rss.xml

## Features

- **Client-side rendering support**: Uses Playwright to handle JavaScript-rendered content
- **Proper date parsing**: Extracts and formats publication dates with timezone support
- **RSS compliance**: Includes GUID elements and atom:link for better interoperability
- **Reverse chronological order**: Articles sorted newest first
- **Error handling**: Robust error handling for missing elements
- **Automated updates**: GitHub Action runs hourly to keep the feed current

## Setup

### Local Usage

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Install Playwright browsers:
```bash
playwright install
```

3. Run the main script:
```bash
python anthropic_rss.py
```

### GitHub Action Setup

1. Fork this repository to your GitHub account

2. Create a Personal Access Token (PAT):
   - Go to GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens
   -…
