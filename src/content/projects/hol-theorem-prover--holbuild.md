---
repo: "HOL-Theorem-Prover/holbuild"
name: "holbuild"
description: "holproject.toml based builds for hol4"
readmeQualityOk: true
url: "https://github.com/HOL-Theorem-Prover/holbuild"
language: "Standard ML"
languages: ["Standard ML", "Shell"]
languagePcts: [49, 39]
stars: 5
forks: 7
openIssues: 27
closedIssues: 110
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2026-04-27T10:46:13Z"
lastCommitAt: "2026-11-08T10:42:19Z"
lastReleaseAt: "2026-07-07T19:49:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 71
maintainers: ["sequent-dev-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/0197c6dc9b30ac8f5e1ff29b9110a1a9967308be89574534e1c825104c95d43f/HOL-Theorem-Prover/holbuild"
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

### HOL revision compatibility

The same holbuild executable supports the current HOL pin in `vendor/hol/REV`
and the legacy compatibility…
