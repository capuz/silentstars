---
repo: "oalders/kitchen-sink"
name: "kitchen-sink"
description: "A collection of useful Claude Code skills and commands for software development workflows"
readmeQualityOk: true
url: "https://github.com/oalders/kitchen-sink"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 6
closedIssues: 61
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-14T19:40:56Z"
lastCommitAt: "2026-10-29T21:24:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 63
maintainers: ["oalders"]
openGraphImageUrl: "https://opengraph.githubassets.com/54dd9a92461a95f5570e81a610e1ad85fe3a8e227128e1d8356e2518953eb3a4/oalders/kitchen-sink"
---

# kitchen-sink

*Everything but the kitchen sink*

A grab bag of skills to automate the boring parts out of your hair and into your robot.

## Requirements

**GitHub CLI:** Several skills and commands use [`gh`](https://cli.github.com/) to interact with GitHub issues and pull requests. Install it and authenticate with `gh auth login`.

**Superpowers plugin:** Most skills and commands rely on [obra/superpowers](https://github.com/obra/superpowers) for workflows like brainstorming, verification, and subagent-driven development. Install it first:

```bash
claude plugin marketplace add obra/superpowers
```

## Installation

Add from the Claude Code plugin marketplace:

```bash
claude plugin marketplace add oalders/kitchen-sink &&
  claude plugin install kitchen-sink
```

## Contents

### Commands

**Code review**

| Command | Description |
|---------|-------------|
| **/agent-instructions-review** | Reviews changes to agent-instruction files (CLAUDE.md, AGENTS.md, .cursor/rules, copilot-instructions, .claude/**, plugin commands/skills/agents) for accuracy, placement, duplication, cost, removability, and instruction quality |
| **/code-review-intense-flow** | Heavyweight fan-out that…
