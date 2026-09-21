---
repo: "snewhouse/aa-ma-forge"
name: "aa-ma-forge"
description: "AA-MA: Advanced Agentic Memory Architecture"
readmeQualityOk: true
url: "https://github.com/snewhouse/aa-ma-forge"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [75, 25]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-04-05T13:04:07Z"
lastCommitAt: "2026-09-21T09:14:01Z"
lastReleaseAt: "2026-09-12T17:10:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 51
maintainers: ["snewhouse"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5908bce94512d6f283f79c96c65f547a95bea2e10da9dc1910dea95fbc1e88f/snewhouse/aa-ma-forge"
---

</p>

  Structured external memory for Claude Code, so your AI agent stops forgetting what it's done.
</p>

**Current version:** v0.12.0 — plans carry a mermaid Architecture View (element #13, ADR-0010) checked by `aa-ma-lint-views`, shared with `/aa-ma-share`, rendered by `aa-ma-render`; releases are cut by `scripts/release.sh`.

## The problem

LLM agents lose context across sessions. They drift from plans, forget decisions, repeat work you've already covered. Every new conversation starts from scratch, and you're back to re-explaining the same architecture, the same constraints, the same goals. It's maddening.

</p>

## What AA-MA is

AA-MA (Advanced Agentic Memory Architecture) gives Claude Code a structured external memory built from five specialised files. Each file segments a different kind of knowledge: strategy, facts, decisions, execution state, and audit history. Built for long-horizon, multi-session tasks where context loss kills productivity.

## What's in this repo

```
docs/spec/          The specification (v2.1), quick reference, team guide,
                    and Claude Code foundations reference
docs/narrative/     The origin story (how and why AA-MA exists)…
