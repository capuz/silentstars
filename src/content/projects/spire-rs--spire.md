---
repo: "spire-rs/spire"
name: "spire"
description: "The flexible crawler and scraper framework for Rust: route pages to typed handlers, crawl over HTTP or real browsers, built on tokio."
readmeQualityOk: true
url: "https://github.com/spire-rs/spire"
homepage: "https://spire-rs.github.io/spire/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["crawler", "scraper", "webdriver", "async", "browser-automation", "html-parser", "rust", "tokio", "web-crawler", "web-scraping"]
stars: 6
forks: 1
openIssues: 11
closedIssues: 22
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2023-10-24T17:26:21Z"
lastCommitAt: "2026-11-16T11:54:09Z"
lastReleaseAt: "2026-11-06T03:11:39Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 89
maintainers: ["martsokha", "dependabot[bot]", "babyhuey"]
openGraphImageUrl: "https://opengraph.githubassets.com/01822ba48d02917edefac218547d8e575726d08e8e18ebd5f44684eabf20a984/spire-rs/spire"
---

# Spire

**The flexible crawler and scraper framework for Rust.**

Crawl websites over HTTP or in real browsers, route every page to a typed
handler, and extract structured data, built on tokio.

[**The Spire Book**](https://spire-rs.github.io/spire) · [**docs.rs/spire**](https://docs.rs/spire) · [**crates.io/crates/spire**](https://crates.io/crates/spire) · [**github.com/spire-rs**](https://github.com/spire-rs)

A crawl flows through three parts: the **frontier** queues the requests to make
and decides what is new, the **crawler** fetches them concurrently through a
**backend** (reqwest for HTTP or thirtyfour for a browser) while keeping to
per-host limits and robots.txt, and the **router** hands each response to a
handler. Handlers are async functions whose arguments are extractors: parsed
HTML, typed JSON, the queue for links to follow, or a dataset to store results
in.

> [!WARNING]
> **Active development. API not stable.** Public APIs and on-disk formats may
> change without notice between releases. Pin a specific version if you depend
> on this in production.

## Features

- **HTTP and browser backends**: reqwest for plain HTTP, thirtyfour to drive real browsers over…
