---
repo: "tonbo-io/ursula"
name: "ursula"
description: "Distributed event stream server over HTTP, backed by S3."
readmeQualityOk: true
url: "https://github.com/tonbo-io/ursula"
homepage: "https://ursula.tonbo.io/"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["distributed", "http", "raft", "rust", "streaming"]
stars: 266
forks: 15
openIssues: 17
closedIssues: 9
watchers: 2
contributors: 5
recentReleases: 10
createdAt: "2026-05-19T03:25:09Z"
lastCommitAt: "2026-07-25T06:02:17Z"
lastReleaseAt: "2026-07-23T13:58:57Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 87
undervaluedScore: 28
maintainers: ["ethe"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1243090608/aae0f710-9361-4af6-9f72-6ef00ac895f4"
---

# Ursula

Docs: **[ursula.tonbo.io](https://ursula.tonbo.io)**

Ursula is a self-hosted, distributed server for the replayable, append-only event timelines behind document edits, agent runs, workflows, and chat. It speaks the [Durable Streams Protocol](https://github.com/durable-streams/durable-streams) over plain HTTP and SSE.

## What Ursula keeps

Event streams live outside the broker network. Document editors, agents, and durable workflows need timelines that browsers, mobile apps, and serverless functions can read, write, and tail over the public internet. That asks for HTTP-native, distributed, S3-backed infrastructure, not the SDK-locked, single-network shape Kafka-style brokers were built for.

The [Durable Streams Protocol](https://github.com/durable-streams/durable-streams) nails that wire format, but its reference server is a single process: a node loss is data loss. The other servers we evaluated each force you to give up one of four things this primitive deserves to keep:

- **Open-source self-hosting.**
- **Low write latency** (sub-50 ms P99 appends, no batching window required).
- **Plain S3 economics** (cold tier on standard S3, no S3 Express tier, no per-GB SaaS…
