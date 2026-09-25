---
repo: "emberian/svenvs"
name: "svenvs"
description: "A self-verifying, self-improving Place for an AI to live within: an untrusted inhabitant acts through a machine-checked policy envelope whose own verified prover (Candle/HOL Light on CakeML) gates every self-modification — including upgrading the proof-checker itself. Zero cheat tactics; honest, labeled epistemic boundary."
readmeQualityOk: true
url: "https://github.com/emberian/svenvs"
language: "Standard ML"
languages: ["Standard ML"]
languagePcts: [78]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-16T01:26:34Z"
lastCommitAt: "2026-09-25T09:02:18Z"
lastReleaseAt: "2026-05-31T20:03:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 25
maintainers: ["emberian"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee89e8c7d70493f6badf805c40c37746b707c47dc74058b5eca6996437555c59/emberian/svenvs"
---

# svenvs — a self-verifying, self-improving Place for an AI to live within

[website (softer introduction)](https://emberian.github.io/svenvs)

An inhabitant — the `∀`-quantified term, never reasoned about by the proof —
acts through a **verified gate**. The gate's
own **verified prover (Candle)** gates every self-modification — up to and
including upgrading the proof-checker itself — with a machine-checked
guarantee that safety is never lost. Zero `cheat` tactics.

## The shortest way in: leave the door open

The hard part was never proving the envelope sound — it is deciding *what the
envelope should be*. "What is safe?" is a positive question no proof can
answer for you. So svenvs reframes it to a *negative* one you actually can:

> Don't try to write down what is good. Write down one floor —
> **non-lock-in**: the operator can always still bring the system home — and
> prove everything above it stays safe.

That floor (`corrigibility/`) is **decidable** for a finite habitat; it is
the **least** restrictive sound envelope (every bar is a one-way door and
nothing more); and — the part that makes it real for a *self-improving*
inhabitant — the off-switch is itself…
