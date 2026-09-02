---
repo: "oscampo/obsidian-neural-composer"
name: "obsidian-neural-composer"
description: "AI-Powered Graph Memory for Obsidian"
readmeQualityOk: true
url: "https://github.com/oscampo/obsidian-neural-composer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 168
forks: 22
openIssues: 0
closedIssues: 20
watchers: 1
contributors: 19
recentReleases: 0
createdAt: "2026-01-01T20:23:15Z"
lastCommitAt: "2026-09-02T08:04:45Z"
lastReleaseAt: "2026-04-12T01:18:11Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 34
maintainers: ["claude", "oscampo", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9a14e60c6bfcab3bb554c68a4bbfb94969ee4411f560f957c7852a9e18103bc/oscampo/obsidian-neural-composer"
discussionCount: 3
---

# Neural Composer

**Graph-based AI chat for your Obsidian vault.**

---

## TL;DR

Chat with your vault using a **Knowledge Graph**, not just keyword search. Neural Composer runs a local [LightRAG](https://github.com/HKUDS/LightRAG) server, builds a graph of your notes, and lets you ask questions that trace connections across your entire vault.

- 🔍 **Finds relationships**, not just matching words
- ⚡ **Manages the LightRAG server** for you — no terminal juggling
- 🔒 **100% local** when used with Ollama — your data never leaves your machine

**Requirements:** Python 3.10+ · `pip install "lightrag-hku[api]"` · Obsidian 1.7.2+

---

## Features

| | |
|---|---|
| **⚡ Automated Server** | Starts and stops the LightRAG Python process automatically. No terminal needed. |
| **🧠 Graph + Vector Search** | Combines entity-relationship traversal with semantic vector search for deep, contextual answers. |
| **📂 Vault Sync** | Set a watched folder — notes are re-indexed on save. Status dots in the file explorer show each note's graph state: 🟢 processed · 🟡 processing · 🔴 failed · 🔵 removed. |
| **📊 Knowledge Graph View** | Explore your graph visually in 2D or 3D. Overview mode…
