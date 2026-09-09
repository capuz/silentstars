---
repo: "netresearch/jujutsu-workflow-skill"
name: "jujutsu-workflow-skill"
description: "Agent-safe version control with Jujutsu (jj) — jj for local change management, Git as the canonical remote/PR/CI/audit interface. Netresearch agent skill."
readmeQualityOk: true
url: "https://github.com/netresearch/jujutsu-workflow-skill"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["agent-skill", "ai-agent-skill", "claude-code", "coding-agents", "git", "jj", "jujutsu", "version-control"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 6
createdAt: "2026-06-22T22:47:47Z"
lastCommitAt: "2026-09-09T08:16:31Z"
lastReleaseAt: "2026-09-03T18:31:48Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 91
undervaluedScore: 56
maintainers: ["CybotTM", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b0a4c3f6a56d39cfd654944989af6c5456ebb659e2ccdc0959e45f91947d9f2/netresearch/jujutsu-workflow-skill"
discussionCount: 0
---

# Jujutsu Workflow

## What this skill solves

Coding agents are unreliable Git operators: they fold unrelated edits into one commit, lose work to `git reset` / `checkout` / `stash` / bad rebases, leave unclear branch state, and claim "done" without showing version-control status. This skill teaches agents to use **[Jujutsu (`jj`)](https://github.com/jj-vcs/jj)** — a Git-compatible VCS ([docs](https://docs.jj-vcs.dev/latest/)) — as the local change-management layer while keeping **Git** as the canonical collaboration, CI, PR, and audit interface.

- Safer, reversible edits via the `jj` operation log and undo instead of destructive Git recovery.
- Cleaner patches — small, reviewable changes with unrelated edits split before handoff.
- A Git-visible PR handoff that humans and CI can inspect with ordinary Git tools.

## Why jj beats pure Git for agentic coding (proven)

For speculative, iterative, multi-step agent work, jj is **superior to pure Git** — and this skill does not just assert it, it **proves** it with a runnable eval suite (`tests/superiority_evals.sh`, also run in CI) demonstrating four concrete wins:

- **Reversible discards** — `jj op restore` recovers abandoned work;…
