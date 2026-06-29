---
repo: "alibaba/anolisa"
name: "anolisa"
description: "ANOLISA - Agentic Nexus Operating Layer & Interface System Architecture"
url: "https://github.com/alibaba/anolisa"
homepage: "http://agentic-os.sh"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [36, 29]
topics: ["agentic", "agentic-os", "linux", "os", "skill"]
stars: 256
forks: 62
openIssues: 16
closedIssues: 350
watchers: 2
contributors: 34
recentReleases: 10
createdAt: "2026-03-30T06:33:06Z"
lastCommitAt: "2026-06-29T07:22:14Z"
lastReleaseAt: "2026-04-19T08:45:58Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 35
maintainers: ["shiloong", "yangdao479", "moli0118"]
openGraphImageUrl: "https://opengraph.githubassets.com/a21496444daca14cd52e3c1dd3cfdf951213f7843b8f7dc5d5e499fe9728e951/alibaba/anolisa"
---

# ANOLISA — An Agentic OS Implementation

[中文版](README_CN.md)

ANOLISA, the Agentic evolution of Anolis OS, aims to deliver the
best-practice implementation of Agentic OS — a server-side operating
system built for AI Agent workloads.

> **A**gentic **N**exus **O**perating **L**ayer & **I**nterface **S**ystem **A**rchitecture

## Components

| Component | Description |
|-----------|-------------|
| [Copilot Shell](src/copilot-shell/) | AI-powered terminal assistant for code understanding, task automation, and system management. Built on [Qwen Code](https://github.com/QwenLM/qwen-code). |
| [Agent Sec Core](src/agent-sec-core/) | OS-level security kernel — system hardening, sandboxing, asset integrity verification, and security decision-making. |
| [AgentSight](src/agentsight/) | eBPF-based observability for AI Agents — zero-intrusion monitoring of LLM API calls, token consumption, and process behavior. |
| [Token-less](src/tokenless/) | LLM token optimization toolkit — schema/response compression and command rewriting to reduce token consumption. |
| [Agent Memory](src/agent-memory/) | CMA-style persistent filesystem memory for AI agents, served over MCP — sandboxed file tools,…
