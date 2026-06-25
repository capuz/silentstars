---
repo: "labring/fastgpt-plugin"
name: "fastgpt-plugin"
description: "FastGPT plugin system. Provide model presets, system tools and other extended functions for FastGPT."
url: "https://github.com/labring/fastgpt-plugin"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["agent", "rag", "workflow"]
stars: 40
forks: 89
openIssues: 7
closedIssues: 17
watchers: 2
contributors: 27
recentReleases: 0
createdAt: "2025-06-12T04:11:55Z"
lastCommitAt: "2026-06-25T06:41:05Z"
lastReleaseAt: "2025-08-01T14:39:12Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 92
undervaluedScore: 62
maintainers: ["FinleyGe", "c121914yu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5490ec9df39962b845c9bd308a8fc532b86c5af01c69d5c78d46217905e22e99/labring/fastgpt-plugin"
discussionCount: 0
---

# FastGPT-plugin

</p>

[FastGPT](https://github.com/labring/FastGPT) is a knowledge-based platform built on the LLMs, offers a comprehensive suite of out-of-the-box capabilities such as data processing, RAG retrieval, and visual AI workflow orchestration, letting you easily develop and deploy complex question-answering systems without the need for extensive setup or configuration.

The system tools previously utilized in FastGPT have been migrated to this repository, and future development of new tools will also be conducted within this repository.

Deeply **modularize** FastGPT to achieve maximum **extensibility**.
</div>

## Expansion Modules

- [x] System Tools
- [x] App templates
- [x] Model presets
- [ ] RAG Algorithm
- [ ] Agent Strategy
- [ ] Third-party Integration

## System Tool Features

- [x] Independent tool execution
- [x] Hot-swappable plugins
- [x] Plugin version management
- [x] SSE streaming response support
- [x] Local plugin debugging
- [x] Reverse invocation of FastGPT host capabilities
- [x] URL install SSRF protection
- [ ] More plugin types beyond tools

## Documentation & Development Guides

- [Development Specifications](./dev.md)
- [v1.0.0 Upgrade…
