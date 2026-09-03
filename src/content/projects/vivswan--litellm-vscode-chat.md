---
repo: "Vivswan/litellm-vscode-chat"
name: "litellm-vscode-chat"
description: "Use 100+ LLMs in VS Code with GitHub Copilot Chat powered by LiteLLM."
readmeQualityOk: true
url: "https://github.com/Vivswan/litellm-vscode-chat"
homepage: "https://marketplace.visualstudio.com/items?itemName=vivswan.litellm-vscode-chat"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai", "bun", "copilot-chat", "litellm", "llm", "typescript", "vscode-extension"]
stars: 62
forks: 23
openIssues: 0
closedIssues: 70
watchers: 1
contributors: 14
recentReleases: 10
createdAt: "2025-11-13T10:21:26Z"
lastCommitAt: "2026-09-03T08:09:05Z"
lastReleaseAt: "2026-08-25T00:27:08Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 55
maintainers: ["Vivswan", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b106907dc04e83c194d3a50f4b305338335abe5971d8850d4e15f652be00b893/Vivswan/litellm-vscode-chat"
---

# LiteLLM Provider for GitHub Copilot Chat

English | [简体中文](https://github.com/Vivswan/litellm-vscode-chat/blob/HEAD/README.zh-cn.md) | [繁體中文](https://github.com/Vivswan/litellm-vscode-chat/blob/HEAD/README.zh-tw.md)

Use 100+ LLMs in VS Code with GitHub Copilot Chat powered by [LiteLLM](https://docs.litellm.ai).

## Features

- Access 100+ LLMs (OpenAI, Anthropic, Google, AWS, Azure, and more) through a unified API
- Multi-server support: connect to multiple LiteLLM servers simultaneously and aggregate models
- Automatic provider selection with `cheapest` and `fastest` modes, on gateways that report tool-capable per-provider routes ([details](https://github.com/Vivswan/litellm-vscode-chat/blob/HEAD/docs/models.md))
- Multimodal input (vision, PDF/document attachments, text/JSON data) and generated image/audio output
- Streaming, function calling, and thinking/reasoning tokens
- Broad model options pass-through (`response_format`, `reasoning_effort`, `seed`, and more)
- Per-model capability overrides and declared models: correct what a gateway reports, or register models it cannot list at all, with gaps auto-filled from the OpenRouter catalog…
