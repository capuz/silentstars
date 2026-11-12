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
languagePcts: [96]
topics: ["code-audit", "llm", "mcp", "rust", "sast", "security", "static-analysis", "vulnerability-detection", "taint-analysis"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2025-12-17T03:41:34Z"
lastCommitAt: "2026-11-12T11:40:36Z"
lastReleaseAt: "2026-10-06T13:25:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 73
maintainers: ["BlkSword"]
openGraphImageUrl: "https://opengraph.githubassets.com/34e0640cb944f6a090ede538b98f40700f8a65b99c946026928d09add98139e1/BlkSword/CTX-Audit"
---

> **⚠️ Research-stage notice**: This project is currently in **experimental R&D**. Code and features may undergo **large-scale refactoring or updates**, and releases may not keep up with the latest changes. Please **use with caution in production environments**. Verify in a test or staging environment first, and pin the versions of your dependencies.

# CTX-Audit

**Deterministic code security fact engine · PR drift gate · forensic tool surface for agents (MCP)**

Deterministically answers four questions: **Does this PR introduce security drift?**, **Who has authentication on these endpoints?**, **Is there a reachable path from entry point to sink?**, **Can a payload actually survive to reach the sink?**

It does not pursue general vulnerability discovery. Candidate chains and the fact layer are left to the LLM or a human for the final verdict. Every conclusion carries `provenance` and `uncertainty`, so it can be reviewed and falsified.

[English](https://github.com/BlkSword/CTX-Audit/blob/HEAD/README_EN.md)

---

## Table of Contents

- [Positioning](#定位)
- [Core Capabilities](#核心能力)
- [Quick Start](#快速开始)
- [PR Security Drift Gate](#pr-安全漂移闸门)
- [MCP Tool Surface](#mcp-工具面)
-…
