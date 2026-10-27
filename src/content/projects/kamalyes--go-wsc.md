---
repo: "kamalyes/go-wsc"
name: "go-wsc"
description: "🔥 An enterprise-grade Go WebSocket framework focused on high-performance real-time communication. It provides key features such as smart reconnection, message acknowledgment (ACK), and connection pool management, and supports tens of millions of concurrent connections."
originalDescription: "🔥企业级 Go WebSocket 框架，专注于高性能实时通信。提供智能重连、消息确认(ACK)、连接池管理等关键特性，支持千万级并发连接"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/kamalyes/go-wsc"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 276
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-06T03:11:59Z"
lastCommitAt: "2026-10-26T08:58:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 54
undervaluedScore: 32
maintainers: ["kamalyes", "github-actions[bot]", "JundyStar"]
openGraphImageUrl: "https://opengraph.githubassets.com/da94eb2648f09fe9b4f9139ff7ca482f0614b2cbb0a3b2025125d5d72418a1b1/kamalyes/go-wsc"
---

# Go WebSocket Client (go-wsc) 🚀

**go-wsc** is an enterprise-grade Go WebSocket/SSE real-time communication framework designed for millions of concurrent connections. Core capabilities include: the unified `Hub.Deliver` delivery entry point (P2P / group / broadcast decision tree), appID+namespace multi-tenant isolation, a resident in-memory cache of group topology (steady-state group message fan-out with 0 Redis RTT), gRPC direct cluster connections with PubSub fallback and four-layer cross-node self-healing, peak shaving and valley filling with tiered message delivery (guaranteed / normal / high-frequency), slow consumer governance, and writev frame-merging batch writes.

## 🏗️ System Architecture

```mermaid
---
config:
  layout: elk
  flowchart:
    useMaxWidth: false
    nodeSpacing: 45
    rankSpacing: 55
    wrappingWidth: 220
---
flowchart TB
    %% ==================== Client Layer ====================
    subgraph "Client Layer"
        WSC["go-wsc SDK<br/>WebSocket Client"]
        TSC["TypeScript Client"]
        React["React Hook"]
        Vue["Vue Composition API"]
        Angular["Angular Service"]
        SSEClient["SSE Client<br/>Fallback Channel"]
    end…
