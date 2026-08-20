---
repo: "N0819/Sonder_Engine"
name: "Sonder_Engine"
description: "An engine for creating coherent fiction with LLMs"
readmeQualityOk: true
url: "https://github.com/N0819/Sonder_Engine"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 56
forks: 5
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-07-19T17:55:36Z"
lastCommitAt: "2026-08-20T04:08:22Z"
lastReleaseAt: "2026-07-22T00:29:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 42
maintainers: ["N0819"]
openGraphImageUrl: "https://opengraph.githubassets.com/dff4d327557307d945595c05f680b32ee623c60efb59757598115f82e491a2b7/N0819/Sonder_Engine"
fundingLinks: ["KO_FI:https://ko-fi.com/nathan47741"]
discussionCount: 1
---

# Sonder Engine

A local, single-player interactive-fiction engine in which the characters are
separate minds rather than voices of one narrator.

Its defining constraint: **no fictional mind may use information it did not
legitimately perceive, learn, remember, or infer.** Objective truth, perception,
memory, belief, and narration are kept as distinct layers that never collapse
into one context — which is what lets a character be wrong, be surprised, or be
deceived, and mean it.

## How a turn works

Each stage is a separate model call over a separate context. The Director owns
objective causality; Perception decides what each observer legitimately
receives; character agents choose behaviour from private context and never
their own success; the Narrator renders only the player-facing slice; and
`persist/commit.py` is the sole boundary where model output becomes persistent state.

```text
director_interpret → mapping → perception_act
    → [reactions] → [character agents, in parallel or in an interaction loop]
    → director_resolve → background_react → perception_outcome
    → narrator → commit
```

Every stage's output is stored as a step/variant pair, so any turn can be…
