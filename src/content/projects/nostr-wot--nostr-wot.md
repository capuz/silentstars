---
repo: "nostr-wot/nostr-wot"
name: "nostr-wot"
description: "Nostr Web of Trust toolkit - query social graph distance between any pubkeys. Includes browser extension for client-side WoT queries and oracle API for server-side lookups. Open infrastructure for trust-based filtering in Nostr apps."
readmeQualityOk: true
url: "https://github.com/nostr-wot/nostr-wot"
homepage: "https://nostr-wot.com"
language: "MDX"
languages: ["MDX", "TypeScript"]
languagePcts: [65, 32]
topics: ["bitcoin", "browser-extension", "decentralized", "graph-database", "nostr", "nostr-protocol", "open-source", "social-graph", "spam-filtering", "trust"]
stars: 8
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-02T19:45:16Z"
lastCommitAt: "2026-10-20T08:48:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 61
maintainers: ["leonacostaok"]
openGraphImageUrl: "https://opengraph.githubassets.com/23eca16c323a412869bb70f523cf0c906dc39d846417a072a585fee342bd2233/nostr-wot/nostr-wot"
---

# Nostr Web of Trust

Open infrastructure for trust-based filtering on Nostr.

## The Problem

Nostr has no central authority to filter spam or verify identity. Web of Trust solves this by measuring social distance—how many hops separate you from someone in the follow graph.

## Projects

### Browser Extension

The Nostr WoT Extension is an all-in-one identity provider for your browser — a NIP-07 signer with an encrypted key vault, a built-in Lightning wallet, and management for your profile, relays, and mute list. It exposes the standard `window.nostr` NIP-07 API for any Nostr client to use. Follow-graph queries are provided separately by the SDK local graph and the Oracle.

- **Repository:** [github.com/nostr-wot/nostr-wot-extension](https://github.com/nostr-wot/nostr-wot-extension)
- **Features:** NIP-07 signing (NIP-04/NIP-44 encryption), multi-account encrypted vault, NIP-46 remote signer, Lightning/WebLN wallet, profile (kind:0), NIP-65 relays, NIP-51 mute list, granular per-site permissions
- **Browsers:** Chrome, Brave, Edge, Opera, Firefox

### JavaScript SDK

`nostr-wot-sdk@1.0.1` is a TypeScript toolkit for Nostr apps. It includes data fetchers, relay utilities, login…
