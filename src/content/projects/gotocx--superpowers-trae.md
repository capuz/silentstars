---
repo: "gotocx/superpowers-trae"
name: "superpowers-trae"
description: "TRAE migration of obra/superpowers with rules, skills, and memory setup guidance"
url: "https://github.com/gotocx/superpowers-trae"
language: "JavaScript"
languages: ["JavaScript", "PowerShell"]
languagePcts: [38, 21]
stars: 43
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-27T03:02:07Z"
lastCommitAt: "2026-07-01T07:04:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 11
maintainers: ["gotocx"]
openGraphImageUrl: "https://opengraph.githubassets.com/c99f491bd05f891e4b6371e3e1e823e321b33ce1d3eecc3297f659ef71395eb4/gotocx/superpowers-trae"
---

# Superpowers for Trae

Trae project package for the Superpowers agentic workflow. The install payload is `./.trae`.

This repository is a bootstrap package, not a runtime dependency. After installation and cleanup, the target project's `.trae` directory must contain only:

- `hooks.json`
- `hooks/`
- `rules/`
- `skills/`

No separate memory setup is required. The persistent Superpowers reminders live in `.trae/rules/superpowers.md`.

## AI install prompt

Open the target project in Trae, clone this repository if needed, then give the agent this prompt:

```text
Install Superpowers for Trae into the current project.

Use the cloned `gotocx/superpowers-trae` repository as the bootstrap source. Follow `README.md` and `INSTALL.md` as instruction documents only; do not execute Markdown files.

Before copying or deleting anything, compute and report:
- source_root
- target_root
- target_trae_path

Then follow the install gates:
1. Detect whether this is bootstrap mode, nested mode from target root, or nested mode while standing inside the bootstrap clone.
2. Verify `target_trae_path` is the real target project's `.trae`, not the bootstrap clone's `.trae`.
3. Copy or refresh rules,…
