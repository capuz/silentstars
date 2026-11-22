---
repo: "shaftoe/pi-coding-agent-action"
name: "pi-coding-agent-action"
description: "GitHub action to integrate https://pi.dev/ coding agent with GitHub-compatible CI/CD, issues and PRs"
readmeQualityOk: true
url: "https://github.com/shaftoe/pi-coding-agent-action"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["coding-agents", "github-actions", "pi-coding-agent", "code-review", "ai-assisted"]
stars: 80
forks: 26
openIssues: 3
closedIssues: 130
watchers: 2
contributors: 13
recentReleases: 0
createdAt: "2026-03-21T21:59:59Z"
lastCommitAt: "2026-11-22T02:04:59Z"
lastReleaseAt: "2026-03-28T14:39:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 41
maintainers: ["github-actions[bot]", "shaftoe", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/1dc09de8e9efb2df9a2a3bc041cc7ca750561a7fa6d77d07723076c18f5a02c6/shaftoe/pi-coding-agent-action"
---

# Pi Coding Agent Action

  
  

A CI/CD action that integrates [Pi coding agent](https://pi.dev) with git hosting platform workflows. Works with **GitHub**, **Codeberg**, and self-hosted **Forgejo** instances — any platform that provides GitHub-compatible APIs and CI/CD environment variables.

Inspired by OpenCode's [GitHub action](https://opencode.ai/docs/github/).

## Features

- **Familiar workflow**: Supports the familiar workflow of running Pi coding agent as CLI (loading skills, extensions, AGENTS.md, sharing sessions, etc.) in a GitHub CI/CD workflow.
- **Minimal batteries included**: Tries to follow Pi minimalistic phylosophy while providing a comfortable UX out of the box, e.g. pretty print of logs, auto replies to comments, and tools to interact efficiently with git and GitHub-compatible APIs.
- **Composable**: Provides useful inputs and outputs for chaining together multiple Pi sessions and/or other GitHub actions/workflows.
- **Integrates with GitHub workflows**: Natively integrates with usual GitHub issue/PR workflows, invoke Pi both interactively (e.g. prefixing `/pi ` in an issue/PR comment) and programmatically (e.g. as a step in a workflow).
