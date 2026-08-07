---
repo: "Dicklesworthstone/fastmcp_rust"
name: "fastmcp_rust"
description: "Rust framework for building Model Context Protocol servers with cancel-correct async, zero-copy serialization, and first-class tool/resource/prompt abstractions"
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/fastmcp_rust"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["ai-agents", "async", "json-rpc", "mcp", "rust"]
stars: 32
forks: 11
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-01-18T21:59:58Z"
lastCommitAt: "2026-08-07T05:15:49Z"
lastReleaseAt: "2026-06-19T02:23:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1137083276/e347f44a-5ab8-4604-8b9c-79bac16fd5e0"
---

</p>

<h1 align="center">FastMCP Rust</h1>

  <strong>Cancel-aware Model Context Protocol (MCP) framework for Rust</strong>
</p>

  <em>A Rust port of <a href="https://github.com/jlowin/fastmcp">jlowin/fastmcp</a> (Python), extended with <a href="https://github.com/Dicklesworthstone/asupersync">asupersync</a> capability contexts and cooperative-cancellation primitives.</em>
</p>

</p>

> **Protocol status (2026-08-02):** MCP 2026-07-28 support is under
> implementation and remains unverified. The current public
> `PROTOCOL_VERSION` is `2024-11-05`. Source presence, examples, and historical
> parity rows are not conformance or release evidence. Release publication
> remains quarantined; source edits alone do not prove historical workflow
> identities, queued runs, or credentials inert, so provider-side evidence is
> still required.

### Current qualification boundaries

- **Wire cancellation is only partially qualified:** on Unix, the primary
  stdio path keeps receiving while one bounded worker serializes dispatch, so
  it can route a cancellation while a handler is running. Non-Unix stdio and
  custom/SSE/WebSocket entry points retain sequential or blocking boundaries,
  and…
