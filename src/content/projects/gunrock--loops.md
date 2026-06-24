---
repo: "gunrock/loops"
name: "loops"
description: "🎃 GPU load-balancing library for regular and irregular computations."
url: "https://github.com/gunrock/loops"
homepage: "https://gunrock.github.io/loops/"
language: "C++"
languages: ["C++", "Cuda"]
languagePcts: [46, 30]
topics: ["load-balancing", "hpc", "gpu", "cuda", "gpu-computing", "parallel"]
stars: 66
forks: 5
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 11
recentReleases: 1
createdAt: "2021-06-17T19:16:01Z"
lastCommitAt: "2026-06-24T00:19:44Z"
lastReleaseAt: "2026-05-09T19:57:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 82
undervaluedScore: 41
maintainers: ["neoblizz", "Copilot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/377937753/514f5f88-26dd-44ae-af91-55162a60f273"
---

# 🐧 `loops`: Expressing Parallel Irregular Computations

We propose an open-source GPU load-balancing framework for applications that exhibit irregular parallelism. The set of applications and algorithms we consider are fundamental to computing tasks ranging from sparse machine learning, large numerical simulations, and on through to graph analytics. The underlying data and data structures that drive these applications present access patterns that naturally don't map well to the GPU's architecture that is designed with dense and regular patterns in mind. 

Prior to the work we present and propose here, the only way to unleash the GPU's full power on these problems has been to workload balance through tightly coupled load-balancing techniques. Our proposed load-balancing abstraction decouples load balancing from work processing and aims to support both static and dynamic schedules with a programmable interface to implement new load-balancing schedules in the future. 

With our open-source framework, we hope to not only improve programmers' productivity when developing irregular-parallel algorithms on the GPU but also improve the overall performance characteristics for such…
