---
repo: "ChronoAIProject/NyxID"
name: "NyxID"
description: "Connect AI agents to any API, anywhere. Securely. Open-source gateway that proxies requests, injects credentials automatically, punches through NAT to reach localhost services, and wraps REST APIs as MCP tools. Per-agent isolation. Never expose a raw key."
readmeQualityOk: true
url: "https://github.com/ChronoAIProject/NyxID"
homepage: "https://nyx.chrono-ai.fun"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [65, 29]
topics: ["mcp", "mcp-server", "ai-agents", "api-gateway", "claude-code", "credential-management", "oauth2", "oidc", "reverse-proxy", "cursor"]
stars: 36
forks: 10
openIssues: 15
closedIssues: 476
watchers: 0
contributors: 16
recentReleases: 0
createdAt: "2026-02-12T09:19:41Z"
lastCommitAt: "2026-09-16T08:48:10Z"
lastReleaseAt: "2026-05-12T08:14:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 48
maintainers: ["chronoai-kai", "ctkm-aelf", "ryanhumesg"]
openGraphImageUrl: "https://opengraph.githubassets.com/2974272b6e2e4abaa8fc1920c3ec475a59690c373273b40c79600a7e0de96945/ChronoAIProject/NyxID"
discussionCount: 3
---

</p>

**Connect AI agents to any API, anywhere. Securely.** Open-source Agent Connectivity Gateway.

NyxID lets your AI agents (Claude Code, Cursor, n8n) reach any API you have,
public or private, and handles all the credentials so your agent never sees
a raw key.

```mermaid
flowchart LR
    subgraph Agents["AI Agents"]
        CC[Claude Code]
        CU[Cursor]
        N8[n8n]
    end

    subgraph NyxID["NyxID Gateway"]
        AUTH[OIDC and API Key Auth]
        PROXY[Credential Injection Proxy]
        MCP[MCP Tool Wrapping]
    end

    subgraph Connectivity["Private Reach"]
        NODE[Credential Node]
    end

    subgraph Targets["Connected Services"]
        PUB[Public APIs]
        INT[Internal APIs]
        LOC[Localhost Services]
    end

    CC --> AUTH
    CU --> AUTH
    N8 --> AUTH

    AUTH --> PROXY
    PROXY --> MCP
    PROXY -->|Direct proxy| PUB
    PROXY -->|Private network| INT
    PROXY -->|NAT traversal| NODE
    NODE --> LOC

    classDef agents fill:#eef2ff,stroke:#4f46e5,color:#111827,stroke-width:1.5px;
    classDef gateway fill:#111827,stroke:#22d3ee,color:#ffffff,stroke-width:2px;
    classDef tooling…
