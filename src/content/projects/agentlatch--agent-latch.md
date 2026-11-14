---
repo: "AgentLatch/agent-latch"
name: "agent-latch"
description: "Local-first AI agent security scanner and MCP traffic monitor. Finds prompt injection, over-privileged tools, and secrets in agent code, manifests, and prompts; records MCP tool calls with secrets masked. CLI, pre-commit, GitHub Action, SARIF, OWASP Agentic Top 10."
readmeQualityOk: true
url: "https://github.com/AgentLatch/agent-latch"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["agentic-ai", "ai-agent-security", "ai-security", "crewai", "github-actions", "langchain", "langgraph", "llm-security", "owasp-agentic-top-10", "pre-commit-hook"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 10
recentReleases: 7
createdAt: "2026-10-01T16:14:20Z"
lastCommitAt: "2026-11-14T10:46:29Z"
lastReleaseAt: "2026-11-07T09:14:46Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 49
maintainers: ["sanaullahkhan81", "dependabot[bot]", "Adyanullah-Khan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1400336386/cb75e7ec-b76a-433d-9289-b2d90c4c9e4a"
discussionCount: 0
---

# AgentLatch — Local-First AI Agent Security Scanner and MCP Traffic Monitor

**Find selected security risks in AI-agent projects before you run them, and see what your agent does with its MCP tools while it runs.** AgentLatch is an open-source, local-first AI agent security toolkit with two parts:

- **Static scanner** (`agent-latch scan`): checks Python agent code, agent manifests (tools, permissions, authentication) and prompt templates, optionally audits pinned Python dependencies, and reports evidence in your terminal, JSON or SARIF. Run it from the command line, as a pre-commit hook or as a GitHub Action.
- **Runtime proxy for MCP, preview** (`agent-latch-runtime`): sits between an AI agent and a Model Context Protocol (MCP) server and records every tool list, tool call, result and prompt, with secrets masked. Monitor only: it never blocks or changes traffic.

> **Project status: early proof of concept.** AgentLatch is not a complete vulnerability scanner, runtime protection system, security score, or certification. A clean scan means only that the enabled checks did not report a finding. The runtime proxy records traffic and runs two preview gates: ALR03 on the connection…
