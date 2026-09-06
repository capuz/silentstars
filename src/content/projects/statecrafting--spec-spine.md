---
repo: "statecrafting/spec-spine"
name: "spec-spine"
description: "A typed, hash-verifiable ledger of who-owns-what, sitting underneath a codebase so that many agents (or people) can work in parallel without trampling each other."
readmeQualityOk: true
url: "https://github.com/statecrafting/spec-spine"
homepage: "https://statecrafting.github.io/spec-spine/"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 10
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-09T19:00:52Z"
lastCommitAt: "2026-09-06T08:03:42Z"
lastReleaseAt: "2026-07-03T20:42:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 46
maintainers: ["bartekus", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c49f9a95d5d0d56e0e4cea6af6ae7e931f2eb7b4041c6e61faef4195909bb62b/statecrafting/spec-spine"
---

# [spec-spine](https://statecrafting.github.io/spec-spine/) [](https://github.com/statecrafting/spec-spine/actions/workflows/ci.yml)

**A typed, hash-verifiable authority ledger over a markdown spec corpus.**
Installable Rust library + CLI; API-first, binding-ready, deterministic.

spec-spine turns a markdown spec corpus into a governed, hash-verifiable
authority ledger and **refuses code that drifts from its owning spec** at PR
time. Each `specs/NNN-slug/spec.md` declares, in YAML frontmatter, typed edges to
other specs and the authority units it owns (**file / section / symbol /
directory / crate / module**). Two
deterministic views are emitted and joined by a coupling gate:

- **the registry**: the *spec-as-source* view (the compiler's output).
- **the index**: the *code-as-source* view (the indexer's output), with a
  per-shard staleness mechanism.

Both are committed as **per-unit shard trees** (`by-spec/<id>.json`,
`by-package/<slug>.json`; spec 024), so two PRs touching different specs or
packages write disjoint files and never conflict on a shared hash line. The
aggregate view is recomputed from the shards on read.

Every artifact-producing function is a **pure function of…
