---
repo: "jmanhype/claude-code-plugin-marketplace"
name: "claude-code-plugin-marketplace"
description: "Multi-agent trading, swarm intelligence, and GitHub automation plugins for Claude Code. 19 production-grade plugins built from 68+ specialized agents."
url: "https://github.com/jmanhype/claude-code-plugin-marketplace"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 27
forks: 4
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-12T03:43:04Z"
lastCommitAt: "2026-06-28T03:07:37Z"
lastReleaseAt: "2025-10-12T03:43:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 38
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/772352634d292a48e9985bc52e92ab54330bdd53994c9d11db2f4e4e5b65ac49/jmanhype/claude-code-plugin-marketplace"
---

# claude-code-plugin-marketplace

Collection of 23 plugins for Claude Code. Each plugin is a directory under `plugins/` containing a `plugin.json` manifest, a `README.md`, and in some cases implementation code.

## Status

Mixed. Some plugins (quant-trading-system, code-safety-monitor, ace-context-engineering) contain implementation code. Most plugins are manifest + README definitions that describe agent prompts and workflows. No centralized test suite.

## Plugin Catalog (23)

| Plugin | Category | What It Contains |
|---|---|---|
| `ace-context-engineering` | Productivity | Schemas (7 JSON), scripts (5 Python), skill.md. Implements bullet/delta context evolution with TF-IDF retrieval. |
| `code-safety-monitor` | Safety | Python source in `src/`, `setup.py`, `requirements.txt`. DSPy-based backdoor detection. |
| `quant-trading-system` | Trading | Python modules in `qts/` at repo root (main, risk, executor, market_intelligence, tournament, research_loop, llm_client, bullets). |
| `tournament-runner` | Trading | Plugin manifest. Uses `qts.tournament` module from repo root. |
| `research-execution-pipeline` | Research | Plugin manifest. Uses `qts.research_loop` from repo root. |
|…
