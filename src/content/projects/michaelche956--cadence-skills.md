---
repo: "michaelChe956/Cadence-skills"
name: "Cadence-skills"
description: "claude code skills for coding workflow"
originalDescription: "claude code skills for coding workflow"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/michaelChe956/Cadence-skills"
language: "Python"
languages: ["Python"]
languagePcts: [80]
stars: 10
forks: 2
openIssues: 7
closedIssues: 29
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-02-08T14:24:06Z"
lastCommitAt: "2026-09-21T09:14:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 54
maintainers: ["michaelChe956"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4b852b8c47189af2d6463645a4c7202d0d3ae94d6ac407f0d6bb123adc46669/michaelChe956/Cadence-skills"
---

# Cadence

## Project Overview

Cadence is an Agent Skills collaboration system for five endpoints: Claude Code, pi, Codex, Kimi Code, and omp (oh-my-pi). It organizes work such as requirement clarification, design, planning, implementation, testing, review, and debugging into reusable Skills, and provides Schema 4.0 KnowledgeBase capabilities for Java and Vue/React legacy projects.

The current `cadence-init` plugin version in this repository is `0.0.4`. Cadence installation, updates, and uninstallation are managed by `install.sh` in the repository root; Skills use Git repositories as sources and are consumed by different Agents through three-tier skill-level symlinks, without relying on plugin marketplace registration.

## How It Works

Cadence Skills are automatically triggered based on task intent, and can also be manually invoked using bare Skill names. A typical workflow is as follows:

1. Use `/pre-check` to check basic tools and environment.
2. Use `/mcp-configuration` to configure project MCP (must be before `rule-config`——the latter's permission block depends on `.mcp.json` being in place).
3. Use `/rule-config` to configure project rules, `cadence/` artifact directory,…
