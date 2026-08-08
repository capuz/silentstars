---
repo: "lukacf/meerkat"
name: "meerkat"
description: "Meerkat - A modular, high-performance agent harness built in Rust."
readmeQualityOk: true
url: "https://github.com/lukacf/meerkat"
language: "TLA"
languages: ["TLA", "Rust"]
languagePcts: [73, 24]
topics: ["agentic", "ai", "ai-agents", "claude", "claude-code", "cli", "codex", "codex-cli", "gemini", "gemini-cli"]
stars: 19
forks: 5
openIssues: 20
closedIssues: 25
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-22T12:38:43Z"
lastCommitAt: "2026-08-08T03:38:30Z"
lastReleaseAt: "2026-03-15T14:50:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 43
maintainers: ["lukacf", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b9e3ff18625740bc305f474037cd34236c6f6af692b40af434520b631511d18/lukacf/meerkat"
---

</p>

<h1 align="center">Meerkat</h1>

<strong>A modular, high-performance agent harness built in Rust.</strong>
</p>

</p>

</p>

---

## Why Meerkat?

Meerkat is a **library-first, high-performance, modular agent harness** -- composable Rust crates that handle the hard parts of building agentic systems: state machines, retries, budgets, streaming, tool execution, MCP integration, and multi-agent coordination.

That harness is backed by a shared runtime. The same sessions, tools, credentials, schedules, live channels, blobs, and mob members work across the CLI, services, SDKs, and browser/WASM delivery instead of each surface reimplementing agent behavior.

It is designed to be **stable** (typed session events, explicit terminal results, resumable persistence, scoped credentials) and **fast** (<10ms cold start, ~20MB memory, small standalone binaries for the common surfaces). Meerkat lifecycle flows are specified as typed formal state machines and mathematically proven with TLA+ where it matters, which means the system avoids getting stuck in invalid or unknown states.

The library still comes first; surfaces come second. Pick the entry point that fits your architecture: embed…
