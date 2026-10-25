---
repo: "SinishaDjukic/worca-cc"
name: "worca-cc"
description: "Workflow Orchestration for Agents"
readmeQualityOk: true
url: "https://github.com/SinishaDjukic/worca-cc"
homepage: "https://worca.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
stars: 47
forks: 22
openIssues: 42
closedIssues: 264
watchers: 2
contributors: 23
recentReleases: 0
createdAt: "2026-03-07T23:05:54Z"
lastCommitAt: "2026-10-25T08:39:45Z"
lastReleaseAt: "2026-04-05T20:20:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 47
maintainers: ["e-angelov", "SinishaDjukic", "Bulibas"]
openGraphImageUrl: "https://opengraph.githubassets.com/83959241cde8356d037fd4b124c2c2c8a4748cb7059dc03595ec00ba37906421/SinishaDjukic/worca-cc"
---

# Worca

Worca turns a task into **reviewed, merge-ready work**. It is a
**deterministic multi-agent pipeline**: you point it at a project, describe the
work, and a state machine runs the agents of a workflow in sequence — by
default **Clarify → Plan → Refine → Implement → Review** — looping until the
work clears quality gates, pausing to ask *you* the questions that matter, and
keeping every run isolated in its own git worktree and branch — or, for a plain
folder, on a copy you apply back with **Apply to folder**; with **No project**, in a folder of its own. Pick **Auto**
and Worca chooses the workflow for the task, draw your own in **Workflows** (or
ask its chat to build it), or start the shipped **Presentation** workflow to turn a brief into
a slide deck, **Architecture (C4)** to keep a diagram of your code that
draws itself from the code, or **Promo video** to film your product's real UI.
Agents run on Claude Code by default, or (beta) on Codex, the GitHub Copilot CLI
or Cursor.

It ships as a **web UI**, a **CLI**, and an installable **`/worca` skill** for
Claude Code — all running the same engine — and chat plugins (Telegram, Slack,
Discord, Teams) let you drive runs from a…
