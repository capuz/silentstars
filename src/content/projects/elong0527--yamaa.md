---
repo: "elong0527/yamaa"
name: "yamaa"
description: "YAML for CDISC mapping, derivation and data schema"
readmeQualityOk: true
url: "https://github.com/elong0527/yamaa"
homepage: "https://elong0527.github.io/yamaa/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [66, 27]
stars: 18
forks: 1
openIssues: 9
closedIssues: 1379
watchers: 1
contributors: 10
recentReleases: 9
createdAt: "2026-07-13T17:00:44Z"
lastCommitAt: "2026-10-31T15:59:16Z"
lastReleaseAt: "2026-10-31T12:47:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "community_hub"]
healthScore: 100
undervaluedScore: 55
maintainers: ["elong0527", "fb-elong"]
openGraphImageUrl: "https://opengraph.githubassets.com/559681f7246da671c50babf132844248c71d84bdbe7476551206ab58bbb0120b/elong0527/yamaa"
discussionCount: 113
---

# yamaa <img src="https://raw.githubusercontent.com/elong0527/yamaa/main/docs/assets/logo.jpeg" align="right" width="120" alt="yamaa logo" />

yamaa is a domain-specific language (DSL) for clinical trial data standardization.
A yamaa specification transforms ODM XML data, extracted from an EDC system,
into SDTM and ADaM datasets following CDISC standards. The engine can also
generate define.xml.
yamaa's rules fix what every item means, so the same specification with the same
inputs always produces the same datasets, whether the R package, the Python
package or the `yamaa` command line runs it.

The one principle behind everything:

> A yamaa specification has exactly one execution. Where it would have two,
> yamaa fails instead of choosing.

That is what makes it safe to hand a specification to an AI agent: every
question gets answered while it is still cheap to answer, at the planning
stage. Nothing is left for the coding stage to guess.

The language is written to be read and revised by people and AI agents
together, keeping derivations reviewable, version-controlled, and consistent
across implementations. The yamaa project has four components: schema, rules,
engine, and…
