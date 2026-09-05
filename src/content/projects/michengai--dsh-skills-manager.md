---
repo: "MichengAI/dsh-skills-manager"
name: "dsh-skills-manager"
description: "DSH Skills Manager — 在 DeepSeek Harness 中统一加载并安全管理本机 Agent Skills · Load and safely manage local Agent Skills in DSH"
readmeQualityOk: true
url: "https://github.com/MichengAI/dsh-skills-manager"
homepage: "https://dsh-codex-desktop.micheng.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["deepseek", "deepseek-harness", "dsh", "dsh-plugin", "dsh-plugins"]
stars: 32
forks: 3
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-15T05:54:34Z"
lastCommitAt: "2026-09-05T07:49:07Z"
lastReleaseAt: "2026-08-28T00:29:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 49
maintainers: ["MichengAI"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1334830521/b3d34617-9aa5-4518-af6e-7eb0c5529ae8"
---

</p>

  # DSH Skills Manager

  **Load and safely manage skills from DSH and common local Agents**

  [简体中文](https://github.com/MichengAI/dsh-skills-manager/blob/HEAD/README.zh-CN.md) · [Changelog](https://github.com/MichengAI/dsh-skills-manager/blob/HEAD/CHANGELOG.md) · [Apache-2.0](https://github.com/MichengAI/dsh-skills-manager/blob/HEAD/LICENSE)

</div>

> DSH Skills Manager is a community-maintained DeepSeek Harness (DSH) plugin, not an official DeepSeek AI product.

## Features

- Discover and load user-level skills from `.agents`, CC Switch, Codex, Claude, Gemini, OpenCode, and Cursor into DSH.
- Discover project-level `.dsh/skills` and `.agents/skills` from active Session workspaces, grouped by project; every valid Skill can be enabled or disabled through non-mutating local policy.
- Persist every per-Skill toggle under `$DSH_HOME/skills-manager/state.json` without rewriting any source Skill file.
- Inspect Markdown bodies, frontmatter, invocation state, duplicate shadowing, and format diagnostics in a source-first UI.
- Create a user- or project-level DSH skill from Settings; conversational creation remains user-level and requires approval.
- Move user- and project-level…
