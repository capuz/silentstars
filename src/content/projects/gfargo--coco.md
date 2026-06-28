---
repo: "gfargo/coco"
name: "coco"
description: "AI-powered Git Assistant for CLI"
url: "https://github.com/gfargo/coco"
homepage: "https://coco.griffen.codes"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["cli", "coco", "git", "git-commit", "langchain", "node", "langchain-typescript", "ollama", "ai-git", "anthropic"]
stars: 10
forks: 0
openIssues: 3
closedIssues: 173
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-07-06T16:05:30Z"
lastCommitAt: "2026-06-28T02:00:51Z"
lastReleaseAt: "2023-11-15T17:11:08Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 75
maintainers: ["gfargo", "gfargo-horizon-agent[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/663130268/2fc2b7a1-2626-4f9a-9938-a5b410db1b0e"
fundingLinks: ["GITHUB:https://github.com/gfargo"]
discussionCount: 0
---

# `coco`

**AI commits, changelogs, code review, PR creation, and a full keyboard-driven git workstation — all from one CLI.** `coco commit` turns your staged diff into a Conventional-Commits-ready message. `coco commit --split` breaks a large staging area into logical multi-commit groups. `coco changelog` writes your release notes. `coco review` catches issues before they ship. `coco pr create` generates a title and body and opens it on your forge. And `coco ui` ties it all together in a terminal workstation with 16 views, chord navigation, and one-keystroke workflows. Seven AI providers — including fully local Ollama — on GitHub, GitHub Enterprise, GitLab, and Bitbucket.

> The package is **git-coco**; the command is `coco`.

```bash
git add .
coco commit          # AI writes the message from your staged changes
```

That's the core. Everything else — changelogs, code review, PRs, and the workstation — is the same engine pointed at more of your git workflow.

## Why coco

- 🤖 **Smart commits** — contextual AI messages from your staged diff, with Conventional Commits and commitlint validation built in
- 🏠 **Local-first** — run fully offline with Ollama (no API costs, nothing…
