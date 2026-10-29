---
repo: "TinySuiteHQ/TinySearch"
name: "TinySearch"
description: "Shrink the web for your agents! Token-efficient, fast and fully local web search and research."
readmeQualityOk: true
url: "https://github.com/TinySuiteHQ/TinySearch"
homepage: "https://tinysuite.dev"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 235
forks: 16
openIssues: 9
closedIssues: 19
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-13T07:13:00Z"
lastCommitAt: "2026-10-29T10:37:03Z"
lastReleaseAt: "2026-07-16T18:11:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 27
maintainers: ["MarcellM01", "benmaster82", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1237429296/896f25a4-8d67-49ed-9676-6b12cd411fae"
discussionCount: 3
---

# TinySearch

  TinySearch searches, crawls, and reranks the web locally, then gives your
  agent only the evidence worth putting in its context.

  ·
  ·
  ·

TinySearch is a self-hosted web-research tool for AI agents. It searches the
web, reads the best pages, removes low-value content, and returns compact
evidence with source URLs.

Your model receives the useful passages instead of paying to process entire
webpages.

TinySearch is part of [TinySuite](https://tinysuite.dev), a suite of focused
tools designed to make agentic operations cheaper by minimizing token usage
through smart retrieval, selection, and context-management techniques.

## Choose a tier

| Tier | Use it when | Entry point | Search backend |
| --- | --- | --- | --- |
| 1. Python library | You are building with TinySuite or Python | `pip install tinysuite-search` | DDGS |
| 2. One-command MCP | An MCP client should launch TinySearch for you | `uvx --from "tinysuite-search[server]" tinysearch` | DDGS |
| 3. Docker + SearXNG | You want the full self-hosted stack and HTTP MCP | `docker compose ... up -d` | Bundled SearXNG |

Tiers 1 and 2 need no search service. Tier 3 adds a dedicated SearXNG service,
persistent…
