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
stars: 9
forks: 12
openIssues: 10550
closedIssues: 24859
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-29T18:09:48Z"
lastCommitAt: "2026-09-29T05:15:26Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "fork_magnet"]
healthScore: 59
undervaluedScore: 32
maintainers: ["yrn-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e1bcfdaa446476dc1fc57165da522f9331cd78ac88239b4be6e366ffc8d094f/yrn-dev/Operator"
---

# operator

A personal agent for working with code in the terminal — its own analog of Claude Code, but running on Alem AI models (`llm.alem.ai`) plus anything that runs locally in Ollama. It reads and edits files, runs bash, remembers tasks and facts between sessions, and commits to git. The package is called `pzero-operator`, and the binary is `operator` (or shorter: `opr`).

```bash
npm install -g pzero-operator
operator
```

Package: [pzero-operator](https://www.npmjs.com/package/pzero-operator) · repository: [yrn-dev/Operator](https://github.com/yrn-dev/Operator)

## Running

```bash
operator                          # interactive TUI
operator -p "write tests"        # one-off request, without TUI
operator --continue                # continue the last session
operator --resume                  # choose a session from the list
operator --list-models             # see what's available at all
```

## Models

The default is `qwen3-8`, with a 262K context, and it accepts images. For vibe coding and code quality, it currently genuinely outperforms Opus 4.6 (max) — this is not marketing, it was tested on our own tasks.

| Model | Context | Images |
|---|---|---|
| `qwen3-8` | 262K |…
