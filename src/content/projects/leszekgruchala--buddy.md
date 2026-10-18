---
repo: "leszekgruchala/buddy"
name: "buddy"
description: "Plan the work. Control the context. Ship with proof."
readmeQualityOk: true
url: "https://github.com/leszekgruchala/buddy"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [53, 29]
topics: ["agent-skills", "ai-engineering", "ai-sdlc", "claude-code", "codex", "cursor", "developer-workflow", "adlc"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-24T13:25:28Z"
lastCommitAt: "2026-10-18T08:12:27Z"
lastReleaseAt: "2026-09-29T09:01:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 54
maintainers: ["leszekgruchala", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5c2ff9d837a4f2578c5a2831dae700b65d4751caa4edfbd17a4a0d40953a9aa/leszekgruchala/buddy"
discussionCount: 0
---

A development workflow plugin for Codex, Claude Code, and Cursor that matches the work to the right planning, review, and verification steps.

---

Ask Buddy to `Develop customer search with filters and pagination` and it coordinates the work from research and specification through implementation, verification, and independent review. For a tiny, contained edit, it keeps the work direct and lets your host make the change without an extra review stage. As the change grows or carries more risk, Buddy adds the planning and review steps that help catch problems.

Each stage writes its result to a worklog in your repository, so the next stage starts from facts on disk instead of a long chat history. A narrow fix goes straight to implementation; larger or unclear work gets research and a spec first. Buddy scales review and verification to the change: trivial edits need no independent review, small changes get one balanced review, and substantial changes use the full workflow.

## Quick start

Install Buddy in Claude Code:

```bash
claude plugin marketplace add leszekgruchala/buddy@main
```

```bash
claude plugin install buddy@buddy
```

Run `/reload-plugins` or restart Claude Code, then…
