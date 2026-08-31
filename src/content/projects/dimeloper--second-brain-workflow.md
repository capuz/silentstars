---
repo: "dimeloper/second-brain-workflow"
name: "second-brain-workflow"
description: "Second brain workflow for developers — turn coding sessions into a growing, versioned knowledge base for Cursor/Claude Code, plus portable rule rendering across agents"
readmeQualityOk: true
url: "https://github.com/dimeloper/second-brain-workflow"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [70, 29]
topics: ["agentic-coding", "claude-code", "cursor", "developer-tools", "obsidian", "second-brain"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-03T07:46:36Z"
lastCommitAt: "2026-08-31T10:00:37Z"
lastReleaseAt: "2026-08-07T11:54:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 62
maintainers: ["dimeloper"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb599a0ee37f2f0d59e19d9e32e404832dd3815d665968b66613be472d4ecf12/dimeloper/second-brain-workflow"
---

# second-brain-workflow

**Your agent forgets everything at session end. This remembers only the parts
that turned out to be true.**

Everyone now has a `CLAUDE.md` or an `AGENTS.md`. Nobody has a lifecycle. Every
convention in a rules file was written once, at equal weight, and never
re-examined — so the file grows, gets skimmed, then ignored. This engine gives a
convention a maturity gradient instead: it starts as an `idea`, becomes
`trialing`, and only reaches `enforced` once you have actually re-applied it in
a few repos. Then you distill it into one short rule, and one source renders to
Cursor, Claude Code, and `AGENTS.md`.

The two artifacts, and the difference between them is the design. A **practice
note** is long-form: one convention, its evidence, and the repos it has held in,
as one file in the *vault*. It is read on demand, so length is cheap. A **rule**
is the distilled version: a few imperative lines, rendered into every repo you
onboard and loaded on relevant turns, so every line is charged against a
session budget. Notes accumulate; rules stay short. That
split is why the rules file stops growing. See
[Hot path and cold…
