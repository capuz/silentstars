---
repo: "rafagomes/ai-workflow"
name: "ai-workflow"
description: "Spec-driven, trunk-based delivery workflow for Claude Code: agents build from the spec, a separate agent reviews the PR, you merge."
readmeQualityOk: true
url: "https://github.com/rafagomes/ai-workflow"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [54, 29]
topics: ["ai-agents", "claude-code", "claude-code-plugin", "code-review", "developer-tools", "llm", "spec-driven-development"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-08T19:49:53Z"
lastCommitAt: "2026-11-11T19:50:08Z"
lastReleaseAt: "2026-04-19T02:51:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 51
maintainers: ["rafagomes"]
openGraphImageUrl: "https://opengraph.githubassets.com/f43fb12c1ac4f7e71461bafad5825b01199747f7d710192f73387b0a224948fe/rafagomes/ai-workflow"
---

You decide <em>what</em> to build. Agents build it from the spec. A separate agent reviews it. You merge.

---

## Quick start

Requires [Claude Code](https://docs.anthropic.com/en/docs/claude-code) and the [`gh`](https://cli.github.com) CLI.

```bash
claude plugin marketplace add rafagomes/ai-workflow
claude plugin install wf@ai-workflow
```

Then, in any project:

```
/wf:spec rate-limiting                           # write the spec, with verification criteria
/wf:feature rate-limiting                        # implement it, with tests
/wf:commit                                       # logical conventional commits
/wf:pr                                           # draft PR → independent review → ready
```

That is the whole loop. Everything else in this README is detail.

## What you get

| Piece | What it means |
|---|---|
| **15 skills** | One per step, from the first product interview to the merged pull request. All namespaced `/wf:<name>`. |
| **A reviewer agent** | Read-only and fresh-context. It runs the project's checks itself and returns `PASS` or `FIX_REQUIRED`, plus the risk tier it assesses from the diff. Every behaviour-changing PR goes through it before it is marked…
