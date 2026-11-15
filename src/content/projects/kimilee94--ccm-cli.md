---
repo: "kimilee94/ccm-cli"
name: "ccm-cli"
description: "CLI tool to run Claude Code with different AI models per terminal. Switch models by name, manage profiles, and browse session history with a built-in web viewer."
readmeQualityOk: true
url: "https://github.com/kimilee94/ccm-cli"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [52, 48]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-22T11:26:41Z"
lastCommitAt: "2026-11-15T11:18:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 45
undervaluedScore: 1
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/1254d412e482287e15ee631b3871d5386c8199bcf7a0923e700f2c302b06091e/kimilee94/ccm-cli"
---

# ccm - Claude Code Model Manager

Language：[English](#english) | [中文](https://github.com/kimilee94/ccm-cli/blob/HEAD/README.zh.md)

## English

Run Claude Code with different AI models in separate terminals. One command per terminal, zero config conflicts.

ccm (Claude Code Model Manager) is a CLI tool that lets you run Claude Code with different AI models in different terminal windows at the same time. Each launch gets its own model, API endpoint and credentials without rewriting Claude Code's global config. Existing Claude Code user and project settings still apply. Switch models by name, track running instances, and manage profiles from the command line.

## Prerequisites

- **Node.js** >= 18.0.0
- **Claude Code** installed globally: `npm i -g @anthropic-ai/claude-code`

## Install

```bash
npm i -g @leeandrew94/ccm
```

## Uninstall

```bash
npm uninstall -g @leeandrew94/ccm

# (Optional) Remove config and runtime data
rm -rf ~/.ccm
```

## Quick Start

```bash
# Interactive setup wizard (recommended)
ccm init

# Launch
ccm mimo

# Open another terminal, switch to a different model
ccm init
ccm deepseek

# See what's running
ccm ps
```

## Commands

| Command | Description |…
