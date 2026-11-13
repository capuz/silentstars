---
repo: "SiftingIO/sdk-python"
name: "sdk-python"
description: "Official Python SDK for the SiftingIO market data API, sync and async REST clients plus a live WebSocket, fully type-hinted."
readmeQualityOk: true
url: "https://github.com/SiftingIO/sdk-python"
homepage: "https://sifting.io"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["crypto", "financial-data", "fintech", "forex", "market-data", "rest-api", "sdk", "siftingio", "stocks", "websocket"]
stars: 2
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-24T18:00:48Z"
lastCommitAt: "2026-10-21T11:46:05Z"
status: "quiet"
tags: ["solo_builder", "hidden_gem"]
healthScore: 50
undervaluedScore: 25
maintainers: ["aprsn"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bf77bf9179d8a2d4fa31c38b95011195552b02ad98b3e7571c53b59b021989f/SiftingIO/sdk-python"
promoted: true
postedAt: "2026-11-11T17:41:00.079Z"
---

# SiftingIO Python SDK

Official Python SDK for the [SiftingIO Market Data API](https://sifting.io).

SiftingIO provides real-time and historical market data APIs for stocks, FX, crypto, commodities, DEX datasets, fundamentals, market news, and market hours through REST and WebSocket.

This SDK is built for Python developers integrating market data into financial applications, trading tools, dashboards, research workflows, backtesting systems, data pipelines, notebooks, and enterprise data workflows.

## Highlights

* **Sync and async clients** with `SiftingClient` for scripts, notebooks, and data workflows, and `AsyncSiftingClient` for asyncio services.
* **REST and WebSocket support** in one package.
* **Fully type-hinted** endpoint parameters and response shapes with `py.typed`.
* **Resource-mapped API design** with method names that mirror the [SiftingIO API documentation](https://sifting.io/docs).
* **Production-oriented defaults** including retry handling for `429` and `5xx`, gzip negotiation, cursor auto-pagination, and an auto-reconnecting WebSocket client.
* **Lightweight dependencies** using only `httpx` and `websockets`.

## Runnable tutorial

[Gold-silver ratio in…
