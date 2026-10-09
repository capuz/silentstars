---
repo: "ucb-bar/merlin"
name: "merlin"
description: "MLIR-in as a compiler stack for ucb-bar"
readmeQualityOk: true
url: "https://github.com/ucb-bar/merlin"
language: "Python"
languages: ["Python", "MLIR"]
languagePcts: [64, 35]
stars: 21
forks: 7
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 20
recentReleases: 0
createdAt: "2025-10-12T05:11:42Z"
lastCommitAt: "2026-10-09T10:40:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 64
maintainers: ["copparihollmann"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1074595797/ddbaae3c-5cc2-464e-a2f9-ceed458a81ea"
discussionCount: 1
---

A compiler-generation framework: <b>derive tests, build a functional target compiler,
  then optimize its performance</b> — with shared compiler tooling and out-of-tree target support.

> **Early development.** merlin is under active development; expect rough edges and APIs that may
> change. Bugfixes and PRs are welcome — please discuss significant changes in the
> [issue tracker](https://github.com/ucb-bar/merlin/issues) before starting work.

Start with the [experiment catalog](https://github.com/ucb-bar/merlin/blob/HEAD/experiments/README.md) for the three-phase workflow,
the [repository map](https://github.com/ucb-bar/merlin/blob/HEAD/docs/reference/repo_structure.md) to find code, or the
[docs hub](https://github.com/ucb-bar/merlin/blob/HEAD/docs/README.md) for compiler, mining, DSE and hardware-specific guides.
Hardware results apply to their recorded revisions and prerequisites, not every fresh installation.

For the main implementation, follow the same three phases as the paper:

| Work on | Code |
| --- | --- |
| Hardware-guided test generation (Phase 0) | [Test…
