---
repo: "haowjy/meridian-cli"
name: "meridian-cli"
description: "text is qi for llms"
readmeQualityOk: true
url: "https://github.com/haowjy/meridian-cli"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 30
forks: 3
openIssues: 147
closedIssues: 314
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-25T08:34:20Z"
lastCommitAt: "2026-10-23T12:04:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 43
maintainers: ["haowjy", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddf8056a45bf787a0092c6f6f46686a7ece15d1d2bcb28de52a41ce76e8c51c6/haowjy/meridian-cli"
---

# meridian-cli

Let coding harnesses call each other. meridian-cli lets agents running in Claude Code, Codex CLI, and OpenCode spawn named specialist agents in the other harnesses, each with the model, cost, and tool environment you configured.

It is for people who already use more than one AI coding CLI and want one team of agents instead of separate chat sessions.

> **Early development.** meridian-cli is not stable. Expect breaking changes in any release. If you need a stable workflow, this project is not ready for you yet.

## Why

Good agentic coding is an allocation problem. Some tasks need the strongest model you have; some need cheap, parallel throughput; some need a specific harness feature such as sandboxing, tool behavior, context handling, or integrations.

Without meridian-cli, those choices are trapped inside separate CLIs. Switching harnesses means manually copying context between sessions and hoping the next agent understands what happened.

meridian-cli turns that handoff into a command. A caller can delegate to a named specialist, pass only the context that agent needs, and pick up the result from disk. Use the expensive model where judgment matters, use cheaper…
