---
repo: "JuliaPackaging/Yggdrasil"
name: "Yggdrasil"
description: "Collection of builder repositories for BinaryBuilder.jl"
readmeQualityOk: true
url: "https://github.com/JuliaPackaging/Yggdrasil"
homepage: "https://binarybuilder.org"
language: "Fortran"
languages: ["Fortran", "Julia"]
languagePcts: [52, 37]
topics: ["julia", "binarybuilder", "monorepo", "hacktoberfest"]
stars: 401
forks: 737
openIssues: 93
closedIssues: 481
watchers: 9
contributors: 647
recentReleases: 0
createdAt: "2018-09-13T21:13:18Z"
lastCommitAt: "2026-07-16T05:59:34Z"
lastReleaseAt: "2018-12-29T23:22:04Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 45
maintainers: ["maleadt", "lgoettgens", "enzyme-ci-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/77b605278013219134ff40fee1b3f5c5754a53e880031490edf379f1b2b88c7f/JuliaPackaging/Yggdrasil"
---

# Yggdrasil

This repository contains recipes for building binaries for Julia packages using [BinaryBuilder.jl](https://github.com/JuliaPackaging/BinaryBuilder.jl).

## Contributing

For detailed information about contributing, go to ["CONTRIBUTING.md"](https://github.com/JuliaPackaging/Yggdrasil/blob/master/CONTRIBUTING.md). For a quick overview, continue reading.

To update the version to build for an existing recipe, simply open a PR to this repository making the required tweaks. This can be as simple as updating the version number and the source (e.g. for github-hosted resources, update the URL and hash for an archive, or the revision for a repository) of the relevant `build_tarballs.jl` file. Note that in some cases more changes may be needed. A real example for updating the version of a github-hosted resource, see [this PR](https://github.com/JuliaPackaging/Yggdrasil/pull/8833). The version number should be easy to find, and the URL + hash can be found by clicking the release, clicking the final commit in the release, and copying the information from the URL bar.

To contribute a new recipe, you can either
* use `BinaryBuilder.run_wizard()`, which will automatically open a…
