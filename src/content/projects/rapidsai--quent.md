---
repo: "rapidsai/quent"
name: "quent"
description: "An experimental framework for instrumentation-based telemetry/profiling targeting complex data-intensive distributed runtime engines"
readmeQualityOk: true
url: "https://github.com/rapidsai/quent"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [59, 39]
topics: ["query-engine", "telemetry", "quent"]
stars: 9
forks: 13
openIssues: 55
closedIssues: 54
watchers: 2
contributors: 57
recentReleases: 0
createdAt: "2026-02-20T17:50:15Z"
lastCommitAt: "2026-07-06T07:03:16Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 57
maintainers: ["johallar", "johanpel", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb4ef3cac5ddef7c40f3cab4fb2a12f6aa133c4f3af2cf6c8be4796b5d06d856/rapidsai/quent"
---

# Quent

Quent is a framework for building tools that help understand behavior and
resource utilization of abstract data and control flow structures in your
application. It provides a set of modeling concepts (especially Finite State
Machines, Resources, and how they can be related).

From an application model, a statically typed instrumentation API is generated.
Applications instrumented with this API emit structured telemetry that can be
stored, analyzed, and visualized.

Quent provides building blocks for each of these layers, so you (or preferably
your coding agent) can mix and match to build a dedicated, semantically rich
profiling / telemetry tool for your application.

In this experimental stage, the first domain we target is that of query engines,
but the basic concepts are domain-agnostic and may be applied to other domains.

Here's an example of the in-tree UI for query engines where the goal is to make
it easy to relate how control structures influence resources and how this all
relates to query plans:

## Status

This project is experimental and under heavy development. The modeling concepts,
generated and non-generated APIs, and implementations are continunously…
