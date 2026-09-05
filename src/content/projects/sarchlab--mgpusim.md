---
repo: "sarchlab/mgpusim"
name: "mgpusim"
description: "A highly-flexible GPU simulator for AMD GPUs."
readmeQualityOk: true
url: "https://github.com/sarchlab/mgpusim"
language: "Go"
languages: ["Go"]
languagePcts: [78]
topics: ["computer-architecture", "gpu", "performance-modeling", "simulation"]
stars: 264
forks: 59
openIssues: 34
closedIssues: 66
watchers: 3
contributors: 32
recentReleases: 0
createdAt: "2023-05-31T02:16:47Z"
lastCommitAt: "2026-09-05T07:48:50Z"
lastReleaseAt: "2025-09-08T18:06:41Z"
status: "thriving"
tags: ["needs_contributors", "community_hub"]
healthScore: 84
undervaluedScore: 37
maintainers: ["syifan", "EnzeXu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e712c3ea8bb530106d794ba1027664239740f900c87f19fa47eebc488b05d59/sarchlab/mgpusim"
discussionCount: 67
---

# MGPUSIM

MGPUSim Documents can be found [here](https://akitasim.dev/docs/mgpusim/intro). Please raise issues if you need documentation on a specific aspect. 

MGPUSim is a high-flexibility, high-performance, high-accuracy GPU simulator. It models GPUs that run the AMD GCN3 instruction sets. One main feature of MGPUSim is the support for multi-GPU simulation (you can still use it for single-GPU architecture research).

## <span style="color:red">⚠️ Important Note on NVIDIA Simulation</span>

## Getting Started

- Install Go 1.27 or newer from golang.org.
- Clone this repository, assuming the path is `[mgpusim_home]`.
- Change your current directory to `[mgpusim_home]/amd/samples/fir`.
- Compile the simulator with the benchmark with `go build`. The compiler will generate an executable file called `fir` (on Linux or Mac OS) or `fir.exe` (on Windows) for you.
- Run the simulation with `./fir -timing --report-all` to run the simulation.
- Check the generated `metrics.csv` file for high-level metrics output.

## Develop with Modified Version of Akita (or other depending libraries)

If a modification to Akita is required, you can clone Akita next to the MGPUSim directory in your…
