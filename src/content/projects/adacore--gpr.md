---
repo: "AdaCore/gpr"
name: "gpr"
description: "The framework for analyzing the GNAT Project (GPR) files"
readmeQualityOk: true
url: "https://github.com/AdaCore/gpr"
language: "Ada"
languages: ["Ada"]
languagePcts: [92]
stars: 22
forks: 12
openIssues: 5
closedIssues: 8
watchers: 6
contributors: 41
recentReleases: 0
createdAt: "2017-10-05T08:31:52Z"
lastCommitAt: "2026-10-29T10:20:26Z"
lastReleaseAt: "2024-10-24T16:31:41Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 72
undervaluedScore: 62
maintainers: ["lambourg", "Ankyrine", "Jicquel"]
openGraphImageUrl: "https://opengraph.githubassets.com/c60ccfe18d2f7448c4f1cc7d1f7bcc30edb5a9417701019df4393bf214020c16/AdaCore/gpr"
---

LibGPR2 - Parser for GPR Project files
======================================

INSTALLING THIS LIBRARY
-----------------------

The LibGPR2 library depends on some other external libraries:

* [GNATcoll](https://github.com/AdaCore/gnatcoll-core)

* [Langkit](https://github.com/AdaCore/langkit)

Both must be installed on the system to be able to compile LibGPR2.

The library also depends on the Knowledge Base containing information
of different targets, runtimes, compilers, etc.:

* [GPRCONFIG KB](https://github.com/AdaCore/gprconfig_kb)

A GPR parser generated from the Langkit grammar is already available
in `langkit/gen/src`. To regenerate this parser, the following additional
external modules are required:

* Python

* Langkit (build directory)

CONFIGURING LibGPR2
-------------------

The following variables can be used to configure the libGPR2 library:

* `prefix`: Location of the installation, the default is the running GNAT
  installation root.

* `GPR2_BUILD`: Control the build options: `release` (default) or `debug`.

* `PROCESSORS`: Parallel compilation (default is 0, depends on the number of
   cores).

* `TARGET`: For cross-compilation, auto-detected for native…
