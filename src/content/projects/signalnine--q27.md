---
repo: "signalnine/q27"
name: "q27"
description: "Quasar is an inference engine for Qwen3.6-27B-MTP / Qwen3.8-27B on a single RTX 5090, in the spirit of antirez/ds4"
readmeQualityOk: true
url: "https://github.com/signalnine/q27"
language: "C++"
languages: ["C++", "Cuda"]
languagePcts: [42, 37]
stars: 13
forks: 6
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-07-01T22:36:01Z"
lastCommitAt: "2026-08-22T04:06:58Z"
lastReleaseAt: "2026-07-20T05:47:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 61
maintainers: ["signalnine", "kaushikvira", "manthedan"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8fd6c6fc29fd023c8c4275dd5865d186f4adea8fca33d70276d7084ad7587b7/signalnine/q27"
---

# Quasar

A narrow inference engine for **Qwen3.6-27B-MTP and Qwen3.8-27B-MTP** (hybrid GDN+attention, trained-in MTP heads) and their fine-tunes on a single RTX 5090 (3090 and 4090/Ada also supported; Apple-silicon Metal backend for the q4s tier). One model family, one GPU, as fast as possible. In the spirit of [antirez/ds4](https://github.com/antirez/ds4)

## Why this is interesting

- **Fastest of the four engines tested, on this harness -- across two
  independent runs.** Mean wall per SWE-bench instance, same 12 tasks, one
  harness, unchanged competitor binaries:

  | leg | 2026-08-17 | 2026-08-19 |
  |---|--:|--:|
  | **q27** q5f | 46.8 s | **46.3 s** |
  | **q27** q4s | 48.5 s | 49.6 s |
  | llama.cpp | 71.4 s | 59.9 s |
  | vLLM | 84.5 s | 78.8 s |
  | ninfer NVFP4 | 96.8 s | 113.8 s |
  | ninfer int8 | 327.4 s | 266.2 s |

  Two runs is what it takes to see the honest shape: **q27 is the only leg that
  reproduced** (46.8 -> 46.3 s), while every competitor moved 7-19% on identical
  binaries. So the ordering is stable but the margins are not -- q27's edge over
  llama.cpp reads 1.53x one day and 1.29x the next. Quoting either as *the*
  number overstates the precision.…
