---
repo: "Magma-Devs/smart-router"
name: "smart-router"
description: "The reliability and security layer for blockchain RPC"
readmeQualityOk: true
url: "https://github.com/Magma-Devs/smart-router"
homepage: "https://magmadevs.com"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["blockchain", "load-balancer", "rpc", "smart-router", "web3"]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 11
recentReleases: 3
createdAt: "2026-01-21T12:54:27Z"
lastCommitAt: "2026-10-05T10:46:19Z"
lastReleaseAt: "2026-08-06T11:47:33Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 58
maintainers: ["avitenzer", "Tomelia1999", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1139041505/557319f0-4ce3-4ac3-9e6c-329cce31ad0a"
discussionCount: 0
---

<img
    src="./docs/assets/banner.png"
    alt="Smart Router — the reliability and security layer for blockchain RPC"
    width="100%"
    style="cursor: pointer;"
  >

# Smart Router

The reliability and security layer for blockchain RPC. Smart Router monitors and orchestrates multiple RPC upstreams in real-time, providing failover, cross-validation, caching, observability & more — across EVM and non-EVM networks.

[Docs](https://docs.magmadevs.com) · [Quick Start](#quick-start) · [How it works](#how-it-works) · [Supported Chains](#supported-chains) · [Releases](#releases) · [License](#license) · [Contributing](https://github.com/Magma-Devs/smart-router/blob/HEAD/CONTRIBUTING.md) · [Security](https://github.com/Magma-Devs/smart-router/blob/HEAD/SECURITY.md)

---

## What is Smart Router

RPC proxies have been built in-house thousands of times — along with the failover, caching, and monitoring that surround them. Smart Router is that layer as a standard, actively maintained component: a single endpoint in front of all your RPC upstreams. Instead of building and maintaining your own, you get:

- **Automatic failover** — retries a bad upstream on another, hedges slow ones in…
