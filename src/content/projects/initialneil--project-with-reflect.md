---
repo: "initialneil/project-with-reflect"
name: "project-with-reflect"
description: "Claude Code meta-skill: turn each project/machine/device into a self-improving skill (log -> reflect -> improve)."
url: "https://github.com/initialneil/project-with-reflect"
language: "Shell"
languages: ["Shell", "Go Template"]
languagePcts: [51, 48]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-24T05:39:38Z"
lastCommitAt: "2026-06-29T07:21:59Z"
lastReleaseAt: "2026-06-24T10:13:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 49
maintainers: ["initialneil"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b203131161f29445f919dea3031e642ee1032ab6a40c379dbdd6ae0682d254e/initialneil/project-with-reflect"
---

# project-with-reflect

> A **self-distilling** meta-skill for Codex, Claude Code, and other AI coding agents. — Neil Z. Shao
>
> Best used with [Obsidian](https://obsidian.md) + plugins:
>
> - [Neat File Tree](https://github.com/initialneil/obsidian-neat-file-tree) — a cleaner, calmer file tree.
> - [Folder Notes](https://github.com/lostpaul/obsidian-folder-notes) — the `<folder>/<folder>.md` folder-note convention this skill optionally leans on (experiment records, evals, the per-workstream goal log).

Juggling **several projects at once**? Need to **remember** how to connect to **a handful of machines** and
**services**? Tired of **rewriting the same long prompts** and **re-explaining** the same project to your agent?

It manages each **project** for you — worktrees, logs, reflect, a growing **long-term knowledge
base** — and everything you **operate** (a *connection*), each becoming a callable `/<name>` skill:

- **Servers** — ssh in to deploy / tail logs / run commands.
- **Training boxes** — GPU machines: run training / `nvidia-smi`, with their quirks remembered (e.g. `nvidia-smi -pl 300` after a reboot).
- **Devices** — USB/serial flash targets (dev boards…): flash /…
