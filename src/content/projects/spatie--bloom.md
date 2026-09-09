---
repo: "spatie/bloom"
name: "bloom"
description: "A native macOS app for running parallel Claude Code and Codex agents in git worktrees"
readmeQualityOk: true
url: "https://github.com/spatie/bloom"
homepage: "https://runbloom.app"
language: "Swift"
languages: ["Swift"]
languagePcts: [96]
stars: 52
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-08-18T10:41:00Z"
lastCommitAt: "2026-09-09T08:21:40Z"
lastReleaseAt: "2026-08-24T17:48:21Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 45
maintainers: ["freekmurze", "tdrayson"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d2e2ec459791febca968fd8063e25a162e027152ff3456a387b72ae8695d72a/spatie/bloom"
discussionCount: 0
---

# Bloom

An agent development environment, native to the Mac.

Bloom runs coding agents in git worktrees. One window holds a sidebar of projects and the
workspaces under them, the agent's conversation in the centre, and what it changed on the right. A
workspace is a real worktree on disk with a branch of its own, so a dozen tasks can run at once
without treading on each other.

Describe a task and Bloom cuts the branch, cuts the worktree, copies the files you named across,
runs your setup script and starts an agent in it. You read the transcript while it works, review
the diff against the merge base, open a terminal standing in the worktree, and open and merge the
pull request from the same window.

It is written in Swift on the system frameworks, with two dependencies: SwiftTerm for the terminal
panes and Sparkle for updates. There is no account to create. Bloom drives the agent CLIs already
installed on your Mac.

## Support us

We invest a lot of resources into creating [best in class open source packages](https://spatie.be/open-source).
You can support us by [buying one of our paid products](https://spatie.be/open-source/support-us).

Bloom is postcardware. It is free to use,…
