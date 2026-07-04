---
repo: "anthony-chaudhary/fak"
name: "fak"
description: "fak — the Fused Agent Kernel: one Go binary for AI agent loops. Wrap Claude Code/Codex/Cursor, keep long sessions cache-efficient, route work per call, run local GGUF models, and adjudicate tool calls."
readmeQualityOk: true
url: "https://github.com/anthony-chaudhary/fak"
homepage: "https://anthony-chaudhary.github.io/fak/showcase.html"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [74, 23]
topics: ["agentic-ai", "ai-agents", "golang", "kv-cache", "llm-agents", "llm-inference", "llm-serving", "mcp", "self-hosted", "agent"]
stars: 8
forks: 5
openIssues: 757
closedIssues: 1963
watchers: 0
contributors: 4
recentReleases: 6
createdAt: "2026-06-21T19:52:45Z"
lastCommitAt: "2026-07-04T23:15:06Z"
lastReleaseAt: "2026-06-30T12:55:17Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 94
undervaluedScore: 69
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276297427/9494cd94-2aa0-4aa3-9306-198f0534046e"
---

# fak: the Fused Agent Kernel

fak in one line: fak treats every agent tool call like a syscall — the model proposes, the
kernel disposes. One static Go binary sits in front of an agent's tool calls. It checks
each call, routes work, and reuses the stable setup in long sessions. The same agent loop
comes out more controlled, cheaper, and faster.

Use one binary with the agent you already run. It works with Claude Code, Codex, Cursor,
and OpenAI / Anthropic / MCP clients. `fak guard -- claude` wraps your normal agent in one
command. Your model, IDE, and keys stay exactly as they are. `fak` points one base URL at
itself for you.

<sub>▶ 41 s, silent, looping. Click it for the [full-resolution MP4 (1440p)](https://github.com/anthony-chaudhary/fak/blob/HEAD/visuals/hero-video.mp4). Every chart in it is a still, with its source data and regeneration command, in the [benchmark gallery](https://github.com/anthony-chaudhary/fak/blob/HEAD/BENCHMARK-GALLERY.md).</sub>

## Pick your path

[Run your agent through it now](#get-started-with-fak-guard) ·
[follow the guided tutorial, 15 min, no key, no GPU](https://github.com/anthony-chaudhary/fak/blob/HEAD/docs/fak/tutorial.md) ·
[run the Colab…
