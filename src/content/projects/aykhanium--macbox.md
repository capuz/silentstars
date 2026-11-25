---
repo: "aykhanium/MacBox"
name: "MacBox"
description: "Experimental Apple Silicon (ARM macOS) compatibility layer for XCL using CrossOver, Rosetta 2 and D3DMetal. Native ARM64 runtime is not implemented; retail gameplay is unverified."
readmeQualityOk: true
url: "https://github.com/aykhanium/MacBox"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["apple-silicon", "arm64", "compatibility-layer", "crossover", "d3dmetal", "macos", "rosetta2", "rust", "xbox", "xcl"]
stars: 110
forks: 7
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 54
recentReleases: 0
createdAt: "2026-11-24T19:18:26Z"
lastCommitAt: "2026-11-25T13:04:16Z"
status: "newborn"
tags: []
healthScore: 70
undervaluedScore: 22
maintainers: ["Ahmet-Dedeler", "ivall", "aykhanium"]
openGraphImageUrl: "https://opengraph.githubassets.com/57a1eac05d1c7d5ceda1117c764dc9120850e455cf9822bf4509e227e5d85455/aykhanium/MacBox"
---

Star MacBox to follow its progress on Apple Silicon. Help with testing, bug reports
  and focused fixes is welcome; start with <a href="CONTRIBUTING.md">the contribution guide</a>.

> **Important**
>
> **GTA VI has reached the Terms & Conditions screen in local MacBox development testing. It is not playable yet.**
>
> Local testing has shown the account picker, Rockstar intro, legal screens and loading
> artwork on an Apple M5 Max. The latest configured 600-second run stayed on loading
> artwork while large native pipelines continued compiling. No title crash or fatal compiler
> event was captured, but rendering stopped after about 132 seconds. The main menu and
> gameplay have not been reached.
> These historical development runs included a private BCPack integration that is
> excluded from this branch pending table-rights verification. They do not validate
> the published runtime subset.
> See the [launch notes](https://github.com/aykhanium/MacBox/blob/HEAD/tests/results/macos-launch-2026-11-25.json) for the measured results.
>
> MacBox includes no game files. Running a title requires your own copy of its game data.
