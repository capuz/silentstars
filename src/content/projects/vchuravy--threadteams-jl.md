---
repo: "vchuravy/ThreadTeams.jl"
name: "ThreadTeams.jl"
description: "Persistent parked worker pool for low-overhead parallel loops in Julia"
readmeQualityOk: true
url: "https://github.com/vchuravy/ThreadTeams.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [86]
stars: 9
forks: 1
openIssues: 9
closedIssues: 9
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-10-14T04:41:45Z"
lastCommitAt: "2026-10-20T08:49:37Z"
lastReleaseAt: "2026-10-18T03:43:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 47
maintainers: ["vchuravy", "maleadt", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5733393204e65863872559e2b03d42f5ebf0873fba5e3364744c2098575d9f2b/vchuravy/ThreadTeams.jl"
---

# ThreadTeams.jl

A team of persistent worker tasks, one per thread, that runs
[OhMyThreads.jl](https://github.com/JuliaFolds2/OhMyThreads.jl)'s parallel functions with
low per-loop overhead. The package re-exports the OhMyThreads.jl API (`tforeach`,
`tmapreduce`, `tmap`, `@tasks`, ...) and adds two schedulers that run on the team,
`TeamScheduler` (`:team`) and `GreedyTeamScheduler` (`:greedyteam`). It is plain Julia on
top of Base tasks.

One sticky worker task runs per thread of the `:default` thread pool. A parallel loop
splits its range into one contiguous chunk per thread, runs chunk 1 on the calling task and
hands the rest to the workers. After a loop, idle workers spin (100 µs by default) before
they sleep, so back-to-back loops do not pay for creating, scheduling and waking tasks.
Starting a loop costs about 0.3 µs and allocates nothing after its first run, against
2–4 µs and about 3 KB for
`Threads.@threads` or OhMyThreads' default scheduler (see the [overhead](https://vchuravy.github.io/ThreadTeams.jl/dev/overhead/) page).

## Installation

The package is not registered yet:

```julia
pkg> add https://github.com/vchuravy/ThreadTeams.jl
```

It needs Julia 1.10 or newer,…
