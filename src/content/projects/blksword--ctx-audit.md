---
repo: "BlkSword/CTX-Audit"
name: "CTX-Audit"
description: "Rust code security audit engine: cross-file taint tracking and CPG data-flow analysis produce verifiable evidence chains; MCP lets LLMs make evidence-based vulnerability verdicts."
originalDescription: "Rust 代码安全审计引擎：跨文件污点追踪 + CPG 数据流分析产出可验证证据链，通过 MCP 让 LLM 基于证据完成漏洞判定。Rust code security audit engine: cross-file taint tracking and CPG data-flow analysis produce verifiable evidence chains; MCP lets LLMs make evidence-based vulnerability verdicts."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/BlkSword/CTX-Audit"
homepage: "https://github.com/BlkSword/CTX-Audit"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["code-audit", "llm", "mcp", "rust", "sast", "security", "static-analysis", "vulnerability-detection", "taint-analysis"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2025-12-17T03:41:34Z"
lastCommitAt: "2026-09-19T02:39:02Z"
lastReleaseAt: "2026-09-01T12:01:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 70
maintainers: ["BlkSword"]
openGraphImageUrl: "https://opengraph.githubassets.com/972c3e4c3fff3d0ab58060990bfb28d6d943ead251702fe8ed219a11efcda866/BlkSword/CTX-Audit"
---

# CTX-Audit

**Rust Code Security Audit Engine · LLM Collaboration · Evidence-Driven**

**Cross-File Data Flow Tracking · CPG Taint Analysis · MCP Toolchain · Verifiable Vulnerability Determination**

Not stacking rules—first build a call graph and track data flow from entry points to dangerous functions, outputting a structured evidence chain; then expose analysis capabilities to LLMs via MCP protocol, letting them make verifiable vulnerability determinations based on call graphs, taint paths, and middleware context.

[English](https://github.com/BlkSword/CTX-Audit/blob/HEAD/README_EN.md)

---

## Why Choose CTX-Audit?

Main pain points of traditional SAST:

- **Rule hits ≠ vulnerabilities**: Massive rule scan results cannot answer "is this data truly externally controllable?"
- **Cross-file link breaks**: Dangerous function in file A, entry parameters in file B, single-file scanning only sees the local picture.
- **LLMs easily "fill in the blanks"**: Directly passing scan results to LLMs for determination, they lack verifiable call graphs, data flows, and middleware context, easily mistaking FP as TP.

CTX-Audit's solution:

1. **Build the graph first, scan later**: Parse AST,…
