---
repo: "danelahman/tempore-lang"
name: "tempore-lang"
description: "Prototype language for temporal resource control"
readmeQualityOk: true
url: "https://github.com/danelahman/tempore-lang"
homepage: "https://tempore-lang.ee"
language: "OCaml"
languages: ["OCaml"]
languagePcts: [75]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-09-04T09:26:49Z"
lastCommitAt: "2026-11-11T19:48:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 77
maintainers: ["danelahman"]
openGraphImageUrl: "https://opengraph.githubassets.com/e64509d44eb91aa70a800a83da1054b2c94a44e1c08a8255696b87ea678191a7/danelahman/tempore-lang"
---

# <picture><source media="(prefers-color-scheme: dark)" srcset="web/logo/tempore-logo-dark.svg"><img src="web/logo/tempore-logo.svg" alt="" width="40" height="40" align="top"></picture> Tempore Language

Tempore (as in *in tempore*, Latin for "in good time") is a prototype
programming language that combines graded modal types with graded effects to
specify and statically verify temporal properties of resources that programs
manipulate, such as that a resource is used only *when* its type-based
specification deems it safe. These properties are checked automatically by
a typechecker based on Hindley–Milner style type and grade inference.

Tempore grew out of Temporal Millet, which was implemented in [Joosep
Tavits](https://github.com/joosepgit)'s Master's thesis at the University of
Tartu ([code](https://github.com/joosepgit/temporal-millet),
[thesis](https://thesis.cs.ut.ee/1c038012-af0d-444a-95dc-7ffc8b3a1f20)).

Most notably, Tempore adds to Temporal Millet the following:

1. temporally graded algebraic effects and effect handlers that are guaranteed
   to respect the temporal specifications of operation signatures,
2. [general resource grades](#grade-algebras) in place of only…
