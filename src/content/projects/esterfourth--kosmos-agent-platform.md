---
repo: "Esterfourth/kosmos-agent-platform"
name: "kosmos-agent-platform"
description: "Kosmos: AI Agent Management Platform for Your Computer and Subscription"
readmeQualityOk: true
url: "https://github.com/Esterfourth/kosmos-agent-platform"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["agents", "ai-agents", "claude", "macos"]
stars: 61
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-22T20:09:27Z"
lastCommitAt: "2026-11-08T14:14:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 30
maintainers: ["github-actions[bot]", "Esterfourth"]
openGraphImageUrl: "https://opengraph.githubassets.com/03cde39e21c650519bcfcdcd66358e0bdc915ecc4c15c6b4bfef61aaf6358a2d/Esterfourth/kosmos-agent-platform"
---

# kosmos

---

Kosmos is an agent management platform that runs on your own computer: it discovers the Claude sessions already on your machine, lets you create and remove agents, edit the instruction file each one boots from, and connect your own Claude subscription without sudo or Homebrew. For people running one or many AI agents locally, it replaces scattered terminals and hand-edited launchd jobs with a single board that only reports what it has actually observed — an agent counts as running when the board can see it, a message counts as delivered only up to the keystroke that placed it, and a removal is never a deletion. It manages agents it did not create, too, disabling rather than deleting their startup files so they can be restored exactly. Everything stays on loopback with no authentication, no cloud, and no telemetry.

## Installing

Kosmos runs on your own machine and is installed from a release tarball plus a checksum, then started as a local service. Nothing here phones home; the only network traffic is fetching the release artifacts you point it at.

### What you need first

| Requirement | Why |
| --- | --- |
| macOS 13.5+ on Apple silicon | The release artifacts…
