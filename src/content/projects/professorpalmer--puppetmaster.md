---
repo: "professorpalmer/Puppetmaster"
name: "Puppetmaster"
description: "Provider-neutral control plane for durable-state agent swarms: subprocess workers, leases, artifacts, memory, and deterministic stitching."
readmeQualityOk: true
url: "https://github.com/professorpalmer/Puppetmaster"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["agent-swarms", "agents", "ai-agents", "claude-code", "codex", "cursor", "distributed-systems", "llm", "orchestration", "sqlite"]
stars: 412
forks: 36
openIssues: 0
closedIssues: 9
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2026-05-06T18:35:01Z"
lastCommitAt: "2026-09-10T08:21:23Z"
lastReleaseAt: "2026-05-29T19:07:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 25
maintainers: ["professorpalmer", "kbentonferguson"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1231210975/f88fc3d7-ea68-4d5c-a400-4f9933426ba9"
---

# Puppetmaster

Puppetmaster runs multi-step engineering work through the agent tools you already use: Cursor, Grok Bot, Claude Code, Codex, Hermes, Antigravity (Gemini 3.7 / 3.6 / 3.5 / 3.1 Pro), or a provider API. It starts independent workers, routes tasks to an available model, and stores their typed results in SQLite so jobs can be inspected and resumed. It is aimed at developers who want durable state and reviewable output for repository investigations, audits, refactors, and implementations.

**Grok Bot:** only remote MCP, not the stdio server Cursor Agent uses. Puppetmaster is the durable worker runtime behind that chat — same jobs, artifacts, and `effort-index`, over streamable HTTP. See [Grok Bot](#grok-bot).

## Measured results

- **SWE-bench Lite:** 29% lower actual spend with cost routing and durable retries; 47–48% token-matched savings. This is a single-seed study and does not establish quality parity. [Study](https://github.com/professorpalmer/swebench-pm).
- **NL2Repo-Bench:** 91.1% mean pass rate, about 2.28× the published ~40% baseline. [Benchmark and methodology](https://professorpalmer.github.io/durable-state-vs-context/).

## Contents

- [Install](#install)…
