---
repo: "wboayue/rust-ibapi"
name: "rust-ibapi"
description: "An implementation of the Interactive Brokers API for Rust"
url: "https://github.com/wboayue/rust-ibapi"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["ibapi", "interactive-brokers", "trading-api"]
stars: 343
forks: 90
openIssues: 2
closedIssues: 179
watchers: 19
contributors: 32
recentReleases: 0
createdAt: "2022-11-07T02:36:46Z"
lastCommitAt: "2026-06-24T06:39:32Z"
lastReleaseAt: "2024-12-19T06:04:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 39
maintainers: ["wboayue", "spoxus", "InTheta"]
openGraphImageUrl: "https://opengraph.githubassets.com/6724f9e2869ffb236a5c913052117f40a88029c2e114512c2ab5338207a6e9ea/wboayue/rust-ibapi"
discussionCount: 16
---

> **Branch notice:** The `main` branch is the **v3.0** release line. For v2.x maintenance and bug fixes, see the [`v2-stable`](https://github.com/wboayue/rust-ibapi/tree/v2-stable) branch.

## What's new in 3.0

- **Protobuf-only wire format.** v3.0 drops the legacy text protocol and speaks only TWS protobuf. Requires TWS / IB Gateway server version **213 or newer**. Smaller, faster, and version-gated by IB itself — see [`docs/migration-3.0.md`](docs/migration-3.0.md) for the cutover.
- **API ergonomics overhaul.** Builders for multi-arg subscriptions (`market_data(&contract).subscribe()`, `realtime_bars(&contract).subscribe()`), unified `Subscription<T>` shape with `SubscriptionItem::{Data, Notice}`, typed `OrderStatusKind` (was magic-string `String`), globally-routed `Client::notice_stream()` for unsolicited notices, and consistent sync/async surfaces. See the [migration guide](docs/migration-3.0.md) for the before/after on every breaking change.

## Introduction

This library provides a comprehensive Rust implementation of the Interactive Brokers [TWS API](https://ibkrcampus.com/campus/ibkr-api-page/twsapi-doc/), offering a robust and user-friendly interface for TWS and IB…
