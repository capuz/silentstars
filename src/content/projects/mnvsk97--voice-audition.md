---
repo: "mnvsk97/voice-audition"
name: "voice-audition"
description: "VoiceAudition — the voice casting director for AI agents. Cross-provider TTS voice discovery and recommendation."
url: "https://github.com/mnvsk97/voice-audition"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["ai-agents", "developer-tools", "python", "speech", "text-to-speech", "tts", "voice", "voice-synthesis"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-02T17:59:53Z"
lastCommitAt: "2026-06-27T00:34:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0ccce609619efcfc61484f8a90407e5b1cd15ba59e0328a2c6bc842067c5df6/mnvsk97/voice-audition"
---

# voice-audition

The casting director for your AI voice agent. 697 voices across 9 TTS providers (645 enriched with LLM-generated descriptions and traits), semantic search via Moss, use-case auditions with AI scoring, cost comparison, web UI, and MCP server for Claude.

## Install

```bash
pip install voice-audition
pip install voice-audition[enrich]   # LLM-based voice enrichment (Gemini, OpenAI, local MLX)
pip install voice-audition[mcp]      # MCP server for Claude Desktop
pip install voice-audition[acoustic] # acoustic feature analysis (librosa, Parselmouth)
pip install voice-audition[clap]     # CLAP embeddings for audio similarity search
```

## Setup

```bash
voice-audition setup
```

This creates a `.env` in your working directory and prints the MCP config for Claude Desktop. All API keys are optional — you only need keys for the providers you want to sync. Moss credentials enable semantic search; without them, keyword search is used as fallback.

**If developing from source:**

```bash
git clone https://github.com/mnvsk97/voice-audition.git
cd voice-audition
pip install -e ".[mcp,enrich]"
cp .env.example .env   # edit to add your API keys
```

## Quick start

```bash
#…
