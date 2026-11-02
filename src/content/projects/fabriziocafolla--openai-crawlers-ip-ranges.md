---
repo: "FabrizioCafolla/openai-crawlers-ip-ranges"
name: "openai-crawlers-ip-ranges"
description: "OpenAI crawlers IP ranges. Here are the complete and updated lists of OpenAI IP addresses"
readmeQualityOk: true
url: "https://github.com/FabrizioCafolla/openai-crawlers-ip-ranges"
homepage: "https://fabriziocafolla.com/blog/open-ai-block-crawl-ips/"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["chatgpt", "crawl", "gptbot", "openai", "searchbot"]
stars: 41
forks: 4
openIssues: 0
closedIssues: 1
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2025-01-21T14:41:23Z"
lastCommitAt: "2026-11-02T17:57:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 40
maintainers: ["FabrizioCafolla"]
openGraphImageUrl: "https://opengraph.githubassets.com/677b255df0227e23f9784de18cc85e4fe0aacc35d53ec6745fddbd7c61d13800/FabrizioCafolla/openai-crawlers-ip-ranges"
---

# OpenAI crawlers IP ranges

Here are the complete and updated lists of OpenAI IP addresses ([Official doc](https://developers.openai.com/api/docs/bots/)).

**Why this list?** For some time I have been receiving many requests from `user-agent` signed by OpenAI and by researching on the web I realized that I am not the only one. One way to block the bot crawl is to insert it into the `robots.txt` file but apparently this is not enough to block the page scanning.

The possibilities can be of various types:

1. OpenAI ignores the robots and still performs the scans ([see discussion](https://www.reddit.com/r/selfhosted/comments/1i154h7/openai_not_respecting_robotstxt_and_being_sneaky/))
2. Malicious bots impersonating the OpenAI `user-agent` and performing page scraping ([see discussion](https://community.openai.com/t/are-the-documented-gptbot-ip-egress-ranges-up-to-date/509376/1))

## [How to block OpenAI User-agents](https://fabriziocafolla.com/blog/open-ai-block-crawl-ips/)

[**Read deep dive here**](https://fabriziocafolla.com/blog/open-ai-block-crawl-ips/), how to:

- Block User-Agent
- IPs Block
- Block spam user-agents

  Configuration to block all user-agent requests coming…
