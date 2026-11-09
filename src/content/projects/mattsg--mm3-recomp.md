---
repo: "MattSG/mm3-recomp"
name: "mm3-recomp"
description: "Experimental, largely AI-written static recompilation of Midtown Madness 3 for Windows. Expect rough edges; fixes and PRs welcome."
readmeQualityOk: true
url: "https://github.com/MattSG/mm3-recomp"
language: "C"
languages: ["C", "Python"]
languagePcts: [60, 32]
stars: 27
forks: 4
openIssues: 2
closedIssues: 10
watchers: 4
contributors: 4
recentReleases: 2
createdAt: "2026-10-07T10:24:38Z"
lastCommitAt: "2026-11-09T00:52:40Z"
lastReleaseAt: "2026-11-01T09:16:42Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 44
maintainers: ["MattSG", "lakshya16157"]
openGraphImageUrl: "https://opengraph.githubassets.com/c11c428dff4330c3b379ea20f7bef07be9397acfe16122ba5a1a3405ff0e0b75/MattSG/mm3-recomp"
discussionCount: 1
---

# Midtown Madness 3 recompilation

Build the Xbox game as a native PC executable using
[xboxrecomp](https://github.com/MattSG/xboxrecomp). No game files are included;
you need a dump of your own disc.

**Experimental and AI-assisted.** Windows x64 gameplay has been checked.
Linux x64 has a build path, but gameplay has not been rechecked after the SDL3
migration. The builder does not support macOS.

## Build and play

On Windows, install:

- Python 3.12 or newer, Git and CMake.
- Visual Studio 2022 or newer with **Desktop development with C++** and
  **C++ CMake tools for Windows**.

Run these commands from a terminal:

```sh
git clone --recurse-submodules https://github.com/MattSG/mm3-recomp.git
cd mm3-recomp
```

Download the Windows builder from [Releases](https://github.com/MattSG/mm3-recomp/releases/latest),
or run `python scripts/build_gui.py` from the checkout.

1. Choose your disc image. **Check SHA** verifies its game code and reports
   whether the image matches a tested dump.
2. Choose **Direct3D 12** or **Vulkan**, then **Build**. If asked, select the
   checkout folder. Use **Show log** for progress or errors.
3. Select **Launch game**, configure the game's launcher,…
