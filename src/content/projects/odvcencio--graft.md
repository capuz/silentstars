---
repo: "odvcencio/Graft"
name: "Graft"
description: "Structural version control powered by gotreesitter — entity-level merge, diff, and commit indexing for Git"
url: "https://github.com/odvcencio/Graft"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 44
forks: 3
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-02-23T20:20:35Z"
lastCommitAt: "2026-06-25T06:42:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 21
maintainers: ["odvcencio"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcb9caabce538d413448f2bcac2eda3a110aacaeaddf0b8f5687dbec0994d32b/odvcencio/Graft"
---

# graft

Structural version control with built-in coordination and governed execution.

Git treats source files as bags of lines. Two developers add different functions to the same file — conflict. Both add different imports — conflict. One renames a variable, another adds a function nearby — conflict. None of these are real conflicts.

**graft** is a standalone version control system that decomposes source into structural entities via [gotreesitter](https://github.com/odvcencio/gotreesitter) — functions, methods, classes, imports — and merges at that level. Independent additions merge cleanly. Import blocks get set-union merged. Only genuine semantic overlaps produce conflicts.

That structural recording point is what makes the rest of graft possible. Once changes are recorded against entities instead of line hunks, graft can coordinate work on real code objects, record governed decisions around them, and give agents a shared runtime that is tied directly to version control instead of bolted on beside it.

## Agent Skill

Agents working with Graft should use the [using-graft](https://github.com/odvcencio/m31labs-skills/blob/main/skills/using-graft/SKILL.md) skill.

```
# Git:…
