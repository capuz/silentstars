---
repo: "Generated-Computers/Locals"
name: "Locals"
description: "Run many AI agents at once on your Mac, up to 3x faster."
readmeQualityOk: true
url: "https://github.com/Generated-Computers/Locals"
homepage: "https://generatedcomputers.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agents", "apple-silicon", "artificial-intelligence", "inference-acceleration", "inference-engine", "macos", "mlx-lm", "coding-agents"]
stars: 33
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-12T17:40:28Z"
lastCommitAt: "2026-10-21T17:31:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 31
maintainers: ["machinestein"]
openGraphImageUrl: "https://opengraph.githubassets.com/28f5c9087cf11e5922764f11735f06b9d9d8f67dfd45c865a440b918db54cd89/Generated-Computers/Locals"
---

A local server made for agents rather than plain chat: tool calls, long
  conversations and many agents working at the same time. For OpenCode,
  OpenHands, Cline, Aider, Claude Code and any OpenAI, Anthropic or Ollama app.

```bash
curl -LsSf https://raw.githubusercontent.com/Generated-Computers/Locals/main/install.sh | sh
```

Then, in a new Terminal window:

```bash
locals code ~/my-project
```

That is all. The first time, Locals downloads a model that suits your Mac
(about 3 GB), starts it in the background and opens the OpenCode assistant in
your project. Nothing leaves your computer.

## What it is

Locals runs AI models on your own Mac for agents, not for chatting with a raw
model. An agent works differently from a person in a chat. It calls tools, and
every call has to be right. It sends a long prompt that grows a little every
turn. And it rarely works alone: coding assistants run helpers in parallel, and
teams of agents split one task between them. Locals is built for this work, from
the way it computes a batch of requests on your Mac's graphics chip to the way
it writes a tool call, so a team of agents gets its answers up to three times
faster than with the standard way…
