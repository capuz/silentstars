---
repo: "ReviewStage/luke"
name: "luke"
description: "An open-source software factory"
readmeQualityOk: true
url: "https://github.com/ReviewStage/luke"
homepage: "https://tryluke.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 39
forks: 4
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-08-10T22:36:43Z"
lastCommitAt: "2026-11-02T17:53:04Z"
lastReleaseAt: "2026-08-23T22:21:01Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 37
maintainers: ["dastratakos", "charleslpan", "vespin-agent[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9799c51c6685e17d9e70bb26002578d4babfe2f8545122e274599dc5441a4cfd/ReviewStage/luke"
---

Vespin is a macOS app for planning a change with coding agents, handing it to
them to build, and reviewing what they ship.

**Status:** an early MVP. It runs on Apple silicon Macs with macOS 14 or newer,
and in a browser at [vespin.dev/app](https://vespin.dev/app). It is free.

You describe the change to a coding agent, typed or dictated. It reads the
repository, asks about what you left open, and writes the plan as a design doc
as you go. Press **Start** and a coding agent implements the plan in a cloud
sandbox and opens a pull request. Its questions come back to your Inbox, and
you review the pull request without leaving the app. Or copy the plan into
Claude Code, Codex, or any other agent.

## How it works

1. **Discuss.** Create a task on a GitHub repository and message a coding
   agent on it, typing or dictating. It reads the repository in a sandbox of
   its own, and hands longer searches to read-only workers so the
   conversation keeps going.
2. **Plan.** The agent writes what you settle into the task's plan: a
   Markdown document you can edit, comment on, and restore from version
   history. Each section says who last wrote it: you, a teammate, or an
   agent.
3.…
