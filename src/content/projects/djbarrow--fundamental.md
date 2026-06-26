---
repo: "djbarrow/fundamental"
name: "fundamental"
description: "Software to look for interrelationships between constants and find formulas for number sequences"
url: "https://github.com/djbarrow/fundamental"
language: "C"
languages: ["C"]
languagePcts: [100]
topics: ["c", "eureqa", "open-source", "curve-fitting", "physics", "mathematics", "machine-learning", "economics", "symboic-regression", "find-formula"]
stars: 19
forks: 3
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2016-10-10T23:28:50Z"
lastCommitAt: "2026-06-26T21:30:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 55
undervaluedScore: 34
maintainers: ["djbarrow"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2133569fe65f68aef4ed99d8cf827d08de97ac70d48e95ccafc7cbe531122ef/djbarrow/fundamental"
---

# Latest news
pthreads now work see MULTI_THREADED define in the source
THREADED_CUDA is a vibe coded start to cuda support thanks to github copilot
It looks like my code will run very badly on cuda especially my do_sum switch statement
https://www.reddit.com/r/CUDA/comments/8ym9us/optimizing_an_algorithm_that_has_a_long_switch/
for more details study SIMT and warps on cuda.
My RINGBUFF code is broken so don't define it in fundamental_config.h.
I don't know what to do to improve the code further and seeing the limits of cuda vs an normal cpu I seriously wonder how nvidia became the most valuable company in the world it sucks to program cuda.
# Caveats
If you find the latest code unstable check out a version prior to September 2025, I added code for symbolic regression of loops around paddys day march 17th 2023 this made my brain melt and I threw it out. Maybe some enthuastic young turk will reintegrate it and remove final bugs.

# What is fundamental
Fundamental is a c command line program, a rough diamond which barely works beautifully but is my most original program to date. I've recently found out that it uses a technique called [Symbolic…
