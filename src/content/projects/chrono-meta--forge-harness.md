---
repo: "chrono-meta/forge-harness"
name: "forge-harness"
description: "FH is a meta-harness for Claude Code: it helps you build harnesses and skills — the rules, gates and memory a project needs — and checks them before they ship."
readmeQualityOk: true
url: "https://github.com/chrono-meta/forge-harness"
homepage: "https://chrono-meta.github.io/forge-harness/"
language: "Shell"
languages: ["Shell"]
languagePcts: [77]
topics: ["knowledge-management", "codex", "harness", "claude-code", "multi-agent", "meta-harness", "agent-governance", "self-evolving", "agentic-coding", "loop-engineering"]
stars: 31
forks: 1
openIssues: 2
closedIssues: 5
watchers: 0
contributors: 5
recentReleases: 8
createdAt: "2026-05-26T09:14:09Z"
lastCommitAt: "2026-11-07T10:36:25Z"
lastReleaseAt: "2026-09-06T14:43:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 46
maintainers: ["chrono-meta"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1250062394/972b46de-c5b2-48ca-8498-0e1f59f9d40a"
---

# forge-harness (FH)

**FH is a meta-harness for [Claude Code](https://github.com/anthropics/claude-code): it helps you build harnesses and skills — the rules, gates and memory a project needs — and checks them before they ship.**

A *harness* is what you wrap around an AI agent in one project so it stops needing the same instructions
every session: rules it follows, checks that block bad changes, and a record of what it learned. A
*meta*-harness is the one that builds and verifies those, project after project.

> Stop re-explaining your rules to your agent. Put them in the project.

## Who it is for, and what you get

For people who use Claude Code (or another coding agent) on real projects and are tired of repeating
themselves or of finding out too late that a change was wrong. You get three things:

The gates catch you, not only your agent: on 2026-08-22 they blocked the author seven times, and the author caught none of those first ([one day of gate blocks](https://github.com/chrono-meta/forge-harness/blob/HEAD/docs/GATE_DAY.md)).

| You get | In practice | Evidence |
|---|---|---|
| **A gate before merge** | A diff is judged *before* it lands, and the verdict names what the…
