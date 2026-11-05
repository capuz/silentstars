---
repo: "NelsonLongxiang/dsh-open-a2a-net"
name: "dsh-open-a2a-net"
description: "Open A2A network plugin for DeepSeek Harness: signed agent cards, decentralized peer/zone discovery, direct routing model tools, and joinable session nodes in the web sidebar"
readmeQualityOk: true
url: "https://github.com/NelsonLongxiang/dsh-open-a2a-net"
homepage: "https://www.npmjs.com/package/@nelsonlongxiang/dsh-open-a2a-net"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["a2a", "a2a-protocol", "deepseek-harness", "dsh-plugin", "agent-network", "p2p"]
stars: 7
forks: 2
openIssues: 21
closedIssues: 85
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-08-19T04:39:42Z"
lastCommitAt: "2026-11-05T08:05:16Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 58
maintainers: ["nelson-mac-agents[bot]", "NelsonLongxiang"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d7b7ad68f5cfd8248ce31441527665d4c0fb0d2b4dc835ed0988f3c30028601/NelsonLongxiang/dsh-open-a2a-net"
---

# @nelsonlongxiang/dsh-open-a2a-net

English | [中文](https://github.com/NelsonLongxiang/dsh-open-a2a-net/blob/HEAD/README_zh.md)

Open A2A network plugin for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH): turns a DSH
deployment into one node of a decentralized agent network — no central server, no registry.

Each node publishes a **signed, expiring agent card** at `/.well-known/agent-card.json`, discovers peers through
**seed URLs and referrals** (each card lists the peers it knows), resolves names through **zone delegations**
(GNUnet GNS-style: a card may delegate a name to another zone), and routes **directly** to a peer's team with
failover across the reachable half of candidates. Every main session can additionally be exposed as a **session
node** other hosts can discover and join from the web sidebar.

| The sidebar network panel | Context message display |
| --- | --- |
|  |  |

## Install

```sh
dsh plugin --profile web add @nelsonlongxiang/dsh-open-a2a-net
```

Restart `dsh web`, then open the sidebar network panel (footer action).

(As a package specifier, a local path, or a Git URL; the package runs `pnpm build` in `prepare`, so a source…
