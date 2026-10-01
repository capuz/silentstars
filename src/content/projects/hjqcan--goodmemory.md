---
repo: "hjqcan/GoodMemory"
name: "GoodMemory"
description: "Local-first, auditable memory layer for AI apps and coding agents — Codex, Claude Code, MCP, HTTP, TypeScript, and Python."
readmeQualityOk: true
url: "https://github.com/hjqcan/GoodMemory"
homepage: "https://www.npmjs.com/package/goodmemory"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agent-memory", "ai-agents", "claude-code", "codex", "coding-agents", "developer-tools", "llm-memory", "local-first", "mcp", "open-source"]
stars: 18
forks: 2
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-23T16:18:00Z"
lastCommitAt: "2026-10-01T10:22:57Z"
lastReleaseAt: "2026-06-25T01:57:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 46
maintainers: ["hjqcan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1189746863/54d0e87c-0a2b-4d28-9fee-35d857e7aad3"
discussionCount: 5
---

# GoodMemory

Language: English | [简体中文](https://github.com/hjqcan/GoodMemory/blob/HEAD/README.zh-CN.md)

GoodMemory is a memory layer for AI products and coding agents.

> **Release source:** this source targets the `0.8.1` stable release.
> Registry commands require `goodmemory@0.8.1` to be published. The release
> workflow verifies npm `latest` and the already published GitHub assets
> against the locally prepared manifest; it does not rebuild or publish.

It gives chat apps, copilots, and agent hosts a durable user/project memory loop:
write selected facts, retrieve the right context, inject it into the next turn,
audit what happened, and delete it when it is wrong.

GoodMemory is not an LLM, agent framework, vector database, or generic RAG
system. It is the product memory layer between your app or installed agent host
and the model runtime.

## What You Get

- Durable memory API: `remember`, `recall`, `buildContext`, `feedback`, `forget`,
  `exportMemory`, `importMemory`, and `deleteAllMemory`.
- Installed agent memory for Codex and Claude Code through `goodmemory setup`,
  managed hooks, installed Codex pre-action, `goodmemory status`, read-only
  MCP, and opt-in writeback.…
