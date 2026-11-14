---
repo: "LineLuLan/line-harness"
name: "line-harness"
description: "Line's agent-coding harness: Claude Code supervisor + Codex CLI worker"
readmeQualityOk: true
url: "https://github.com/LineLuLan/line-harness"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [58, 25]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-07T09:53:17Z"
lastCommitAt: "2026-11-14T21:59:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 15
maintainers: ["LineLuLan"]
openGraphImageUrl: "https://opengraph.githubassets.com/67db561b251b7abd7e465ab957768b19844cab5c74f7900867813d4d6f91724b/LineLuLan/line-harness"
---

# Line Harness

Line's agent-coding setup on Windows 11: Claude Code as the supervisor, the Codex CLI as the worker, plus the hooks, skills, status line, and terminal configuration that hold them together.

This repository is a working backup of a real machine. You can read it to learn the setup, or restore it on a new machine with `restore.ps1`.

## How it works

| Role | Who | Job |
| --- | --- | --- |
| Owner | Line | Decides; approves Critical work; the only one who commits, pushes, or deploys |
| Supervisor | Claude Code, Opus 5.5 | Plans, writes the task packet, picks the model, verifies (layer 3), installs, reports |
| Worker | Codex CLI: `gpt-6-sol` (small), `gpt-6-astra` (large, Important, Critical), `gpt-6-luna` (exploration) | Implements the packet in a sandbox, writes only inside the repo it was given |
| Backup worker | Claude Opus subagent | Takes Standard work when Codex quota is tight |
| Reviewers | Fable 5.2 subagent, `gpt-6-astra` in a fresh session | Read the packet before dispatch; review the diff after; never the author |

### One task, end to end

```mermaid
flowchart TD
    A["Line asks for a change"] --> B["Supervisor classifies the tier<br/>Skip /…
