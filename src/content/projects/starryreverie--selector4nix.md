---
repo: "StarryReverie/selector4nix"
name: "selector4nix"
description: "Nix substituter proxy with parallel cache queries and latency-aware selection"
readmeQualityOk: true
url: "https://github.com/StarryReverie/selector4nix"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["async", "concurrency", "nix", "nix-flake", "nixos", "proxy-server", "rust", "api-server", "web-application", "binary-cache"]
stars: 46
forks: 6
openIssues: 1
closedIssues: 11
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-04-28T18:00:59Z"
lastCommitAt: "2026-09-19T01:35:42Z"
lastReleaseAt: "2026-06-02T09:12:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 38
maintainers: ["StarryReverie", "renovate[bot]", "luochen1990"]
openGraphImageUrl: "https://opengraph.githubassets.com/c17d07b5ded2a5a0b59d1a4c27984faed441d70624a70d982ae74b6ad0e0f975/StarryReverie/selector4nix"
---

# `selector4nix`

A Nix substituter proxy with parallel cache queries and latency-aware selection.

## Overview

`selector4nix` sits between your Nix client and multiple upstream substituters, acting as a smart proxy:

- Queries all configured substituters in parallel for `.narinfo` lookups
- Selects the fastest responding substituter based on latency and priority
- Automatically detects and skips unavailable substituters, retrying them with exponential backoff
- Continuously probes substituters to detect failures early and verify recovery
- Proxy private cache substituters with additional credentials
- Pre-fetch multiple NAR file chunks concurrently to improve network utilization, based on sliding window (Opt-in)

Note that `selector4nix` only intends to work as a proxy rather than a full-featured cache substituter. NAR files are streamed directly from the best substituter without being cached locally. However, it does cache `.narinfo` files for better responsiveness.

The recommended way to use `selector4nix` is deploying it locally on each host. Since no large NAR file caching is used, `selector4nix` is pretty lightweight in terms of both memory footprint and CPU usage. In…
