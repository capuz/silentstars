---
repo: "microsoft/conductor"
name: "conductor"
description: "A CLI tool for defining and running multi-agent workflows with the GitHub Copilot SDK and Anthropic Agents SDK."
url: "https://github.com/microsoft/conductor"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 279
forks: 34
openIssues: 10
closedIssues: 71
watchers: 1
contributors: 10000
recentReleases: 4
createdAt: "2026-02-02T14:29:41Z"
lastCommitAt: "2026-06-24T23:37:54Z"
lastReleaseAt: "2026-04-20T17:24:05Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 30
maintainers: ["jrob5756", "PolyphonyRequiem", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/08a337e780e76eb851da9e5fc1680d49f13c80d8766fd2106f6626479674f043/microsoft/conductor"
---

# Conductor

A CLI tool for defining and running multi-agent workflows with the GitHub Copilot SDK and Anthropic Claude.

## Why Conductor?

Conductor makes multi-agent workflows — code review pipelines, research-then-synthesize flows, plan-then-implement loops — **repeatable, deterministic, and version-controlled**. You define your agents, their prompts, and the routing between them in a single YAML file:

- **Repeatable** — Same inputs follow the same path through the same agents.
- **Deterministic** — Routing uses Jinja2 templates and expression evaluation. First matching condition wins. No LLM in the orchestration loop, no tokens spent deciding what runs next.
- **Source-controlled** — Plain YAML files. Diff workflows in pull requests, version them with your code, run them the same way locally and in CI.

## Features

- **YAML-based workflows** - Define multi-agent workflows in readable YAML
- **Multiple providers** - GitHub Copilot, Anthropic Claude, Claude Agent SDK, or NousResearch Hermes (experimental) with seamless switching
- **Parallel execution** - Run agents concurrently (static groups or dynamic for-each)
- **Sub-workflow composition** - Reusable sub-workflows with…
