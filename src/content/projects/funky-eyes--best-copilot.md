---
repo: "funky-eyes/best-copilot"
name: "best-copilot"
description: "Best Team for GitHub Copilot & Claude Code & Codex Workflow with Multi-Agent Collaboration, Long-Term Memory, and Self-Evolution."
readmeQualityOk: true
url: "https://github.com/funky-eyes/best-copilot"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["agent-team", "copilot", "copilot-cli", "multi-agent", "skills", "workflow", "ai", "ai-agent", "claude-code", "harness"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-13T02:35:10Z"
lastCommitAt: "2026-07-13T06:36:45Z"
lastReleaseAt: "2026-06-24T08:30:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 46
maintainers: ["funky-eyes"]
openGraphImageUrl: "https://opengraph.githubassets.com/72328dfe52fd8c1d8e18612eeb915d30ad6993f6d7277aca85f44418d9bfbdb0/funky-eyes/best-copilot"
---

# best-copilot

English | [Simplified Chinese](https://github.com/funky-eyes/best-copilot/blob/HEAD/README.zh-CN.md) | [Korean](https://github.com/funky-eyes/best-copilot/blob/HEAD/README.ko.md) | [Japanese](https://github.com/funky-eyes/best-copilot/blob/HEAD/README.ja.md)

`best-copilot` is an installable agent-team workflow for serious engineering work in Codex, Copilot CLI, and Claude Code. It gives a repository a senior delivery flow: initialize facts, freeze scope, design before building, implement through specialist roles, review independently, verify with evidence, and preserve a resume point for the next session.

Codex uses `.codex-plugin/plugin.json`, `.agents/plugins/marketplace.json`, `.agents/skills -> ../skills`, and `.codex/agents/*.toml`. Copilot CLI uses root `agents/` and `skills/` through `plugin.json`. Claude Code uses the `claude-plugin/` package: `claude-plugin/.claude-plugin/plugin.json`, `claude-plugin/skills -> ../skills`, and `claude-plugin/agents -> ../claude-agents`. Repository-level rules live in `.github/instructions/**`.

## Why It Exists

Large AI coding tasks fail when they jump straight from a vague request to a patch. `best-copilot` adds the…
