---
repo: "sackheads/iris"
name: "iris"
description: "My own stupid local harness"
readmeQualityOk: true
url: "https://github.com/sackheads/iris"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
stars: 6
forks: 2
openIssues: 29
closedIssues: 411
watchers: 1
contributors: 9
recentReleases: 1
createdAt: "2026-07-09T23:25:11Z"
lastCommitAt: "2026-11-07T22:28:36Z"
lastReleaseAt: "2026-10-09T00:57:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 60
maintainers: ["bnaylor"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2f63de27aa80662f111a96aa777155d6448782e2e26f41f27b2c4c26798cf0f/sackheads/iris"
---

# Iris

Iris is a native macOS AI assistant: a compiled, local-first agent harness that sits between your Mac and the cloud models (Gemini, Claude and OpenAI).  It's one signed app, built on Apple's own frameworks - no Node, no Python, no `npm install`, nothing your endpoint management is likely to block.  If your work laptop won't run the usual agent tools, it will probably run this.

## Why it's worth a look

- **It does real work, and stops when you say so.**  Shell commands can run in a lightweight Linux VM (`apple/container`) instead of on your Mac, and Stop or a timeout ends the command and everything it started, not just the shell.  [Details](https://github.com/sackheads/iris/blob/HEAD/docs/features.md#subagent-sandboxing)
- **Goals it can't fake finishing.**  `/goal` drafts a contract (what "done" means) for you to approve, then works on it on its own.  An independent grader checks the result before Iris is allowed to call it done, and anything only a person can judge comes back to you.  [Details](https://github.com/sackheads/iris/blob/HEAD/docs/features.md#deterministic-done-gates)
- **Background jobs.**  Run a prompt on a cron schedule, or whenever a folder changes.…
