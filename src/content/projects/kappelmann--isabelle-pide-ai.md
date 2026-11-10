---
repo: "kappelmann/isabelle-pide-ai"
name: "isabelle-pide-ai"
description: "Isabelle server for AI agents (MCP or command-based) using PIDE."
readmeQualityOk: true
url: "https://github.com/kappelmann/isabelle-pide-ai"
homepage: "https://formalproof.ai"
language: "Scala"
languages: ["Scala"]
languagePcts: [98]
stars: 22
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-06-11T16:38:08Z"
lastCommitAt: "2026-11-10T11:38:07Z"
lastReleaseAt: "2026-09-12T14:11:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 43
maintainers: ["kappelmann"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fb0f7a564e7b37138001d516bdbd0b6fca402f8f1ff7f3c458db771e0f1ae8a/kappelmann/isabelle-pide-ai"
---

# Isabelle PIDE AI (formerly PIDE MCP)

**Agentic formal proof development with Isabelle: [formalproof.ai](https://formalproof.ai)**

This repository contains:
1. A server to **let AI agents interactively work with Isabelle** sessions, theories, and ML files via Isabelle/PIDE.
    Agents connect via the Model Context Protocol (MCP) or command-based interaction, over stdin/stdout or TCP. Several agents can share one server.
    The server is **headless** and **editor-agnostic**: you can let the agent work on its own or run it alongside Isabelle/jEdit or Isabelle/VSCode.
    The server is also **customizable** and **extensible**: you can freely add and remove background services, tools, and protocols.
1. A curated set of tools for typical Isabelle workflows (auto-formalization, state inspection, entity lookups, session management, etc.), supporting cancellation and progress reports.
1. A set of agent skills on how to effectively use the server and its tools and general guidance for formalization tasks and Isabelle.

**Find the [preprint here](https://hal.science/hal-05748384).**

**Hint:** If you have trouble installing, configuring, or running this project, 
ask your agent for help…
