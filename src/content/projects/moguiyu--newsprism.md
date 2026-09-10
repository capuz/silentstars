---
repo: "moguiyu/NewsPrism"
name: "NewsPrism"
description: "Multilingual news monitor that clusters same-event coverage into Chinese cross-source digests with focus maps and strict positive highlights"
readmeQualityOk: true
url: "https://github.com/moguiyu/NewsPrism"
homepage: "https://news.moguiyu.top"
language: "Python"
languages: ["Python", "CSS"]
languagePcts: [71, 23]
topics: ["docker", "llm", "news", "python", "rss", "self-hosted", "sqlite", "media-analysis", "multilingual", "news-aggregation"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-04-07T12:42:22Z"
lastCommitAt: "2026-09-10T08:19:53Z"
lastReleaseAt: "2026-06-23T08:15:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 47
maintainers: ["moguiyu"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfc69ab38182c74d711796a2a7d5bbde9e59cbb8e0c4cc45e82c884a748c6365/moguiyu/NewsPrism"
---

# NewsPrism

NewsPrism is a self-hosted news analysis tool built around one idea: the same event, read from many directions, gets you closer to what actually happened.

It collects the same stories from 46 sources across 12 countries and languages, groups them by real-world event, and surfaces how different outlets — state media, independent press, tech reporters, regional correspondents — choose to frame the same facts. The daily report is a Chinese digest designed for readers who want calibrated perspective, not just headlines.

```text
Collect articles  ->  Tag + dedup  ->  Cluster events  ->  Assess quality  ->  Summarize angles  ->  Render HTML / publish
```

This public repository supports both self-hosting with Docker and local development from source.

Current major release: `v0.6.3`.

## Highlights

- Groups the same event across multiple sources and shows how each outlet frames it differently — state media, independent press, regional correspondents, tech reporters
- Active perspective-seeking: if a major story is missing a regional voice, the pipeline searches for it and adds it to the cluster
- LLM-driven event clustering (single API call) groups articles by real-world…
