---
repo: "graphanov/open-scaffold"
name: "open-scaffold"
description: "Repo-native work record for AI-assisted work: plans, evidence, human gates, and clean agent handoffs."
readmeQualityOk: true
url: "https://github.com/graphanov/open-scaffold"
homepage: "https://www.npmjs.com/package/open-scaffold"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["ai-agents", "ai-workflows", "developer-tools", "github-template", "human-in-the-loop", "typescript"]
stars: 18
forks: 2
openIssues: 9
closedIssues: 36
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-12T07:10:35Z"
lastCommitAt: "2026-10-09T10:50:05Z"
lastReleaseAt: "2026-05-21T14:45:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 32
maintainers: ["graphanov", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d845a5b9279acd60ba3ac26309479d0fca79accbf0601ca3cb3107c5766da022/graphanov/open-scaffold"
---

# open-scaffold

**Your AI agent's work belongs in your repo, not its chat history.**

Ambient work records, compact handoffs, and bounded review/gate checks from cheap and local models — for AI-assisted work that needs evidence, recovery, and human gates, with pilot-grade proof boundaries.

## The problem

You pay frontier prices for review, status checks, and "where were we" because nothing cheaper can be trusted. Cheaper models guess; when a chat ends, the work's memory dies with it; the next session reconstructs from a scrollback buffer and invents what it can't recover.

## What it does

Open Scaffold keeps a repo-native work record — git-tracked, observed-fact files about what your agents did — and turns it into three things:

- **Record (ambient).** Extracted from observed facts — transcripts, receipts, test results — costing the working model nothing. `osc capture --from claude-code|codex` reads a finished session into a record with no worker cooperation. Add a plan and evidence files to check claims against intent; feedback and lessons carry forward instead of being relearned.
- **Handoff.** `osc handoff` compiles the record into a budgeted, secret-redacted packet so the…
