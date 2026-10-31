---
repo: "moq-dev/quest"
name: "quest"
description: "A quest log for your repo and your agents: plans as Markdown files, explicit dependencies, and reviewable Git changes. For Claude Code and Codex."
readmeQualityOk: true
url: "https://github.com/moq-dev/quest"
homepage: "https://kixel.quest"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["agent-skills", "ai-agents", "claude-code", "cli", "codex", "coding-agents", "git", "markdown", "project-planning", "roadmap"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-09-19T19:31:49Z"
lastCommitAt: "2026-10-31T19:01:30Z"
lastReleaseAt: "2026-10-07T21:03:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 57
maintainers: ["kixelated"]
openGraphImageUrl: "https://opengraph.githubassets.com/96feb5cb6f3c956d5bf4f7dac73c2a9fb25eb6aef88f619f4f4206ceaae61fe9/moq-dev/quest"
---

# Quest

**A quest log for your repo and your agents.**

Readable plans, explicit dependencies, and reviewable Git changes. Quest keeps
your plans in your repository, so you and your agents read, claim, and finish
the same work. Each **quest** is a Markdown file scoped to one pull request: its
goal, what has been decided, and what stands in the way. A small TypeScript CLI
checks the links and dependencies. Skills help Claude Code and Codex plan the
work and set out on it.

It grew out of [MoQ](https://github.com/moq-dev/moq). This is the standalone
version, being built for use in other repositories.

**Early days:** validation, readiness, init/uninstall, and the planning,
execution, merge, and export skills are here. Release binaries are still being
built.

## Every plan is a file

```markdown
# [S] Add a download button

## Goal

People can download their data as a CSV from the settings page.

## Plan

Use the export endpoint. Show progress and let the user retry a failed download.

## Required

- [CSV endpoint](https://github.com/moq-dev/quest/blob/HEAD/quest/m0/export.md) - the button needs something to call
```

That file sits in your quest log, a tree under `quest/`:

```text…
