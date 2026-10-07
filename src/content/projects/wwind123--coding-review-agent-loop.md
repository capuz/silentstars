---
repo: "wwind123/coding-review-agent-loop"
name: "coding-review-agent-loop"
description: "Local Claude/Codex PR review loop using existing CLI subscriptions instead of model API keys"
readmeQualityOk: true
url: "https://github.com/wwind123/coding-review-agent-loop"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "automation", "claude-code", "cli", "code-review", "codex", "coding-agent", "developer-tools", "github-pr", "local-first"]
stars: 11
forks: 4
openIssues: 239
closedIssues: 522
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-26T06:01:06Z"
lastCommitAt: "2026-10-07T10:30:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 49
maintainers: ["wwind123"]
openGraphImageUrl: "https://opengraph.githubassets.com/16d06b06db6b4aea764797203ba3ec47f406a69d7b1fb7fccfb4f88c7ad03de0/wwind123/coding-review-agent-loop"
discussionCount: 7
---

# coding-review-agent-loop

`coding-review-agent-loop` is a local command-line orchestrator for GitHub code
review. One coding agent creates or updates a pull request, one or more other
agents review it, and the loop sends blocking feedback back to the coder until
the reviewers approve or the run reaches a clear stopping condition.

```text
GitHub issue, task, or PR
          |
          v
      coding agent  <-------+
          |                 |
          v                 |
     pull request           |
          |                 |
          v                 |
      reviewers ---- feedback
          |
          v
       approved  ->  optional CI wait and merge
```

The loop runs on your machine and uses the local `claude`, `codex`, `agy`,
`gemini`, and `gh` programs you have already authenticated. It does not require
you to put model API keys into this project. You only need the agent CLIs used
for the roles you select; you do not need to install every supported backend.

The project is alpha software. It can let coding agents edit repositories, run
commands, push branches, and write to GitHub. Start with a repository where you
can inspect and revert the results.

## Why Use…
