---
repo: "MattSG/mm3-recomp"
name: "mm3-recomp"
description: "Experimental, largely AI-written static recompilation of Midtown Madness 3 for Windows. Expect rough edges; fixes and PRs welcome."
readmeQualityOk: true
url: "https://github.com/MattSG/mm3-recomp"
language: "C"
languages: ["C", "Python"]
languagePcts: [53, 38]
stars: 20
forks: 4
openIssues: 1
closedIssues: 5
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-10-07T10:24:38Z"
lastCommitAt: "2026-10-23T09:32:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 44
maintainers: ["MattSG", "alokdhir"]
openGraphImageUrl: "https://opengraph.githubassets.com/57547097c1cc896c241c2ae49bb4ca7a35973d3e8c45d32426778b2f3ee78b2d/MattSG/mm3-recomp"
discussionCount: 1
---

# Midtown Madness 3 recompilation

A static recompilation of the Xbox game to native Windows x64, using
[xboxrecomp](https://github.com/MattSG/xboxrecomp) and Direct3D 11 or SDL3 GPU
(Vulkan / Direct3D 12). No game files are included: you build it from your own disc.

> **Largely AI-written.** Nearly all of the code was written with AI assistance
> (Claude Code and OpenAI Codex) and tested in play. It is
> experimental, so expect bugs. Fixes and reviews are welcome.

## Quick start

You need:
- Windows 10/11 x64;
- Visual Studio 2022 or newer with **Desktop development with C++**;
- Python 3.12;
- git;
- a dump of your own Midtown Madness 3 disc.

```powershell
git clone --recurse-submodules https://github.com/MattSG/mm3-recomp.git
cd mm3-recomp
python scripts/setup.py --iso "<path to your disc image>"
.\build\RelWithDebInfo\mm3_recomp.exe
```

### Windows: SDL3 GPU (Vulkan and Direct3D 12)

Include Visual Studio's **C++ CMake tools for Windows** component. From the
repository root, build once for both backends:

```powershell
python scripts/setup.py --iso "<path to your disc image>" --renderer SDL3_GPU
```

Already set up? Omit `--iso`. CMake downloads SDL3 and the shader…
