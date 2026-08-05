---
repo: "AnanyTanwar/Catalyst"
name: "Catalyst"
description: "A Strong UCI Chess Engine "
readmeQualityOk: true
url: "https://github.com/AnanyTanwar/Catalyst"
language: "C++"
languages: ["C++"]
languagePcts: [87]
topics: ["chess", "chess-engine", "cpp", "nnue", "uci"]
stars: 16
forks: 4
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 3
recentReleases: 1
createdAt: "2026-03-26T14:47:11Z"
lastCommitAt: "2026-08-05T06:07:52Z"
lastReleaseAt: "2026-07-07T04:08:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 50
maintainers: ["AnanyTanwar", "antiserumFold"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbdebb928ba820e46828cd05d513fa3ec2b0fa98cd2540b7f34086ef9f89e9c7/AnanyTanwar/Catalyst"
---

# Catalyst

Catalyst is a strong UCI chess engine written in C++20. It combines a neural network trained entirely on self-generated games with a deeply optimized search, featuring PVS with iterative deepening, Lazy SMP multi-threaded search, and a wide range of pruning, reduction, and extension techniques. The network is embedded directly into the binary, updated incrementally during search, and accelerated with SIMD instructions for fast inference.

## Strength

| Version | CCRL 40/15 | CCRL 2+1 |
| :------ | :--------: | :------: |
| v1.0.0  |     —      |   3080   |
| v2.0.0  |     —      |    —     |
| v2.1.0  |    3161    |    —     |
| v2.2.0  |    3222    |    —     |
| v3.0.0  |    3273    |   3317   |
| v3.1.0  |     —      |    —     |

---

# How to use

Download the latest release from [the releases page](https://github.com/AnanyTanwar/Catalyst/releases). Catalyst implements the UCI protocol and works with any UCI-compatible GUI such as [CuteChess](https://cutechess.com/), [En Croissant](https://encroissant.org/), or [Banksia](https://banksiagui.com/).

Choose the binary that matches your CPU:

| Binary       | Requirements…
