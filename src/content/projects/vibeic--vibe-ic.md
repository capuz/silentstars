---
repo: "vibeic/vibe-ic"
name: "vibe-ic"
description: "AI-native IC design plugin with MCP-EDA — from natural-language intent to verified silicon."
readmeQualityOk: true
url: "https://github.com/vibeic/vibe-ic"
homepage: "https://vibeic.ai"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai-agents", "asic", "claude", "eda", "ic-design", "mcp", "openlane", "rtl", "semiconductor", "verilog"]
stars: 21
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-13T07:08:42Z"
lastCommitAt: "2026-08-31T09:59:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/0951f66ed23f2d6a285fa55120792354fd9aa97723b240842b1b9c42c9cf1e34/vibeic/vibe-ic"
---

# Vibe-IC

**AI-native IC design with Claude — from natural-language intent to verified silicon.**

> **Status: v1.14 — mature, benchmark-hardened.** The `vibe-ic` plugin is the
> product: one install bundles and auto-registers the MCP server, the IP
> catalog, and the benchmark harness. Install once, design in natural language.
> Every capability is gated by a deterministic checker and continuously
> hardened against open IC-design benchmarks (see **Benchmark results** below).

Vibe-IC is a Claude Code plugin + Model Context Protocol (MCP) server
that bridges large language models to real open-source EDA tools so that
designers can drive an entire IC flow — from a one-paragraph intent
through L1-L27 design documents, RTL, FPGA verification, and tape-out
sign-off — in natural language, with every step gated by deterministic
checkers (no fabrication, no hallucinated PASS).

---

## What's in this repo

```
.
├── vibe-ic-marketplace/        Claude Code plugin marketplace (+ partner plugins)
│   └── plugins/vibe-ic/         ★ the vibe-ic plugin — one install = everything:
│       ├── skills/  programs/    skills + deterministic programs
│       ├── agents/  commands/  hooks/
│…
