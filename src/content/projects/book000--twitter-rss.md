---
repo: "book000/twitter-rss"
name: "twitter-rss"
description: "🔍 Generate RSS Feed from Twitter Search"
readmeQualityOk: true
url: "https://github.com/book000/twitter-rss"
homepage: "https://book000.github.io/twitter-rss/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 48
forks: 19
openIssues: 0
closedIssues: 36
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2022-12-25T14:20:43Z"
lastCommitAt: "2026-11-06T12:17:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 61
maintainers: ["renovate[bot]", "akubiusa"]
openGraphImageUrl: "https://opengraph.githubassets.com/75a56885a5bb94210adaca4ede594252b8bc843c21ef581b24e2933d21110e40/book000/twitter-rss"
---

# twitter-rss

**twitter-rss** is a TypeScript tool that generates RSS feeds from Twitter (X.com) search results. It uses the Twitter internal API to fetch recent tweets matching your search queries and converts them into standard RSS 2.0 XML feeds, which can be consumed by any RSS reader.

> [!NOTE]
> A Japanese translation of this document is available at [README.ja.md](https://github.com/book000/twitter-rss/blob/HEAD/README.ja.md).

## Features

- **RSS 2.0 feeds from Twitter searches** — Converts Twitter search results into standard RSS XML files readable by any RSS reader.
- **Advanced Twitter query support** — Supports all Twitter advanced search operators (`from:`, `filter:images`, `exclude:retweets`, etc.).
- **Cookie caching** — Caches authentication cookies for up to 30 days to avoid repeated logins.
- **Login retry with backoff** — Automatically retries logins on transient failures (HTTP 503 with exponential backoff, error 399 with a fixed 120-second delay).
- **Two-factor authentication (TOTP)** — Supports TOTP-based 2FA via a secret key.
- **Proxy and TLS fingerprint spoofing** — Uses [CycleTLS](https://github.com/Danny-Dasilva/CycleTLS) to spoof TLS fingerprints…
