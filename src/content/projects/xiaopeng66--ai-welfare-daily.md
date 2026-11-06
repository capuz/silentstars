---
repo: "xiaopeng66/ai-welfare-daily"
name: "ai-welfare-daily"
description: "AI Welfare Daily: automatically aggregates relay station, public-welfare station, and quota welfare posts from five sites: linux.sb / baipiao.org / nodeloc.com / vibex.iflow.cn / linux.do, updated hourly, hosted on GitHub Pages"
originalDescription: "AI 福利日报：自动聚合 linux.sb / baipiao.org / nodeloc.com / vibex.iflow.cn / linux.do 五站的中转站·公益站·额度福利帖，每小时更新，GitHub Pages 托管"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xiaopeng66/ai-welfare-daily"
homepage: "https://xiaopeng66.github.io/ai-welfare-daily/"
language: "Python"
languages: ["Python"]
languagePcts: [73]
topics: ["aggregator", "ai", "freebies", "github-pages", "python", "static-site"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-28T15:51:09Z"
lastCommitAt: "2026-11-06T02:44:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 49
maintainers: ["bot", "xiaopeng66"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c474cc54e2408ac502400d2ff495cd4b0b7afcf4804cf07043dfe4274102440/xiaopeng66/ai-welfare-daily"
---

# AI 福利日报

Aggregates **AI relay station / public-welfare station / quota welfare** posts from six Chinese forums. Automatically fetches, deduplicates, and tags them every hour, and generates a pure static page published to GitHub Pages. No backend, no database, no manual work.

**Live site:** https://xiaopeng66.github.io/ai-welfare-daily/

## Data Sources

| Site | Scope |
|------|----------|
| linux.sb | Welfare Broadcast, Promotion Requests, Giveaways, Key Distribution, Homepage |
| baipiao.org | Latest across the site |
| nodeloc.com | Latest across the site, giveaway welfare |
| vibex.iflow.cn | Supply Station |
| linux.do | Welfare Deals |
| nextbuf.com | Homepage (all sections mixed; only relative times are available, see below) |

> The listing and topic pages of nextbuf.com only show relative times ("17 days ago", "31 minutes ago") with no absolute publish time. Its `created_at` is an estimate back-calculated from the scrape time (rounded to the current hour / the current day / the 1st of the current month). For this reason, it is not marked as "publish time verified", and the time precision for this batch of posts is limited to these buckets.

## Site Features

- **Two…
