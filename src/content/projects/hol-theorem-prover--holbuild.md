---
repo: "HOL-Theorem-Prover/holbuild"
name: "holbuild"
description: "holproject.toml based builds for hol4"
readmeQualityOk: true
url: "https://github.com/HOL-Theorem-Prover/holbuild"
language: "Standard ML"
languages: ["Standard ML", "Shell", "Python"]
languagePcts: [43, 37, 20]
stars: 5
forks: 7
openIssues: 23
closedIssues: 119
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2026-04-27T10:46:13Z"
lastCommitAt: "2026-11-26T22:34:18Z"
lastReleaseAt: "2026-07-07T19:49:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 73
maintainers: ["sequent-dev-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ff5e6013b2f7686ff5ab4907815c095ab42f1db3b528a203941fc9cbed1a633/HOL-Theorem-Prover/holbuild"
---

# holbuild

`holbuild` is a build tool for HOL4 projects. It lets a project describe its
sources, HOL revision, and dependencies in a `holproject.toml` file (or a
`holbuild.toml`, see [Manifest discovery](#manifest-discovery)), then builds
logical targets such as `MyTheory` without requiring users to manage `.uo`,
`.ui`, `.dat`, or Holmake state directly.

If you know HOL and Holmake, the main difference is that `holbuild` is
project-oriented: the project manifest selects the HOL checkout to use, build
outputs live under `.holbuild/`, and dependency projects can be fetched from
exact git revisions.

## Status

`holbuild` is usable but still experimental. It supports only the current
manifest language, with an optional legacy `schema = 2` marker. The manifest
format and CLI may still change before any future
upstreaming into HOL.

`holbuild` reserves top-level SML identifiers beginning with `Holbuild` for its
own generated code and runtime support. User project code should not define
values, structures, signatures, or functors with that prefix.
