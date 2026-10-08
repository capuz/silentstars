---
repo: "vvvv/VL.StandardLibs"
name: "VL.StandardLibs"
description: "A collection of standard libraries for vvvv including VL.Stride, VL.Skia, VL.ImGui, msgpack.org[VL]"
readmeQualityOk: true
url: "https://github.com/vvvv/VL.StandardLibs"
homepage: "https://vvvv.org"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["skia", "stride", "vl", "vvvv", "creativecoding", "visualprogramming", "creative-coding", "visual-programming"]
stars: 63
forks: 24
openIssues: 218
closedIssues: 449
watchers: 10
contributors: 16
recentReleases: 0
createdAt: "2023-02-06T17:32:31Z"
lastCommitAt: "2026-10-08T10:50:53Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 89
undervaluedScore: 53
maintainers: ["azeno", "gregsn", "joreg"]
openGraphImageUrl: "https://opengraph.githubassets.com/86040e94befb6a9460823866fed687dbfac4a2eb7c18b4efb54998548b218bfb/vvvv/VL.StandardLibs"
---

# Standard Libraries for vvvv

To learn more about vvvv, visit: [visualprogramming.net](https://visualprogramming.net).  
For dev-talk around libraries in this repository join our [VL.StandardLibs chat](https://matrix.to/#/#VL.StandardLibs:matrix.org).

## Working with this repository

If you're merely using vvvv, this repository is not for you. It is only useful for developers who want to fix/improve/add-to libraries that are part of this repository.

The individual libraries are organized in directories. Each directory starting with "VL." holds the sources of one library. 

Here are the steps required to work with this repository
- Build `VL.StandardLibs.sln` using Visual Studio 2022 (>= Version 17.5.1)
- Run vvvv with this directory as a [source package-repository](https://thegraybook.vvvv.org/reference/extending/contributing.html)

At this point you've replaced all libraries shipping with your vvvv installation with the ones in the repository. This means you're now running them "from source" and could e.g. switch to other branches. Still at this point you'll not be able to edit files, because by default they are precompiled! To enable editing of files for specific libraries…
