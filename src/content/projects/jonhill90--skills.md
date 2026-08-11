---
repo: "jonhill90/skills"
name: "skills"
description: "Portable Agent Skills for consistent workflows across coding harnesses."
readmeQualityOk: true
url: "https://github.com/jonhill90/skills"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [74, 26]
topics: ["agent", "loop", "memory", "skill", "skills", "dotfiles", "harness-engineering", "workflow"]
stars: 8
forks: 3
openIssues: 1
closedIssues: 29
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-06-01T15:55:36Z"
lastCommitAt: "2026-08-11T04:50:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 81
maintainers: ["jonhill90"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e099661a5ee1459e6b37bfa0b750654ce902fcb411ac241b5d7543e519bb8c8/jonhill90/skills"
---

# skills

Jon Hill's public collection of portable [Agent
Skills](https://agentskills.io/specification) — self-contained,
model- and harness-agnostic instructions an AI coding agent loads on
demand. Every skill here is individually installable; nothing in this
repository is specific to any one harness, and nothing here depends on
private tooling or evidence.

## Install

Browse the collection:

```bash
npx skills add jonhill90/skills --list
```

Install one or more specific skills into the current project:

```bash
npx skills add jonhill90/skills --skill tmux --skill github-cli
```

`npx skills` pins installs by content hash in `skills-lock.json`, so a
project's skill set stays reproducible. See the [skills
CLI](https://www.npmjs.com/package/skills) for the full command
reference.

## Skills in this collection

| Skill | Purpose |
|---|---|
| [`close-the-loop`](https://github.com/jonhill90/skills/blob/HEAD/skills/close-the-loop/) | Confirm you have everything needed to finish a change before starting it |
| [`create-skill`](https://github.com/jonhill90/skills/blob/HEAD/skills/create-skill/) | Design, create, and validate portable Agent Skills |
|…
