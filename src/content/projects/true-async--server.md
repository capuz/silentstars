---
repo: "true-async/server"
name: "server"
description: "TrueAsync Server"
readmeQualityOk: true
url: "https://github.com/true-async/server"
language: "C"
languages: ["C", "PHP"]
languagePcts: [67, 28]
topics: ["async", "grpc", "http2", "http2-server", "http3", "php", "server", "websocket"]
stars: 61
forks: 3
openIssues: 5
closedIssues: 33
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-04-21T10:37:37Z"
lastCommitAt: "2026-07-10T07:01:21Z"
lastReleaseAt: "2026-05-19T10:31:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 39
maintainers: ["EdmondDantes", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/27b51de7d6f2b1a629384f27fbeb842a694c1b33093d894e4a038bc50ab023ae/true-async/server"
---

</p>

<h1 align="center">TrueAsync Server</h1>

  High-performance HTTP/1.1, HTTP/2, and HTTP/3 server as a native PHP extension,<br/>
  built on the <a href="https://github.com/true-async">TrueAsync</a> event loop.
</p>

</p>

---

TrueAsync Server is a native PHP extension that runs a high-performance web server **directly inside PHP** — no separate process, no reverse proxy, no external daemon.

The defining characteristic is **multi-protocol in a single server**: HTTP/1.1, HTTP/2, WebSocket, SSE, and gRPC share the same TCP port and the same event loop — protocol selection happens via **ALPN negotiation** (for TLS) or **HTTP Upgrade**. HTTP/3 runs on the same UDP port (QUIC), advertised to clients through an `Alt-Svc` response header, so they transparently upgrade on subsequent requests.

This means you can serve a REST API over HTTP/2, push real-time events over Server-Sent Events, handle long-lived connections over WebSocket, and expose a gRPC endpoint — all from a single `$server->start()` call.

---

## Features

| Status | Feature | Details |
|--------|---------|---------|
| ✅ Ready | **HTTP/1.1** | Full RFC 9112 compliance, keep-alive, pipelining |
| ✅ Ready | **TLS 1.2…
