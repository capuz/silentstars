---
repo: "Dicklesworthstone/fastmcp_rust"
name: "fastmcp_rust"
description: "Cancel-aware Rust framework for building Model Context Protocol (MCP) servers and clients: tool, resource, and prompt abstractions over stdio, HTTP, and SSE transports, with asupersync capability contexts for cooperative cancellation."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/fastmcp_rust"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["ai-agents", "async", "json-rpc", "mcp", "rust"]
stars: 39
forks: 13
openIssues: 4
closedIssues: 22
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-01-18T21:59:58Z"
lastCommitAt: "2026-11-16T04:27:18Z"
lastReleaseAt: "2026-08-24T22:22:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 56
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1137083276/e347f44a-5ab8-4604-8b9c-79bac16fd5e0"
---

> **Protocol status (2026-08-27):** MCP 2026-07-28 support is under
> implementation and remains unverified. The root compatibility
> `PROTOCOL_VERSION` is `2024-11-05`; the modern facade's
> `modern::PROTOCOL_VERSION` is `2026-07-28`. Source presence, examples, and
> historical parity rows are not conformance or release evidence. Versions
> through 0.13.0 have been published, but publication and source edits alone do
> not prove historical workflow identities, queued runs, or credentials inert;
> provider-side release-safety evidence is still required.

### Measured official-conformance standing

Run it yourself with `scripts/run_official_conformance.sh`; it owns the suite
pin and the result tally. Measurements use
`@modelcontextprotocol/conformance@0.2.0-alpha.10`,
`--spec-version 2026-07-28 --suite all`, server mode against the in-tree
`conformance_server` adapter:

| revision | date | scenarios | checks | SUCCESS | FAILURE | WARNING | INFO |
|---|---|---|---|---|---|---|---|
| `1c2dc896` | 2026-10-12 | 40 | 115 | **112** | **0** | 2 | 1 |
| `e2a0ac5c` | 2026-10-12 | 40 | 115 | 110 | **0** | 4 | 1 |
| `99a3b4e8` | 2026-10-05 | 40 | 115 | 110 | **0** | 4 | 1 |
| working tree…
