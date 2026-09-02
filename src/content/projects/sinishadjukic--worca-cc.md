---
repo: "SinishaDjukic/worca-cc"
name: "worca-cc"
description: "Workflow orchestration for AI agents with Claude Code"
readmeQualityOk: true
url: "https://github.com/SinishaDjukic/worca-cc"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
stars: 32
forks: 12
openIssues: 28
closedIssues: 147
watchers: 1
contributors: 11
recentReleases: 0
createdAt: "2026-03-07T23:05:54Z"
lastCommitAt: "2026-09-02T08:03:29Z"
lastReleaseAt: "2026-04-05T20:20:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 42
maintainers: ["denislavprinov", "SinishaDjukic"]
openGraphImageUrl: "https://opengraph.githubassets.com/8623ae0d9ee9b77971e9b5b71230c8a8ca11d461aa98e55446ed52f97008b8c2/SinishaDjukic/worca-cc"
---

# Worca

Worca is a **deterministic multi-agent pipeline** that drives Claude Code
(headless) through **Plan → Refine → Implement → Review** for a software task.
You point it at a project, describe the work, and a state machine runs the
agents of your chosen workflow in sequence — looping until the work clears
quality gates, pausing to ask *you* the questions that matter, and keeping
every run isolated in its own git worktree and branch.

It ships as a **web UI**, a **CLI**, and an installable **`/worca` skill** for
Claude Code — all running the same engine. See the
**[architecture in one picture](https://github.com/SinishaDjukic/worca-cc/blob/HEAD/docs/ARCHITECTURE.md)**.

## How a run works

1. **Clarify** — instead of assuming, the planner turns hidden decisions into
   multiple-choice questions (2–4 options plus free text). Your answers are
   appended to the plan so reviewers see them.
2. **Plan** — the planner explores the codebase and writes an implementation
   plan with concrete code snippets.
3. **Refine** — the refiner reviews and rewrites the plan (`-v2`, `-v3`, …)
   until no critical/major issues remain.
4. **Implement** — the implementer follows the approved plan…
