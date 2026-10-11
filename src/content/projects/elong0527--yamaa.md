---
repo: "elong0527/yamaa"
name: "yamaa"
description: "YAML for CDISC mapping, derivation and data schema"
readmeQualityOk: true
url: "https://github.com/elong0527/yamaa"
homepage: "https://elong0527.github.io/yamaa/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [50, 40]
stars: 10
forks: 0
openIssues: 12
closedIssues: 516
watchers: 1
contributors: 8
recentReleases: 2
createdAt: "2026-07-13T17:00:44Z"
lastCommitAt: "2026-10-11T10:16:16Z"
lastReleaseAt: "2026-10-02T23:43:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "community_hub"]
healthScore: 99
undervaluedScore: 58
maintainers: ["elong0527", "muse-yamaa-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/124e9dabc097dc66565ca2a7c7b4be381b1c4dfb2c6b9fa7792fd64076e67b14/elong0527/yamaa"
discussionCount: 104
---

# yamaa <img src="https://raw.githubusercontent.com/elong0527/yamaa/main/docs/assets/logo.jpeg" align="right" width="120" alt="yamaa logo" />

yamaa is a domain-specific language (DSL) for clinical trial data standardization.
A yamaa specification transforms ODM XML data, extracted from an EDC system,
into SDTM and ADaM datasets following CDISC standards. The engine can also
generate define.xml.
yamaa's rules fix what every item means, so the same specification with the same
inputs always produce the same datasets in both the R and Python engines.

The one principle behind everything:

> A yamaa specification has exactly one execution. Where it would have two,
> yamaa fails instead of choosing.

That is what makes it safe to hand a specification to an AI agent: every
question gets answered while it is still cheap to answer, at the planning
stage. Nothing is left for the coding stage to guess.

The language is written to be read and revised by people and AI agents
together, keeping derivations reviewable, version-controlled, and consistent
across implementations. The yamaa project has four components: schema, rules,
engine, and benchmark.

| Component | Purpose | Links |
| --- |…
