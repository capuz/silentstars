---
repo: "digitaldrywood/detent"
name: "detent"
description: "Detent is board-driven agentic work orchestration, shipped as a single Go binary — it watches a GitHub Projects board and runs each ready issue through an isolated Git worktree, a coding agent, your validation gate, and a serialized merge train, live on web and terminal dashboards."
readmeQualityOk: true
url: "https://github.com/digitaldrywood/detent"
homepage: "https://digitaldrywood.com"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["agentic-ai", "ai-agents", "automation", "cli", "codex", "coding-agent", "devops", "github-projects", "go", "golang"]
stars: 16
forks: 6
openIssues: 44
closedIssues: 1941
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-30T22:35:59Z"
lastCommitAt: "2026-10-21T20:00:03Z"
lastReleaseAt: "2026-06-19T16:27:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 54
maintainers: ["corylanou", "loganlanou"]
openGraphImageUrl: "https://opengraph.githubassets.com/097a96c200a53cd1bcf34c834da32c80be6a47aa2bf9acaa981e9e4b6e65cb32/digitaldrywood/detent"
---

# Detent

Detent runs your engineering process with coding agents. You write issues on a board; Detent hands each ready issue to an agent on a machine you control, checks the result against the gates you defined, and lands it. Many issues run at once, each in its own isolated workspace.

A **detent** is the catch that holds a moving part at a fixed position until it is deliberately released, like the click-stop on a dial. Detent holds each piece of work at a defined stop on the board and only lets it advance when a gate is cleared.

**[detent.build](https://detent.build)** has the product overview. **[cloud.detent.build](https://cloud.detent.build)** is Detent Cloud.

## Start with AI

Detent is meant to be set up by an agent. Paste this prompt into Codex or Claude Code from inside the repository you want Detent to work on:

```text
Help me set up Detent for this repository.

Treat https://github.com/digitaldrywood/detent (branch main) as the source of truth for Detent's docs. Read README.md and docs/cloud-onboarding.md from GitHub; do not clone Detent unless I ask. The repository in the current directory is the target, not Detent itself.

First ask whether I am using Detent Cloud…
