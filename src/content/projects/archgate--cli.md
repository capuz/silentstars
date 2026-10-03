---
repo: "archgate/cli"
name: "cli"
description: "Enforce Architecture Decision Records as executable rules — for both humans and AI agents"
readmeQualityOk: true
url: "https://github.com/archgate/cli"
homepage: "https://cli.archgate.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["adr", "architecture", "bun", "claude-code", "cli", "cursor", "npm"]
stars: 68
forks: 5
openIssues: 2
closedIssues: 47
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-23T16:40:08Z"
lastCommitAt: "2026-10-03T09:23:09Z"
lastReleaseAt: "2026-02-26T01:42:02Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 40
maintainers: ["rhuanbarreto", "renovate[bot]", "archgatebot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bff2c58f8ebe45824acea819a75ffe1d08536cf7866b8501c8187c5b5ecf4e2a/archgate/cli"
discussionCount: 1
---

# Archgate

**Enterprise-grade linting and guardrails for AI work.**

</div>

---

AI agents write code fast, but they don't know your rules. Archgate turns your team's decisions into executable checks: a lint step for architecture, conventions, and AI output. Your agents read the rules before writing code, and `archgate check` blocks what slips through. In CI, in pre-commit hooks, and inside every major AI coding tool.

**Write an ADR once. Enforce it everywhere.**

## How it works

Archgate has two layers:

1. **ADRs as documents**: markdown files with YAML frontmatter stored in `.archgate/adrs/`. Each ADR records a decision: what was decided, why, and what to do and not do.
2. **ADRs as rules**: each ADR can have a companion `.rules.ts` file that exports automated checks. Archgate runs these checks against your codebase and reports violations.

```
.archgate/
└── adrs/
    ├── ARCH-001-command-structure.md          # human-readable decision
    ├── ARCH-001-command-structure.rules.ts    # machine-executable checks
    ├── ARCH-002-error-handling.md
    └── ARCH-002-error-handling.rules.ts
```

When a rule is violated, `archgate check` reports the file, line, and which ADR was…
