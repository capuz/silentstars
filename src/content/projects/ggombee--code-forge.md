---
repo: "ggombee/code-forge"
name: "code-forge"
description: "A code-forge that assembles and sets up AI agent skills, agents, and more"
originalDescription: "AI agent의 skills, agents 등을 조합해서 세팅해주는 code-forge"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/ggombee/code-forge"
language: "Shell"
languages: ["Shell"]
languagePcts: [92]
topics: ["ai-agents", "claude", "claude-code-plugin"]
stars: 17
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-15T08:00:03Z"
lastCommitAt: "2026-10-18T08:15:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 62
undervaluedScore: 17
maintainers: ["ggombee"]
openGraphImageUrl: "https://opengraph.githubassets.com/0176f51e500160fa9b23a4d18204e2c8558bd4f4b59ed63afe4fc746086551f4/ggombee/code-forge"
---

# code-forge

[English](https://github.com/ggombee/code-forge/blob/HEAD/README.en.md)

> Installing it makes Claude Code work better.

A Claude Code plugin that provides specialized agents, slash skills, and stack modules.
A proven thinking model (GROUND→APPLY→VERIFY→ADAPT) keeps the quality of every task consistent.
(The number of agents and skills is determined by what's on disk: `ls agents/*.md | wc -l`, `ls skills/*/SKILL.md | wc -l`)

**Current status**: Running on a personal GitHub (marketplace release 4.10.0). Patch notes: [CHANGELOG.md](https://github.com/ggombee/code-forge/blob/HEAD/CHANGELOG.md)

---

## Installation

### Method 1: Marketplace (recommended)

```bash
# 1. Register the marketplace (once only)
claude plugin marketplace add https://github.com/ggombee/forge-market.git

# 2. Install the plugin
claude plugin install code-forge

# 3. Set up the project
claude
> /setup
```

### Method 2: Local clone

```bash
git clone https://github.com/ggombee/code-forge.git
claude --plugin-dir /path/to/code-forge
> /setup
```

If typing this every time is tedious, add an alias:

```bash
alias claude-forge='claude --plugin-dir /path/to/code-forge'
```

### What `/setup` does

It…
