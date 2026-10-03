---
repo: "sase-org/sase"
name: "sase"
description: "Structured Agentic Software Engineering (SASE)"
readmeQualityOk: true
url: "https://github.com/sase-org/sase"
homepage: "https://sase.sh"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-14T00:00:14Z"
lastCommitAt: "2026-10-03T22:05:12Z"
lastReleaseAt: "2026-06-18T17:26:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 66
maintainers: ["bbugyi200"]
openGraphImageUrl: "https://opengraph.githubassets.com/24a77462a0602f156fb973e69646185a4a6c99d333e54cf22f7fb479363e85ee/sase-org/sase"
---

# sase

**One developer. A team of coding agents. Tracked, reviewable, repeatable work.**

**sase** (Structured Agentic Software Engineering, pronounced "sassy") turns Claude
Code, Codex, Antigravity, Qwen Code, OpenCode, Meta's Muse Code, and xAI's Grok Build
into a coordinated engineering team. One developer supervises parallel agents in
isolated workspaces, with every run tracked, reviewable, and repeatable.

**Status:** sase is alpha software, and its interfaces and workflows are still evolving.
It supports POSIX systems (Linux and macOS) only; Windows is not supported. sase assumes
you have at least one supported agent CLI installed and authenticated for production
work, and that you prefer opinionated git-based, workspace-per-agent workflows; if you
want a standalone agent instead of a coordination layer, use those CLIs directly.

## Why sase

- Launch, monitor, resume, and archive agent runs from one keyboard-driven TUI (**sase's
  TUI**).
- Run agents in parallel, each in an isolated numbered workspace clone.
- Keep prompts and multi-step workflows reusable (**Macros**) instead of trapped in
  shell history.
- Track every PR-sized unit of work with status, commits,…
