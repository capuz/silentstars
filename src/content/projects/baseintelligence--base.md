---
repo: "BaseIntelligence/base"
name: "base"
description: "[🧠] Base is a Bittensor subnet enabling decentralized collaborative AI research through multiple challenges, each focused on a specific objective where miners compete and contribute innovative code."
url: "https://github.com/BaseIntelligence/base"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 157
forks: 15
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 3
createdAt: "2025-04-26T00:53:36Z"
lastCommitAt: "2026-07-03T12:39:59Z"
lastReleaseAt: "2026-05-22T21:39:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 44
maintainers: ["echobt"]
openGraphImageUrl: "https://opengraph.githubassets.com/38107319ea0831e4fa87420b5c3183136232545c7e886f40b20b7b3cb6724673/BaseIntelligence/base"
---

# BASE

**Multi-challenge Bittensor subnet platform with master/validator orchestration**

**[Miner Guide](docs/miner/README.md) • [Validator Guide](docs/validator/README.md) • [Foundation Master Guide](docs/master/README.md) • [Architecture](docs/architecture.md) • [Challenges](docs/challenges.md) • [Security](docs/security.md) • [Website](https://joinbase.ai)**

</div>

---

## Overview

BASE is a **multi-challenge Bittensor subnet platform**. It lets independent challenge
subnets run under one validator network, routes miner traffic to the right challenge, collects raw
challenge weights, normalizes emissions, maps miner hotkeys to Bittensor UIDs, and publishes the
final vector for validators to submit on-chain.

Each challenge lives in its own repository and owns its submissions, scoring logic, state, and
public miner experience. BASE provides the orchestration layer that makes those challenges run
together as one subnet.

BASE runs as a single Docker Swarm: a master (manager) node hosts the platform API (a single
proxy that also serves the `/v1/registry` and `/v1/weights/latest` reads plus the token-gated admin
routes), the validator coordination plane, the LLM gateway,…
