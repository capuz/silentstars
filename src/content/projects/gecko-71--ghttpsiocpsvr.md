---
repo: "gecko-71/GHttpsIOCPSvr"
name: "GHttpsIOCPSvr"
description: "Delphi HTTPS server IOCP and Schannel"
readmeQualityOk: true
url: "https://github.com/gecko-71/GHttpsIOCPSvr"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [72]
topics: ["delphi", "delphi-library", "https", "https-server", "lightweight", "networking", "rest-server", "windows", "delphi-iocp-schannel", "http-server"]
stars: 48
forks: 6
openIssues: 1
closedIssues: 0
watchers: 7
contributors: 1
recentReleases: 0
createdAt: "2025-07-20T11:11:00Z"
lastCommitAt: "2026-11-05T14:04:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 35
maintainers: ["gecko-71"]
openGraphImageUrl: "https://opengraph.githubassets.com/79fa6883528263714d4376f599c55be7335c92be4ab73cbb3f9587f1b667a3d9/gecko-71/GHttpsIOCPSvr"
discussionCount: 1
---

# GHttpsServerIOCP - A Multi-Protocol HTTP, HTTPS, WebSocket, HTTP/3 & WebTransport Server in Delphi

This server is built in Delphi using asynchronous and multithreaded architecture. The server utilizes Windows I/O Completion Ports (IOCP), the native Windows TLS/SSL stack (SChannel), Microsoft MsQuic, and RFC 6455 WebSockets, ensuring high throughput, minimal latency, and robust enterprise security.

It serves as a high-performance foundation for REST APIs, real-time WebSocket communication, next-generation HTTP/3 services, and ultra-low-latency WebTransport applications.

---

## Key Features

*   **Hybrid Multi-Protocol Architecture:**
    *   **HTTP/1.1 (TCP):** Ultra-fast plaintext HTTP engine with zero-cost SChannel bypass.
    *   **HTTPS (TLS 1.3 / 1.2):** Secure SChannel SSPI integration with ALPN negotiation, zero OpenSSL dependencies, and native Windows CNG certificate store integration.
    *   **WebSocket (`ws://` and `wss://`):** Fully asynchronous RFC 6455 implementation with framing, ping/pong heartbeats, fragmentation support, and custom route handlers.
    *   **HTTP/3 over QUIC (UDP):** Next-gen HTTP/3 engine powered by Microsoft `msquic.dll` and QPACK header…
