---
repo: "WasmAgent/wasmagent-js"
name: "wasmagent-js"
description: "Embedded agent runtime compliance layer — WASM sandbox, MCP firewall, capability manifests, verifiable rollouts, and trace-to-training export"
readmeQualityOk: true
url: "https://github.com/WasmAgent/wasmagent-js"
homepage: "https://wasmagent.github.io/wasmagent-js/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["agent", "cloudflare-workers", "compliance", "llm", "mcp", "sandbox", "training-data", "typescript", "wasm", "wasmagent"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 223
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-05T17:04:48Z"
lastCommitAt: "2026-09-13T08:28:59Z"
lastReleaseAt: "2026-06-26T04:06:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 71
maintainers: ["telleroutlook", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8265204e5740139a299a8931b6da250f5337c7c1a8e46ead7a063c21c252022/WasmAgent/wasmagent-js"
---

# wasmagent-js

> **WasmAgent adds a verifiable evidence layer to agent tool use: protect tool calls, record what happened, audit the result, and admit trusted traces into downstream systems.**

**Protect → Record → Audit → Admit**  ·  **Sync** — agent↔UI shared state

---

## Start in 30 seconds

Pick your entry point:

| Goal | Install |
|---|---|
| **Protect tools** — runtime firewall, policy enforcement, taint tracking | `npm add @wasmagent/mcp-firewall` |
| **Record evidence** — signed AEP records after every agent run | `npm add @wasmagent/aep` |
| **Admit from traces** — compliance scoring produces `ComplianceEvalRecord`s for downstream training | `npm add @wasmagent/aep @wasmagent/compliance` |
| **Sync state** — reducer-backed agent↔UI shared state, agent reads projections + writes intent | `npm add @wasmagent/core` (`/shared-state` subpath) |

**Trust Pack — 30-minute end-to-end: [docs/quickstarts/trust-pack-30min.md](https://github.com/WasmAgent/wasmagent-js/blob/HEAD/docs/quickstarts/trust-pack-30min.md)**

---

## Quickstart

Three paths — pick the one that fits your use case:

### Path 1 — Protect: MCP runtime firewall

Wrap any MCP server: vet tools before…
