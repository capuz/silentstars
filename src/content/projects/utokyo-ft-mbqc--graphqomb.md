---
repo: "UTokyo-FT-MBQC/graphqomb"
name: "graphqomb"
description: "A Modular Graph State Qompiler for Measurement-Based Quantum Computation"
readmeQualityOk: true
url: "https://github.com/UTokyo-FT-MBQC/graphqomb"
homepage: "https://graphqomb.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 4
closedIssues: 31
watchers: 1
contributors: 7
recentReleases: 4
createdAt: "2024-06-10T12:08:47Z"
lastCommitAt: "2026-08-08T04:33:23Z"
lastReleaseAt: "2026-07-24T02:52:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 90
maintainers: ["masa10-f", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a73bcdffca6fef8bd91a80341cffdf73d74498d87b588d95b2f15420946d2dc2/UTokyo-FT-MBQC/graphqomb"
---

# GraphQOMB

**GraphQOMB** (Qompiler for Measurement-Based Quantum Computing, pronounced _graphcomb_) is a compiler framework for measurement-based quantum computation (MBQC). It keeps the resource-state structure, classical feedforward, and execution schedule as separate first-class objects, then lowers them to an executable measurement pattern with a Pauli frame.

This design makes GraphQOMB useful both as an executable MBQC compiler and as a foundation for fault-tolerant workflows. The same core pipeline can be used to build patterns, study schedule-dependent resource tradeoffs, simulate them with statevector or density-matrix backends, and export compatible patterns to Stim-oriented downstream tooling.

## Core Workflow

GraphQOMB is organized around three explicit compiler interfaces:

- **Labelled graph state**: the resource state, measurement bases, and I/O registration.
- **Feedforward maps**: explicit `xflow` and optional `zflow` describing classical dependencies.
- **Scheduler**: preparation, entanglement, and measurement order for executable slices.

These are lowered with `qompile(...)` into a `Pattern` carrying:

- a command stream for scheduled MBQC execution,
- a…
