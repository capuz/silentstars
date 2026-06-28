---
repo: "holon-run/holon"
name: "holon"
description: "A local workbench for agents doing continuous work across sessions, commands, human input, and external events."
url: "https://github.com/holon-run/holon"
homepage: "https://holon.run"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["ai-agents", "agent-runtime", "local-first", "ai-infrastructure", "developer-tools"]
stars: 125
forks: 12
openIssues: 40
closedIssues: 858
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-12-18T11:46:49Z"
lastCommitAt: "2026-06-28T01:34:05Z"
lastReleaseAt: "2025-12-29T06:37:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 34
maintainers: ["jolestar", "cnYui"]
openGraphImageUrl: "https://opengraph.githubassets.com/3cebbc94c3c40e5496dd2ae79d57ff48862abfd2f4fcbb1684dc7b0175f99415/holon-run/holon"
---

# Holon

English | [中文](README.zh-CN.md)

Holon is a **local workbench for agents doing continuous work**.

Holon itself is not an agent. It provides a local working environment for multiple agents. Agents understand goals and drive execution; Holon treats "work" as the core unit, preserving state, organizing context, recording waits and wakes, so tasks that span sessions, commands, human confirmation, or external events can resume at the right time and eventually deliver results back to the operator.

## Table of contents

- [What does Holon provide?](#what-does-holon-provide)
- [Install](#install)
- [Provider setup](#provider-setup)
- [Quickstart](#quickstart)
- [Core concepts](#core-concepts)
- [Status and compatibility](#status-and-compatibility)
- [Project boundaries](#project-boundaries)
- [Documentation](#documentation)
- [Build from source](#build-from-source)

## What does Holon provide?

| Capability | What it means |
|---|---|
| **Continuous agent workspace** | Each agent has its own continuous working context in Holon, instead of restarting with every terminal, request, or client connection. |
| **Work-first task model** | Holon organizes tasks, waits, execution…
