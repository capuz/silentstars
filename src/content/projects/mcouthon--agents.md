---
repo: "mcouthon/agents"
name: "agents"
description: "Collection of agentic coding instructions"
readmeQualityOk: true
url: "https://github.com/mcouthon/agents"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
stars: 78
forks: 12
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2025-12-26T06:41:41Z"
lastCommitAt: "2026-11-25T13:21:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 35
maintainers: ["mcouthon"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b544d27ca5253d0e035a937024733ba54b2f0a5f4c9cc334d0fd4824004e574/mcouthon/agents"
discussionCount: 1
---

# AGENTS

> **A**I-**G**uided **E**ngineering — **N**avigate → **T**hink → **S**hip

A minimal framework for AI-assisted coding with phase-based workflows, auto-activating skills, and enforced tool safety for **Claude Code**.

---

## What You Get

| Component        | Count | What It Does                                                              |
| ---------------- | ----- | ------------------------------------------------------------------------- |
| **Agents**       | 8     | Phase-based workflow with orchestration (4 core + Conductor + Courier + Coordinator + 1 internal) |
| **Skills**       | 23    | Auto-activate based on your prompts (debug, mentor, testing, etc.)        |
| **Instructions** | 5     | File-type coding standards that load automatically                        |

```bash
git clone https://github.com/mcouthon/agents.git
cd agents
./install.sh    # Works out of the box — generated files are committed to git
```

> **Modifying templates?** Run `make` first to regenerate output files, then `./install.sh`.

That's it. In Claude Code, use `claude --agent AgentName` or `use AgentName`. Or just talk naturally and let skills auto-activate.
