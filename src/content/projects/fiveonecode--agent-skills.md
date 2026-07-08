---
repo: "fiveonecode/agent-skills"
name: "agent-skills"
description: "Curated list of skills our agents use"
readmeQualityOk: true
url: "https://github.com/fiveonecode/agent-skills"
language: "Shell"
languages: ["Shell", "Python", "Ruby"]
languagePcts: [48, 29, 20]
stars: 19
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-10T17:10:36Z"
lastCommitAt: "2026-07-08T05:42:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 31
maintainers: ["VladimirBrejcha"]
openGraphImageUrl: "https://opengraph.githubassets.com/4001f1b6849d61c8a4be7ad27d2223cfa3d1490aa699e0268a1b47aa62194e85/fiveonecode/agent-skills"
---

# agent-skills

A curated set of reusable agent skills for Apple platform development, mobile
tooling, engineering harnesses, marketing workflows, and adjacent services. Each
skill is self-contained in a top-level directory with a `SKILL.md` that defines
when and how to use it.

## Registry Contract

This repository is the public source and policy registry for reusable 51Code
agent skills. The registry is active as the source and policy layer, but
coverage is currently partial: skills listed in `skills.registry.yaml` have one
source owner, lock/version metadata, and registry-defined adapter coverage
metadata. The shared `~/.agents/skills` manager path is the current reviewed
baseline for Codex and OpenCode; `code-review`, `harness-engineering`,
`spec-creation-updating`, `ios-xcodegen`, and `xcode-build` also have narrow
reviewed Claude Code baselines through `~/.claude/skills`. Other Claude Code
skills and repo-local consumers still include planned or manual-review coverage
until follow-up profile and coverage PRs land. Other top-level `SKILL.md`
folders remain unclassified backlog until follow-up coverage PRs register them.

The contract is documented in:

- [Registry…
