---
repo: "VoKhoiNhon/open-skill-standard"
name: "open-skill-standard"
description: "Open, agent-agnostic standard and router for Agent Skills across 28 IT roles - integrates superpowers, BMad Method, spec-kit, codegraph and more."
readmeQualityOk: true
url: "https://github.com/VoKhoiNhon/open-skill-standard"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["agent-skills", "ai-agents", "claude-code", "developer-tools", "mcp", "skills", "spec-driven-development"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-09-29T04:49:20Z"
lastCommitAt: "2026-09-29T10:04:47Z"
lastReleaseAt: "2026-09-29T09:48:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 57
maintainers: ["VoKhoiNhon"]
openGraphImageUrl: "https://opengraph.githubassets.com/21d9e19f307868f04122d89dd87a910df212801d7d780c272b6f97e9725dfb26/VoKhoiNhon/open-skill-standard"
---

# Open Skill Standard

**One router, one skill graph, 28 IT roles.** An open, agent-agnostic standard for choosing the right Agent Skills for a task, and a reference implementation that ties together superpowers, BMad Method, spec-kit, codegraph, Anthropic's skills and more, without copying any of them.

**English** · [Tiếng Việt](https://github.com/VoKhoiNhon/open-skill-standard/blob/HEAD/README.vi.md)

[Specification](https://github.com/VoKhoiNhon/open-skill-standard/blob/HEAD/spec/SPEC.md) · [Contributing](https://github.com/VoKhoiNhon/open-skill-standard/blob/HEAD/CONTRIBUTING.md)

## Why

Coding agents now load skills from many independent projects. A typical setup has 100+ skills that overlap: three build workflows, several reviewers, two kinds of brainstorming. Two facts make that hard:

- Agents pick skills by matching descriptions, and overlapping descriptions make them load the wrong skill or miss the right one.
- Claude Code budgets the whole skill listing at about 1% of the context window and drops the descriptions of the least-used skills first ([docs](https://code.claude.com/docs/en/skills)), so matching gets worse exactly when you install more.

Open Skill Standard…
