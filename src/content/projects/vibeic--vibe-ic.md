---
repo: "vibeic/vibe-ic"
name: "vibe-ic"
description: "AI-native IC design plugin with MCP-EDA — from natural-language intent to verified silicon."
readmeQualityOk: true
url: "https://github.com/vibeic/vibe-ic"
homepage: "https://vibeic.ai"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-agents", "asic", "claude", "eda", "ic-design", "mcp", "openlane", "rtl", "semiconductor", "verilog"]
stars: 28
forks: 9
openIssues: 0
closedIssues: 10
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2026-06-13T07:08:42Z"
lastCommitAt: "2026-10-21T08:48:04Z"
lastReleaseAt: "2026-10-16T19:18:56Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 54
maintainers: ["alphareyer", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8f146d79016bc671b9d2432de0f98f7caa238d895a32bfe9b8cabbd0a29e1f2/vibeic/vibe-ic"
---

# Vibe-IC

**AI-native IC design with Claude — from natural-language intent to verified silicon.**

> **Status: v1.30 — mature, benchmark-hardened.** The `vibe-ic` plugin is the
> product: one install bundles and auto-registers the MCP server, the IP
> catalog, and the benchmark harness. Install once, design in natural language.
> Every capability is gated by a deterministic checker and continuously
> hardened against open IC-design benchmarks (see **Benchmark results** below).

Maintainers assign releases with [`gatekeeper_assign_version.py`](https://github.com/vibeic/vibe-ic/blob/HEAD/vibe-ic-marketplace/plugins/vibe-ic/programs/gatekeeper_assign_version.py): the patch range is 0–99, so `x.y.99` rolls over to `x.(y+1).0`, never a three-digit patch.

Vibe-IC is a Claude Code plugin + Model Context Protocol (MCP) server
that bridges large language models to real open-source EDA tools so that
designers can drive an entire IC flow — from a one-paragraph intent
through L1-L27 design documents, RTL, FPGA verification, and tape-out
sign-off — in natural language, with every step gated by deterministic
checkers (no fabrication, no hallucinated PASS).

---

## What's in this repo

```
.…
