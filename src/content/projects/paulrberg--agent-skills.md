---
repo: "PaulRBerg/agent-skills"
name: "agent-skills"
description: "PRB's collection of agent skills"
readmeQualityOk: true
url: "https://github.com/PaulRBerg/agent-skills"
language: "Rust"
languages: ["Rust"]
languagePcts: [66]
topics: ["agent-skills", "ai-agents"]
stars: 96
forks: 7
openIssues: 5
closedIssues: 15
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-05T12:04:24Z"
lastCommitAt: "2026-10-04T10:01:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 35
maintainers: ["PaulRBerg"]
openGraphImageUrl: "https://opengraph.githubassets.com/0353e273eeedbd6ce5f39aeccff518e78d3475df119086834a6049aa65df3ef3/PaulRBerg/agent-skills"
---

# Agent Skills

PRB's collection of AI agent skills and the CLIs they rely on. Designed to work across agents, but primarily built for
[Claude Code](https://claude.com/product/claude-code) and [Codex](https://github.com/openai/codex).

> [!WARNING] This catalog intentionally reflects Paul's preferred tools, defaults, safety boundaries, and writing voice;
> it is not a neutral template. If you install it, review every workflow and customize it for your stack and agents. No
> warranties, guarantees, or support are provided — use at your own risk.

## Installation

```sh
bunx skills add PaulRBerg/agent-skills
```

Install the CLIs the skills rely on:

```sh
cargo install --locked --git https://github.com/PaulRBerg/agent-skills ai-commit ai-coord ai-handoff ai-notify ai-skillet
```

From a clone, `just toolkit::install-cli` installs them into `~/.local/bin`.

## Skills

| Skill                  | Description                                                                |
| ---------------------- | -------------------------------------------------------------------------- |
| agents-brain           | Create or polish README.md, AGENTS.md, context docs, and existing skills   |
|…
