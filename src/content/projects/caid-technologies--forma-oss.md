---
repo: "caid-technologies/Forma-OSS"
name: "Forma-OSS"
description: "AI for end-to-end hardware design workflows"
readmeQualityOk: true
url: "https://github.com/caid-technologies/Forma-OSS"
homepage: "http://caid-technologies.us/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [77, 21]
topics: ["agentic-ai", "iot", "llm", "robotics", "3d", "electrical", "hardware", "mechanical", "computer-aided-design", "maker"]
stars: 12
forks: 2
openIssues: 73
closedIssues: 141
watchers: 1
contributors: 5
recentReleases: 7
createdAt: "2026-05-23T22:15:33Z"
lastCommitAt: "2026-09-10T08:20:19Z"
lastReleaseAt: "2026-08-20T16:08:58Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 56
maintainers: ["isayahc"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1247866118/f369b230-8168-4b8a-b38a-b42438a19ed8"
discussionCount: 0
---

# Forma

Forma is AI for full-stack hardware design. It turns text and images into a real-world **hardware project**.

This is in **alpha** and **research-based** stage focused on **low-voltage maker electronics** (3.3V–5V) and safe, educational projects.

## What you can do
- Compile a hardware idea into structured **hardware plan**
- Run **rule-based electrical validation** (shorts, voltage mismatch, unpowered ICs, pin conflicts, overcurrent risk)
- Visualize Wiring in **interactive schematic**
- View a lightweight **3D mechanical layout**
- Generate an optional **concept image** with an image model
- Persist generated projects to **Supabase** through the Supabase client when configured, with an automatic **SQLite fallback** and `FORMA_DEV_MODE` for SQLite-only local work
- Trace generation runs and structured LLM calls with **Langfuse** when project keys are configured
- Let external agents integrate over **REST long-polling, WebSocket, optional TCP JSONL sockets, or MCP Streamable HTTP tools**
- Use the same project-local **Agent Skill** from OpenClaw, NemoClaw, OpenCode, Claude Code, and Codex

## How it works

Forma follows a sequential processing pipeline:

1. **Input**:…
