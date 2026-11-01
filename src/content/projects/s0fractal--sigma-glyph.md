---
repo: "s0fractal/sigma-glyph"
name: "sigma-glyph"
description: "Content-addressed SKI compute core with bit-exact consensus. Spec-first, multi-model reviewed, machine-verifiable conformance."
readmeQualityOk: true
url: "https://github.com/s0fractal/sigma-glyph"
homepage: "https://s0fractal.github.io/sigma-glyph/"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["ai-agents", "consensus", "content-addressed", "deterministic", "ski-calculus", "specification"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-07-05T02:15:20Z"
lastCommitAt: "2026-11-01T10:44:31Z"
lastReleaseAt: "2026-10-19T14:51:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 65
maintainers: ["s0fractal", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1289631983/81392fcc-2b8c-4efe-a91c-d224d8241df8"
fundingLinks: ["PATREON:https://patreon.com/s0fractal", "KO_FI:https://ko-fi.com/s0fractal"]
---

# Σ-GLYPH

**A claim with an executable check is worth exactly as much as your ability to
run the check yourself. Usually you cannot safely run a stranger's program.**

Σ-GLYPH makes a check a content-addressed object rather than mutable code you
must trust. Evaluation is deterministic, integer-only and total over its
canonical outcomes; one ATP budget prices both semantic work and peak semantic
materialization.

```text
Receipt = eval(term_hash, atp: uint32, content_environment)
```

Two machines given the same term hash, budget and valid demanded content return
the same exit, result hash and ATP spent. Missing demanded content is an explicit
input and yields `Unresolved Reference`; local process/resource faults stay
outside canonical outcomes. Implementations must apply local admission limits
before reading untrusted terms or stores.

The three-input form above is normative in Book I 0.6.0.

## What it establishes

Σ-GLYPH owns two things: **Book I** (deterministic reduction, content addressing,
one ATP budget for work and memory) and **sigma-resume** (budgeted segments,
checkpoints, resume and verification by replay). Everything else this
repository once carried (Books II and…
