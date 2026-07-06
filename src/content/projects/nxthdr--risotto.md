---
repo: "nxthdr/risotto"
name: "risotto"
description: "High-performance BMP collector."
readmeQualityOk: true
url: "https://github.com/nxthdr/risotto"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["bgp", "bmp", "collector"]
stars: 10
forks: 2
openIssues: 4
closedIssues: 21
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-10-27T10:06:23Z"
lastCommitAt: "2026-07-06T07:04:36Z"
lastReleaseAt: "2025-10-11T14:00:33Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 72
maintainers: ["renovate[bot]", "matthieugouel", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/98f1feb6a709fb3919217fb0c21753bb5a2ca4c18742cace671f97e0da95d7c3/nxthdr/risotto"
fundingLinks: ["GITHUB:https://github.com/nxthdr"]
---

</p>

# Risotto

Risotto 😋 is a high-performance collector that processes BMP messages from routers and publishes updates to Kafka/Redpanda. This repository includes both the Risotto collector application and the Risotto library.

The collector application streams BGP updates to a Kafka topic, enabling downstream components to consume them. The library offers essential components for decoding BMP messages and generating BGP updates.

## Quick Start

The easiest way to use Risotto with Docker. This command will output the help message and exit:

```bash
docker run ghcr.io/nxthdr/risotto:main --help
```

To run Risotto with Docker with the default parameters, you can use the following command:

```bash
docker run \
  -p 4000:4000 \
  -p 8080:8080 \
  ghcr.io/nxthdr/risotto:main
```

By default, Risotto listens on port `4000` for BMP messages.
Additionally, a Prometheus HTTP endpoint is available at `http://localhost:8080/metrics` to monitor the collector's performance and statistics.

## Data Curation

Risotto maintains a state representing connected routers and their associated BGP peers and announced prefixes. This state is dumped to a file at specified intervals.
This state…
