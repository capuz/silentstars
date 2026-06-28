---
repo: "rsenne/ParallelMCMC.jl"
name: "ParallelMCMC.jl"
description: "Implements MCMC algorithms that are parallel across the sequence. "
url: "https://github.com/rsenne/ParallelMCMC.jl"
homepage: "https://ryguy.io/ParallelMCMC.jl/stable/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 24
forks: 1
openIssues: 12
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2025-12-29T16:49:38Z"
lastCommitAt: "2026-06-28T03:11:01Z"
lastReleaseAt: "2026-06-17T21:55:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 42
maintainers: ["rsenne", "penelopeysm", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2726b4acaded36cf2dc3ca6f5ef5ab96348ab9b0247d25a01dbc98e43f4fcaeb/rsenne/ParallelMCMC.jl"
---

# ParallelMCMC

</p>

</p>

  <em>DEER iterates on a synthetic Julia-logo-shaped posterior: orange trajectory estimates move toward the taped MALA path over repeated trajectory solves.</em>
</p>

## What this package does

**ParallelMCMC.jl** implements *parallel-across-the-sequence* MCMC in Julia: instead of generating samples one at a time, an entire trajectory of $T$ correlated steps is solved *simultaneously*. This makes wall-clock time per sample sublinear in chain length on multi-core CPUs and GPUs, where conventional sequential MCMC scales linearly.

The flagship algorithm is **DEER** (Lim et al. 2024; Gonzalez et al. 2024), which reformulates a chain of $T$ MALA steps as a fixed-point problem and solves it with Newton iterations. Each iteration linearizes the per-step transition around the current trajectory guess and resolves the resulting linear recursion in $O(\log T)$ parallel work via an associative prefix scan. With shared input randomness, DEER converges to the exact sequential MALA trace up to a numerical tolerance — typically in tens of iterations even for chains of tens of thousands of samples.

The approach and its scaling tricks (stochastic Hutchinson Jacobian…
