---
repo: "yotamleo/Himmel"
name: "Himmel"
description: "A managed, orchestrated harness for running Claude Code as a safe, repeatable agent: hooks, guardrails, slash commands, a Jira CLI, and a cross-session handover system."
readmeQualityOk: true
url: "https://github.com/yotamleo/Himmel"
language: "Shell"
languages: ["Shell"]
languagePcts: [76]
stars: 15
forks: 2
openIssues: 2
closedIssues: 93
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-06-16T13:17:11Z"
lastCommitAt: "2026-10-18T08:17:27Z"
lastReleaseAt: "2026-09-20T17:38:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 55
maintainers: ["yotamleo"]
openGraphImageUrl: "https://opengraph.githubassets.com/85e2bf9e64f97fad3ddd1c0b83e7da199e79e4b02092b63620889bd9f7511269/yotamleo/Himmel"
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
