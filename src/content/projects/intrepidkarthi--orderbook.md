---
repo: "intrepidkarthi/orderbook"
name: "orderbook"
description: "A fast, embeddable limit-order-book & matching engine in Go — plus a microstructure research harness and a WASM-powered animated explainer. MIT."
readmeQualityOk: true
url: "https://github.com/intrepidkarthi/orderbook"
homepage: "https://intrepidkarthi.github.io/orderbook/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["algorithmic-trading", "avellaneda-stoikov", "backtesting", "clob", "exchange", "fintech", "go", "golang", "hft", "limit-order-book"]
stars: 8
forks: 3
openIssues: 6
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2025-01-08T18:36:06Z"
lastCommitAt: "2026-07-31T06:29:00Z"
lastReleaseAt: "2026-07-23T10:46:03Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 70
undervaluedScore: 71
maintainers: ["intrepidkarthi"]
openGraphImageUrl: "https://opengraph.githubassets.com/28c05b5c5f3541c6acd5f31bcf47e17f102f60469e9c895f18ada5c8704b3c26/intrepidkarthi/orderbook"
---

# orderbook

</p>

A production-grade embeddable matching core in Go, with a demonstrated network
seam: integer-exact pricing, a zero-allocation match path, a lock-free
single-writer core, deterministic and machine-checked crash recovery, and a
reference order-entry gateway that speaks a frozen binary protocol over TCP.

`orderbook` is an embeddable Go library — `go get` it into an exchange, a
simulator, or a trading tool. The matching core owns the order book, the matching
algorithm, order lifecycle, deterministic sequencing, and market-data snapshots,
plus a set of opt-in **pre-trade risk & anti-manipulation controls**; credit,
identity, fees, and wire protocols stay in the layers around it, the same
boundary production venues draw. Companion packages cover the rest of that
boundary — durable WAL persistence (`pkg/wal`), market-abuse surveillance
(`pkg/surveillance`), in-process pre-trade admission control (`pkg/gateway`),
and a uniform-price call auction (`pkg/auction`). Every defensive control is
grounded in a real enforcement case or incident, catalogued in
[docs/THREAT-MODEL.md](https://github.com/intrepidkarthi/orderbook/blob/HEAD/docs/THREAT-MODEL.md). The repository also…
