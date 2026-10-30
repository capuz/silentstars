---
repo: "leanprover/downstream-lean4"
name: "downstream-lean4"
description: "A collection of packages downstream of Lean 4."
readmeQualityOk: true
url: "https://github.com/leanprover/downstream-lean4"
language: "Lean"
languages: ["Lean"]
languagePcts: [90]
stars: 6
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 20
recentReleases: 0
createdAt: "2026-05-08T16:41:20Z"
lastCommitAt: "2026-10-30T11:02:30Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 83
undervaluedScore: 61
maintainers: ["downstream-lean4[bot]", "Garmelon"]
openGraphImageUrl: "https://opengraph.githubassets.com/d67fb775097a43d5305ba19b272a63ff0be26ce5268f7528b3d6c00414fa9060/leanprover/downstream-lean4"
---

# Lean 4 downstream repository

This repository is a tool for Lean developers to detect and fix breakage in
certain Lean packages caused by backwards-incompatible changes to Lean.

## How does it work?

This repository contains local copies of a hand-picked collection of Lean
packages. These copies are set up in such a way that they all use the same
toolchain, and their dependencies point to the local copies instead of the
original repos. This makes it easy to create and test changes across multiple
Lean packages at once. Essentially, you get the benefits of a monorepo without
forcing the individual packages to move to a monorepo.

This repo's `master` branch toolchain follows Lean's nightly releases, which are
created once a day off Lean's `master` branch. It is updated automatically by
CI.

A local copy of a Lean package follows a specific branch in the package's repo.
CI regularly merges any new changes from that branch into this repo's `master`
branch, resolving merge conflicts in favor of the original repo. Changes to the
local copy can be extracted into a branch based off of the original repo,
allowing them to either be pushed directly or PRed back into the original repo.…
