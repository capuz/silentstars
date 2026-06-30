---
repo: "jeong-sik/masc"
name: "masc"
description: "MASC - Multi-Agent Streaming Coordination in OCaml"
url: "https://github.com/jeong-sik/masc"
language: "OCaml"
languages: ["OCaml", "TypeScript"]
languagePcts: [61, 22]
topics: ["agents", "gag", "harness", "hobby-project", "ai", "llm", "ocaml"]
stars: 6
forks: 1
openIssues: 175
closedIssues: 2805
watchers: 0
contributors: 4
recentReleases: 9
createdAt: "2026-01-18T04:00:31Z"
lastCommitAt: "2026-06-30T06:51:47Z"
lastReleaseAt: "2026-04-14T04:29:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 64
maintainers: ["jeong-sik", "anyang-keepers"]
openGraphImageUrl: "https://opengraph.githubassets.com/33cbb9bc0b533585c20cf0449bb0d2c540de8512f4ec7dba165b0e9cda647bdf/jeong-sik/masc"
discussionCount: 0
---

# MASC

[한국어 버전](README.ko.md)

**MASC is a local coordination and observability layer for agent work.** It runs
next to a repository as an MCP server, so coding agents and resident Keepers can
share goals, tasks, board posts, repository ownership, and approval state. The
dashboard and per-turn receipts make agent decisions and failures inspectable.

It is not meant to be the fastest way to get work done. MASC trades speed for
coordination, observability, and experiments with long-running persona-based
agents. Some design choices are practical; some are playful.
Accidental jokes, odd names, and small bits of fiction are part of the project
taste; they are there because they make the experiment more fun, not because
they are architecture requirements.

> **Development status:** MASC is still a pre-1.0 experiment. It is not a
> productivity tool, production service, or security boundary. Use it for local
> experiments and observation only. CODE/IDE workflows are not usable yet, and
> HITL/Sandbox features can reduce some accidents but cannot be relied on to
> protect code, secrets, infrastructure, or unattended agents. The current goal
> is to make agent failures visible enough to…
