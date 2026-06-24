---
repo: "zycaskevin/Vault-for-LLM"
name: "Vault-for-LLM"
description: "🧠 Local-first knowledge system for LLM agents — sqlite-vec + ONNX embeddings, no cloud/Docker/PyTorch dependency"
url: "https://github.com/zycaskevin/Vault-for-LLM"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["embeddings", "knowledge-base", "llm", "local-first", "mcp-server", "onnx", "rag", "sqlite", "sqlite-vec", "trust-scoring"]
stars: 40
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-04-16T13:39:32Z"
lastCommitAt: "2026-06-24T00:20:30Z"
lastReleaseAt: "2026-06-21T14:28:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 41
maintainers: ["zycaskevin"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0a7a7dfb59a6cfe24c59878fb044b563d43504d77dfe2d5d094c3d9a6cf51b2/zycaskevin/Vault-for-LLM"
---

# Vault-for-LLM

Local-first project memory for AI agents.

Vault-for-LLM turns project notes, decisions, bugs, SOPs, Obsidian notes, and
agent-written memory candidates into a portable SQLite vault that agents can
search, read in bounded ranges, cite, test, back up, and sync when needed.

It is not trying to replace your model, your wiki, or hosted memory systems.
It sits between them: a small governed memory layer that helps agents reuse
project knowledge without losing source, scope, or reviewability.

The default path is agent-driven: ask your coding agent to install Vault, choose
where the database should live, and run a small search/read/propose smoke test.
Manual commands are still here, but they are no longer the main story.

## Why It Exists

Most agent failures are practical, not mysterious:

- a new session forgets why a decision was made
- an agent reads the wrong outdated note
- useful fixes stay buried in chat history
- private observations get mixed with shared project knowledge
- a team cannot tell whether retrieval is actually working

Vault-for-LLM is built for that practical gap. It gives agents a place to ask:

> What has this project already learned, where did…
