---
repo: "yotamleo-org/Himmel"
name: "Himmel"
description: "A control plane for coding agents: installs on top of Claude Code and governs its sessions with hooks, guardrails, slash commands, a Jira CLI and handovers. Worktree-isolated, PR-gated, Jira-tracked; every merge waits for a signed GO."
readmeQualityOk: true
url: "https://github.com/yotamleo-org/Himmel"
homepage: "https://yotamleo-org.github.io/Himmel/"
language: "Shell"
languages: ["Shell"]
languagePcts: [71]
stars: 15
forks: 2
openIssues: 4
closedIssues: 178
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-06-16T13:17:11Z"
lastCommitAt: "2026-11-23T12:55:50Z"
lastReleaseAt: "2026-09-20T17:38:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 58
maintainers: ["yotamleo"]
openGraphImageUrl: "https://opengraph.githubassets.com/12b45ed348923b3a128b7b39f0113657166236941d2774614e2c02ec76eaf667/yotamleo-org/Himmel"
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
