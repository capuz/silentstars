---
repo: "kdy1/kdy1-scripts"
name: "kdy1-scripts"
description: "Personal agent skills"
readmeQualityOk: true
url: "https://github.com/kdy1/kdy1-scripts"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [71, 29]
stars: 34
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-08-24T03:37:48Z"
lastCommitAt: "2026-11-22T02:13:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 33
maintainers: ["kdy1"]
openGraphImageUrl: "https://opengraph.githubassets.com/08c3c018008766fb73b34663a3a846d99bd478d4b67cf0b5cf51b01e9d19d5ff/kdy1/kdy1-scripts"
fundingLinks: ["GITHUB:https://github.com/kdy1"]
---

# kdy1-scripts

A collection of standalone [T3 Chat skills](https://github.com/kdy1/kdy1-scripts/blob/HEAD/skills) for GitHub, product planning, writing, and UI-design workflows. Each directory under [`skills/`](https://github.com/kdy1/kdy1-scripts/blob/HEAD/skills) is a complete skill: its `SKILL.md` contains the workflow instructions and it may include scripts, references, or UI metadata.

## Included skills

| Skill | Purpose |
| --- | --- |
| `add-issue` | Investigate locally by default, inspect logs, repair confirmed regenerable state, and create evidence-backed GitHub or Linear issues for confirmed work. The Linear API key is stored once in the macOS Keychain, or on Linux in the Secret Service keyring (a mode-600 file when no keyring runs). |
| `review-pr` | Review a PR together with a human: the agent runs every check it can, reports results with evidence, and lists only what needs the human's judgment, access, or decision. |
