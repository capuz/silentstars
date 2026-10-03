---
repo: "pukeko-robotics/gaunt-sloth"
name: "gaunt-sloth"
description: "AI agent with CLI, API and all prompts editable."
readmeQualityOk: true
url: "https://github.com/pukeko-robotics/gaunt-sloth"
homepage: "https://gauntsloth.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai", "cli"]
stars: 15
forks: 9
openIssues: 1
closedIssues: 74
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2025-04-15T07:43:38Z"
lastCommitAt: "2026-10-03T09:22:56Z"
lastReleaseAt: "2025-05-16T04:58:31Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 77
maintainers: ["andruhon", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/966618770/52159760-bf4c-4071-86f8-23610db605be"
discussionCount: 6
---

# Gaunt Sloth

Gaunt Sloth (`gth`) is a command-line AI assistant for code review, PR analysis, Q&A, and
interactive coding sessions. It runs on your machine against whatever model you point it at, with
every prompt in plain markdown and no vendor lock-in.

Based on [LangChain.js](https://github.com/langchain-ai/langchainjs).

**[Documentation](https://gauntsloth.app/docs/) · [Quickstart](https://github.com/pukeko-robotics/gaunt-sloth/blob/HEAD/docs/quickstart.md) · [Official Site](https://gauntsloth.app/) · [NPM](https://www.npmjs.com/package/gaunt-sloth)**

## Why?

Gaunt Sloth is small, extendable, cross-platform, and can itself be a dependency in your project.
It started as a code-review tool that fed PR and Jira contents to an LLM; we kept finding more uses
(spinning it up inside an MCP project to simulate cases, for instance), so it grew into a general
configuration-driven CLI.

- **Minimum dependencies** — CommanderJS plus LangChain/LangGraph.
- **Extensibility** — write a little JS to add a tool or provider, or connect an MCP server.
- **No vendor lock-in** — bring your own API keys.
- **All prompts are editable markdown** — you are in full control.
- **Stateless code…
