---
repo: "ROCm/ROCdbgapi"
name: "ROCdbgapi"
description: "The AMD Debugger API is a library that provides all the support necessary for a debugger and other tools to perform low level control of the execution and inspection of execution state of AMD's commercially available GPU architectures."
readmeQualityOk: true
url: "https://github.com/ROCm/ROCdbgapi"
homepage: "https://rocm.docs.amd.com/projects/ROCdbgapi/en/latest/"
language: "C++"
languages: ["C++", "C"]
languagePcts: [56, 43]
stars: 20
forks: 18
openIssues: 1
closedIssues: 10
watchers: 16
contributors: 85
recentReleases: 0
createdAt: "2019-12-10T19:17:06Z"
lastCommitAt: "2026-09-16T08:27:01Z"
lastReleaseAt: "2021-03-22T18:31:41Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 79
undervaluedScore: 70
maintainers: ["palves", "dependabot[bot]", "lancesix"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3c64933eadf4a4669a4fcfd00084598d475fded372d97824704358a6231e87f/ROCm/ROCdbgapi"
---

AMD Debugger API (ROCdbgapi)
============================

> [!NOTE]
> The published documentation is available at [ROCdbgapi documentation](https://rocm.docs.amd.com/projects/ROCdbgapi/en/latest/index.html) in an organized, easy-to-read format, with search and a table of contents.

Introduction
------------

The AMD Debugger API is a library that provides all the support necessary for a
debugger and other tools to perform low level control of the execution and
inspection of execution state of AMD's commercially available GPU architectures.

For more information about the AMD ROCm ecosystem, see:

- https://rocm.docs.amd.com/

Code Formatting
---------------

This project uses [clang-format](https://clang.llvm.org/docs/ClangFormat.html)
to enforce consistent code style.  The style is based on the GNU style with
minor adjustments documented in `.clang-format`.  Vendored headers under
`src/hsa/`, `src/linux/`, `src/windows/`, and `third_party/` are excluded.

Only modified lines are reformatted, using
[clang-format-diff](https://clang.llvm.org/docs/ClangFormat.html#script-for-patch-reformatting).
To reformat the changes in your working tree against the upstream branch:

````shell…
