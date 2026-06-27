---
repo: "Space-Dinosaurs/DinoStack"
name: "DinoStack"
description: "Self-triggering, skill-based agentic methodology: agents, skills, commands, hooks and protocols"
url: "https://github.com/Space-Dinosaurs/DinoStack"
homepage: "https://docs.dinostack.ai"
language: "Python"
languages: ["Python", "JavaScript", "Shell"]
languagePcts: [37, 31, 30]
stars: 12
forks: 1
openIssues: 7
closedIssues: 6
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-04-07T11:35:01Z"
lastCommitAt: "2026-06-27T00:47:15Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 89
undervaluedScore: 45
maintainers: ["tyson-solara6", "bloodf", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/736b3c0dff24f78ad37150763be5f08a91f076e76de2e8b88e6cf2f526cd1dee/Space-Dinosaurs/DinoStack"
---

</p>

# DinoStack

A portable package of the agentic engineering protocol for AI-assisted software development. It provides a structured delegation model, risk classification, adversarial review loops, code quality gates, git workflow conventions, and named agent definitions.

This system is designed to evolve. As AI tooling matures and teams discover better patterns, the rules, agents, and workflows change with them. Nothing here is final - treat it as a living system, not a finished product.

**Live docs:** https://docs.dinostack.ai/

## Updating

Run `agentic-update` from anywhere, no arguments.

| Path | Command | When |
|---|---|---|
| Shell (recommended) | `agentic-update` | Default; from any directory, no TTY |
| In-session | `/pull-and-install` | Inside Claude Code, any project |
| TUI | `./update.sh` | Interactive adapter selection |
| CI / scripts | `git pull && ./install-all.sh` | Non-interactive |
| Repair drift | `agentic-doctor --fix` | Fix broken symlinks/hooks (e.g. after moving the repo) |

Bootstrap is guarded against creating a second clone - if an existing install is detected it aborts and prints the update-in-place command.

Full details:…
