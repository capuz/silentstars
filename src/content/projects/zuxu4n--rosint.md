---
repo: "zuxu4n/Rosint"
name: "Rosint"
description: "Reddit open-source user intelligence tool"
readmeQualityOk: true
url: "https://github.com/zuxu4n/Rosint"
homepage: "https://rosint.dev/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
topics: ["osint", "osint-tool", "reddit"]
stars: 74
forks: 11
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-03-29T07:09:24Z"
lastCommitAt: "2026-07-11T05:58:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 26
maintainers: ["zuxu4n"]
openGraphImageUrl: "https://opengraph.githubassets.com/466f0b73d01b0df90a6a40ced72c3cdf835cbce352fc72e27e400b9e9b1f3f61/zuxu4n/Rosint"
---

# Rosint.dev | redditOSINT

**Reddit user intelligence tool**: search any Reddit user's full post and comment history, including private accounts and deleted content.

[rosint.dev](https://rosint.dev)

https://github.com/user-attachments/assets/6967e195-7de8-42cf-8429-34ae6281db51

## Features

- **Dual-source search** > Arctic Shift and PullPush queried in parallel, results merged and deduplicated by post/comment ID
- **Posts tab** > title, subreddit, score, comment count, timestamp, thumbnail, body snippet
- **Comments tab** > full comment body, subreddit, score, link to original thread
- **Date range filter** > filter results by before/after date using a calendar picker
- **Pagination** > timestamp-based cursor pagination (100 results per page)
- **No login required** > fully frontend, no backend, no auth

## Tech stack

| | |
|---|---|
| Framework | React + Vite |
| Styling | Tailwind CSS v3 |
| APIs | [Arctic Shift](https://github.com/ArthurHeitmann/arctic_shift), [PullPush](https://pullpush.io) |
| Hosting | Vercel |

## Running locally
```bash
git clone https://github.com/zuxu4n/RedditOsint.git
cd RedditOsint
npm install --legacy-peer-deps
npm run dev
```

Then open…
