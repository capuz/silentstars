---
repo: "redhat-performance/configiq"
name: "configiq"
description: "Distributed inference configuration tools"
readmeQualityOk: true
url: "https://github.com/redhat-performance/configiq"
homepage: "https://configiq.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [61]
topics: ["ai", "distributed", "inference", "inference-acceleration", "inference-optimization", "inference-server", "performance", "llm-d", "sglang", "simulation"]
stars: 11
forks: 6
openIssues: 20
closedIssues: 10
watchers: 1
contributors: 24
recentReleases: 0
createdAt: "2026-05-13T04:28:56Z"
lastCommitAt: "2026-09-07T08:34:13Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 83
undervaluedScore: 50
maintainers: ["natoscott", "mazam-lab"]
openGraphImageUrl: "https://opengraph.githubassets.com/54154fbaf2bd363b0afefe4ff9f2220332598783e745c425489465361b2bbeb1/redhat-performance/configiq"
discussionCount: 0
---

# ConfigIQ

LLM inference sizing, GPU comparison, and cost modeling for engineers and infrastructure teams.

## Live

- [configiq.xyz](https://configiq.xyz) (latest release)
- [configiq.dev](https://configiq.dev) (latest commit)

Built with Next.js + PatternFly, powered by our [AIConfigurator](https://github.com/ai-dynamo/aiconfigurator) [REST API](https://aiconfigurator.dev/docs).

## What it does

| Tool | Description |
|------|-------------|
| **Performance** | Fast GPU memory and cost estimate from model + load profile |
| **Recommend Sizing** | Detailed sizing with batching, quantization, and cost modeling |
| **KV Cache Calculator** | Memory breakdown and KV cache capacity analysis |
| **GPU Explorer** | Compare GPUs across memory, throughput, cost, and availability |
| **Hybrid Savings** | Model cost savings across cloud, on-premise, and hybrid strategies |
| **Routing Economics** | Analyze request routing between model tiers |

## Getting started

### Prerequisites

- Node.js >= 20
- npm >= 10

### Setup

```bash
git clone https://github.com/openshift-psap/configiq.git
cd configiq
npm install
cp .env.example .env.local
npm run dev
```

App runs at…
