---
repo: "hani-q/qstack"
name: "qstack"
description: "A personal stack of agent skills for reviewable planning, disciplined execution, and durable engineering lessons."
readmeQualityOk: true
url: "https://github.com/hani-q/qstack"
language: "HTML"
languages: ["HTML", "JavaScript", "CSS"]
languagePcts: [30, 25, 24]
topics: ["agent-skills", "ai-agents", "claude-code", "codex", "developer-tools"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-08-02T09:22:26Z"
lastCommitAt: "2026-09-03T08:14:06Z"
lastReleaseAt: "2026-08-07T17:41:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 47
maintainers: ["hani-q", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9edcaf1c467cd3a7a00f8fd944a78791f49ee1d53d4bffcd7841e0c186cf7aa/hani-q/qstack"
---

# qstack

Agent skills for planning work, executing it against the plan, and proving the
result. QStack installs 25 skills into Claude Code, Codex, and any harness that
reads `~/.agents/skills`, from one checkout that stays the source of truth.

## What this helps with

Coding agents are good at writing code and bad at everything around it. They
agree with a plan and then quietly build something else. They report success
from a clean compile. They rediscover, on every feature, a decision the team
already made six weeks ago and wrote down.

QStack answers those three failures with skills that leave evidence on disk:

**A plan you can review and cite.** `/qstack-plan-to-html` turns a Markdown
draft, or the chat you just had, into a numbered HTML document: a high-level
half for whoever is approving the work, a low-level half for the agent doing it.
Every clause has a `§` number, so review feedback is "§4.2 is wrong" rather than
"the second bit about caching". The document freezes when execution starts.

**Execution that cannot silently drift.** Both loops work the plan card by card,
keep a running `execution.md`, and ask how much independent adversarial review
to run before they…
