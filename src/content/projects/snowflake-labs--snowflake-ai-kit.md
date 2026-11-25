---
repo: "Snowflake-Labs/snowflake-ai-kit"
name: "snowflake-ai-kit"
description: "Snowflake AI Kit: Cortex Code plugin for automatic Snowflake routing, envelope-based permission policy, and one-command installers for Snowflake CLI + Cortex Code CLI."
readmeQualityOk: true
url: "https://github.com/Snowflake-Labs/snowflake-ai-kit"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["developer-tools", "snowflake", "snowflake-ai", "cortex-code", "snowflake-cli", "claude-code", "claude-code-plugin", "cortex-code-plugin", "envelope-policy"]
stars: 47
forks: 26
openIssues: 2
closedIssues: 13
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2026-03-10T17:25:49Z"
lastCommitAt: "2026-11-25T13:21:10Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 48
maintainers: ["sfc-gh-ddesai", "iamontheinet", "sfc-gh-uunnikrishnan"]
openGraphImageUrl: "https://opengraph.githubassets.com/56c4bf05ebac39e4252b761af867d31fba73c04ac92d9be7bf3c386280dcb02d/Snowflake-Labs/snowflake-ai-kit"
---

# Snowflake AI Kit

Connect your AI coding agent to Snowflake. One plugin, for **Claude Code**, **OpenAI Codex**, **Devin CLI**, and **Devin Desktop**, automatically detects Snowflake prompts and routes them to [Cortex Code](https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-cli) — where 55+ built-in skills handle SQL, data governance, dynamic tables, ML, and more. A separate **Devin** plugin connects through a Snowflake Managed MCP Server instead, with no local Cortex Code CLI.

## Quick Start

### Claude Code

```bash
claude plugin install snowflake-cortex-code@claude-plugins-official
```

### OpenAI Codex

From your terminal:
```bash
codex plugin marketplace add Snowflake-Labs/snowflake-ai-kit
codex plugin add snowflake-cortex-code@snowflake-ai-kit
```

Or inside Codex, open `/plugins` and install "Snowflake Cortex Code" from the Snowflake AI Kit marketplace.

### Devin

Pick one option. Don't install both: with both, Devin may use the MCP plugin's tools instead of routing to Cortex Code.
