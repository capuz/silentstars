---
repo: "yotamleo/Himmel"
name: "Himmel"
description: "A managed, orchestrated harness for running Claude Code as a safe, repeatable agent: hooks, guardrails, slash commands, a Jira CLI, and a cross-session handover system."
readmeQualityOk: true
url: "https://github.com/yotamleo/Himmel"
language: "Shell"
languages: ["Shell"]
languagePcts: [68]
stars: 14
forks: 2
openIssues: 6
closedIssues: 24
watchers: 1
contributors: 4
recentReleases: 8
createdAt: "2026-06-16T13:17:11Z"
lastCommitAt: "2026-09-18T08:26:51Z"
lastReleaseAt: "2026-09-13T21:11:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 53
maintainers: ["yotamleo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e608741c8560311c16769fb9e9fb9d3d208fd734fe4d0ac33449e62a7393f53/yotamleo/Himmel"
---

# himmel

> **A harness for Claude Code.**

> 🚀 **New here? → [Getting Started](https://github.com/yotamleo/Himmel/blob/HEAD/docs/getting-started.md)** — clone to your
> first PR-gated loop in ~15 minutes.
>
> Deciding whether it is worth it? → [**Why himmel**](https://github.com/yotamleo/Himmel/blob/HEAD/docs/why-himmel.md) — the
> failure modes it exists for, and what each one costs. Want the wiring? →
> [**Architecture**](https://github.com/yotamleo/Himmel/blob/HEAD/docs/architecture.md) — the enforcement layers, handover,
> fleet, Jira seam, and observability chain as diagrams.

A solo-operator / small-team development engine. Ships CLIs, hooks, plugins,
and Claude Code wiring designed for a worktree-isolated, PR-gated, Jira-tracked
workflow with a strong dose of AI assistance.

himmel is the **engine**: the tools that automate the parts a single operator
would otherwise repeat by hand (commit hooks, Claude session guardrails, handover
state, Jira sync, overnight unattended runs).

> **Companion second-brain (optional).** himmel pairs naturally with an AI-first
> Obsidian vault that Claude reads and writes directly — the Camp-2 memory
> substrate described below. himmel ships…
