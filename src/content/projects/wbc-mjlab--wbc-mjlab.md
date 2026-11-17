---
repo: "wbc-mjlab/wbc-mjlab"
name: "wbc-mjlab"
description: "One policy. Any motion. Train universal whole-body tracking in mjlab—swap clips, not checkpoints."
readmeQualityOk: true
url: "https://github.com/wbc-mjlab/wbc-mjlab"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [74, 20]
topics: ["humanoids", "mjlab", "mujoco", "mujoco-warp", "robotics", "warp", "reinforcement-learning"]
stars: 183
forks: 7
openIssues: 6
closedIssues: 4
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-06-03T13:31:14Z"
lastCommitAt: "2026-11-17T12:18:40Z"
lastReleaseAt: "2026-09-13T07:50:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 13
maintainers: ["simeon-ned", "VAlikV", "lvjonok"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1258329999/c2b59e40-6cda-4c7f-961d-a0ef6b5d7401"
discussionCount: 0
---

# WBC-Mjlab: Whole Body Control in MuJoCo Lab

**One shared MDP for whole-body motion tracking on [mjlab](https://github.com/mujocolab/mjlab) — train once on a motion library, deploy one policy for many skills.**

Recent works ([ZEST](https://arxiv.org/abs/2602.00401), [BeyondMimic](https://arxiv.org/abs/2508.08241), [SONIC](https://arxiv.org/abs/2511.07820), [OmniXtreme](https://arxiv.org/abs/2602.23843)) is all **WBC / large-scale tracking**, with overlapping ideas (keybody rewards, adaptive sampling, multi-clip training) but **different design choices** — each still tends to ship as its own codebase. In wbc-mjlab, paper-specific knobs are **`--task` switches** on a shared stack:

- **Multi-motion by design** — train on **multi-clip datasets** (LAFAN, SEED, custom NPZ libraries); one controller generalizes across the library. At runtime, provide reference - via playing clip, teleop, or higher level policy.
- **Shared MDP** — rewards, terminations, motion command, RSI, and playback live in `env/` once; robots and papers plug in via task configs.
- **Tasks, not forks** — ZEST, BeyondMimic-style RSI, success-guided sampling, deploy obs, etc. are **`--task` switches** (`Wbc-G1`,…
