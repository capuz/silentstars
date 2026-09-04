---
repo: "sebadob/hiqlite"
name: "hiqlite"
description: "Hiqlite - highly-available, embeddable, raft-based SQLite + cache"
readmeQualityOk: true
url: "https://github.com/sebadob/hiqlite"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["database", "raft", "rust", "sqlite", "high-availability", "cache", "distributed-locks"]
stars: 486
forks: 32
openIssues: 1
closedIssues: 25
watchers: 4
contributors: 12
recentReleases: 0
createdAt: "2024-07-18T16:12:52Z"
lastCommitAt: "2026-09-04T08:10:00Z"
lastReleaseAt: "2025-05-02T11:25:53Z"
status: "thriving"
tags: ["funded"]
healthScore: 94
undervaluedScore: 33
maintainers: ["dependabot[bot]", "sebadob", "reneleonhardt"]
openGraphImageUrl: "https://opengraph.githubassets.com/88f2de46230a730f70767bb2527486c4dfcd35699a31aef2e06a4ded3e0c47d2/sebadob/hiqlite"
fundingLinks: ["GITHUB:https://github.com/sebadob"]
discussionCount: 4
---

# Hiqlite

Hiqlite is an embeddable SQLite database that can form a Raft cluster to provide strong consistency, high availability
(which is where `Hiqlite` derives from), replication, automatic leader fail-over and self-healing features.

## Why

Why another SQLite replication solution? Other projects exist already that can do this. The problem is that none of them
checks all boxes. They either require an additional independent process running on the side which can do async
replication, need a special file system, have bad throughput / latency, or are running as a server.

I don't think that running SQLite as a server is a good solution. Yes, it is very resource friendly, and it may be a
good choice when you are heavily resource constrained, but you lose its biggest strength when doing this: having all
your data local, which makes reads superfast without network latency.

Hiqlite builds on top of `rusqlite` and provides an async wrapper around it. For the Raft logic, it builds on top of
`openraft` while providing its own storage and network implementations.

## Goal

Rust is such an efficient language that you most often only need a single process to achieve whatever you need, for…
