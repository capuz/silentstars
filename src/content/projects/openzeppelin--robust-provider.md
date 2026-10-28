---
repo: "OpenZeppelin/Robust-Provider"
name: "Robust-Provider"
description: "Timeout-aware, auto-retrying, failover-ready RPC provider wrapper for Alloy built in Rust"
readmeQualityOk: true
url: "https://github.com/OpenZeppelin/Robust-Provider"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 6
forks: 4
openIssues: 11
closedIssues: 10
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-01-07T16:41:38Z"
lastCommitAt: "2026-10-28T09:57:48Z"
lastReleaseAt: "2026-03-06T09:43:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 47
maintainers: ["dependabot[bot]", "0xNeshi", "son-oz"]
openGraphImageUrl: "https://opengraph.githubassets.com/17e66e2c29c87e6f2f51c8b6fb5748ec5e923dde28ecdabc0461f3432d222e23/OpenZeppelin/Robust-Provider"
---

# Robust Provider

> Robust, retrying wrapper around Alloy providers.
>
> _Currently production-ready for supported features. The API surface is still evolving and future feature additions may introduce breaking changes and/or changes in assumptions._

## About

Robust Provider is a Rust library that wraps [Alloy](https://github.com/alloy-rs/alloy) providers with production-ready resilience features. It adds automatic retries, timeouts, and transparent failover between multiple RPC endpoints - making it ideal for applications that need reliable blockchain connectivity.

---

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Usage](#usage)
  - [Building a Provider](#building-a-provider)
  - [Configuration Options](#configuration-options)
  - [Subscriptions](#subscriptions)
- [Provider Conversion](#provider-conversion)
- [Testing](#testing)
- [RPC Endpoint Coverage](#rpc-endpoint-coverage)
- [Extensibility](#extensibility)

---

## Features

- **Bounded timeouts** - per-call timeouts prevent indefinite hangs on unresponsive RPC endpoints.
- **Exponential backoff retries** - automatic retry with configurable backoff for transient failures.
- **Transparent…
