---
repo: "eventflux-io/eventflux"
name: "eventflux"
description: "Rust-native, pattern-first stream processing engine (CEP): filters, joins, enrichment, windows—low latency on-prem & Kubernetes."
readmeQualityOk: true
url: "https://github.com/eventflux-io/eventflux"
homepage: "https://eventflux.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["cep", "complex-event-processing", "data", "data-stream-processing", "events", "infrastructure", "rust", "sql", "stream-processing", "stream-processing-engine"]
stars: 30
forks: 2
openIssues: 22
closedIssues: 33
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-10-06T14:01:53Z"
lastCommitAt: "2026-07-13T06:37:16Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure"]
healthScore: 83
undervaluedScore: 48
maintainers: ["grainier", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8428dc357f3e737a198f6ee372daf16dc2abe3fe0c487b433573651648993ab3/eventflux-io/eventflux"
discussionCount: 0
---

# EventFlux

Stream processing engine built in Rust. Write SQL, process events, skip the infrastructure headache.

## Why EventFlux

You need to detect patterns in event streams, aggregate metrics, or react to conditions in real-time.

Your options today:

- **Flink** — needs Kubernetes, 4GB+ JVM heap, dedicated ops
- **Kafka Streams** — needs a Kafka cluster plus Java expertise
- **Build it yourself** — months of work

For 100k events/sec, that's overkill.

EventFlux runs as a single binary. No cluster. No JVM. No YAML manifests. Just SQL.

## Quick Start

```bash
# Docker
docker run -v ./app.sql:/app.sql ghcr.io/eventflux-io/eventflux /app.sql

# Or build from source (--recursive pulls in the vendored SQL parser submodule)
git clone --recursive https://github.com/eventflux-io/eventflux.git
cd eventflux
cargo build --release --features connectors-all
./target/release/run_eventflux app.sql
```

Already cloned without `--recursive`? Fetch the submodule before building:

```bash
git submodule update --init --recursive
```

### Connector feature flags

The default build is fully minimal — core engine plus the built-in `timer`
source and `log` sink, no external connectors. Each…
