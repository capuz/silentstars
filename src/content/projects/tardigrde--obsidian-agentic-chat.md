---
repo: "tardigrde/obsidian-agentic-chat"
name: "obsidian-agentic-chat"
description: "Agent-led AI chat in the Obsidian sidebar - typed tool-calling agent, OpenRouter ZDR by default"
readmeQualityOk: true
url: "https://github.com/tardigrde/obsidian-agentic-chat"
homepage: "https://tardigrde.github.io/obsidian-agentic-chat/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["agent", "chat", "claude", "codex", "obsidian", "pi", "openrouter"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-12T08:11:55Z"
lastCommitAt: "2026-08-01T06:15:07Z"
lastReleaseAt: "2026-06-14T14:36:12Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 71
maintainers: ["tardigrde", "semantic-release-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/43f401285a2aa3a38583d8fcdb1855e5b2f304b673f68869250d1bf6d78baa6e/tardigrde/obsidian-agentic-chat"
---

# Agentic Chat for Obsidian

> **Experimental — under heavy development.** APIs, settings, and behavior change frequently. Pin a version if you need stability.

A **privacy-first, agent-led AI chat** in Obsidian's right sidebar. Instead of a plain chatbot, you get an agent that *acts on your vault*: it reads, searches, writes, edits, renames, traverses links, and reads/writes frontmatter through typed tools — and every tool call is rendered inline in the chat, so you always see exactly what the agent is doing.

It runs entirely inside Obsidian on **desktop and mobile**, built on the [pi](https://pi.dev) agent packages. Use it with hosted models through [OpenRouter](https://openrouter.ai) — locked to **zero-data-retention** providers by default — or with a fully local [Ollama](https://ollama.com) server where nothing ever leaves your machine.

## Documentation

The full user and maintainer docs are published with VitePress at
[tardigrde.github.io/obsidian-agentic-chat](https://tardigrde.github.io/obsidian-agentic-chat/).

Local docs commands:

```bash
npm run docs:dev
npm run docs:build
npm run docs:preview
```

## Privacy first

Your notes are yours. This plugin is built so that…
