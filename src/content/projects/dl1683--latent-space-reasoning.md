---
repo: "dl1683/Latent-Space-Reasoning"
name: "Latent-Space-Reasoning"
description: "Teaching LLMs to reason in the Latent Space to precondition responses. "
url: "https://github.com/dl1683/Latent-Space-Reasoning"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 145
forks: 18
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2025-12-04T06:58:16Z"
lastCommitAt: "2026-06-24T00:20:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 27
maintainers: ["dl1683"]
openGraphImageUrl: "https://opengraph.githubassets.com/eba786a8ba1d04eb90f0e0b1756b144e9fc43f50f44520222c720aed407fe55a/dl1683/Latent-Space-Reasoning"
discussionCount: 1
---

# Latent Space Reasoning

This repository is a research lab for a different way to make models reason.

The bet is that the next jump in reasoning will not come only from bigger
models or longer chains of thought. It will come from learning how to operate on
the model's **latent trajectories**: steer them, inspect them, repair them, and
eventually compose the best parts of several trajectories into a stronger final
answer.

The central question is:

**Can a frozen model reason better at inference time if we treat its internal
generation path as an editable search space rather than a one-shot text
sample?**

The project started with perturbation experiments: change the early token or
prefix conditions, sample different reasoning paths, and ask whether some paths
solve tasks that the default path misses. That taught the first useful lesson:
latent trajectory diversity can expose better reasoning, but diversity by
itself is not enough. A system also needs attribution, selection, repair, and
evidence gates.

The current promoted result is **diffusion-native latent repair**. The active
research frontier is **multi-latent aggregation**: rather than selecting one
trajectory, can we…
