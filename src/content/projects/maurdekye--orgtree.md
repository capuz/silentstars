---
repo: "Maurdekye/orgtree"
name: "orgtree"
description: "A multi-provider, multi-agent orchestrator that organizes agents into a visual authority hierarchy."
readmeQualityOk: true
url: "https://github.com/Maurdekye/orgtree"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [61, 27]
stars: 78
forks: 9
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-09-07T19:51:28Z"
lastCommitAt: "2026-10-01T10:13:06Z"
lastReleaseAt: "2026-09-10T14:49:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 40
maintainers: ["Maurdekye"]
openGraphImageUrl: "https://opengraph.githubassets.com/94e9edf357f6d6533ff06e682c054d70b0bc9f94fafc2e5541689662be3a9904/Maurdekye/orgtree"
---

# Orgtree

**A desktop workspace for running a persistent team of coding agents.**

Give agents jobs, see what they are doing, and keep their conversations, files and work organized in one place. Orgtree shows your team as an interactive organization chart: you sit at the top, agents work beneath you, and they can delegate and communicate with one another within the permissions you give them.

**[Download the latest Windows installer](https://github.com/Maurdekye/orgtree/releases/latest)** | [Release notes](https://github.com/Maurdekye/orgtree/releases) | [Report an issue](https://github.com/Maurdekye/orgtree/issues)

This is **Orgtree 3**, the current desktop application. It follows Orgtree 2 and replaces [claude-orgtree (V1)](https://github.com/Maurdekye/claude-orgtree).

## New in Orgtree 3

- **A real database for your organizations.** Organizations are now stored in a PostgreSQL database that comes inside the installer, instead of one file per organization. Saving a change updates only the records involved.
- **Your 2.x data moves over by itself.** The first time Orgtree 3 starts, it converts your existing organizations to the new database, shows the progress in a window, and…
