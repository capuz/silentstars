---
repo: "CheckPickerUpper/skills"
name: "skills"
description: "Agent skills for correctness-first engineering."
readmeQualityOk: true
url: "https://github.com/CheckPickerUpper/skills"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["agent-skills", "claude-code", "codex", "pizza1", "skills-sh"]
stars: 6
forks: 0
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-06-12T04:27:37Z"
lastCommitAt: "2026-10-19T20:00:43Z"
lastReleaseAt: "2026-10-05T15:28:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 47
maintainers: ["CheckPickerUpper", "claude", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/031ef3be6d3531185daeb14bc2ab77ec6fffebd0d9e1c7c36b6f6202a787bfe1/CheckPickerUpper/skills"
---

# Skills

Agent skills for correctness-first engineering and clear technical judgment.

These skills are tailored toward real engineers, but still usable for vibe coders.

## Quickstart

```bash
npx skills@latest add CheckPickerUpper/skills
```

Install everything without prompts:

```bash
npx skills@latest add CheckPickerUpper/skills --all
```

Use one skill without installing:

```bash
npx skills@latest use CheckPickerUpper/skills@pizza1
```

## Reference

### Engineering

Skills for code, architecture, APIs, and design decisions, with an emphasis on correctness and simplicity.

- **[antimatter-code-quality-review](https://github.com/CheckPickerUpper/skills/blob/HEAD/skills/engineering/antimatter-code-quality-review/SKILL.md)** — Deep code-quality and pre-merge review of a commit, PR, branch, or diff. Audit correctness, intent, naming, cohesion, types, boundaries, control flow, duplication, cost, allocation, and generalization. Check predictability: does a feature or fix create a second way to perform a capability the codebase already has? Compare existing implementations, reuse or extend sound patterns, and extract shared behavior without letting one feature own the abstraction…
