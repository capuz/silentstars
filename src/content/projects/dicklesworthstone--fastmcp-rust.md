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
stars: 31
forks: 11
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-01-18T21:59:58Z"
lastCommitAt: "2026-08-04T06:11:08Z"
lastReleaseAt: "2026-06-19T02:23:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 50
maintainers: ["Dicklesworthstone", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1137083276/e347f44a-5ab8-4604-8b9c-79bac16fd5e0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260804%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260804T061336Z&X-Amz-Expires=300&X-Amz-Signature=61f1f2a8ff2391aaf3b76e3564d9939dd9a3abb16cd7ff60f3e5f1d2d9c24751&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTgyNDMxNiwibmJmIjoxNzg1ODI0MDE2LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.q61UN3LdPO51AGtvVKNQ8sWegvGW6WO4moGsBM87L7w"
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
