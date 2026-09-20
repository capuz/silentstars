---
repo: "markel1974/godoom"
name: "godoom"
description: "a full 3d engine"
readmeQualityOk: true
url: "https://github.com/markel1974/godoom"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 18
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-08-03T17:25:18Z"
lastCommitAt: "2026-09-20T08:44:55Z"
lastReleaseAt: "2022-12-09T12:41:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 48
maintainers: ["markel1974"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/520972088/89816a50-ef56-47ee-bba4-a3539a535a6e"
discussionCount: 1
---

# mr_tech Engine

> **Treat a game as source code, not as its runtime — the way a compiler treats its source files.**

Can a 3D game be reverse-engineered, without infringing copyright, understood as a source representation, and transformed into a sufficiently general Intermediate Representation (IR) that allows it to execute on a runtime for which it was never designed?

**mr_tech is an experimental attempt to answer this question.**

The central idea is to treat a 3D game not as a runtime to be emulated, but as a **source program to be understood, translated, and executed by a different runtime**.

In this model, the original game engine is not the target execution environment. Instead, the game is processed through a compiler-like pipeline:

```text
        3D GAME
           │
           ▼
   Reverse Engineering
           │
           ▼
        Frontend
           │
           ▼
   Semantic Understanding
           │
           ▼
    Intermediate
    Representation
           │
           ▼
       mr_tech
        Runtime
           │
      ┌────┴────┐
      ▼         ▼
   OpenGL    Software
   Backend   Backend
```

A bare-metal, highly decoupled 3D rendering and physics…
