---
repo: "spietrza/taskcell"
name: "taskcell"
description: "Taskcell: a self-hosted software factory. Each task is built by a coding agent in its own sealed sandbox cell, passes your gates and a second-model review, and lands as a pull request."
readmeQualityOk: true
url: "https://github.com/spietrza/taskcell"
homepage: "https://taskcell.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["ai-agents", "automation", "autonomous-agents", "claude", "devtools", "typescript", "claude-code", "codex", "coding-agents", "sandbox"]
stars: 5
forks: 0
openIssues: 47
closedIssues: 400
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-05T15:36:20Z"
lastCommitAt: "2026-11-25T03:14:30Z"
lastReleaseAt: "2026-10-18T10:30:12Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 66
maintainers: ["taskcell[bot]", "spietrza", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1260531142/08ed4373-d9b2-4b94-9b61-b948e1fdecd0"
---

It takes tasks from GitHub, GitLab or Linear, builds them with AI agents in a sealed sandbox, and opens pull requests for a human to review.

## What it is

Taskcell turns a well-written ticket into a reviewed pull request. You label an issue; Taskcell checks that the ticket is clear enough, writes a tech spec if needed, runs a coding agent inside a locked-down Docker container, has a second model review the change, runs your tests, and opens a PR. It runs on your own machine, a server, or GitHub Actions, with your own model subscription or API key. The agent is treated as untrusted: it never holds your repository token, and nothing it writes reaches your repository without passing host-side checks and a human review.
