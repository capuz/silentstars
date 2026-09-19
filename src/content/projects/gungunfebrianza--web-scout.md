---
repo: "gungunfebrianza/Web-Scout"
name: "Web-Scout"
description: "Web-scout is a local browser-instrumentation relay for AI coding agents and operators."
readmeQualityOk: true
url: "https://github.com/gungunfebrianza/Web-Scout"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [78, 22]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-16T22:01:52Z"
lastCommitAt: "2026-09-19T08:15:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 36
maintainers: ["gungunfebrianza"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d72793dfca5ee304252ec91e4e31543935b9dbb90ee44b198af72d68d3685d0/gungunfebrianza/Web-Scout"
---

# Web-scout

**Give your AI coding agent eyes and hands in a real browser tab.**

Web-scout is a small, dependency-free tool that lets Claude Code, Codex CLI,
or any other coding agent with shell access read and write the DOM,
IndexedDB, and network traffic of a real, already-open browser tab - and
prove what actually happened, instead of just claiming it worked.

> Deep technical detail (how it works internally, every command's design
> rationale, dashboard implementation history) lives in
> [`docs/web-scout-architecture.md`](https://github.com/gungunfebrianza/Web-Scout/blob/HEAD/docs/web-scout-architecture.md). This
> file is the quickstart and everyday command reference.

## The problem this solves

An AI agent editing your frontend code has no real way to check its own
work. It can read the source, but it can't see the rendered page, poke at
IndexedDB, or check what network requests actually fired - so "I fixed it"
is often just a guess. Web-scout closes that gap: the agent runs a CLI
command (or calls an MCP tool), gets back real evidence from the real page,
and you get a durable log of what it checked and what it found.

The core discipline, nicknamed **"CRV"** in this…
