---
repo: "covagashi/eplan-rag-mcp"
name: "eplan-rag-mcp"
description: "EPLAN Electric P8 2026  + AI: MCP servers, docs RAG, and a Claude Code skill for EPLAN scripting/API development. EEC PRO RAG"
readmeQualityOk: true
url: "https://github.com/covagashi/eplan-rag-mcp"
homepage: "https://www.covaga.xyz/"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["eplan", "eplan-api", "mcp-server", "claude-code", "claude-skills", "eplan-electric-p8", "mcp", "eec", "eec-pro"]
stars: 79
forks: 19
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 3
recentReleases: 0
createdAt: "2024-08-19T16:26:32Z"
lastCommitAt: "2026-09-01T08:48:31Z"
lastReleaseAt: "2026-03-22T11:16:20Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 48
maintainers: ["covagashi", "jarrett-meyer", "google-labs-jules[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3eb5c97f61c42b694739afbfd1454acede0ec437a8f4f9441ef89579c4faede3/covagashi/eplan-rag-mcp"
discussionCount: 0
---

> **Status: actively developed, tools work.** The MCP server itself is
> reliable — every action runs and has been exercised live. What's still
> being sharpened is *context*: an LLM with 180+ low-level tools and no
> guidance will guess wrong action names or parameters. Point it at the
> [`eplan-development` skill](#claude-code-skill-for-eplan-development) and
> the [docs RAGs](#remote-documentation-rags-p8-eec-pro-and-2027) before
> asking it to do anything non-trivial, and give it a clear, planned task
> rather than an open-ended one. Bug reports and PRs that improve tool
> docstrings, the skill, or RAG coverage are very welcome.

# EPLAN AI Automation Toolkit

**English** | [中文](#eplan-ai-自动化工具包)

A collection of AI-assisted automation tools for **EPLAN Electric P8** and **EPLAN EEC Pro 2026**, built around the Model Context Protocol (MCP).

The repo contains three independent sub-projects: a local MCP server that drives EPLAN P8 directly, and two remote MCP servers hosted on Cloudflare Workers that expose the indexed documentation via semantic search.

> Working with an LLM here? Read [`llm.md`](https://github.com/covagashi/eplan-rag-mcp/blob/HEAD/llm.md) — it explains, in…
