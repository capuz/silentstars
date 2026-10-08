---
repo: "Up-desires-big-result/easy_simt"
name: "easy_simt"
description: "one kernel, one chip"
originalDescription: "one kernel, one chip"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Up-desires-big-result/easy_simt"
language: "C++"
languages: ["C++", "SystemVerilog"]
languagePcts: [32, 28]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-23T08:35:22Z"
lastCommitAt: "2026-10-08T10:51:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 46
maintainers: ["Up-desires-big-result"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7592c55cd7b56f638061443f275f9254aee8952de8a1ab9efcd15b6d06529c8/Up-desires-big-result/easy_simt"
---

# easy_simt

Design repository for easy_simt, a SIMT processor dedicated to the Golden kernel.

## Prerequisites

Three third-party dependencies (GPGPU-Sim, the nangate45 process library, and OpenRAM) are installed together in the repository's `third_party/` directory (contents are not committed; ignored by `.gitignore`):

```
source setup.sh
make deps              # install third-party dependencies
source setup.sh        # re-source; PDK_ROOT / GPGPU_SIM_ROOT / OPENRAM_HOME / OPENRAM_TECH now point inside the repository
```

Environment variable priority: manual export > in-repo `third_party/` > automatic detection of `~/pdk` (for compatibility with the old layout).

### GPGPU-Sim (external baseline comparison)

The repository's golden baseline data (SM7_TITANV configuration) and its cross-validation against the original configuration come from the GPGPU-Sim simulator. The main flow (model compilation, synthesis, regression) does not depend on it. The source is located at `third_party/gpgpu-sim` (fetched by `make deps`). Building requires the CUDA Toolkit; build it following its repository README, then enter the GPGPU-Sim mode environment (`GPGPU_SIM_ROOT` is exported by…
