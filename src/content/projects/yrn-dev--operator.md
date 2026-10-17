---
repo: "yrn-dev/Operator"
name: "Operator"
description: "Terminal AI coding agent — Autonomous AI Agent for Linux. Supports Alem AI + Ollama. Works with code, research, automation, DevOps, data analysis, and content generation."
originalDescription: "Terminal AI coding agent — Autonomous AI Agent for Linux. Supports Alem AI + Ollama. Works with code, research, automation, DevOps, data analysis, and content generation."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/yrn-dev/Operator"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 10
forks: 13
openIssues: 11538
closedIssues: 27073
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-29T18:09:48Z"
lastCommitAt: "2026-09-29T05:15:26Z"
status: "quiet"
tags: ["solo_builder", "needs_contributors", "fork_magnet"]
healthScore: 57
undervaluedScore: 32
maintainers: ["yrn-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/862c4c106d97cd0b2371e6e0264e558f240904f0aaf56e5571956f783eddbe92/yrn-dev/Operator"
---

# operator

A personal agent for working with code in the terminal, its own analog of Claude Code, but running on Alem AI models (`llm.alem.ai`) plus anything that runs locally in Ollama. It reads and edits files, runs bash, remembers tasks and facts between sessions, and commits to git. The package is called `pzero-operator`, and the binary is `operator` (or, shorter: `opr`).

```bash
npm install -g pzero-operator
operator
```

Package: [pzero-operator](https://www.npmjs.com/package/pzero-operator) · repository: [yrn-dev/Operator](https://github.com/yrn-dev/Operator)

## Running

```bash
operator                          # interactive TUI
operator -p "write tests"         # one-off request, no TUI
operator --continue                # continue the last session
operator --resume                  # pick a session from the list
operator --list-models             # see everything that's available
```

## Models

By default it uses `qwen3-8`, with a 262K context window, and it accepts images. For vibe coding and code quality, it currently genuinely outperforms Opus 4.6 (max). This isn't marketing; it's been tested on my own tasks.

| Model | Context | Images |
|---|---|---|
| `qwen3-8`…
