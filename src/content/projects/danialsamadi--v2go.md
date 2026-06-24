---
repo: "Danialsamadi/v2go"
name: "v2go"
description: "v2go is a blazingly fast Go V2Ray config aggregator that processes 20,000+ configurations in 11 seconds (99.7% faster than Python), automatically removing duplicates and generating fresh subscription files every 6 hours."
url: "https://github.com/Danialsamadi/v2go"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [61, 36]
stars: 119
forks: 24
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-07-22T21:41:02Z"
lastCommitAt: "2026-06-24T00:20:57Z"
lastReleaseAt: "2026-02-17T00:36:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 43
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/29906831cba140d2ad01aa9be5a1b38915d7af0f25ecb9e55eb8ae143162db4b/Danialsamadi/v2go"
---

# High-Performance V2Ray Config Aggregator (Go Edition)

A high-performance Go rewrite of [Epodonios/v2ray-configs](https://github.com/Epodonios/v2ray-configs) with **dramatic performance improvements** and enhanced features. This Go-based V2Ray configuration aggregator collects, processes, and organizes thousands of V2Ray configs with 99.7% better performance than the original Python implementation.

## Performance Highlights

- **99.7% faster** — Processing time reduced from ~2 hours to ~1 minute (including connection testing)
- **Smart deduplication** — Identity-based parsing (Host + Port) removes true duplicates even with different names
- **Port checker** — Integrated TCP connectivity check ensures only reachable servers are included
- **GeoIP tagging** — Automatic country detection with country codes (e.g. DE, US)
- **Standardized naming** — Config names in a consistent format (e.g. `v2go | DE | VLESS | 1`)
- **Regional sorting** — Configurations split by country into separate subscription files
- **Concurrent processing** — Worker pool (300+ workers) for parallel DNS and GeoIP resolution

### Performance Comparison
| Version | Runtime | Success Rate | Unique Servers |…
