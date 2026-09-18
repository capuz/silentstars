---
repo: "joaquinbejar/ig-client"
name: "ig-client"
description: "IG Client is a comprehensive Rust framework for interacting with the IG broker API."
readmeQualityOk: true
url: "https://github.com/joaquinbejar/ig-client"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["broker", "finance", "rust-library", "trading"]
stars: 10
forks: 8
openIssues: 0
closedIssues: 36
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-09-03T10:28:46Z"
lastCommitAt: "2026-09-18T14:02:56Z"
lastReleaseAt: "2025-06-24T04:42:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 84
maintainers: ["joaquinbejar"]
openGraphImageUrl: "https://opengraph.githubassets.com/418f4c64c480f0eb26f18b4eca5022d7ad6205141f5072f751005a70926fa0f4/joaquinbejar/ig-client"
---

## IG Markets API Client for Rust

A comprehensive Rust client for the IG Markets trading API. This library
provides a type-safe, async-first way to access IG Markets' REST and
real-time streaming APIs for trading and market-data retrieval.

### Overview

The IG Markets API Client for Rust offers a reliable interface to the IG
Markets trading platform. It handles authentication and session management,
automatic token refresh, rate limiting, finite retry with backoff, and
real-time streaming over the Lightstreamer protocol, exposing a clean,
idiomatic Rust API.

### Features

- **Authentication**: IG session v2 (`CST` / `X-SECURITY-TOKEN` headers) and
  v3 (OAuth bearer), with session establishment, proactive refresh, and account
  switching. Standard reads can refresh and replay once after authentication
  rejection; trading mutations return that error without replay.
- **Account Management**: Accounts, balances, positions, working orders,
  preferences, activity, and transaction history.
- **Market Data**: Market search, instrument details, complete category
  traversal with explicit errors on incomplete results, and historical prices
  at several resolutions. Explicit…
