---
repo: "megaeth-labs/salt"
name: "salt"
description: "Small Authentication Large Trie: memory-efficient authenticated KV store for blockchain state"
readmeQualityOk: true
url: "https://github.com/megaeth-labs/salt"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 19
forks: 7
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 20
recentReleases: 4
createdAt: "2025-06-20T09:24:35Z"
lastCommitAt: "2026-07-08T05:42:04Z"
lastReleaseAt: "2026-07-02T02:16:55Z"
status: "thriving"
tags: []
healthScore: 70
undervaluedScore: 44
maintainers: ["flyq", "abelmega", "yunlonggao-mega"]
openGraphImageUrl: "https://opengraph.githubassets.com/68e5bf69519b4c2e35f190b93e698296e8eec5fc503d499daa40efe0d1101712/megaeth-labs/salt"
---

# SALT: Small Authentication Large Trie

**SALT (Small Authentication Large Trie)** is a novel authenticated key-value store that powers <img src="https://github.com/megaeth-labs/.github/blob/main/profile/assets/logo.png" width="140" align=top>. SALT is highly memory- and I/O-efficient. For up to 3 billion key-value pairs, SALT's authentication layer requires only a 1 GB memory footprint, and it scales smoothly to tens of billions of items. Thus, SALT can fit entirely in the memory of most modern machines, relieving blockchain nodes of expensive random disk I/Os. To the best of our knowledge, SALT is the first authenticated KV store to scale to tens of billions of items and completely eliminate random disk I/Os during state root updates, all while maintaining its low memory footprint.

## Design

### Trie Structure

While inspired by Ethereum's Verkle trees, SALT's design differs substantially by avoiding the large, sparse nature of dynamic tries. It features a succinct two-tier architecture: a **static main trie** serves as the top tier, and **dynamic buckets** form the second tier. The main trie is a fixed, **4-level complete 256-ary trie**. The leaves of this trie don't hold…
