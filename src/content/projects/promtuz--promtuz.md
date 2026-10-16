---
repo: "promtuz/promtuz"
name: "promtuz"
description: "A decentralized, end-to-end encrypted messenger built in Rust over QUIC"
readmeQualityOk: true
url: "https://github.com/promtuz/promtuz"
language: "Rust"
languages: ["Rust", "Kotlin"]
languagePcts: [62, 34]
topics: ["decentralized", "encrypted", "messenger", "quic", "rust", "chat", "e2ee", "mls", "privacy"]
stars: 10
forks: 3
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-01-14T20:20:11Z"
lastCommitAt: "2026-10-16T08:17:33Z"
lastReleaseAt: "2026-10-04T05:01:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 64
maintainers: ["iambhuv"]
openGraphImageUrl: "https://opengraph.githubassets.com/eeaaacb9a5c23c32c122edc51baa5bd9c3c2e0a95cbfd7450fe6a72f96d59296/promtuz/promtuz"
---

# Promtuz

A decentralized, end-to-end encrypted messenger built from scratch in Rust and QUIC. Android client in Kotlin/Compose.

This is a personal project, not an attempt to compete with Signal or Telegram. I just wanted to understand what it takes to build one of these from the ground up. No central server owns your messages, no phone number required, identity is just a keypair.

## How it works

There are no "servers" in the traditional sense. The network has three lightweight infrastructure roles, and everything that carries your messages is replicated, ephemeral, and replaceable.

**Resolver**: a stateless directory service. Relays and gateways register themselves here so the rest of the network can find them. No database, just an in-memory map of which nodes are currently online. If it dies, they reconnect to another one.

**Relay**: a node in a Kademlia-style DHT. When a client connects and authenticates, its relay publishes a *presence record* ("this user is reachable through me") and replicates it across the DHT. Relays also store-and-forward the MLS handshake material (KeyPackages, Welcomes) and queued ciphertext for users who are briefly offline, and they can lend…
