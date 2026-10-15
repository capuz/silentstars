---
repo: "yotamleo/Himmel"
name: "Himmel"
description: "A managed, orchestrated harness for running Claude Code as a safe, repeatable agent: hooks, guardrails, slash commands, a Jira CLI, and a cross-session handover system."
readmeQualityOk: true
url: "https://github.com/yotamleo/Himmel"
language: "Shell"
languages: ["Shell"]
languagePcts: [73]
stars: 15
forks: 2
openIssues: 0
closedIssues: 87
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-06-16T13:17:11Z"
lastCommitAt: "2026-10-15T08:31:34Z"
lastReleaseAt: "2026-09-20T17:38:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 55
maintainers: ["yotamleo", "Goomal"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc535c43bd7e73198b47a8ed7fc708be302690bd7bc3e5a76af3748e8bef0429/yotamleo/Himmel"
---

# himmel

> **A harness for Claude Code.**

> 🚀 **New here? → [Getting Started](https://github.com/yotamleo/Himmel/blob/HEAD/docs/getting-started.md)**: from clone to
> your first PR-gated loop in about 15 minutes.
>
> Deciding whether it is worth it? Read [**Why himmel**](https://github.com/yotamleo/Himmel/blob/HEAD/docs/why-himmel.md),
> the failure modes it exists for and what each one costs. Want the design
> in one read? [**System design**](https://github.com/yotamleo/Himmel/blob/HEAD/docs/system-design.md) explains the parts,
> one ticket's flow, the trust model and the trade-offs. Want the wiring?
> [**Architecture**](https://github.com/yotamleo/Himmel/blob/HEAD/docs/architecture.md) draws the enforcement layers,
> handover, fleet, Jira seam and observability chain.

himmel is a development engine for a solo operator or a small team who works
with Claude Code every day. It wraps Claude Code in hooks, guardrails, slash
commands, a local Jira CLI and a handover system, so the work follows a
worktree-isolated, PR-gated, Jira-tracked workflow without anyone having to
remember the rules.

The idea is simple: anything you would otherwise repeat by hand (checking a
commit,…
