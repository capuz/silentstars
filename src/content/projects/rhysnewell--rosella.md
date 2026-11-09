---
repo: "rhysnewell/rosella"
name: "rosella"
description: "Metagenomic Binning Algorithm"
readmeQualityOk: true
url: "https://github.com/rhysnewell/rosella"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 56
forks: 3
openIssues: 11
closedIssues: 28
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2020-03-13T12:25:29Z"
lastCommitAt: "2026-11-09T03:30:06Z"
lastReleaseAt: "2021-01-15T09:39:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "under_pressure"]
healthScore: 94
undervaluedScore: 49
maintainers: ["rhysnewell"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c1264c5a97bcb1c86d4e90023d2e5ea6ebe1a426d1423e6c01169fcdcaa166f/rhysnewell/rosella"
---

# Rosella

## Install

### Conda

```bash
conda create -n rosella -c bioconda rosella
conda activate rosella
rosella --version
```

### Cargo

With Rust 1.88 or later and a C compiler, from crates.io or straight from GitHub:

```bash
cargo install --locked rosella
cargo install --locked --git https://github.com/rhysnewell/rosella
```

Read mapping, gene calling and the marker search are built in, so nothing else is needed.

### macOS binary

Each [release](https://github.com/rhysnewell/rosella/releases) ships a binary for arm64 macOS.
Put it on your `PATH`:

```bash
install -m 755 rosella /usr/local/bin/
rosella --version
```

### GPU

On macOS `--gpu` runs on Metal. Metal ships with macOS. On Linux `--gpu` runs on CUDA. It needs
the NVIDIA driver plus cuBLAS and NVRTC from CUDA 12. Conda can install the two libraries:

```bash
conda create -n cuda -c conda-forge "cuda-version=12" libcublas cuda-nvrtc
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib:$LD_LIBRARY_PATH
```

When no GPU can be opened, `--gpu` logs a warning and the run goes on the CPU.

## Examples

Map each sample's reads and keep their depth in one directory. `--interleaved` takes interleaved
reads, and `-b` takes BAMs…
