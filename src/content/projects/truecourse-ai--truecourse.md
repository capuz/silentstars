---
repo: "truecourse-ai/truecourse"
name: "truecourse"
description: "AI-powered architecture analysis and code intelligence. Detects circular deps, layer violations, dead modules, and more. Web UI + CLI."
url: "https://github.com/truecourse-ai/truecourse"
homepage: "https://truecourse.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["ai", "architecture", "code-analysis", "code-quality", "developer-tools", "linter", "static-analysis", "typescript", "javascript", "python"]
stars: 468
forks: 42
openIssues: 70
closedIssues: 306
watchers: 1
contributors: 3
recentReleases: 7
createdAt: "2026-03-13T03:52:40Z"
lastCommitAt: "2026-06-24T00:21:31Z"
lastReleaseAt: "2026-04-14T05:46:34Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 95
undervaluedScore: 29
maintainers: ["mushgev", "DoilLee2222"]
openGraphImageUrl: "https://opengraph.githubassets.com/43b50326b4eb964e5bf2c6c4d59534b361be4a91db4ffdf7677fee2048ae361d/truecourse-ai/truecourse"
discussionCount: 0
---

</p>

  <strong>AI Architecture & Code Intelligence Platform</strong>
</p>

  <em>1,500+ deterministic rules, 100 LLM rules. JavaScript, TypeScript, Python, C#.</em>
</p>

</p>

TrueCourse catches two classes of defect, through two independent tools — use either on its own or both together:

- **Code defects** (`truecourse analyze`) — from the categories linters cover (unused code, style, missing types) through to ones they don't reach: circular dependencies, layer violations, dead modules, race conditions, security anti-patterns, performance footguns. Tree-sitter analysis combined with LLM review.
- **Business-logic drift** (`truecourse verify`) — when the implementation no longer matches what the docs say it should do. Wrong response codes, missing entity fields, illegal state transitions, bypassed auth, silently-dropped effects, formulas that have lost an input. TrueCourse extracts a contract from your PRDs/ADRs/READMEs and checks the code against it.

Both store their results under `.truecourse/` and surface them in a shared [dashboard](#dashboard-web-ui) for human review, with plain-text CLI output an agent can read directly.

</p>

Jump to: **[1.…
