---
repo: "jaqubowsky/fleet"
name: "fleet"
description: "Runs Claude Code and pi agents in parallel on your Mac, one Docker sandbox per issue. A host agent hands out the work, watches every sandbox and brings back tested, reviewed pull requests."
readmeQualityOk: true
url: "https://github.com/jaqubowsky/fleet"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["agent-orchestration", "ai-agents", "claude-code", "cli", "coding-agents", "docker-sandboxes", "multi-agent", "sandbox", "typescript"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-30T20:11:34Z"
lastCommitAt: "2026-11-03T12:46:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 42
maintainers: ["jaqubowsky"]
openGraphImageUrl: "https://opengraph.githubassets.com/214e9a881988c9b4414d3f4c19f34cf73aabf84fcdba24636d27d1b6ec6cd8fe/jaqubowsky/fleet"
---

# fleet

Give your coding agent a list of issues and get pull requests back. fleet runs each issue in its own sandbox with its own agent, all at once, and asks you only when a decision is yours.

You only talk to one agent, the host, on your Mac. It starts a sandbox per issue, keeps an eye on all of them and checks the finished work before anything lands. Questions it can't answer come to you. Every command any agent runs passes a tested guard first.

## How it works

## Quickstart

You need a Mac with Apple Silicon and zsh, [Docker Sandboxes](https://docs.docker.com/ai/sandboxes/), [Herdr app](https://herdr.dev), Node, Claude Code and pi, and a Claude plan and a model provider for pi (setup step 1 matches the models to what you have).

```bash
git clone https://github.com/jaqubowsky/fleet ~/fleet
cd ~/fleet && claude
```

Then tell your agent: **"read SETUP.md and set me up"**. It checks what you have, asks what it can't know, and ends by starting and stopping one test sandbox.

After setup you work from [Herdr app](https://herdr.dev) in its `fleet` layout: open a tab in your repository and run plain `claude` or `pi`. The host only wakes for the sandboxes its own session started…
