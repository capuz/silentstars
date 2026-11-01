---
repo: "Moonbot-Tech/MoonProto"
name: "MoonProto"
description: "Client-side Rust runtime SDK for building MoonBot-compatible trading terminals, dashboards, and control tools over a running MoonBot core"
readmeQualityOk: true
url: "https://github.com/Moonbot-Tech/MoonProto"
homepage: "https://moonbot.pro"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["algorithmic-trading", "crypto-trading", "cryptocurrency", "rust", "scalping", "trading-bot", "trading-terminal", "udp"]
stars: 6
forks: 2
openIssues: 3
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-26T16:31:46Z"
lastCommitAt: "2026-11-01T22:57:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 52
maintainers: ["Moonbot-Tech", "kirillDevPro"]
openGraphImageUrl: "https://opengraph.githubassets.com/5de6ba388acaff6303f371d7d2b7311b9724b6520818b2a43231189bddbcaa57/Moonbot-Tech/MoonProto"
---

over a running MoonBot core

MoonProto is the live client-side bridge to a MoonBot core. The core remains the execution engine — it connects to exchanges and owns orders, strategies, risk logic, balances, and authoritative trading state. MoonProto keeps your terminal or tool connected to that core: transport, authorization, reconnect, subscriptions, retained state, events, and typed user intents.

This is not a thin REST-style wrapper around a dozen commands. A trading terminal needs continuously maintained state — markets, balances, orders, orderbooks, trades, candles, settings, strategies, reconnect recovery, and delivery guarantees. MoonProto keeps that live client-side model for you, so your application can focus on UI and product logic.

## Overview

Your application does not talk to exchanges directly through this crate. It talks to a MoonBot core that is already running with MoonProto enabled.

**MoonProto owns the live client runtime** — it connects and authorizes, restores after reconnect, subscribes to streams, applies incoming packets into retained state, publishes snapshots and events, and sends typed user intents back to the core.

**Your application owns** the UI,…
