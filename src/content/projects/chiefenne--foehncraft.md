---
repo: "chiefenne/Foehncraft"
name: "Foehncraft"
description: "General purpose CFD solver for fluid dynamics, heat and mass transfer, species transport and reacting flows. And not to forget multi-physics."
readmeQualityOk: true
url: "https://github.com/chiefenne/Foehncraft"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-11-14T07:03:15Z"
lastCommitAt: "2026-11-18T11:08:26Z"
lastReleaseAt: "2026-11-16T14:19:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["chiefenne", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c0b35672d6337ceb20b5cde5c7169997ec1119d77dc4b0018b1e1010271412d/chiefenne/Foehncraft"
---

An open-source, industry-strength, general purpose CFD solver, written in Rust and built for modern GPUs.

---

> **Status: stage 5 done (transient laminar flow, run control and Python,
> release 0.5).** The requirements are in
> [docs/requirements.md](https://github.com/chiefenne/Foehncraft/blob/HEAD/docs/requirements.md). The code so far is the
> workspace, continuous integration, the GPU kernel benchmark that decided
> the GPU backend ([G1](https://github.com/chiefenne/Foehncraft/blob/HEAD/docs/benchmarks/g1.md)), the polyhedral mesh (Gmsh
> reader, test mesher, quality report, partitioning, VTKHDF output), the
> finite-volume operators on a scalar transport equation on the CPU and
> the GPU ([stage 2](https://github.com/chiefenne/Foehncraft/blob/HEAD/docs/verification/stage2.md)), the pressure solver:
> aggregation AMG with CG in mixed precision, with hypre as the reference
> ([stage 3](https://github.com/chiefenne/Foehncraft/blob/HEAD/docs/verification/stage3.md)), the steady laminar flow solver
> with SIMPLEC, the Rhie–Chow interpolation and checked boundary
> conditions ([stage 4](https://github.com/chiefenne/Foehncraft/blob/HEAD/docs/verification/stage4.md)), and transient…
