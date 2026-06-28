---
repo: "emberian/dregg"
name: "dregg"
description: "Distributed object-capability authorization with ZK proofs"
url: "https://github.com/emberian/dregg"
homepage: "https://emberian.github.io/dregg/"
language: "Rust"
languages: ["Rust", "Lean"]
languagePcts: [63, 29]
stars: 12
forks: 3
openIssues: 9
closedIssues: 5
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-20T19:24:11Z"
lastCommitAt: "2026-06-28T01:47:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 46
maintainers: ["emberian"]
openGraphImageUrl: "https://opengraph.githubassets.com/7afa4b38dc95cc80337ec6205bc71fd0d848d9fa04c62f5ebc267afcff7f240e/emberian/dregg"
---

# `dregg` — Dragon's Egg

</p>

Dragon's Egg is my experiment in the metatheory of constructive knowledge, and a
direct expression of my original impetus to build <https://rbg.systems>. Maybe
Dragon's Egg will be a Robigalia userspace. In the meantime, here's what the LLMs
have to say about it:

(end-of-human-text)

> *Machine reader? [`README-LLMs.md`](README-LLMs.md) is the dense, narration-free
> technical reference written for you — every model tier, large and small. What
> follows here is the human-facing tour.*

**dregg is a formally verified, distributed object-capability operating system.**
The kernel is a Lean 4 program with machine-checked soundness, and it is the
*exact* function the running node executes. Every state transition ("turn") is
gated by an unforgeable capability, leaves a verifiable receipt, and carries a
STARK proof a light client can check without re-running history. Authority is
*held*, never *owed*.

On top of the kernel, **deos** is the agentic desktop userlayer — the same proofs
made visual and interactive: a window *is* a capability, an interaction *is* a
verified turn. (Naming: **robigalia** the project · **dregg** the kernel · **deos**
the desktop.…
