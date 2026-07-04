---
repo: "NDevTK/APIClient"
name: "APIClient"
description: "API Security Researcher"
readmeQualityOk: true
url: "https://github.com/NDevTK/APIClient"
homepage: "https://chromewebstore.google.com/detail/api-security-researcher/ahbikcjdhmpbgolbheekhkdfgfodfaoa"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [85]
stars: 14
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-12T09:41:19Z"
lastCommitAt: "2026-07-04T22:19:02Z"
lastReleaseAt: "2026-04-04T13:37:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 36
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a01a1b6f1237fab185a1d85909252e178bf0350123a2001f934878904f78e33c/NDevTK/APIClient"
---

# API Security Researcher

A Chrome Extension (MV3) that passively reverse-engineers APIs, learns their schemas from live traffic, analyzes JavaScript bundles for vulnerabilities, and provides a complete testing workbench — all without a debugger or proxy.

## How It Works

Browse any website. The extension works in the background:

1. **Intercepts** every fetch/XHR/WebSocket/EventSource call via main-world wrappers, capturing request headers, request bodies, response headers, response bodies, and status — no `webRequest` permission, no Chrome debugger bar.
2. **Captures** cross-frame postMessage and MessageChannel messages via isolated-world listeners.
3. **Decodes** traffic through a protocol chain: async chunked, batchexecute, gRPC-Web, SSE, NDJSON, multipart, GraphQL, JSON, and Protobuf.
4. **Learns** API structure (VDD — Value-Driven Discovery) by merging schemas from every observed request and response into a unified service map.
5. **Analyzes** JavaScript bundles by *executing them for real* under forced multi-path exploration on a forked QuickJS-ng engine (WebAssembly) with a Lexbor spec DOM — extracting API call sites, computed URL/header/body values, and security taint,…
