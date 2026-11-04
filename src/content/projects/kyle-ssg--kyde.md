---
repo: "kyle-ssg/kyde"
name: "kyde"
description: "A native home for coding agents — many Claude Code agents in their own git worktrees with live status, plus a light IDE and Git client to review and land their work. GPU-rendered, Rust, macOS + Linux."
readmeQualityOk: true
url: "https://github.com/kyle-ssg/kyde"
homepage: "https://kyle-ssg.github.io/kyde/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["ai-agents", "claude-code", "code-editor", "desktop-app", "developer-tools", "diff", "diff-tool", "diff-viewer", "git", "git-client"]
stars: 81
forks: 8
openIssues: 0
closedIssues: 38
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-06-22T09:12:09Z"
lastCommitAt: "2026-11-04T13:05:14Z"
lastReleaseAt: "2026-07-17T17:27:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 37
maintainers: ["kyle-ssg", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3dcf19ec8e5cb77f3f04fd3e24a2a31acb9e6e0f54f77bf49f52a4b94c59718a/kyle-ssg/kyde"
---

Run many Claude Code agents side by side, each in its own git worktree with live status. Then review what they wrote in a side-by-side diff, stage it hunk by hunk, resolve conflicts in a 3-way merge and commit. GPU-rendered, written in Rust, no Electron. macOS and Linux.

I don't know Rust.

Pre-AI I was doing thousands of commits a year from a full IDE. Now agents write most of the code, and my day is starting them, keeping track of which one needs me, and checking what they wrote before it lands. I was still doing that last part in the IDE's commit and diff view, one of the few things heavy enough to make me wait for a JVM to start.

So Kyde is that day in one app that opens instantly: agents in their own worktrees, with the commit view, side-by-side diff, 3-way merge and editor one click away.

## Why Kyde

* **Many agents, no collisions.** Each agent gets its own git worktree and branch, so parallel agents never trample each other's files. Live status shows which one is working, done, or waiting on you.
* **Issue to merged in one place.** Start a GitHub issue or review a PR and get a fresh worktree with an agent already briefed. Review its diff, stage hunks, commit and push,…
