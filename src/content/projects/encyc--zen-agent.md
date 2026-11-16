---
repo: "encyc/zen-agent"
name: "zen-agent"
description: "Python生态的Agent kernal"
readmeQualityOk: true
url: "https://github.com/encyc/zen-agent"
homepage: "https://pypi.org/project/zenagent-py/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [71, 23]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-29T07:10:12Z"
lastCommitAt: "2026-11-16T11:51:49Z"
lastReleaseAt: "2026-11-10T10:13:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 58
maintainers: ["encyc"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4044f59ed97d42f3c45b11c9e882c1acde0a827b88fc68e994bf4c3ff58d807/encyc/zen-agent"
---

# ZenAgent

English · [简体中文](https://github.com/encyc/zen-agent/blob/main/README.zh-CN.md)

A coding agent you can read, embed and change: one pure-Python kernel, one
runtime dependency (`httpx`), four ways to drive it. It reads and edits files,
runs commands, searches the web, delegates to read-only subagents and keeps a
project todo list — from a terminal, a headless one-shot, or your own program.
Repo <https://github.com/encyc/zen-agent> · PyPI `zenagent-py` (imports as `zenagent`)

## Install

```bash
uv tool install "zenagent-py[cli]"   # or: pip install "zenagent-py[cli]"
zen --version
```

Python **3.11+** (3.11–3.14 ship). A kernel-only install (`pip install zenagent-py`)
gives you the SDK without the terminal UI.

API keys are read from the environment, named per provider in
[`zenagent/catalog.yaml`](https://github.com/encyc/zen-agent/blob/main/zenagent/catalog.yaml):

| provider | env var |
|---|---|
| `openai` | `OPENAI_API_KEY` |
| `zai` | `ZAI_API_KEY` |
| `zai-coding-cn` | `ZAI_CODING_CN_API_KEY` |
| `deepseek` | `DEEPSEEK_API_KEY` |
| `kimi` | `KIMI_API_KEY` |
| `moonshotai`, `moonshotai-cn` | `MOONSHOT_API_KEY` |
| `minimax` | `MINIMAX_API_KEY` |
| `minimax-cn` |…
