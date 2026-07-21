---
repo: "sfitzgerald-x1/pokezero"
name: "pokezero"
description: "Pokemon randbats rl self-play"
readmeQualityOk: true
url: "https://github.com/sfitzgerald-x1/pokezero"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-27T04:19:56Z"
lastCommitAt: "2026-07-21T06:12:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["sfitzgerald-x1"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0742d170a66fdb69d78495aaebac592702d4731b422978c58b9f5df12c0e3bb/sfitzgerald-x1/pokezero"
---

# PokeZero

PokeZero is a **work-in-progress** effort to train an agent that plays Pokémon Showdown **Gen 3
random battles** at a high level — **pure self-play reinforcement learning**, no human data, no
scripted teachers. The approach is AlphaZero-style: improve a policy/value network by having it
play itself, here applied to an imperfect-information, simultaneous-move game.

> ⚠️ Active research. Encodings, APIs, and checkpoints change frequently. The neural policy below
> is the current frontier; the linear baseline and parts of the harness are earlier scaffolding
> kept for reference. Checkpoints are pinned to observation-schema versions — see
> [`docs/model_versioning.md`](https://github.com/sfitzgerald-x1/pokezero/blob/HEAD/docs/model_versioning.md) before loading anything old.

## How it works

- **Observation — raw facts only.** The battle state is encoded as per-entity tokens, each carrying
  categorical ids plus numeric features. A **hard rule**: no precomputed type effectiveness, STAB,
  expected power, damage estimates, or matchup summaries — the model must learn these from raw
  observable facts.
- **Hidden information → belief.** A public belief engine tracks only…
