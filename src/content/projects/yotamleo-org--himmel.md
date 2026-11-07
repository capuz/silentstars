---
repo: "yotamleo-org/Himmel"
name: "Himmel"
description: "A control plane for coding agents: installs on top of Claude Code and governs its sessions with hooks, guardrails, slash commands, a Jira CLI and handovers. Worktree-isolated, PR-gated, Jira-tracked; every merge waits for a signed GO."
readmeQualityOk: true
url: "https://github.com/yotamleo-org/Himmel"
homepage: "https://yotamleo-org.github.io/Himmel/"
language: "Shell"
languages: ["Shell"]
languagePcts: [74]
stars: 15
forks: 2
openIssues: 10
closedIssues: 138
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-06-16T13:17:11Z"
lastCommitAt: "2026-11-07T09:30:09Z"
lastReleaseAt: "2026-09-20T17:38:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 57
maintainers: ["yotamleo", "Goomal"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ac48d08c77688343caa8e523ed91cc6d5d2e48c20b9e10566e332d48b6b4848/yotamleo-org/Himmel"
---

# himmel

> **A control plane for coding agents.**

himmel turns Claude Code into a team you can leave running. The install adds
checks to your sessions; the team is a further step you set up. In that setup one session, the *chief*, coordinates the work and oversees
it. To plan a big change, the chief starts a subagent or a new session that
runs [minerva](https://github.com/yotamleo-org/Himmel/blob/HEAD/marketplace/plugins/himmel-ops/skills/minerva/SKILL.md). The
chief then hands each ticket to a *worker* session of its own, checks every
result, and approves each merge.
Work can carry on while you are away and restart after a usage limit, and a
local UI shows you what all of them are doing.

Still deciding? [Take a short test run](#still-deciding-take-a-short-test-run)
on a spare project: one command puts himmel on, one takes it off. Ready to use
it on your own project, or here to work on himmel itself? Go to the
[Quickstart](#quickstart).

## Why use himmel

Most of what himmel offers comes from running it whole: parallel sessions run
by a chief, runs that carry on overnight, a second brain that fills itself.
You can install less, and each step is optional. Without the fleet and…
