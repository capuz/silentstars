---
repo: "lxsgx23/AB-JChess"
name: "AB-JChess"
description: "Strong UCI Jieqi NNUE engine."
readmeQualityOk: true
url: "https://github.com/lxsgx23/AB-JChess"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [72, 22]
stars: 16
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-09-12T06:39:10Z"
lastCommitAt: "2026-10-10T10:03:48Z"
lastReleaseAt: "2026-10-06T08:41:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 35
maintainers: ["lxsgx23"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4bb3273aa090619d61f3881d72b2affe95440486ec04d124d6689d34dbc64c3/lxsgx23/AB-JChess"
---

# AB-JChess

> A strong UCI Jieqi engine powered by NNUE, derived from Pikafish.

AB-JChess is a free, open-source UCI engine for **Jieqi** (also known as "uncovering chess" or "dark xiangqi"), a popular Chinese chess variant where most pieces begin face-down and are revealed as they move. Built upon the NNUE-based architecture of [Pikafish](https://github.com/official-pikafish/Pikafish), AB-JChess brings modern neural network evaluation to this dynamic and fast-growing variant.

## Features

- **NNUE Evaluation** — uses an efficiently updatable neural network (NNUE) for fast, accurate position assessment, following the approach pioneered by Stockfish and Pikafish.
- **UCI Protocol** — compatible with any UCI-capable GUI.
- **V11 NNUE Trainer** — includes a PyTorch-based training pipeline with feature encoding, distributed training support, checkpoint validation, and runtime serialization.
- **Configurable EvalFile** — you can load custom NNUE network files at runtime via the `EvalFile` UCI option.
- **Cross-platform** — builds on Windows, Linux, and macOS.

## Usage

AB-JChess does **not** include a graphical interface. You need a UCI-compatible GUI to use it.

### Loading a…
