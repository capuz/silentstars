---
repo: "MatthewPDingle/GTOpen"
name: "GTOpen"
description: "GTOpen — open-source GTO poker solver: heads-up postflop CFR (CPU/CUDA), multiway Preflop Lab with limps & any sizings, player profiling & max-exploitation. Rust + zero-install web UI."
readmeQualityOk: true
url: "https://github.com/MatthewPDingle/GTOpen"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [72, 23]
topics: ["cfr", "cuda", "game-theory", "gto", "poker", "poker-solver", "rust"]
stars: 92
forks: 28
openIssues: 5
closedIssues: 3
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2026-06-13T02:08:01Z"
lastCommitAt: "2026-11-19T05:01:04Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 29
maintainers: ["claude", "MatthewPDingle"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d9bd83f4495865481f45eee75a617a896d3252570cd1ed9c3bd66c16101f9d9/MatthewPDingle/GTOpen"
---

# GTOpen

An open-source no-limit hold'em solver with a local browser interface. Build custom preflop scenarios, study heads-up postflop play, model opponents, and compare strategies across hundreds of flops.

Runs on your computer with a Rust engine and optional NVIDIA CUDA acceleration. The browser UI needs no frontend build step.

## Get started

Install [Rust](https://www.rust-lang.org/tools/install) and Git, then clone the repository:

```sh
git clone https://github.com/MatthewPDingle/GTOpen.git
cd GTOpen
```

### Windows

Use the Rust MSVC toolchain and install the **Desktop development with C++** workload from Visual Studio Build Tools.

```powershell
.\GTOpen.cmd
```

The launcher builds the app, starts a local server, and opens your browser. If GTOpen is already running, it reopens that server and preserves its sessions.

For NVIDIA GPU acceleration, install the CUDA runtime compiler once before launching (requires Python/pip and an NVIDIA driver):

```powershell
python -m pip install --target .cuda-nvrtc nvidia-cuda-nvrtc-cu12
.\GTOpen.cmd
```

### Linux / WSL

Install a C/C++ build toolchain, then run:

```sh
./start.sh
```
