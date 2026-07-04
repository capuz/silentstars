---
repo: "jenkinsci/ai-agent-plugin"
name: "ai-agent-plugin"
description: "Jenkins plugin: reusable AI Agent build step for Claude Code, Codex CLI, Cursor Agent, OpenCode, and Gemini CLI"
readmeQualityOk: true
url: "https://github.com/jenkinsci/ai-agent-plugin"
homepage: "https://plugins.jenkins.io/ai-agent/"
language: "Java"
languages: ["Java"]
languagePcts: [91]
topics: ["ai", "claude", "codex", "cursor", "gemini", "jenkins-plugin", "llm"]
stars: 11
forks: 4
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 713
recentReleases: 2
createdAt: "2026-03-21T11:54:55Z"
lastCommitAt: "2026-07-04T23:14:52Z"
lastReleaseAt: "2026-05-27T05:24:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 86
undervaluedScore: 53
maintainers: ["bvolpato", "renovate[bot]", "bvolpato-dd"]
openGraphImageUrl: "https://opengraph.githubassets.com/07a7ddc8806fa7298124d5fda0acdce25448183bd4864810c6797d20cac61a83/jenkinsci/ai-agent-plugin"
fundingLinks: ["CUSTOM:https://crowdfunding.linuxfoundation.org/initiatives/jenkins", "CUSTOM:https://www.jenkins.io/donate/#why-donate"]
---

# AI Agent

A Jenkins plugin that adds a reusable **Run AI Agent** build step for running autonomous coding
agents (Claude Code, Codex CLI, Cursor Agent, OpenCode, Gemini CLI) in Jenkins jobs and pipelines.

Plugin ID (artifactId): `ai-agent`

## Features

- **Reusable build step** — add `Run AI Agent` to Freestyle jobs or Pipeline via `aiAgent(...)`.
- **Multiple agent support** — Claude Code, Codex CLI, Cursor Agent, OpenCode, and Gemini CLI.
- **Inline conversation view** — live-streaming conversation on the build page with structured display of assistant messages, tool calls with inputs/outputs, and thinking blocks. Multiple invocations in the same build are shown as separate cards (latest expanded, older collapsible).
- **Markdown rendering** — assistant and result messages are rendered as formatted HTML.
- **Approval gates** — optionally pause builds for human review before tool execution.
- **Usage statistics** — token counts, cost, and duration extracted from agent logs and displayed per build.
- **Codex controls** — job-scoped `~/.codex/config.toml`, global Codex args, and `codex exec` args for Codex runs.
- **Standard Jenkins integrations** — SCM checkout, build…
