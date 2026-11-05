---
repo: "boldaxolotl/booley"
name: "booley"
description: "The open-source Agentic Development Environment (ADE) for FPGA/ASIC work"
readmeQualityOk: true
url: "https://github.com/boldaxolotl/booley"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["agentic-ai", "ai-agents", "asic", "claude-code", "codex", "docker", "eda", "electronic-design-automation", "fpga", "fusesoc"]
stars: 25
forks: 3
openIssues: 172
closedIssues: 741
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-08-18T11:46:30Z"
lastCommitAt: "2026-11-05T14:05:15Z"
lastReleaseAt: "2026-09-01T08:13:19Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 47
maintainers: ["boldaxolotl", "mergify[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/73901e4274886273fcf0baf88d85417032c2fee5a2a3f74692cea8a4aeadd6a8/boldaxolotl/booley"
---

# Booley

**The open-source Agentic Development Environment (ADE) for FPGA and ASIC development**

Booley is an agentic development environment (ADE) for hardware: you direct Claude Code or Codex agents while they do the RTL work. Booley runs each Developer Agent in a sandbox, hands it real EDA tools, and checks its work against your acceptance criteria: passing tests, area and timing budgets, cycle counts, coverage, and more.

**Website:** [booley.dev](https://booley.dev/) for the full feature tour, videos, and blog.

## What it does

- **Typed EDA Flows:** `sim`, `lint`, `synth`, and `fpga` replace per-repo glue Tcl scripts. Each Flow runs an EDA job end to end and returns a structured result: pass/fail plus metrics such as area, timing, or cycle counts, not just raw logs. Flows are built on FuseSoC, and the interface stays the same across tools and projects: `sim` stays `sim` whether it runs Verilator today or Xcelium tomorrow.
- **Reproducible team environment:** Configure the project once, and its Docker environment supplies the same pinned EDA stack, agent tooling, and system dependencies to everyone on the project ([why…
