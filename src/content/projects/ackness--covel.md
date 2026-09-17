---
repo: "ackness/covel"
name: "covel"
description: "[Agentic AI-RPG] Agentic AI role-playing game framework — narration, NPCs, lore, and character creation are autonomous plugin agents. Build interactive fiction with DeepSeek / OpenAI / Anthropic / Qwen."
readmeQualityOk: true
url: "https://github.com/ackness/covel"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["agentic-ai", "ai-agent", "ai-dungeon-master", "ai-rpg", "ai-storytelling", "deepseek", "interactive-fiction", "multi-agent", "role-playing-game", "text-adventure"]
stars: 49
forks: 15
openIssues: 1
closedIssues: 13
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-03-24T12:01:50Z"
lastCommitAt: "2026-09-17T08:52:01Z"
lastReleaseAt: "2026-07-01T14:49:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 45
maintainers: ["ackness"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1190560481/0d978e93-6441-464d-a12d-718adad2c990"
---

# Covel

**A modular, agentic AI RPG. Compose mechanics as plugins and ship settings as portable world packs.**

**English** · [简体中文](https://github.com/ackness/covel/blob/HEAD/README.zh-CN.md)

Covel is an AI RPG framework and playable studio where NPC relationships, lore, quests, inventory, memory, stage direction, and media can evolve between turns. Its architecture has three clear layers: the **kernel provides primitives and orchestration**, **plugins provide behavior**, and **world packs provide settings, resources, and a default plugin composition**.

> **Release version: v0.0.36**, early access. APIs, world data, and plugin manifests may change between versions. Current binaries target macOS Apple Silicon and Windows x64 and are unsigned; read [`docs/CHANGELOG.md`](https://github.com/ackness/covel/blob/HEAD/docs/CHANGELOG.md) and back up custom content before upgrading.

## Highlights

- 🎭 **Stage mode** — a full-screen visual novel: scene backdrops, character sprites, typewriter dialog, and choice overlays. Backdrops for brand-new locations are generated on demand, mid-session.
- ⚙️ **Composable plugin runtimes** — combine LLM agents, deterministic functions, UI panels,…
