---
repo: "lambda-harness/LAP"
name: "LAP"
description: "Orchestrate Any Agent. Connect Everything."
readmeQualityOk: true
url: "https://github.com/lambda-harness/LAP"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["agent", "agent-framework", "agent-orchestration", "agentic", "agentic-ai", "agents", "harness", "orchestra"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-27T06:39:08Z"
lastCommitAt: "2026-09-21T09:10:47Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 46
maintainers: ["dongrv", "lambda-harness"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e6de1f2bc73c27c04b40c4cc0ac023d07f2bfb82ff5512ed805250db104f823/lambda-harness/LAP"
---

# LAP: Lattice Agent Protocol

> **Orchestrate Any Agent. Connect Everything.**

Most agent stacks can invoke a tool, but cannot safely make independently
built Agents installable, identifiable, governed, observable, and composable.
LAP gives a Host Runtime one portable lifecycle contract for admitted local
executables, native runtime Agents, and remote Agents, so they can work
together without giving up tenant boundaries or operational control.

LAP is deliberately narrow. It does **not** replace existing standards:

- [MCP](https://modelcontextprotocol.io/) connects models and agents to tools,
  resources, and prompts.
- [A2A](https://a2a-protocol.org/latest/) connects independent remote agents.
- LAP defines the lifecycle and runtime contract for installable, governed
  Agents, including local binaries and A2A-backed Agents.

## One Contract, Many Agent Implementations

</p>

LAP governs the Agent boundary. MCP remains the tool and resource boundary;
A2A remains the remote-agent interoperability boundary. The Host Runtime is
the control point that admits releases, grants capabilities, supervises runs,
and records results.

## Quick Start

LAP is a specification and conformance…
