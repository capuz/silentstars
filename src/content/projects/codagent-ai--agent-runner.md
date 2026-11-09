---
repo: "Codagent-AI/agent-runner"
name: "agent-runner"
description: "Stop giving the agent a workflow. Put the agent inside the workflow."
readmeQualityOk: true
url: "https://github.com/Codagent-AI/agent-runner"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 15
forks: 1
openIssues: 40
closedIssues: 107
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2026-03-28T16:56:04Z"
lastCommitAt: "2026-11-09T03:30:50Z"
lastReleaseAt: "2026-11-05T13:51:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 53
maintainers: ["codagent-llc", "pacaplan", "codagent-factory[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/affb28869b35b68fbaf8da2b6d684cc56badcbb200c384243a812a4f687658e8/Codagent-AI/agent-runner"
---

# Agent Runner

Agent Runner is a local workflow runner for coding agents.

It lets you define multi-step workflows - plan, implement, validate, fix, review, open a PR - and run those steps through the agent CLIs you already use: Claude Code, Codex, Copilot, Cursor, and OpenCode.

The key difference: the workflow lives outside the agent's context window. The agent still reasons, writes code, and fixes problems. Agent Runner owns the sequencing, retries, state, validation loops, and resumption.

https://github.com/user-attachments/assets/e40c22f5-87dc-4158-9cc0-6bf9f6ede0ba

## Quick start

**macOS and Linux (Homebrew)**

```bash
brew tap Codagent-AI/tap
brew install --cask agent-runner
agent-runner
```

First launch opens the guided setup and tutorial. The Homebrew install also installs Agent Runner's helper CLIs, including `agent-plugin` and `agent-validator`.

**Linux tarball fallback**

If you are not using Homebrew, download the latest Linux tarball for your architecture from [releases](https://github.com/Codagent-AI/agent-runner/releases):

```bash
curl -LO https://github.com/Codagent-AI/agent-runner/releases/latest/download/agent-runner_linux_amd64.tar.gz
tar xzf…
