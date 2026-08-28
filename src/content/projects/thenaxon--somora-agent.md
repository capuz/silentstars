---
repo: "thenaxon/somora_agent"
name: "somora_agent"
description: "Local-first gateway for personal AI agents with persistent memory across multiple LLM providers"
readmeQualityOk: true
url: "https://github.com/thenaxon/somora_agent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["agent-framework", "ai-agents", "chatgpt", "claude", "local-first", "mcp", "memory", "obsidian", "openai-compatible", "personal-ai"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-05-01T14:52:15Z"
lastCommitAt: "2026-08-28T14:33:42Z"
lastReleaseAt: "2026-05-16T19:48:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 43
maintainers: ["thenaxon", "luzudemca", "packetloss99"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1226556031/62ff3000-201d-4b58-9d96-062f35f03281"
---

</p>

# somora 🐨

> Local-first AI agents that never forget. Multiple personas with private
> memory, a shared long-term wiki they curate themselves while they sleep,
> and one conversation that flows across Claude, ChatGPT, and any local model.

## What is somora?

A small server you run on your machine that hosts one or more AI **agents**,
each with its own personality, memory, and configuration. You chat with them
via terminal, browser, or installable mobile PWA; they remember things across
sessions; they can use the same tool surface (memory, files, web, exec, tmux,
attachments) regardless of which LLM you point them at.

What makes it different:

- **Local-first.** All data — config, memory, sessions, the wiki, attachments
  — lives in `~/.somora/` on your machine. Nothing leaves your laptop unless
  you point an engine at a cloud provider.
- **Multi-agent.** Configure as many personas as you want — each with a
  distinct character, separate memory inbox, and own model preferences.
  All agents share one long-term wiki of consolidated knowledge.
- **Multi-engine.** One conversation can flip between Claude (via your
  Claude subscription), ChatGPT (via your ChatGPT…
