---
repo: "oliveigah/klife"
name: "klife"
description: "Kafka client for elixir"
readmeQualityOk: true
url: "https://github.com/oliveigah/klife"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
topics: ["elixir", "kafka"]
stars: 72
forks: 5
openIssues: 2
closedIssues: 3
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2023-05-28T22:53:20Z"
lastCommitAt: "2026-10-29T05:50:01Z"
lastReleaseAt: "2026-07-12T12:34:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 32
maintainers: ["oliveigah"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ae0f25ed433fd83921331a59959bedb46c81087c575f482fe44da91a3afe373/oliveigah/klife"
---

# Klife

Klife is a modern, ergonomic and high-performance Kafka client built from the ground up with minimal dependencies.

- **Modern**: Built for today's Kafka. It supports Kafka >= 4.0 and implements the [next generation of the consumer rebalance protocol (KIP-848)](https://cwiki.apache.org/confluence/display/KAFKA/KIP-848%3A+The+Next+Generation+of+the+Consumer+Rebalance+Protocol), providing a simpler and more efficient consumer group experience.

- **Ergonomic**: Designed to feel natural in Elixir projects (e.g. Ecto-like transactions, `Klife.Record` struct, testing utilities, consumer callbacks, etc.) and also provides capabilities to better handle Kafka workflows like automatic retry counting and batch size limits.

- **High Performance**: Batching architecture that delivers exceptional throughput. Most requests destined for the same broker are batched into a single TCP request, maximizing network efficiency. In [benchmarks](https://github.com/oliveigah/klife/blob/HEAD/benchmarks.md) against other community Kafka clients, this approach has shown massive throughput improvements while minimizing the Kafka cluster resource usage.

## Key Features

- **Consumer Group**: The new…
