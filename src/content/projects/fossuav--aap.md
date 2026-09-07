---
repo: "fossuav/aap"
name: "aap"
description: "ArduPilot AI Playbooks"
readmeQualityOk: true
url: "https://github.com/fossuav/aap"
language: "Python"
languages: ["Python", "Lua"]
languagePcts: [75, 20]
topics: ["cpp", "llm", "lua"]
stars: 19
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-10-27T11:38:32Z"
lastCommitAt: "2026-09-07T08:31:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 48
maintainers: ["andyp1per"]
openGraphImageUrl: "https://opengraph.githubassets.com/9efcd020bd13fcbb9c67a766b5ad3b393f7a6e7e5261525a64e2b5cdab598456/fossuav/aap"
---

# ArduPilot AI Playbooks

## **Overview**

This project provides guidance documents for using Large Language Models (LLMs) to generate and modify code for the ArduPilot autopilot platform.

Four usage modes are supported:

1. **Claude Code** - Anthropic's CLI tool for interactive development with Claude
2. **Codex** - OpenAI's coding agent for interactive repository work
3. **Gemini CLI** - Google's CLI tool for interactive development with Gemini
4. **Chat-based LLMs** - Traditional prompt-based code generation with any LLM

The playbooks contain rules and constraints that ensure generated code is safe, testable, and consistent with ArduPilot development standards.

---

## **Claude Code Integration**

[Claude Code](https://claude.ai/code) is Anthropic's official CLI tool that provides an interactive development experience. It can read your codebase, make edits, run commands, and understand project context.

### Quick Start

1. Install the playbooks into your ArduPilot repository:
   ```bash
   cd /path/to/ardupilot
   curl -fsSL https://raw.githubusercontent.com/fossuav/aap/main/install-claude.sh | bash
   ```

2. Start Claude Code:
   ```bash
   claude
   ```

Claude Code will…
