---
repo: "MatthewPDingle/GTOpen"
name: "GTOpen"
description: "GTOpen — open-source GTO poker solver: heads-up postflop CFR (CPU/CUDA), multiway Preflop Lab with limps & any sizings, player profiling & max-exploitation. Rust + zero-install web UI."
readmeQualityOk: true
url: "https://github.com/MatthewPDingle/GTOpen"
language: "Sass"
languages: ["Sass", "Rust"]
languagePcts: [43, 36]
topics: ["cfr", "cuda", "game-theory", "gto", "poker", "poker-solver", "rust"]
stars: 14
forks: 3
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-13T02:08:01Z"
lastCommitAt: "2026-09-19T01:36:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 36
maintainers: ["MatthewPDingle"]
openGraphImageUrl: "https://opengraph.githubassets.com/80837242caa15eab12f4f7e978a0c5b7d64bb5b5f4c17ee510c20c51e66f6eb9/MatthewPDingle/GTOpen"
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

Open **http://127.0.0.1:3737**. The launcher…
