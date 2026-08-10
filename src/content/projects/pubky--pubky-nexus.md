---
repo: "pubky/pubky-nexus"
name: "pubky-nexus"
description: "The Nexus between Pubky homeservers and Pubky-App social features."
readmeQualityOk: true
url: "https://github.com/pubky/pubky-nexus"
language: "Rust"
languages: ["Rust", "Cypher"]
languagePcts: [75, 24]
stars: 22
forks: 9
openIssues: 49
closedIssues: 109
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2024-07-15T08:28:17Z"
lastCommitAt: "2026-08-10T05:06:59Z"
lastReleaseAt: "2025-02-20T14:08:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 63
maintainers: ["aintnostressin", "SHAcollision", "ok300"]
openGraphImageUrl: "https://opengraph.githubassets.com/9878de68aec0199e8991fc03f1268d812170f7f6b46d04c1ff9a62e30d47e5b6/pubky/pubky-nexus"
---

# Pubky Nexus

Pubky Nexus is the central bridge connecting Pubky homeservers with [Pubky-App’s](https://github.com/pubky/pubky-app) social clients. By aggregating events from homeservers into a rich social graph, Nexus transforms decentralized interactions into a high-performance, fully featured social-media-like API. It's designed to support Social-Semantic-Graph (SSG) inference, and more.

## 🌟 Key Features

- **Real-time Social Graph Aggregation**: Nexus ingests events from multiple Pubky homeservers, generating a structured social graph in real time.
- **Full-Content Indexing**: Nexus serves content directly, improving latency and user experience. Clients do not need to locate homeservers to retrieve content unless they wish to perform content attestation. We also envision a light-weight Nexus mode that merely point clients to homeserver locations using pubky uris.
- **High Performance & Scalability**: Built in Rust, Nexus is optimized for speed and efficiency, handling complex social queries across distributed systems with minimal latency.
- **Powerful Social Semantic Graph**: Nexus supports SSG-based interactions, fostering secure and trusted connections between users.
-…
