---
repo: "kuhlman-labs/fishhawk"
name: "fishhawk"
description: "Open Source software factory."
readmeQualityOk: true
url: "https://github.com/kuhlman-labs/fishhawk"
homepage: "https://kuhlman-labs.github.io/fishhawk/"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["devops", "opensource", "sdlc", "workflow", "agents", "claude", "codex", "golang", "software-factory"]
stars: 10
forks: 0
openIssues: 893
closedIssues: 2068
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-30T14:24:55Z"
lastCommitAt: "2026-11-05T14:05:35Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 50
maintainers: ["fishhawk-dev[bot]", "kuhlman-labs", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/03fea1d889e9d1626fc695e382ac7f2312f8f6f17ef1c30373904ce13c951b2f/kuhlman-labs/fishhawk"
discussionCount: 0
---

# fishhawk

The governed, auditable workflow for agent-driven software development.

Fishhawk is an opinionated workflow engine for agent-driven software changes: it defines the stages a change moves through (plan → implement → review), enforces policy on what an agent can and cannot do, gates the work behind human approvals, and keeps an immutable, signed audit trail of every plan, approval, and outcome. It is tool-agnostic and agent-agnostic — it is **not** a coding agent, a CI/CD platform, or a general-purpose workflow engine.

It is built for one developer to run a repository the way a team would. You are the captain: you set direction, decide how much the crew of agents may decide and where, and rule on what they escalate. The crew plans, implements, reviews, and — increasingly — handles what a team does before an issue exists and after a merge. Standing orders and the record of past decisions live in the repository, so the next person to pick it up inherits how it was run. See [`.fishhawk/charter.md`](https://github.com/kuhlman-labs/fishhawk/blob/HEAD/.fishhawk/charter.md) §1–§2 for the current direction.

Fishhawk develops itself through Fishhawk: since Day 22 of the v0…
