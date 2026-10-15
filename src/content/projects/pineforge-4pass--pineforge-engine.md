---
repo: "pineforge-4pass/pineforge-engine"
name: "pineforge-engine"
description: "Open-source C++17 engine for backtesting and forward execution, with a versioned C ABI; Pine Script v6 runs through code generation. Against TradingView's own trade lists, all 7,989 graded probes (309 open-corpus strategies, 741 closed-test scripts) grade excellent or strong: 7,983 excellent, 6 strong. Apache-2.0."
readmeQualityOk: true
url: "https://github.com/pineforge-4pass/pineforge-engine"
homepage: "https://pineforge.dev"
language: "C++"
languages: ["C++"]
languagePcts: [78]
topics: ["algorithmic-trading", "backtesting", "c-api", "cpp", "cpp17", "crypto", "deterministic", "ffi", "finance", "pine-script"]
stars: 189
forks: 44
openIssues: 0
closedIssues: 17
watchers: 20
contributors: 4
recentReleases: 0
createdAt: "2026-05-05T04:38:45Z"
lastCommitAt: "2026-10-15T08:31:54Z"
lastReleaseAt: "2026-05-31T19:06:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 32
maintainers: ["luisleo526", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f080224710102ea3d156b3f6b4ffc8dd7d96e5b945237241f2ccd3237f49518/pineforge-4pass/pineforge-engine"
discussionCount: 0
---

# PineForge

**An open-source C++17 engine for backtesting and forward execution, with PineScript support through code generation.**

**[🌐 pineforge.dev](https://pineforge.dev) · [☁️ Hosted MCP](https://mcp.pineforge.dev/mcp) · [🐳 Docker MCP](https://github.com/pineforge-4pass/pineforge-backtest-mcp) · [📦 Transpiler](https://github.com/pineforge-4pass/pineforge-codegen-oss) · [📖 C ABI docs](https://cdocs.pineforge.dev) · [🧪 Coverage map](https://github.com/pineforge-4pass/pineforge-engine/blob/HEAD/docs/coverage.md) · [🔬 Benchmarks](https://github.com/pineforge-4pass/pineforge-engine/blob/HEAD/benchmarks/)**

---

## Why PineForge

PineForge is a C++17 engine for backtesting and forward execution, with a C ABI for embedding. The engine has two layers:

1. **A generic kernel** — a Pine-agnostic backtest and forward-execution state machine: order matching and fills, sizing, margin and settlement, the bar magnifier, indicator classes, `request.security()`, time and session math. Some TradingView-shaped names survive in its archive, each ruled in [ADR 0001](https://github.com/pineforge-4pass/pineforge-engine/blob/HEAD/docs/adr/0001-kernel-adapter-boundary.md) and held there by…
