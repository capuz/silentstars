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
languagePcts: [94]
topics: ["code-audit", "llm", "mcp", "rust", "sast", "security", "static-analysis", "vulnerability-detection", "taint-analysis"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2025-12-17T03:41:34Z"
lastCommitAt: "2026-11-17T12:03:43Z"
lastReleaseAt: "2026-10-06T13:25:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 73
maintainers: ["BlkSword"]
openGraphImageUrl: "https://opengraph.githubassets.com/4364dd773013d2afde0a88e3e0395ed051ad769212ba8ffcb1055f3bf9978f8a/BlkSword/CTX-Audit"
---

> **⚠️ Research-stage notice**: This project is in an **experimental R&D stage**. Interfaces and the output schema may change significantly, and releases may not keep up with the latest changes. Use it with caution in production. It is recommended to verify first in a test or staging environment and to pin the versions of its dependencies.

# CTX-Audit

**Deterministic code security fact engine · PR drift gate · Forensic tool surface for agents (MCP) · Audit console**

Deterministically answers four questions: **Does this PR introduce security drift?**, **Who has authentication on these endpoints?**, **Is there a reachable path from entry to sink?**, **Can a payload survive to reach the sink?**

It does not aim for general vulnerability discovery. Candidate chains and the fact layer are left to the LLM or a human for the final verdict. Every conclusion carries `provenance` and `uncertainty`, so it can be reviewed and falsified.

[English](https://github.com/BlkSword/CTX-Audit/blob/HEAD/README_EN.md)

---

## Table of Contents

- [Positioning](#定位)
- [Core Capabilities](#核心能力)
- [Quick Start](#快速开始)
- [One-Click Audit Workflow](#一键审计工作流)
- [Autopilot (With Budget)](#自动驾驶带预算)
- [PoC…
