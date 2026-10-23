---
repo: "leanprover-community/con-nf"
name: "con-nf"
description: "A formal consistency proof of Quine's set theory New Foundations"
readmeQualityOk: true
url: "https://github.com/leanprover-community/con-nf"
homepage: "https://leanprover-community.github.io/con-nf/"
language: "Lean"
languages: ["Lean"]
languagePcts: [87]
topics: ["lean4", "set-theory", "new-foundations"]
stars: 89
forks: 10
openIssues: 1
closedIssues: 23
watchers: 12
contributors: 16
recentReleases: 0
createdAt: "2022-03-31T05:04:06Z"
lastCommitAt: "2026-10-23T12:04:05Z"
lastReleaseAt: "2024-12-02T18:07:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 41
maintainers: ["YaelDillies", "kim-em"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/476157715/38bb6b88-78f5-4a92-be8a-0fa035d00135"
---

# New Foundations is consistent

In 1937, Quine proposed a set theory called "New Foundations", and since 2010, Randall Holmes has claimed to have a proof of its consistency.
In this repository, we use the interactive theorem prover Lean to verify the difficult part of his proof, thus proving that New Foundations is indeed consistent.
The proof is now complete, and the theorem statements can be found in `ConNF/Model/Result.lean` ([source](https://github.com/leanprover-community/con-nf/blob/main/ConNF/Model/Result.lean), [docs](https://leanprover-community.github.io/con-nf/doc/ConNF/Model/Result.html)).

See [our website](https://leanprover-community.github.io/con-nf/) for more information, the [documentation of our Lean code](https://leanprover-community.github.io/con-nf/doc/), and the [deformalisation paper](https://zeramorphic.github.io/con-nf-paper/main.l.pdf) that translates the Lean definitions into English.
You can also read the [blueprint](https://leanprover-community.github.io/con-nf/blueprint/) that contains a human-readable version of the proof following the Lean code, with links to the formalisations of each statement.

To run our code locally, install…
