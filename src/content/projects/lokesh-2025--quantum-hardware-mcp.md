---
repo: "Lokesh-2025/quantum-hardware-mcp"
name: "quantum-hardware-mcp"
description: "MCP server exposing live IBM Quantum hardware data to AI assistants"
readmeQualityOk: true
url: "https://github.com/Lokesh-2025/quantum-hardware-mcp"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [75, 25]
topics: ["ai", "claude", "github-actions", "ibm-quantum", "mcp", "model-context-protocol", "python", "quantum"]
stars: 5
forks: 2
openIssues: 1
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-10T22:13:59Z"
lastCommitAt: "2026-07-04T22:51:45Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 61
maintainers: ["github-actions[bot]", "Lokesh-2025", "jwoehr"]
openGraphImageUrl: "https://opengraph.githubassets.com/6453592cf55c444f0e0fc63da52f9114c1e7efe609f267947fe692df2947d197/Lokesh-2025/quantum-hardware-mcp"
---

# Quantum Hardware MCP Server

A production MCP server that gives AI assistants programmatic access to live quantum hardware across IBM Quantum, IonQ, and AWS Braket. Natural language in. Real quantum results out. No dashboards. No manual API calls.

Built in collaboration with [Jack Woehr](https://github.com/jwoehr) — IBM Quantum veteran, Qiskit contributor.

Listed on [Glama](https://glama.ai), [mcp.so](https://mcp.so), and [PulseMCP](https://pulsemcp.com).

---

## Why this exists

Quantum researchers lose hours to operational overhead:

- Manually checking which device has the lowest error rate today
- Submitting the same circuit to IBM, then separately to IonQ, then comparing by hand
- Losing reproducibility context between runs — "what was the CX error when I ran Figure 3?"
- No pre-flight — wasting queue time on circuits that fail at transpile
- No cross-provider queue visibility — IBM backlogged for 3 days, IonQ open, no way to know without checking each dashboard manually

This server eliminates that overhead. Your AI assistant handles device selection, circuit validation, job submission, result retrieval, and cross-provider comparison through a single interface.

---

##…
