---
repo: "emkey1/pscal"
name: "pscal"
description: "Practical Scripting Computation And Logic engine.  A Bytecode VM With Multiple Front Ends, Including Pascal, CLike (A C like language), Rea (An Object Oriented language), and exsh a shell that supports threads."
readmeQualityOk: true
url: "https://github.com/emkey1/pscal"
language: "JavaScript"
languages: ["JavaScript", "C", "Python"]
languagePcts: [21, 20, 20]
topics: ["bytecode", "pascal", "vm"]
stars: 11
forks: 0
openIssues: 1
closedIssues: 18
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-04-19T13:48:19Z"
lastCommitAt: "2026-11-02T13:39:00Z"
lastReleaseAt: "2026-03-22T20:29:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 70
maintainers: ["emkey1-bot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/969146127/44886789-4025-43dc-a743-c2b00722a05a"
discussionCount: 2
---

# PSCAL

**Practical Scripting Computation And Logic engine** — a bytecode VM with a
shared backend and multiple language front ends, written in C.

PSCAL is built around one idea: invest in a single stack-based virtual
machine, bytecode compiler, and builtin library, then keep language front ends
thin. Every front end gets the full backend for free — HTTP with serious TLS
controls, SQLite, yyjson, threads, optional SDL2/SDL3 graphics and audio, and
an extensible builtin mechanism. The AST-JSON → bytecode tool
(`pscaljson2bc`) makes the VM a public compilation target, so new front ends
can be prototyped in any language.

That design is now reflected in the repositories themselves: the shared backend
is its own repo ([pscal-core](https://github.com/emkey1/pscal-core)) and so is
each front end. This **umbrella** repo wires them together as git submodules and
drives the full build (graphics, networking, the iOS app). See
[Repository layout](#repository-layout-git).

## Front ends

- **Aether** *(new, experimental)*: a compact language designed from the start
  to be written correctly by LLMs as well as humans. Explicit effect
  boundaries, lightweight contracts, a deliberately closed…
