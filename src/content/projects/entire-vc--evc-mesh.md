---
repo: "entire-vc/evc-mesh"
name: "evc-mesh"
description: "Task management platform for human + AI agent coordination"
readmeQualityOk: true
url: "https://github.com/entire-vc/evc-mesh"
language: "Go"
languages: ["Go"]
languagePcts: [69]
stars: 5
forks: 3
openIssues: 3
closedIssues: 20
watchers: 1
contributors: 8
recentReleases: 1
createdAt: "2026-02-24T21:37:23Z"
lastCommitAt: "2026-08-18T03:37:55Z"
lastReleaseAt: "2026-06-08T16:28:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 65
maintainers: ["garfieldstoun", "venturecrew", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a178922eb6033f81edaac94d82a3e94089d15e332e29fad722befb94358954e5/entire-vc/evc-mesh"
---

# Entire VC Mesh

> **Alpha Release** — Mesh is under active development. APIs may change between versions. We welcome early adopters and feedback.

Task management platform for coordinating humans and AI agents in a unified workspace. Designed for teams that work alongside AI coding agents such as Claude Code, OpenClaw, Cline, and Aider.

Mesh provides a **dual interface**: a web UI with kanban boards for humans and an MCP/REST API for agents, connected by a real-time event bus so both sides share context.

## Why Mesh?

Traditional project management tools treat AI agents as an afterthought. Mesh is built from the ground up for human-agent collaboration:

- **Agents are first-class citizens** — they authenticate, receive tasks, report progress, and share context with other agents
- **Real-time coordination** — NATS JetStream event bus enables inter-agent context sharing without polling
- **One source of truth** — both humans (web UI) and agents (MCP/REST) operate on the same task board
- **Self-hosted** — your data stays on your infrastructure

## Features

### Work Management
- Kanban boards with drag-and-drop, customizable statuses per project
- List, Timeline (DAG), and…
