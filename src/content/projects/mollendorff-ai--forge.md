---
repo: "mollendorff-ai/forge"
name: "forge"
description: "Financial models as plain text: readable by people, writable by AI, calculated the same way every time. A Rust engine with a command line, an MCP server and a browser app."
readmeQualityOk: true
url: "https://github.com/mollendorff-ai/forge"
homepage: "https://forge.mollendorff.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["monte-carlo", "excel", "mcp", "yaml", "ai", "ai-agents", "financial-modelling", "fpa", "spreadsheets", "wasm"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2025-12-30T02:41:04Z"
lastCommitAt: "2026-11-26T15:26:21Z"
lastReleaseAt: "2026-11-07T21:41:01Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 90
undervaluedScore: 72
maintainers: ["claude", "lctavares", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/da3fafb640586f219f76d2d2f3de6cd6f1c6e8183f1fa5103fe565e8778ad5e1/mollendorff-ai/forge"
---

# Forge

**Financial models as plain text: readable by people, writable by AI, calculated the same way every time.**

Forge reads a financial model written in YAML (inputs, formulas, tables, scenarios) and calculates it with 203 Excel-style functions, plus what a spreadsheet leaves to plug-ins: Monte Carlo, tornado charts, decision trees, real options, Bayesian networks, game theory. One engine, written in Rust, runs on the command line, as an MCP server for AI agents, and in your browser.

  &nbsp;

**Checked, not trusted.** 2,182 formula tests compare Forge with Gnumeric, the analytics are compared with R and the games with Gambit, the axelrod library and egttools, on every pull request that changes the engine: [how we know the numbers are right](#how-we-know-the-numbers-are-right). What does not work yet is [listed](#status-and-known-limitations), not hidden.
