---
repo: "iHeadWater/dailyinfo"
name: "dailyinfo"
description: "Daily Tech Intelligence"
originalDescription: "每日科技情报"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/iHeadWater/dailyinfo"
homepage: "https://iheadwater.github.io/dailyinfo/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 6
openIssues: 9
closedIssues: 54
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-04-21T09:56:37Z"
lastCommitAt: "2026-11-07T16:11:16Z"
lastReleaseAt: "2026-08-06T01:28:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 75
maintainers: ["OuyangWenyu", "zym0123", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebe96b74bff09301928b7fd7d47e19b6f5f19b92c8eb265de20399c8cc5bbeac/iHeadWater/dailyinfo"
discussionCount: 1
---

# DailyInfo

Read-only MCP access to generated or delivered briefings is an optional component. See [MCP connection and deployment](https://github.com/iHeadWater/dailyinfo/blob/HEAD/docs/mcp.md) for Streamable HTTP and per-user Bearer authentication, and [collection-only deployment](https://github.com/iHeadWater/dailyinfo/blob/HEAD/docs/production.md) for production without Discord publishing.

[Chinese](https://github.com/iHeadWater/dailyinfo/blob/main/README.zh-CN.md) | English

DailyInfo is an automated research intelligence collector for AI for Science researchers. Every day it gathers journal papers, AI news, arXiv preprints, code trends, and university announcements from RSS feeds, scraped pages, and APIs — then turns them into concise Chinese-language briefings delivered straight to your Discord.

## How It Works

One pipeline, five independent sources of information:

```text
FreshRSS / scrape / API sources
  -> dailyinfo run
  -> structured summaries + canonical PublicationStore
  -> dailyinfo publish --sink web / discord
  -> independent delivery sinks + local state
```

1. **Collect** — five independent pipelines pull from 40+ feeds, pages, and APIs. A failure in one…
