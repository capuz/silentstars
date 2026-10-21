---
repo: "selimaytac/hashspan"
name: "hashspan"
description: "OpenTelemetry instrumentation for viem, the Coinbase CDP SDK, x402 and MPP: trace the transactions and payments your AI agents and services send, keyed by tx hash."
readmeQualityOk: true
url: "https://github.com/selimaytac/hashspan"
homepage: "https://hashspan.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["ai-agents", "blockchain", "distributed-tracing", "evm", "observability", "opentelemetry", "typescript", "viem", "web3", "agentic-payments"]
stars: 5
forks: 0
openIssues: 11
closedIssues: 103
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-26T14:02:05Z"
lastCommitAt: "2026-10-21T21:15:34Z"
lastReleaseAt: "2026-10-01T13:45:10Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 97
undervaluedScore: 66
maintainers: ["selimaytac"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1389299914/23e4e0b0-c68b-4ed4-bad2-fba9f79fcdc3"
discussionCount: 1
---

# hashspan

**OpenTelemetry instrumentation for viem, the Coinbase CDP SDK, x402 and MPP.**
Trace the on-chain transactions and payments your AI agents and services send, inside the traces you already have.

When an agent or a service sends a transaction, its trace usually stops at the call. Whether the transaction was
mined, reverted, or what it cost lives somewhere else. hashspan closes that gap: each transaction becomes a `send` /
`confirm` span pair, keyed by the transaction hash, **inside the trace that sent it**, with status, gas and fees
attached, exported to the backend you already use (Jaeger, Grafana Tempo, Langfuse, Honeycomb, ...).

**Status:** 1.x, published with npm provenance. The API is stable; span, attribute and metric names can still change
in a minor release ([change policy](https://github.com/selimaytac/hashspan/blob/HEAD/docs/semconv.md#change-policy)).

## Quick start

Requires Node.js 22.3 or later.

```sh
npm install @hashspan/viem @opentelemetry/api viem
npm install @opentelemetry/sdk-node   # unless your app already sets up an OpenTelemetry SDK
```

With an OpenTelemetry SDK started, extend your viem clients (`account`, `to` and `value` are your own):…
