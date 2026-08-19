---
repo: "agent-ix/quoin"
name: "quoin"
description: "Spec-driven development for Claude Code — author validated, ISO/IEC/IEEE 29148-aligned specs, then plan and build against them."
readmeQualityOk: true
url: "https://github.com/agent-ix/quoin"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [76, 21]
topics: ["agent-ix", "agentic-engineering", "ai", "claude", "cli", "codex", "coding", "documentation", "iso-29148", "requirements"]
stars: 14
forks: 0
openIssues: 8
closedIssues: 30
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-14T22:45:54Z"
lastCommitAt: "2026-08-19T04:06:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 43
maintainers: ["kreneskyp", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/66ae56050979db1b88210251861e165b48c3d9e6851471a6f32ce24f71bcc05e/agent-ix/quoin"
---

</p>

# Quoin

`quoin` is a bundle of **Quire modules**, **agent skills**, and **workflows** for
authoring [ISO/IEC/IEEE 29148](https://www.iso.org/standard/72089.html)-aligned software specifications and other technical
documents. It includes prepackaged modules for the spec vocabulary and ideation/authoring/review/planning
workflows agents need to write and validate specs directly as Markdown.

`quoin` is built on the [Quire](https://github.com/agent-ix/quire-rs) document standard and validation engine by Agent-IX.

> **Why:** AI agents write code fast but drift from vague intent. Quoin makes the spec the source of truth — your agent authors a validated, traceable spec first, then plans and builds against it.

## How

In Claude Code, Codex, or the coding agent of your choice:

#### 1. Ideate & Specify

Ideate, then pass your idea to `/specify`. A `specification` containing `user stories`, `functional requirements`,
`stakeholder requirements`, `non-functional requirements`, and other artifacts will be created.

```
> /specify an electron app for tracking spice production
```

#### 2. Spec Review

Use `/spec-review` for agent-assisted review. Multiple analysis tasks will run in…
