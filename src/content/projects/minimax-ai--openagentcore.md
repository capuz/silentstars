---
repo: "MiniMax-AI/OpenAgentCore"
name: "OpenAgentCore"
description: "Open-source, self-hosted implementation of the OpenAI Agents API with multiple native harnesses."
readmeQualityOk: true
url: "https://github.com/MiniMax-AI/OpenAgentCore"
homepage: "https://minimax-ai.github.io/OpenAgentCore/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [63, 20]
topics: ["agent-runtime", "ai-agents", "claude-code", "codex", "coding-agent", "mcp", "openai-agents-api", "sandbox", "self-hosted", "llm"]
stars: 85
forks: 5
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 6
recentReleases: 4
createdAt: "2026-09-21T03:18:15Z"
lastCommitAt: "2026-10-01T10:24:33Z"
lastReleaseAt: "2026-10-01T09:10:13Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 39
maintainers: ["SaladDay", "RyanLee-Dev", "MiniMax-AI-Dev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1379023782/d9f6d7eb-fdbd-43b8-9693-b59e5696ed27"
---

# OpenAgentCore

An open-source, self-hosted implementation of the OpenAI Agents API with multiple native harnesses.

[Install](#install) · [Call the API](https://github.com/MiniMax-AI/OpenAgentCore/blob/HEAD/docs/getting-started/quickstart.md) · [Documentation](#documentation) · [Contributing](https://github.com/MiniMax-AI/OpenAgentCore/blob/HEAD/CONTRIBUTING.md)

**English** · [简体中文](https://github.com/MiniMax-AI/OpenAgentCore/blob/HEAD/README.zh-CN.md)

</div>

## What it is

OpenAgentCore runs AI agents on your own infrastructure behind the OpenAI Agents API.

- **Same API as OpenAI.** Point the official OpenAI SDK, or plain HTTP, at your installation. No new client to learn.
- **Your choice of agent.** Each Session runs a native harness: Codex, Claude Code or MiniMax Code, with the model provider you configure.
- **Your choice of machine.** Agents work in a managed sandbox (Docker, microsandbox or E2B), or on your own Linux, macOS or Windows machine.
- **Every part is replaceable.** Sandboxes, harnesses and model providers plug in through defined protocols.

## How it fits together

Applications and operators use these Core APIs:

| API | Path | Used by |
| --- | --- | --- |…
