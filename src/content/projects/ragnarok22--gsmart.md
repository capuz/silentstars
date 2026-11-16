---
repo: "ragnarok22/gsmart"
name: "gsmart"
description: "The smart way to write your commit messages using Conventional Commits."
readmeQualityOk: true
url: "https://github.com/ragnarok22/gsmart"
homepage: "https://ragnarok22.github.io/gsmart/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai", "anthropic-claude", "commit", "git", "gitcommit", "openai", "hacktoberfest"]
stars: 15
forks: 3
openIssues: 2
closedIssues: 18
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-07-10T23:09:06Z"
lastCommitAt: "2026-11-16T11:56:48Z"
lastReleaseAt: "2025-09-29T14:59:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 72
maintainers: ["ragnarok22", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/827045490/756cb1d5-9572-4cc2-be37-0459da007c1a"
---

# GSmart

**Your changes. A clear commit message.**

GSmart turns your Git diff into an AI-generated [Conventional Commit](https://www.conventionalcommits.org/). Review the suggestion, edit it, refine it with feedback, copy it, or commit—all from your terminal.

[Quick start](#quick-start) · [Everyday workflows](#everyday-workflows) · [Providers](#providers) · [Configuration](#configuration) · [Documentation](#documentation)

- **Keep the final say.** Edit multiline messages, request changes, and restore earlier candidates before committing.
- **Choose your AI.** Use six hosted providers, ChatGPT subscription login, or local models through Ollama and LM Studio.
- **Follow your project's conventions.** Share types, scopes, language, and writing instructions, with compatible commitlint rules imported automatically.
- **Fit your workflow.** Review interactively, generate script-friendly output, or ask for a plan to split mixed changes into coherent commits.

## Quick start

You'll need **Node.js 22.12.0+**, **Git 2.25+**, and a [supported provider](#providers) or [local model](#local-inference-and-custom-endpoints).

### 1. Install

```bash
npm install -g gsmart
```

Prefer another…
