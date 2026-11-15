---
repo: "Vikrant-Aleph/dsh-opencode-bridge"
name: "dsh-opencode-bridge"
description: "Use OpenCode's free models in DeepSeek Harness by emulating the official client protocol."
originalDescription: "通过伪装官方客户端协议，在 DeepSeek Harness 中使用 OpenCode 免费模型。|  Use OpenCode's free models in DeepSeek Harness by emulating the official client protocol."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Vikrant-Aleph/dsh-opencode-bridge"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [66, 34]
topics: ["deepseek-harness", "deepseek-harness-plugin", "dsh-plugin", "free-models", "opencode"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-18T08:37:54Z"
lastCommitAt: "2026-11-15T11:20:44Z"
lastReleaseAt: "2026-11-13T17:31:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 57
maintainers: ["Vikrant-Aleph"]
openGraphImageUrl: "https://opengraph.githubassets.com/1511c7a497aca184f558993d6b9f33d7ba4798726ab5308b38ac6a7a0fce722e/Vikrant-Aleph/dsh-opencode-bridge"
---

# OpenCode Bridge

Chinese | [English](https://github.com/Vikrant-Aleph/dsh-opencode-bridge/blob/HEAD/README.us.md)

Use [OpenCode](https://opencode.ai)'s free models in [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH), with no OpenCode account or API key required. It also includes optional context trimming and egress rotation.

## Key Features

**Disguises itself as the official OpenCode client so DSH can use OpenCode's free models.**

It replicates the request headers, the request shape required by the gateway, and the TLS and HTTP fingerprints of the official OpenCode client. It is an `LlmAdapter` that plugs into DSH's existing loop: the agent loop, permissions, and tool execution remain under DSH's control, and DSH parses each tool call itself. For what the gateway does and does not check, see [below](#opencode-如何判定客户端).

It also supports:

- **Automatic model refresh**: reads the free model list at startup and refreshes it every 10 minutes by default. Models are added or removed automatically when the upstream catalog changes. If a refresh fails, the previous usable list is kept.
- **Optional context trimming**: clears thinking only from turns that…
