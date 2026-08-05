---
repo: "azerozero/grob"
name: "grob"
description: "LLM proxy with built-in DLP and regulatory compliance. Redacts secrets before they reach the API. EU AI Act, GDPR, HDS/PCI DSS ready. Multi-provider failover, live TUI, virtual keys, fan-out. 6 MB, zero deps. Rust."
readmeQualityOk: true
url: "https://github.com/azerozero/grob"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["anthropic", "openai", "rust", "dlp", "failover", "gemini", "llm-proxy", "multi-provider", "ollama", "ai-gateway"]
stars: 20
forks: 0
openIssues: 5
closedIssues: 12
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-22T23:31:12Z"
lastCommitAt: "2026-08-05T06:08:07Z"
lastReleaseAt: "2026-03-02T23:19:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 40
maintainers: ["Destynova2"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc57f66cafdcfa7c4727ee4885ebb15692ee673ada04d37810a4c007310466dc/azerozero/grob"
---

<h1 align="center">Grob</h1>
    <strong>Don't give your coding agents a blank check &mdash; on spend or on secrets.</strong>
  </p>
    A Rust LLM control plane with inline DLP, routing, budgets, and signed audit logs.
  </p>
  </p>
</p>

---

**Grob** is a high-performance LLM control plane that sits between your AI tools and your providers. It redacts secrets before they reach the API, fails over transparently when a provider goes down, enforces budgets, records signed audit logs, and fits in a 6 MB container with zero dependencies.

> **~90 µs overhead** with DLP, routing, caching, and rate limiting all on the hot path -- sub-millisecond where LiteLLM sits in the milliseconds. Bare proxies post lower numbers by running none of these. [Full methodology and competitor table](https://github.com/azerozero/grob/blob/HEAD/docs/reference/benchmarks.md).

```mermaid
flowchart LR
    CC[Claude Code] --> G
    AI[Aider] --> G
    CX[Codex CLI] --> G
    FO[Forge] --> G
    CU[Cursor] --> G
    G["Grob &lt;DLP&gt;<br/>6 MB · zero deps"] --> A["Anthropic (primary)"]
    G --> OR["OpenRouter (fallback)"]
    G --> GE[Gemini]
    G --> DS[DeepSeek]
    G --> OL["Ollama (local)"]
```

## Why…
