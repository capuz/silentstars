---
repo: "shinpr/galley"
name: "galley"
description: "Local-first task runner for Claude Code and Codex with supervised execution and PR handoff."
url: "https://github.com/shinpr/galley"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["ai-agents", "automation", "claude-code", "codex", "daemon", "developer-tools", "git-worktree", "local-first", "openai", "orchestration"]
stars: 11
forks: 0
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-07T22:34:51Z"
lastCommitAt: "2026-06-26T23:40:15Z"
lastReleaseAt: "2026-05-14T06:04:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 55
maintainers: ["shinpr"]
openGraphImageUrl: "https://opengraph.githubassets.com/5dd844985ae08627833c8d0246967158cd2c9638183c4de1b1432976977af5f3/shinpr/galley"
---

# Galley

Galley is a local runtime for supervised AI coding tasks.

It runs Claude Code or Codex in a git worktree, records evidence for each attempt, and asks a supervisor model to accept, retry, or escalate the result before the work is treated as done.

Galley is for tasks where the output should be inspectable later: the request, scope, checks, diffs, and supervisor verdict stay on disk.

Galley builds Galley: roughly half of this repository's merged implementation PRs were created from Galley-managed task branches.

[Browse Galley-built PRs](https://github.com/shinpr/galley/pulls?q=is%3Apr+is%3Amerged+head%3Aagent)

## Quick Start

Use the Galley skill to set up each repository. It installs or verifies the CLI, prepares repository profiles, drafts valid task YAML, and queues tasks only after approval.

Claude Code:

```text
/plugin marketplace add shinpr/galley
/plugin install galley@galley-tools
/reload-plugins
/galley:galley Set up Galley for this repository.
```

Codex:

```sh
codex plugin marketplace add shinpr/galley
```

Then start or return to Codex, open the plugin picker, install `Galley`, and ask the skill to set up the repository:

```text
/plugins
$galley Set up…
