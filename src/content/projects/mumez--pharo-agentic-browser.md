---
repo: "mumez/pharo-agentic-browser"
name: "pharo-agentic-browser"
description: "A multi-agent AI coding workspace and orchestration environment for Pharo Smalltalk, featuring native and mobile-friendly Web UI"
readmeQualityOk: true
url: "https://github.com/mumez/pharo-agentic-browser"
language: "Smalltalk"
languages: ["Smalltalk"]
languagePcts: [100]
topics: ["coding-agents", "pharo-smalltalk", "acp", "claude-code", "codex-cli", "gemini-cli", "github-copilot", "kilo-code", "opencode", "agent-skills"]
stars: 10
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-23T12:19:00Z"
lastCommitAt: "2026-10-27T12:40:16Z"
lastReleaseAt: "2026-07-21T14:36:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 48
maintainers: ["mumez", "felipelalli"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5f0d44678a1920a37bb608cf6f90f4ce2d6e6c86d8a2e1994f298c7630a056f/mumez/pharo-agentic-browser"
---

# pharo-agentic-browser

### Agentic AI Coding Workspace for Pharo

**pharo-agentic-browser** brings **Pharo AI coding** to your image as a native **agentic coding environment**: a Pharo-native UI tool for managing multiple AI coding agent sessions — Claude Code, Gemini CLI, OpenCode, and others — in parallel from inside your Pharo image. It enables **AI-assisted Smalltalk development** by letting each session, called a **topic**, work as an autonomous agent on your code: you type a request, the agent works, and pauses only when it needs your approval.

## Presentation

- [Introducing Pharo Agentic Browser](https://mumez.github.io/pharo-agentic-browser-slides/introducing-pharo-agentic-browser-en.html)
- [pharo-agentic-browser in 3 minutes](https://youtu.be/rkWCDvN3j7E) — a demo of generating a URL-routing Trie class from a simple prompt, using OpenCode with the GPT-5.6 Terra model.

## Overview

```
+---------------------+-------------------------------------------+
|   Topics            |  [Human] @QueryClass refactor this        |
|                     |                                           |
|                     +-------------------------------------------+
| ❇️DB…
