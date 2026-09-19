---
repo: "signalnine/q27"
name: "q27"
description: "Quasar is an inference engine for Qwen3.6-27B-MTP / Qwen3.8-27B on a single RTX 5090, in the spirit of antirez/ds4"
readmeQualityOk: true
url: "https://github.com/signalnine/q27"
language: "C++"
languages: ["C++", "Cuda"]
languagePcts: [43, 35]
stars: 41
forks: 8
openIssues: 3
closedIssues: 16
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-07-01T22:36:01Z"
lastCommitAt: "2026-09-19T01:11:01Z"
lastReleaseAt: "2026-07-20T05:47:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 44
maintainers: ["signalnine", "chaudhryfaisal"]
openGraphImageUrl: "https://opengraph.githubassets.com/110907d630928c1ff556b795d090fd5d61e0d7fa505e68aee9a8d866304c305a/signalnine/q27"
---

# Quasar

A narrow inference engine for **Qwen3.6-27B-MTP and Qwen3.8-27B-MTP** (hybrid GDN+attention, trained-in MTP heads), their fine-tunes, and PrismML's **Ternary Bonsai 2 27B** (2-bit, Hadamard-folded) on a single RTX 5090 (3090 and 4090/Ada also supported; Apple-silicon Metal backend for the q4s tier). One model family, one GPU, as fast as possible. In the spirit of [antirez/ds4](https://github.com/antirez/ds4).

## Why this is interesting

- **Fastest of the four engines tested, on this harness, across two independent
  runs.** Mean wall per SWE-bench instance, same 12 tasks, one harness,
  unchanged competitor binaries:

  | leg | 2026-08-17 | 2026-08-19 |
  |---|--:|--:|
  | **q27** q5f | 46.8 s | **46.3 s** |
  | **q27** q4s | 48.5 s | 49.6 s |
  | llama.cpp | 71.4 s | 59.9 s |
  | vLLM | 84.5 s | 78.8 s |
  | ninfer NVFP4 | 96.8 s | 113.8 s |
  | ninfer int8 | 327.4 s | 266.2 s |

  q27 is the only leg that reproduced (46.8 -> 46.3 s); every competitor moved
  7-19% on identical binaries, so the ordering is stable and the margins are
  not. n=1 per instance, sequential legs, each engine's own sampling defaults.
  Caveats:…
