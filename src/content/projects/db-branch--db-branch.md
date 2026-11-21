---
repo: "db-branch/db-branch"
name: "db-branch"
description: "Instant MySQL database branches on ZFS clones, clustered across VMs with ProxySQL routing"
readmeQualityOk: true
url: "https://github.com/db-branch/db-branch"
homepage: "https://db-branch.com/"
language: "Go"
languages: ["Go"]
languagePcts: [79]
topics: ["database"]
stars: 79
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-11-13T11:10:27Z"
lastCommitAt: "2026-11-21T13:31:39Z"
lastReleaseAt: "2026-11-18T03:45:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 80
undervaluedScore: 31
maintainers: ["MaSuCcHI", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/47ed19cdc27f1a94e708540086d83ac313056af461a721ef22b285e6d3aaed4f/db-branch/db-branch"
fundingLinks: ["GITHUB:https://github.com/MaSuCcHI"]
---

# db-branch

Instant database branches for MySQL and PostgreSQL, on your own servers.

Test a migration, let an AI agent loose, or give every pull request its own copy of the database. db-branch creates a copy-on-write branch of a large database in seconds, with nothing copied. Break it, reset it, throw it away. Built on ZFS clones, self-hosted, Apache-2.0.

**Status: Beta.** db-branch is usable today, but APIs and command-line details may still change before 1.0. It is an independent open-source project, built from scratch.

## Try it

1. **In your browser, 0 minutes.** A live console demo runs entirely in the page (nothing real is created): <https://demo.db-branch.com/>
2. **On a Mac or Windows machine, about 2 minutes.** db-branch needs Linux and ZFS, so run it in an Ubuntu VM with [Multipass](https://multipass.run/). One command makes the VM, installs db-branch, initialises it on a file-backed ZFS pool and loads a small sample base, `shop` (MySQL 8.4):
