---
repo: "Mercor-Intelligence/archipelago"
name: "archipelago"
description: "Harness for running and evaluating AI agents against RL environments"
readmeQualityOk: true
url: "https://github.com/Mercor-Intelligence/archipelago"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 270
forks: 66
openIssues: 20
closedIssues: 0
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2026-01-20T09:06:52Z"
lastCommitAt: "2026-09-13T08:28:58Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 6
maintainers: ["rl-studio-service-dev[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d103fcc3744cf34f4df5cb62d86d574e00aaa1fdae6a5e1fffc86de2d163c8a/Mercor-Intelligence/archipelago"
---

# Archipelago

Archipelago is a system for running and evaluating AI agents against MCP applications. It consists of three main components:

1. **Environment**: Headless environment that exposes an MCP gateway
2. **Agents**: Extensible agent runner with a registry of configurable agent implementations
3. **Grading**: Grades agent performance by comparing before/after snapshots (formerly "Verifier")

All components run in Docker containers.

The environment is meant to be run independently as a sandbox, and then an LLM agent connects to the exposed MCP server. The agents runner spawns and manages environment sandboxes automatically.

## Table of Contents

- [Quick Start: Run Your First Task](#quick-start-run-your-first-task)
- [Components](#components)
  - [Environment](#environment)
  - [Agents](#agents)
  - [Grading](#grading)
- [Local Development](#local-development)
  - [Running the Environment](#running-the-environment)
  - [Running Agents](#running-agents)
  - [Running the Grading](#running-the-grading)
- [Citation](#citation)

---

## Quick Start: Run Your First Task

**Estimated time: 30-60 minutes for first run**

This quick start walks you through running a single task…
