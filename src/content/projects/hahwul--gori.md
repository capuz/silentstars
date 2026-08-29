---
repo: "hahwul/gori"
name: "gori"
description: "A fast, keyboard-driven HTTP intercepting proxy and hacking & pentesting toolkit for the terminal."
readmeQualityOk: true
url: "https://github.com/hahwul/gori"
homepage: "https://gori.hahwul.com"
language: "Crystal"
languages: ["Crystal"]
languagePcts: [100]
topics: ["bugbounty", "gori", "pentesting", "proxy", "security", "crystal", "tui", "mcp-server", "cli", "mcp"]
stars: 85
forks: 9
openIssues: 5
closedIssues: 148
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-13T04:15:36Z"
lastCommitAt: "2026-08-29T10:20:32Z"
lastReleaseAt: "2026-08-25T17:03:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 41
maintainers: ["hahwul", "chei-l", "sebastianosrt"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1268021332/32861bf3-b46b-441f-ac5c-b5a4d1da2320"
fundingLinks: ["GITHUB:https://github.com/hahwul"]
---

<br>
  <p>Hack from the terminal.</p>
</div>
</p>

</p>

---

**gori** (고리 — Korean for *ring, link, loop*) sits in the loop between your client and its target,
capturing every request and response as a *flow* you can replay, fuzz, and scan across HTTP/1.1,
HTTP/2, WebSocket, gRPC, and SSE, and intercept in flight on HTTP/1.1 and HTTP/2. Every action is
also a `gori run` subcommand and an MCP tool, so scripts and AI agents can drive the same
engagement.

<details>
<summary><strong>Features</strong></summary>

### Capture & Intercept
- Capturing proxy for HTTP/1.1, HTTP/2, WebSocket, gRPC, and SSE
- Intercept on HTTP/1.1 and HTTP/2, gRPC included: hold, edit, forward, or drop in flight — and per-message on WebSocket, opt in with `proto:ws`
- Searchable History of every flow, with a query language for filtering
- Scope rules, hostname overrides, and match & replace

### Replay, Fuzz & Convert
- Replay workbench for crafting and re-sending requests (incl. WebSocket & gRPC)
- Intruder-style Fuzzer with four attack modes
- Convert pipeline for chained encode / decode / hash
- Side-by-side Comparer for diffing two flows
- Inline JWT / SAML / GraphQL decoding, hex view, and…
