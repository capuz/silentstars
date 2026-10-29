---
repo: "profullstack/rssamplifier.com"
name: "rssamplifier.com"
description: "An open, agent-first directory of independent blogs. Submit a URL, a list or an OPML file; every blog gets its own page. JSON API, OPML and llms.txt for agents."
readmeQualityOk: true
url: "https://github.com/profullstack/rssamplifier.com"
homepage: "https://rssamplifier.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["json", "json-server", "m3u", "m3u-playlist", "m3u8", "m3u8-playlist", "rss", "rss-aggregator", "rss-feed"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-16T10:38:31Z"
lastCommitAt: "2026-10-29T05:50:46Z"
lastReleaseAt: "2026-10-29T01:53:04Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 51
maintainers: ["ralyodio", "sh1pt-actions-fleet[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/635d519842d491fae5e8ffcadc7929dde459f1724ca7d5b1c94b15ee0f13f2ba/profullstack/rssamplifier.com"
---

# rssamplifier.com

An open, agent-first directory of independent blogs.

Submit a URL, a list of URLs or an OPML file. We resolve it to a feed, read it, and give the blog a
permanent page at `/<slug>` with its latest summaries. No account, no paywall, no waiting list.

The point of difference is the machine-readable half: most of the web now blocks AI crawlers, and
this directory deliberately does the opposite. Everything is also published as JSON, OPML and plain
text so an agent can read the whole thing in one request.

**Live:** <https://rssamplifier.com>

## Layout

A pnpm workspace. Both deployables run in Docker on Railway.

```
apps/web/        Next.js — public pages, JSON API, agent surfaces, PWA
apps/poller/     Crawler daemon — re-fetches feeds on a backoff schedule
apps/cli/        @profullstack/rssamplifier — the directory from a terminal
packages/feed/   Feed discovery, RSS/Atom/JSON Feed parsing, OPML, SSRF guards
packages/ingest/ Submit + crawl orchestration
packages/db/     PostgreSQL client, schema and every query
packages/notify/ Alerts — web push, email digests and webhooks
packages/social/ X and Reddit: canonical identity, and X's provider adapters
```…
