---
repo: "morph-l2/morph"
name: "morph"
description: "Morph Monorepo"
url: "https://github.com/morph-l2/morph"
language: "Solidity"
languages: ["Solidity", "Go"]
languagePcts: [43, 31]
stars: 86
forks: 72
openIssues: 26
closedIssues: 46
watchers: 12
contributors: 33
recentReleases: 2
createdAt: "2023-05-08T08:35:22Z"
lastCommitAt: "2026-06-25T02:08:36Z"
lastReleaseAt: "2026-04-28T02:52:04Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 55
maintainers: ["panos-xyz", "curryxbo", "tomatoishealthy"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5d6efeefe8b8c08a1e6c9264b3f6b550e1362ece4acc81bf1e776931b0ac3c1/morph-l2/morph"
---

# Welcome to Morph

Welcome to the official GitHub repository for Morph: The Consumer Blockchain Revolution

Morph is an innovative force reshaping the consumer blockchain landscape for practical, everyday use. At the core of Morph is a revolutionary approach to Ethereum Layer 2 scalability, harnessing the power of advanced rollup technology. Our platform is uniquely designed to enhance the blockchain experience, making it more accessible, efficient, and user-friendly for both developers and consumers alike.

## Dive deeper into our vision and objectives here

1. [What is & Why Responsive Validity Proof?](https://docs.morphl2.io/docs/how-morph-works/optimistic-zkevm/#what-is-rvp)

2. [How Does RVP Run in Morph?](https://medium.com/@morphlayer2/how-does-rvp-run-in-morph-6025233a21cc)

## Development

### Setting Up Local Development Network

This repository supports launching a local private Morph network for development and debugging purposes.

#### Start the Development Network

```bash
make devnet-up
```

This command performs the following steps:
1. Initializes and updates the go-ethereum submodule to the specified version
2. Builds the go-ubuntu-builder Docker image (if not…
