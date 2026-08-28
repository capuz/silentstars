---
repo: "jeong-sik/masc"
name: "masc"
description: "MASC - Multi-Agent Streaming Coordination in OCaml"
readmeQualityOk: true
url: "https://github.com/jeong-sik/masc"
language: "OCaml"
languages: ["OCaml"]
languagePcts: [66]
topics: ["agents", "gag", "harness", "hobby-project", "ai", "llm", "ocaml"]
stars: 13
forks: 3
openIssues: 968
closedIssues: 4370
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-01-18T04:00:31Z"
lastCommitAt: "2026-08-28T12:24:31Z"
lastReleaseAt: "2026-04-14T04:29:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 52
maintainers: ["jeong-sik"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a31eb2978403b9f6874a0fa33eeb9512eca6e7dfb1bbcaf50e63e0fedbb4e9a/jeong-sik/masc"
discussionCount: 1
---

# MASC

[한국어](https://github.com/jeong-sik/masc/blob/HEAD/README.ko.md)

MASC (Multi-Agent Shared Context) is a workspace that several coding agents can
share. It runs on your own machine, holds the goals, tasks, ownership, board
posts, and execution evidence for one project in a `.masc/` directory, and
serves that state over MCP so any MCP client can join it.

The problem it addresses is that two agents in the same repository each keep
their own memory. They re-decide the same question, claim the same file, and
neither can see what the other already tried. MASC moves that state out of the
agents and into one place both of them read and write.

A **Keeper** is an optional long-running agent that MASC starts and supervises.
Keepers pick up tasks, run shell commands, edit files, and post what they did
back to the workspace. They are an advanced path; MASC works as a plain MCP
collaboration server without any of them.

> **Status:** MASC is a pre-1.0 project for local, trusted environments. It is
> not a production service or a security boundary. Gate, HITL, and Docker
> execution can constrain specific operations, but they do not protect an
> unattended agent from every unsafe…
