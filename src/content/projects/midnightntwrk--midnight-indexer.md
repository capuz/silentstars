---
repo: "midnightntwrk/midnight-indexer"
name: "midnight-indexer"
description: "Midnight Indexer"
readmeQualityOk: true
url: "https://github.com/midnightntwrk/midnight-indexer"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [57, 41]
topics: ["compact", "midnightntwrk"]
stars: 30
forks: 31
openIssues: 94
closedIssues: 219
watchers: 3
contributors: 29
recentReleases: 0
createdAt: "2025-05-14T13:43:12Z"
lastCommitAt: "2026-10-29T21:24:34Z"
lastReleaseAt: "2025-10-28T21:05:00Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 67
maintainers: ["evilrobot-01", "GiuseppeSalvatoreShielded", "justinfrevert"]
openGraphImageUrl: "https://opengraph.githubassets.com/5782cf4d60d321b06a4c042a9847e470a18830ab3ac731229b70523f0cc03739/midnightntwrk/midnight-indexer"
---

# Midnight Indexer

The Midnight Indexer (midnight-indexer) is a set of components designed to optimize the flow of blockchain data from a Midnight Node to end-user applications. It retrieves the history of blocks, processes them, stores indexed data efficiently, and provides a GraphQL API for queries and subscriptions. This Rust-based implementation is the next-generation iteration of the previous Scala-based indexer, offering improved performance, modularity, and ease of deployment.
```
                                ┌─────────────────┐
                                │                 │
                                │                 │
                                │      Node       │
                                │                 │
                                │                 │
                                └─────────────────┘
                                         │
┌────────────────────────────────────────┼────────────────────────────────────────┐
│                                        │                                        │
│                                        │ fetch                                  │
│                                        │…
