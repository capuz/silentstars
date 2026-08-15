---
repo: "nantian-gw/dataplane"
name: "dataplane"
description: "Rust data plane for Nantian Gateway. HTTP/gRPC proxy, stream passthrough, AI Gateway filters, and Wasm plugin runtime powered by Pingora."
readmeQualityOk: true
url: "https://github.com/nantian-gw/dataplane"
homepage: "https://nantian.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["ai-gateway", "gateway-api", "grpc", "http", "pingora", "proxy", "rust", "wasm"]
stars: 54
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-06-05T10:29:02Z"
lastCommitAt: "2026-08-15T04:02:49Z"
lastReleaseAt: "2026-07-04T14:47:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 39
maintainers: ["mahmut-Abi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/981b5b457fbcd2843cf2328db7434493e30c54803fc3bafbccee50c5a5dcb801/nantian-gw/dataplane"
---

# Nantian Gateway Data Plane

High-performance Rust proxy for Nantian Gateway — HTTP, gRPC, TCP, UDP, TLS, **and AI gateway** all in one binary.

## Architecture

```
ntgw-app (binary) — orchestrates everything
├── ntgw-config       — YAML config, file watching
├── ntgw-http         — HTTP/gRPC proxy (Pingora-based), filters, sessions, cache
│   ├── ntgw-ai       — AI Gateway proxy (rate limiting, multi-format)
│   ├── ntgw-wasm     — wasmtime 44 plugin engine
│   │   └── ntgw-wasm-sdk
│   ├── ntgw-ir       — Runtime IR, route matching, LB, fast-path
│   │   └── ntgw-proto — Protobuf codegen
│   └── ntgw-observability — Metrics, tracing, OTel
├── ntgw-stream       — TCP/UDP/TLS stream proxy
├── ntgw-xds          — xDS client for control plane
├── ntgw-shared-tls   — TLS config / certs
└── ntgw-allocator    — Memory allocator helpers (mimalloc/jemalloc)
```

## Crates

| Crate | Description |
|---|---|
| `ntgw-app` | Data plane binary and service composition |
| `ntgw-http` | HTTP/gRPC proxy runtime and filters |
| `ntgw-ai` | AI Gateway proxy with multi-format support and rate limiting |
| `ntgw-wasm` | wasmtime plugin engine and host functions |
| `ntgw-stream` | TCP/UDP/TLS…
