---
repo: "epochbtc/satd"
name: "satd"
description: "A Bitcoin Core-compatible full node in Rust."
readmeQualityOk: true
url: "https://github.com/epochbtc/satd"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["bitcoin", "cryptography", "rust"]
stars: 9
forks: 2
openIssues: 45
closedIssues: 124
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-03-17T16:30:20Z"
lastCommitAt: "2026-10-24T00:15:05Z"
lastReleaseAt: "2026-09-05T00:26:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 60
maintainers: ["bkeroack"]
openGraphImageUrl: "https://opengraph.githubassets.com/3dd49a75123833eb0ce72e77d66dbe847c61665fbeca70bc64e8c86bd18edc2a/epochbtc/satd"
---

---

## Why satd?

satd is built with these priorities in mind: 

- **Bitcoin Core compatibility and stability** first. An unstable node that doesn't work, or splits the chain, isn't useful. Engineering is conservative by default.
- **Operator sovereignty**. Give operators control over their node's behavior. Don't hardcode policy where we can make it configurable within consensus rules.
- **Modern integration surfaces**. Polling JSON-RPC or dealing with ZMQ isn't ideal if you're trying to build anything sophisticated on top of Bitcoin. satd ships real, production-grade SDKs for Rust and Go containing useful primitives like watchsets, resilient clients, and more with modern transports like gRPC.
- **All-in-one architecture**. Ship the API surfaces node operators care about like Electrum and Esplora with native, in-process indices.
- **Modern operations**. Native, built-in Prometheus `/metrics` endpoint. Native TLS on every API surface including legacy JSON-RPC. Structured logs and a working `/healthz` healthcheck endpoint. Independently-scalable read API runtime vs mutating API runtime.
- **TUI**. A beautiful, interactive terminal user interface for monitoring your node, viewing…
