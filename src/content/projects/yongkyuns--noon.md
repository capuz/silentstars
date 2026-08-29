---
repo: "yongkyuns/noon"
name: "noon"
description: "Animation engine inspired by manim, written in Rust"
readmeQualityOk: true
url: "https://github.com/yongkyuns/noon"
language: "Rust"
languages: ["Rust", "Python", "JavaScript"]
languagePcts: [55, 22, 22]
stars: 129
forks: 7
openIssues: 53
closedIssues: 62
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-02-28T02:43:34Z"
lastCommitAt: "2026-08-29T10:20:05Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 89
undervaluedScore: 40
maintainers: ["yongkyuns"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1cdf1729470d1e064ff90f19f99eefd2ed2c944495e3cb8b6e8e22f8c2dfcaa/yongkyuns/noon"
---

# Noon

Noon is a high-performance 2D animation system targeting **Manim-compatible Python authoring** on top of a deterministic, language-neutral Rust/WebGPU execution core.

The project treats Manim's common 2D authoring semantics as a cross-language contract: Python should be source-compatible where Noon can reproduce the behavior without a fundamental design or performance regression, while Rust and future frontends expose the same concepts and observable semantics idiomatically. Python adapters normalize syntax and types; they do not implement a second animation engine.

## Architecture

Noon exposes one expressive, mutable semantic scene and specializes it as aggressively as the program permits:

```text
Manim-compatible Python     idiomatic Rust     future frontends
          \                     |                    /
           \                    |                   /
            +-------- shared semantic scene -------+
                              |
                       analysis / lowering
                              |
               +--------------+--------------+
               |              |              |
               v              v              v…
