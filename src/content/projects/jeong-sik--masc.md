---
repo: "jeong-sik/masc"
name: "masc"
description: "MASC - Multi-Agent Streaming Coordination in OCaml"
readmeQualityOk: true
url: "https://github.com/jeong-sik/masc"
language: "OCaml"
languages: ["OCaml", "TypeScript"]
languagePcts: [65, 20]
topics: ["agents", "gag", "harness", "hobby-project", "ai", "llm", "ocaml"]
stars: 13
forks: 3
openIssues: 811
closedIssues: 4235
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-01-18T04:00:31Z"
lastCommitAt: "2026-08-24T04:22:53Z"
lastReleaseAt: "2026-04-14T04:29:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 52
maintainers: ["jeong-sik", "anyang-keepers"]
openGraphImageUrl: "https://opengraph.githubassets.com/111fffa1bc0e81d9f6f55d4b401e8cbf6a706c2123787c9aa375bfde091787b6/jeong-sik/masc"
discussionCount: 1
---

# MASC

[한국어](https://github.com/jeong-sik/masc/blob/HEAD/README.ko.md)

MASC (Multi-Agent Shared Context) is a repo-local MCP server for agents that
work in the same project. It keeps goals, tasks, ownership, board messages, and
execution evidence in one workspace and exposes that state through MCP and a
web dashboard.

A **Keeper** is an optional long-running agent managed by MASC. Keepers add
autonomous and event-driven work to the shared workspace. They are an advanced
path, not a requirement for using MASC as an MCP collaboration server.

> **Status:** MASC is a pre-1.0 project for local, trusted environments. It is
> not a production service or a security boundary. Gate, HITL, and Docker
> execution can constrain specific operations, but they do not protect an
> unattended agent from every unsafe action. The IDE and TUI are experimental.
> `main` can be ahead of the latest published binary release.

This image was captured from a live local runtime with operational identifiers
redacted. The [dashboard inventory](https://github.com/jeong-sik/masc/blob/HEAD/docs/screenshots/dashboard/2026-08-21/README.md)
contains 24 screens and the exact capture metadata.

## Start here

###…
