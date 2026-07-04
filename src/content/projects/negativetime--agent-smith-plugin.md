---
repo: "negativetime/agent-smith-plugin"
name: "agent-smith-plugin"
description: "Claude Code plugin — delegate bulky research & first-draft work to Google Gemini, then review and finish with Claude."
readmeQualityOk: true
url: "https://github.com/negativetime/agent-smith-plugin"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-06-17T20:55:24Z"
lastCommitAt: "2026-07-04T22:20:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 11
maintainers: ["noreply"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3e5489105c95d7bdfaa87de410b34acd4275fcc9910c7be029d1ccd6a2b8df8/negativetime/agent-smith-plugin"
---

# Agent Smith

A Claude Code skill that **offloads bulky, repetitive work to a cheaper model — then has Claude
verify and finish it** — so you spend Claude's tokens on judgment, not grunt work.

Gemini (or a local model) drafts the words: research, document digests, bulk extraction/transform,
plans, marketing copy, config boilerplate, first-draft code. Claude scopes the task, cross-checks
the output, and integrates it. The model drafts; **Claude verifies.** Nothing the model writes is
treated as a deliverable until it's been reviewed.

> Named for the Matrix agent who copies himself across the system — this skill fans heavy work out
> to a fleet of model "copies" while the One keeps the judgment.

## What it's good for

- **Web research** with source links (Gemini's Google Search grounding)
- **Digesting big inputs** — summarize/extract/classify long PDFs, transcripts, logs, CSVs
- **Bulk transforms** — classify or rewrite many records
- **First drafts** — plans, proposals, marketing copy, config/IaC boilerplate, code + tests

It is **not** for short/interactive work, correctness-critical debugging, or the *execution* half of
a task (deploying, committing, posting) — those stay…
