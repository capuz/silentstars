---
repo: "hlsl-tc57/tc57"
name: "tc57"
description: "Main documentation and specification repository for Ecma TC 57"
url: "https://github.com/hlsl-tc57/tc57"
language: "TeX"
languages: ["TeX"]
languagePcts: [72]
stars: 16
forks: 6
openIssues: 41
closedIssues: 11
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2026-01-20T15:13:05Z"
lastCommitAt: "2026-06-25T02:08:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 39
maintainers: ["llvm-beanz", "gesa", "farzonl"]
openGraphImageUrl: "https://opengraph.githubassets.com/eea2433f7d351b23ce2213912e811902e48143bb0cf1d0cfad894a20b3dee6cf/hlsl-tc57/tc57"
---

# Ecma TC57 - The HLSL Standard Committee

SWAG progress estimate:

This repository documents and tracks the specification and evolution process for
the HLSL programming language under Ecma Technical Committee 57 (TC57). This
repository is made public to provide visibility into the feature development
process and solicit feedback from the wider community.

To understand the processes used by the Technical Committee please review our
[process documentation](docs/Process.md).

The draft HLSL specification is available in
[HTML](https://hlsl-tc57.github.io/tc57/spec/index.html) and
[PDF](https://hlsl-tc57.github.io/tc57/spec/hlsl.pdf).

## Building the Specification

The text for the HLSL specification is under the [`spec`](/spec/) directory. It
is written in LaTeX. Building the spec requires a TeX environment and some
additional tools each described below.

* The recommended LaTeX environment can be satisfied by installing [TeX
  Live](https://tug.org/texlive/).
* [Inkscape](https://inkscape.org) is required for rendering SVG into PDF.
* The HTML version of the specification is generated with
  [Pandoc](https://pandoc.org).
* [CMake](https://cmake.org) is used to generate makefiles…
