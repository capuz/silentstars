---
repo: "sh1nj1/plan42"
name: "plan42"
description: "Workspace for humans and AI agents. Every block is a doc, a task, a discussion, and agent context — one object, not three copies your agent has to choose between. Context is lexically scoped: pin a rule at the root, every task below inherits it. Self-hosted, MCP-native."
readmeQualityOk: true
url: "https://github.com/sh1nj1/plan42"
homepage: "https://collavre.com"
language: "Ruby"
languages: ["Ruby", "JavaScript"]
languagePcts: [60, 24]
topics: ["collaboration", "notion-alternative", "project-management", "self-hosted", "agent-context", "ai-agents", "hierarchical", "knowledge-base", "llm", "mcp"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-05-22T08:56:15Z"
lastCommitAt: "2026-08-09T04:46:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 70
maintainers: ["sh1nj1", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/02ae13fbd265b9fab95c8741dee64a3ae0c4c4e87814b5cf87e07aef57a802ab/sh1nj1/plan42"
---

# Collavre

**One living tree for docs, tasks, discussions, and AI agent context.**

Today those are three copies you keep in sync by hand, plus an agent wired to all of them
that still has to guess which one is true. A block in Collavre is all four at once — one
object. Pin a rule at the root and every task below it inherits it, for people and agents alike.

[**Live demo**](https://collavre.com) · [**Watch the 90-second demo**](https://collavre.com/landing#demo) · [Features](https://github.com/sh1nj1/plan42/blob/HEAD/docs/features_summary.md) · AGPL-3.0

---

## The problem

You write the same thing three times.

1. **The doc.** You write the spec.
2. **The tracker.** You retype it as tickets — and the link back to the paragraph it came from is never written down anywhere.
3. **The thread.** You explain it a third time in chat, where the decision scrolls away attached to nothing.

Then you bring in an agent. Nobody pastes context by hand anymore — you connect it over
MCP and it can read all three. But it reads three copies that have drifted apart, with no
record of how they relate, and no boundary telling it where this task ends. So it guesses,
from keywords, every single…
