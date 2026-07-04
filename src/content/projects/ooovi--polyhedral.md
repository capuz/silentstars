---
repo: "ooovi/Polyhedral"
name: "Polyhedral"
description: "Getting polyhedral geometry to lean."
readmeQualityOk: true
url: "https://github.com/ooovi/Polyhedral"
language: "Lean"
languages: ["Lean"]
languagePcts: [96]
stars: 5
forks: 4
openIssues: 24
closedIssues: 13
watchers: 1
contributors: 6
recentReleases: 2
createdAt: "2025-09-02T08:54:40Z"
lastCommitAt: "2026-07-04T22:51:26Z"
lastReleaseAt: "2026-05-15T11:46:56Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 77
maintainers: ["martinwintermath", "ooovi", "kilianar"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ac98dc3ded73c840a5ab9edcf8e83b4d972beb9cb7ab7bcce6c062d1295b93a/ooovi/Polyhedral"
---

# Polyhedral theory for mathlib

The goal of this project is to provide a flexible and useful implementation of polyhedral geometry/combinatorics in Lean, for `mathlib`, on which more advanced theory can be built. Currently we focus on polyhedral cones since convexity on affine spaces is not yet well developed in mathlib. There is a clear plan for how to move to polyhedra and polytopes eventually. To get to a point where we can implement and work with polyhedral cones comfortably, we also needed to implement duality theory, faces of cones and many more details.

See also the [Zulip discussion](https://leanprover.zulipchat.com/#narrow/channel/116395-maths/topic/Polyhedra.20in.20mathlib/with/579450695) on the topic.

Currently the project implements:
* co-finitely generated submodules (`CoFG`)
* duality for submodules w.r.t. a general bilinear pairing.
* dual closed subspaces (`DualClosed`) which expresses that a subspace is its own double dual.
* `FGDual` submodules, which are the dual of `FG` (finitely generated) submodules.
* duality theory for `FG` submodules
* dual closed pointed cones
* `FGDual` pointed cones
* duality theory for `FG` pointed cones, in particular, a version of…
