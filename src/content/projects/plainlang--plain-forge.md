---
repo: "plainlang/plain-forge"
name: "plain-forge"
description: "***plain spec writing tool"
readmeQualityOk: true
url: "https://github.com/plainlang/plain-forge"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [61]
stars: 68
forks: 2
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 8
recentReleases: 4
createdAt: "2026-04-09T07:50:43Z"
lastCommitAt: "2026-10-02T09:59:05Z"
lastReleaseAt: "2026-10-02T10:01:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 29
maintainers: ["zanjonke", "dusano", "gorandodig"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f1989f9bef5bec6ed82deda7e373a4d8e77cc3f4e0314dec4ae146170ab117f/plainlang/plain-forge"
---

</p>

# plain-forge

A toolkit for working with [∗∗∗plain](https://plainlang.org) projects from inside your AI coding agent of choice — Claude Code, Codex, ForgeCode, OpenCode, and any other agent that reads from a standard skills directory. plain-forge ships skills, rules, and docs that turn a conversation into complete `.plain` spec files, then keeps maintaining them across the lifetime of the project. The specs are then rendered into production-ready code by a ***plain renderer.

## What plain-forge does

plain-forge is organized around four kinds of work, each with its own entry-point skill (and a long tail of supporting skills behind it).

### 1. Bootstrap a new project

Pick whichever entry point matches how much upfront design you want:

- **`forge-plain`** — full end-to-end interview. One question at a time, immediate writes to disk, covers product → tech stack → testing → validation in four phases. Produces a complete `.plain` project with `config.yaml`, test scripts, and a passing `plain-healthcheck` before handing off.
- **`init-plain-project`** — lightweight scaffold. Asks only about the base technology, project kind, and whether conformance testing is on; emits a…
