---
repo: "baihacker/pe"
name: "pe"
description: "A C++ library for solving problems on Project Euler"
readmeQualityOk: true
url: "https://github.com/baihacker/pe"
language: "C"
languages: ["C"]
languagePcts: [93]
stars: 41
forks: 5
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2014-09-04T18:39:02Z"
lastCommitAt: "2026-09-27T09:29:08Z"
lastReleaseAt: "2025-09-01T07:05:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 81
undervaluedScore: 54
maintainers: ["baihacker"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb4308d80e111bcdbeac92aaafd29a2fb1bb72cae9a752ccf2fc8f5397033669/baihacker/pe"
---

# PE: C++ Library for Project Euler

**PE** is a C++ library designed to solve problems on [Project Euler](https://projecteuler.net/recent).

## Prerequisites

To use this library, you need a C++ development environment that supports:
* C++20 or later.
* Building `x86_64` targets.

## Installation

1. **Include the Library:**
   - Place all the library files into a directory of your choice.
   - Ensure that `#include <pe.hpp>` is accessible by adding the directory to the `CPLUS_INCLUDE_PATH` environment variable.

2. **Configure the Library:**
   - Run **[gen_config.py](https://github.com/baihacker/pe/blob/master/gen_config.py)** from the installation directory to generate **[pe_config](https://github.com/baihacker/pe/blob/master/pe_config)**.
     - This script generates a static configuration file with default values. You can manually edit this file after generation.
       - `ENABLE_ASSERT`: Enable assertions for certain inputs or conditions.
       - `TRY_TO_USE_INT128`: Check if the compiler supports `int128` and enable it. Set to `0` to disable `int128` even if supported.
     - The script also automatically detects the presence of third-party libraries and sets the…
