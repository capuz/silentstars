---
repo: "oleksandrdubyna88/dew_flow_conventions"
name: "dew_flow_conventions"
description: "One copy of every cross-repository rule for AI-agent sessions, mounted as a git submodule in five repos and enforced by CI pin checks."
readmeQualityOk: true
url: "https://github.com/oleksandrdubyna88/dew_flow_conventions"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["ci", "claude-code", "conventions", "engineering-practices", "git-submodule"]
stars: 14
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-16T09:09:34Z"
lastCommitAt: "2026-11-04T13:05:35Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 33
maintainers: ["oleksandrdubyna88", "oleksandrdubyna-create", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1369169c7cb4ae2cf75c2b7b01840939ae23d89280a4f3e6c849d19140d177a/oleksandrdubyna88/dew_flow_conventions"
---

# dew_flow_conventions — shared Claude Code and Codex rules

One canonical body per rule, with applicability in that file's YAML frontmatter.
`AGENTS.md` directs both agents to the shared entry and project rules; `CLAUDE.md`
contains only `@AGENTS.md`. The resolver selects the same sources for both agents.
This is advisory instruction delivery, not enforcement of model behavior.

The source repository uses this setup now. Consumer migration from `.claude/rules/shared`
to `.agents/conventions` is in progress; see [the plan](https://github.com/oleksandrdubyna88/dew_flow_conventions/blob/HEAD/todo/PLAN_shared_rules_claude_codex.md).
Existing consumers keep their current pins until migration is verified. Do not mount this
new checkout wholesale under Claude's automatic rules tree.

Run `npm ci --ignore-scripts`, `npm test`, `npm run check`. For selected sources:
`node tools/rules.mjs explain --repo . --task policy --file ENTRY.md`.
See [ENTRY.md](https://github.com/oleksandrdubyna88/dew_flow_conventions/blob/HEAD/ENTRY.md) for complete reads and [module_rules.md](https://github.com/oleksandrdubyna88/dew_flow_conventions/blob/HEAD/research/module_rules.md)
for schema, limits,…
