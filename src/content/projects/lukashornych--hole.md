---
repo: "lukashornych/hole"
name: "hole"
description: "Sandboxes for AI agents. Allows limiting network and file system access. "
readmeQualityOk: true
url: "https://github.com/lukashornych/hole"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 11
forks: 2
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-16T18:50:58Z"
lastCommitAt: "2026-10-26T18:06:18Z"
lastReleaseAt: "2026-03-03T09:18:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 59
maintainers: ["lukashornych", "novoj"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e241dad619cd93fbca0405c96d8d63f264271fa67f2685c720f217b519ea34c/lukashornych/hole"
---

# Hole

## What is Hole?

Hole is a CLI tool for running AI agents in isolated Docker sandboxes.

Running AI agents directly on your host machine is risky — they have access to your filesystem, network, and credentials. Built-in agent sandboxes (e.g. Claude Code's) can potentially be bypassed by the agent itself, since the agent controls the process.

Hole provides true isolation through:

- **Network control** — the sandbox has no route to the internet except through Hole's filtering gateway, which denies everything you have not allowed, on every protocol and port
- **File access control** — project files are mounted into the container, with configurable exclusions (e.g. `.env`, `node_modules`) hidden from the agent
- **Containerized execution** — the agent runs as a non-root user inside a Docker container that is destroyed on exit

> **Upgrading from 1.x?** Hole 2.0 is a single binary with no `jq`/`jv` dependency, and a few
> settings keys changed. See [MIGRATION.md](https://github.com/lukashornych/hole/blob/HEAD/MIGRATION.md) — Hole also tells you exactly what to
> change the first time it reads an old settings file.

Table of contents:

- [What is Hole?](#what-is-hole)
-…
