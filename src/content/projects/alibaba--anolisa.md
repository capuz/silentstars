---
repo: "alibaba/anolisa"
name: "anolisa"
description: "ANOLISA(Agentic Nexus Operating Layer & Interface System Architecture)"
readmeQualityOk: true
url: "https://github.com/alibaba/anolisa"
homepage: "https://agentic-os.sh/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [45, 26]
topics: ["agentic", "agentic-os", "linux", "os", "skill"]
stars: 285
forks: 77
openIssues: 60
closedIssues: 480
watchers: 3
contributors: 47
recentReleases: 0
createdAt: "2026-03-30T06:33:06Z"
lastCommitAt: "2026-07-23T06:15:19Z"
lastReleaseAt: "2026-04-19T08:45:58Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 30
maintainers: ["kongche-jbw", "casparant", "1570005763"]
openGraphImageUrl: "https://opengraph.githubassets.com/2da45235da19425d052402e5a3ffa7251f3d478dc9b4f994f9bcf3c4bb18b1c1/alibaba/anolisa"
---

# ANOLISA — An Agentic OS Implementation

[中文版](https://github.com/alibaba/anolisa/blob/HEAD/README_zh.md)

ANOLISA, the Agentic evolution of Anolis OS, aims to deliver the
best-practice implementation of Agentic OS — a server-side operating
system built for AI Agent workloads.

> **A**gentic **N**exus **O**perating **L**ayer & **I**nterface **S**ystem **A**rchitecture

## Components

| Component | Description |
|-----------|-------------|
| [Copilot Shell](https://github.com/alibaba/anolisa/blob/HEAD/src/copilot-shell/) | AI-powered terminal assistant for code understanding, task automation, and system management. Built on [Qwen Code](https://github.com/QwenLM/qwen-code). |
| [Agent Sec Core](https://github.com/alibaba/anolisa/blob/HEAD/src/agent-sec-core/) | OS-level security kernel — system hardening, sandboxing, asset integrity verification, and security decision-making. |
| [AgentSight](https://github.com/alibaba/anolisa/blob/HEAD/src/agentsight/) | eBPF-based observability for AI Agents — zero-intrusion monitoring of LLM API calls, token consumption, and process behavior. |
| [Token-less](https://github.com/alibaba/anolisa/blob/HEAD/src/tokenless/) | LLM token optimization…
