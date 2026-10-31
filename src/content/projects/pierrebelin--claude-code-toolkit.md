---
repo: "pierrebelin/claude-code-toolkit"
name: "claude-code-toolkit"
description: "Stop babysitting your coding agent. A Claude Code plugin that turns a business need into a spec, a plan and test-first code, audited before you commit. Built for DDD / clean-architecture repos."
readmeQualityOk: true
url: "https://github.com/pierrebelin/claude-code-toolkit"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [42, 31]
topics: ["claude-code", "clean-architecture", "ddd", "hooks", "tdd"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-31T06:54:49Z"
lastCommitAt: "2026-10-31T07:46:39Z"
lastReleaseAt: "2026-10-14T17:33:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 53
maintainers: ["pierrebelin"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5341a869ee144512209b317f94a5551e695946337caf40ca098b39cfdc15895/pierrebelin/claude-code-toolkit"
---

# Claude Code Toolkit

**From a business need to tested, audited code — Claude Code does the work, you make the decisions.**

`cctoolkit` is a Claude Code plugin for DDD / clean-architecture repos. You describe a feature; Claude writes the spec with you, plans it, then builds it batch by batch under strict TDD and audits the result before you commit. What the product does is kept in a business knowledge base beside the code, so every new spec starts from it.

.NET first; Python, Java/Kotlin and TypeScript repos work through their layout and test tags.

## Quick start

```bash
claude plugin marketplace add pierrebelin/claude-code-toolkit --scope project
claude plugin install cctoolkit@cctoolkit --scope project
```

Restart Claude Code, then run **`/cctoolkit:kit-init`**: it reads your repo, asks a few questions and sets everything up.

Requirements, options and what `kit-init` writes: **[INSTALL.md](https://github.com/pierrebelin/claude-code-toolkit/blob/HEAD/INSTALL.md)**.

## How it works

Three commands, one per step. Each one writes a file the next one reads.

```mermaid
flowchart LR
    S["<b>1. Spec</b><br/>/business-spec"] -->|SPEC.md| P["<b>2.…
