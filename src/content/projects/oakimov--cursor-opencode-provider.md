---
repo: "oakimov/cursor-opencode-provider"
name: "cursor-opencode-provider"
description: "Use Cursor subscription models from OpenCode via Cursor's Connect-RPC agent protocol"
readmeQualityOk: true
url: "https://github.com/oakimov/cursor-opencode-provider"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 54
forks: 13
openIssues: 4
closedIssues: 60
watchers: 1
contributors: 16
recentReleases: 0
createdAt: "2026-07-13T03:44:50Z"
lastCommitAt: "2026-11-20T11:59:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 38
maintainers: ["oakimov", "cursoragent", "adonm"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a1a843b7d0845b5a0f538b662ebb54bdd3a805c7a4eb46484f0fb709fe6e59e/oakimov/cursor-opencode-provider"
discussionCount: 8
---

# cursor-opencode-provider

Use [Cursor](https://cursor.com) subscription models from [OpenCode](https://opencode.ai) and compatible coding agents by speaking Cursor's Connect-RPC agent protocol.

This project is a custom **AI SDK provider** (`LanguageModelV3`) plus an **OpenCode plugin** that handles authentication and model discovery. Instead of calling a generic chat-completions API, it encodes and decodes Cursor's protobuf agent protocol over HTTP/2 to Cursor's agent backend.

> **Runs unchanged across OpenCode, OpenCode 2.x, and five additional coding agents.** OpenCode loads this plugin natively, including through the dedicated OpenCode 2.x entrypoint. [OCP — OpenCode Plugin Compatibility](https://github.com/oakimov/opencode-plugin-compat) runs the same published plugin, without a provider fork, in **Kilo Code, MiMo Code, pi, oh-my-pi, and DeepSeek Harness**. See [Coding-agent compatibility](#coding-agent-compatibility).
>
> **Status:** Usable end-to-end for authentication, model discovery, streaming, and tools. See [Known limitations](#known-limitations).
