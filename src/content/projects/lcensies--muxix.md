---
repo: "lcensies/muxix"
name: "muxix"
description: "Declarative meta harness in your terminal"
readmeQualityOk: true
url: "https://github.com/lcensies/muxix"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-05-29T23:36:08Z"
lastCommitAt: "2026-11-09T00:50:00Z"
lastReleaseAt: "2026-10-03T16:24:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 68
undervaluedScore: 40
maintainers: ["lcensies", "raine", "danielroe"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8707832ba677e110d1a3b4ada2365104d408fa1a3cc493345ea8a8264e5636b/lcensies/muxix"
---

---

Opinionated workflow tool for managing
[git worktrees](https://git-scm.com/docs/git-worktree) and tmux windows as
isolated development environments, so several AI agents can work in parallel
without conflict.

**Philosophy**: Build on tools you already use. tmux/zellij/kitty/etc. for
windowing, git for worktrees, your agent for coding - muxix ties them together.

muxix also treats the *agent itself* as something to provision: one declarative
config installs skills, subagents, plugins, MCP servers, hooks and system-prompt
components across Claude Code, Codex, Copilot CLI, Gemini, OpenCode, pi and omp,
so every worktree gets an identically equipped agent — and whatever an agent
cannot take is reported with the reason instead of silently skipped.

backends.</sub></sup>

> [!NOTE]
> **muxix is a fork of [workmux](https://github.com/raine/workmux) by
> [@raine](https://github.com/raine), heavily modified.** The worktree and tmux
> core is upstream's work and upstream's credit; everything below marked *fork*
> is not in workmux, and the two are no longer config-compatible in both
> directions.
>
> **Added in this fork:** a declarative agent harness (`setup`/`bootstrap`:
> skills,…
