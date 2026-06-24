---
repo: "helly25/mbo"
name: "mbo"
description: "MBO, a C++20 library: This C++20 library provides some general useful building blocks and integrates with Google's Abseil library."
url: "https://github.com/helly25/mbo"
language: "C++"
languages: ["C++"]
languagePcts: [91]
topics: ["cpp", "cpp20", "cpp20-library", "googletest", "matchers"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-06-05T12:15:15Z"
lastCommitAt: "2026-06-24T23:38:04Z"
lastReleaseAt: "2023-10-18T05:10:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 47
maintainers: ["helly25"]
openGraphImageUrl: "https://opengraph.githubassets.com/83433f0788cd9e88f54fe2cec9e2acdbe939e5b432b4fc2b7ae07d116653454e/helly25/mbo"
discussionCount: 0
---

# MBO, a C++20 library

This C++20 library provides some general useful building blocks and integrates
with [Google's Abseil library](https://abseil.io/).

The library is tested with Clang (16+) and GCC (12+) on Ubuntu and MacOS (arm) using continuous integration: [![Test](https://github.com/helly25/mbo/actions/workflows/main.yml/badge.svg)](https://github.com/helly25/mbo/actions/workflows/main.yml).

## Library organization

The C++ library is organized in functional groups each residing in their own directory:

- Config
  - `namespace mbo::config`
  - mbo/config:config_cc, mbo/config/config.h
    - Custom Bazel flag `--//mbo/config:limited_ordered_max_unroll_capacity` which controls the maximum unroll size for `LimitedOrdered` and thus `LimitedMap` and `LimitedSet`.
    - Custom Bazel flag `--//mbo/config:require_throws` which controls whether `MBO_CONFIG_REQUIRE` throw exceptions or use crash logging (the default `False` or `0`). This mostly affects containers.
  - mbo/config:require_cc, mbo/config/require.h
    - Marcos `MBO_CONFIG_REQUIRE(condition, message)` which allows to check a `condition` and either throw an exception or crash with Abseil FATAL logging. The behavior is…
