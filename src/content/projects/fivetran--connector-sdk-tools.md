---
repo: "fivetran/connector_sdk_tools"
name: "connector_sdk_tools"
description: "AI coding agent tools to build connectors using Fivetran Connector SDK"
readmeQualityOk: true
url: "https://github.com/fivetran/connector_sdk_tools"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 92
forks: 2
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-03-21T00:02:31Z"
lastCommitAt: "2026-11-11T19:42:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 72
undervaluedScore: 21
maintainers: ["ediril", "fivetran-rishabhghosh", "fivetran-sahilkhirwal"]
openGraphImageUrl: "https://opengraph.githubassets.com/70c6314c331b377a8d431457e018c65b529d875764ee998040217ff8ad6955af/fivetran/connector_sdk_tools"
---

AI-assisted tools for building, testing, and deploying [Fivetran Connector SDK](https://fivetran.com/docs/connector-sdk) connectors. Distributed as a native plugin/extension for Claude Code, Codex CLI, Gemini CLI, GitHub Copilot CLI, and Cursor CLI.

## Prerequisites

- **Python 3.10–3.14**
- **A supported coding agent** (Claude Code, Codex CLI, Gemini CLI, GitHub Copilot CLI, or Cursor CLI — see install options below)
- **Fivetran Connector SDK** — `pip install fivetran-connector-sdk`

## Quick Start

The fastest path: install the SDK and let `fivetran init` set everything up.

```bash
pip install fivetran-connector-sdk
fivetran init
```

`fivetran init` scaffolds a new connector project and offers to configure a coding agent for you. It detects Claude Code, Codex CLI, Gemini CLI, the standalone GitHub Copilot CLI, and Cursor CLI. It runs native plugin installation commands where the agent supports them; because Cursor has no non-interactive plugin installation command, Cursor users complete installation interactively in Cursor CLI. You can also skip agent setup and install a supported plugin manually; see the options below.

## Install the plugin manually

If you skipped agent…
