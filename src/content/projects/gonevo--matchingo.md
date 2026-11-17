---
repo: "GOnevo/matchingo"
name: "matchingo"
description: "Incredibly fast matching engine for HFT written in Golang"
readmeQualityOk: true
url: "https://github.com/GOnevo/matchingo"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["cryptocurrency", "matching", "orderbook"]
stars: 42
forks: 13
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-04-18T14:26:15Z"
lastCommitAt: "2026-11-17T14:35:00Z"
status: "thriving"
tags: []
healthScore: 65
undervaluedScore: 38
maintainers: ["vanodevium", "cursorOne1111"]
openGraphImageUrl: "https://opengraph.githubassets.com/f82ae1251e1ae7d169e2d064720c15cee03db5f823e2d90bef609e99c7028ff6/GOnevo/matchingo"
---

# Matchingo

High-performance order matching engine for cryptocurrency exchanges, written in Go.

Matchingo implements a standard price-time priority matching algorithm with support for market, limit, and stop-limit orders, as well as OCO (One-Cancels-Other) order pairs. It is designed for high-frequency trading (HFT) scenarios where low latency and minimal allocations are critical.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Examples](#examples)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
  - [Decimal](#decimal)
  - [Creating Orders](#creating-orders)
  - [Processing Orders](#processing-orders)
  - [Done Result](#done-result)
  - [Order Lookup](#order-lookup)
  - [Canceling Orders](#canceling-orders)
  - [Order Book Depth](#order-book-depth)
  - [Market Price Calculation](#market-price-calculation)
  - [Precision Limits](#precision-limits)
- [Order Quantity & Quote Mode](#order-quantity--quote-mode)
- [Time in Force](#time-in-force)
- [OCO Orders](#oco-orders)
- [Stop-Limit Orders](#stop-limit-orders)
- [Error Handling](#error-handling)
- [Running Tests](#running-tests)
- [Benchmark](#benchmark)
-…
