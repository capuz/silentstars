---
repo: "infinri/Writ"
name: "Writ"
description: "Governance runtime for Claude Code. Enforces workflow gates at tool time, delivers the engineering rules relevant to the work, and preserves decision provenance across sessions."
readmeQualityOk: true
url: "https://github.com/infinri/Writ"
homepage: "https://infinri.github.io/Writ/docs/architecture/index.html"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["knowledge-graph", "python", "ai-coding", "claude-code", "rule-enforcement", "agent-tools", "developer-tools", "hybrid-search", "ai-agents", "claude-plugin"]
stars: 203
forks: 14
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2026-03-16T00:51:19Z"
lastCommitAt: "2026-09-19T02:24:40Z"
lastReleaseAt: "2026-08-15T01:10:02Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 34
maintainers: ["infinri"]
openGraphImageUrl: "https://opengraph.githubassets.com/a75c6c0f91832de3d83fb9645cfe287dad3d222692c607152df599e764a97477/infinri/Writ"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/infinri"]
discussionCount: 2
---

# Writ

**Claude Code can forget your rules. Writ can refuse the action.**

Writ is a governance runtime for Claude Code. It moves important engineering controls outside the model, where they can be enforced, retrieved, and remembered independently of what the model happens to keep in context.

* **Enforce.** Selected workflow boundaries run as code at tool time, so an action can be refused rather than discouraged.
* **Inform.** Rules reach the agent when they apply, based on the task, file, tool, and workflow phase in front of it.
* **Remember.** Approved plans, the rule IDs that governed them, changed files, and commits become connected provenance.

Most coding-agent systems ask the model to remember the process. Writ puts selected parts of the process around the model instead.

Those are mechanism claims, and you do not have to take them on faith. [`docs/pressure-runs/`](https://github.com/infinri/Writ/blob/HEAD/docs/pressure-runs/) holds adversarial runs against real Claude Code sessions, each with the prompt used, the full transcript, every enforcement decision as raw log lines, and a graded analysis of which rules held and which were bypassed, with the failures written up as…
