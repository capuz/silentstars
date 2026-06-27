---
repo: "liampetti/fulloch"
name: "fulloch"
description: "Fulloch - The Fully Local Home Voice Assistant"
url: "https://github.com/liampetti/fulloch"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["hacs-integration", "home-assistant", "local-llm", "voice-assistant", "ai-agent", "obsidian-md"]
stars: 104
forks: 7
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-01-23T05:59:14Z"
lastCommitAt: "2026-06-27T06:23:58Z"
lastReleaseAt: "2026-06-15T08:22:12Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 64
undervaluedScore: 18
maintainers: ["liampetti"]
openGraphImageUrl: "https://opengraph.githubassets.com/098fae299966c86267a32d7f76dc45a57c867ac550d657be4b7611db3156300a/liampetti/fulloch"
discussionCount: 2
---

# Fulloch

</p>

_The **Ful**ly **Loc**al **H**ome Voice Assistant - private, conversational, 100% on-device._

A voice assistant with agentic memory, web research, and smart-home control running entirely on your own home computer or server. Speech recognition, the language model, and the spoken voice never needs to leave your machine.

Fulloch is the conversational brain on top of your existing setup: it drives **[Home Assistant](https://github.com/home-assistant)** for smart-home control and reads/writes plain **Markdown notes**, so it plugs straight into an **[Obsidian](https://github.com/obsidianmd/obsidian-releases)** vault or any Markdown workflow, it can also search the web and return information summaries using **[SearXNG](https://github.com/searxng/searxng)**.

**Hardware:** the **GPU Tier** all-in-one stack needs a GPU (tested on an NVIDIA RTX 5060 Ti, 16GB VRAM); the **CPU Tier** stacks run on a standard CPU-only PC (tested on an AMD Ryzen 9 7900, 32GB RAM), for simple regex commands fully locally, or with an OpenAI-compatible LLM on another server (e.g. your GPU box) for full conversation.

## Features

- **Conversational** - holds context across a turn; follow-ups…
