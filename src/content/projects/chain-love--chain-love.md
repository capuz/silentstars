---
repo: "Chain-Love/chain-love"
name: "chain-love"
description: "Open-source collaborative database of all the Web3 infrastructure services. Discover, compare and access Web3 services seamlessly at https://chain.love"
readmeQualityOk: true
url: "https://github.com/Chain-Love/chain-love"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 248
forks: 336
openIssues: 209
closedIssues: 96
watchers: 6
contributors: 239
recentReleases: 5
createdAt: "2025-08-04T13:09:43Z"
lastCommitAt: "2026-10-21T20:00:38Z"
lastReleaseAt: "2026-10-12T13:37:51Z"
status: "thriving"
tags: ["needs_contributors", "release_machine", "fork_magnet"]
healthScore: 80
undervaluedScore: 46
maintainers: ["3Nerion7", "stantheman0128", "inunanba"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1031873748/71af0cb7-5f04-4579-94dc-d3ec3325fc28"
discussionCount: 7
---

# Chain.Love Web3 Database

This repository documents blockchain service providers - wallets, explorers, analytics, bridges, dev tools, sdks, faucets, apis, oracles, indexing services, etc. - in a structured way.

The goal is to build a **clean, comparable dataset** that developers and researchers can rely on.

## Data model (how to think about this repo)

Use this relationship graph:

`provider -> offer -> listing`

- **Provider**: identity metadata (name, logo, links, description).
- **Offer**: a category-specific product/plan sold by a provider.
- **Listing**: where an offer is available (for one network or all networks).

## Repository structure

Conceptual structure used in contribution docs:

```
references/
  providers/
    providers.csv    # provider identities
    images/          # local provider logos in jpg/png
    csv/logoPath
  offers/            # offers of the providers
listings/
  specific-networks/<chain>/  # per-chain listing instances
  all-networks/      # listing instances merged into every chain
```

## How to Consume

### Visualize data
Go to https://chain.love and select the network you would like to explore. Take a look also at [our…
