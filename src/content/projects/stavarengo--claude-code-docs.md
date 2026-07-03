---
repo: "stavarengo/claude-code-docs"
name: "claude-code-docs"
description: "Clean mirror of Claude Code docs for AI agents - just the docs, updated daily at 5am UTC"
url: "https://github.com/stavarengo/claude-code-docs"
language: "MDX"
languages: ["MDX"]
languagePcts: [100]
topics: ["ai-agents", "anthropic", "claude", "claude-code", "docs", "documentation", "llm", "mirror"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-23T18:18:28Z"
lastCommitAt: "2026-07-03T06:24:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 47
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f3c02632026a9eb66f585315fd21bd4eb4dce9054435bf4a9e7f4c74badc874/stavarengo/claude-code-docs"
---

# Claude Code Documentation Mirror

-it's just the docs, updated daily

A minimal, clean copy of Claude Code documentation for easy integration with AI agents.
Content is crawled daily from [code.claude.com](https://code.claude.com) using [stavarengo/claude-code-docs-crawler](https://github.com/stavarengo/claude-code-docs-crawler).

> I created this repository because I wanted a clean copy of the Claude Code documentation that I could use as a git submodule. The other repos I found on GitHub usually also include scripts, tooling, and other files that can confuse AI assistants when added to a project context. This repo solves that - it's just the docs, updated daily. I use it to give my local AI agents access to up-to-date Claude Code documentation without noise. Feel free to use it the same way.

## What This Is

- A daily-crawled copy of Claude Code docs, output by [stavarengo/claude-code-docs-crawler](https://github.com/stavarengo/claude-code-docs-crawler)
- Updated automatically at 5:15am UTC via GitHub Actions
- Contains only documentation - minimal noise: no scripts, no tooling (besides this README and the minimal GitHub Actions workflow itself)
- Includes an agent-friendly…
