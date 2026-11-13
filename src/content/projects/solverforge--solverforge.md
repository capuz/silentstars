---
repo: "SolverForge/solverforge"
name: "solverforge"
description: "SolverForge is a constraint programming framework and solver written in Rust. It allows you to solve any planning problem, blazing fast!"
readmeQualityOk: true
url: "https://github.com/SolverForge/solverforge"
homepage: "https://www.solverforge.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 87
forks: 6
openIssues: 1
closedIssues: 116
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-01-03T15:57:52Z"
lastCommitAt: "2026-11-13T11:19:44Z"
lastReleaseAt: "2026-03-09T19:22:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 45
maintainers: ["blackopsrepl"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad8e3bd967cd924213032f1b82749f51100b92c1d88238fa2bce073c54f3d854/SolverForge/solverforge"
fundingLinks: ["GITHUB:https://github.com/blackopsrepl"]
---

# SolverForge

    

> **Used in Production**
>
> "Working like a charm, A+" — *Dr. Fawaz Halwani, Pathologist, The Ottawa Hospital*
>
> "High-level abstractions, zero-cost implementation. A masterclass in Rust architecture." — *Prof. Benjamin Abel, Computer Science, Côte d’Azur University, Nice*

SolverForge is a planning engine written in Rust. It assigns scarce resources
without breaking hard rules: who works which shift, which vehicle visits which
stop, which task runs on which machine.

You describe the facts, the decisions the solver may make, and the rules that
score a plan. SolverForge builds a feasible plan, then keeps improving it until
the time or step limit you set. Your model stays ordinary Rust, and its
concrete types reach the solver's inner loop without being boxed or erased.

## Get started

Most new projects start from `solverforge-cli`, which generates a complete app
with a web UI:

```bash
cargo install solverforge-cli
solverforge new my-scheduler
cd my-scheduler
solverforge generate fact resource --field category:String --field load:i32
solverforge generate entity task --field label:String --field priority:i32
solverforge generate variable resource_idx…
