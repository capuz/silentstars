---
repo: "helly25/mbo"
name: "mbo"
description: "MBO, a C++20 library: This C++20 library provides some general useful building blocks and integrates with Google's Abseil library."
readmeQualityOk: true
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
lastCommitAt: "2026-07-05T21:00:13Z"
lastReleaseAt: "2023-10-18T05:10:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 58
maintainers: ["helly25"]
openGraphImageUrl: "https://opengraph.githubassets.com/1112bf07ff23c417866b398c86507ad6ff57b2fe5e8a8d8c42016822c1dbcbb5/helly25/mbo"
discussionCount: 0
---

# MBO, a C++20 library

This C++20 library provides some general useful building blocks and integrates
with [Google's Abseil library](https://abseil.io/).

The library is tested with Clang (20+) and GCC (13+) on Ubuntu and MacOS (arm) using continuous integration: [](https://github.com/helly25/mbo/actions/workflows/main.yml).

## Library organization

The C++ library is organized in functional groups each residing in their own directory:

- Config
  - `namespace mbo::config`
  - mbo/config:config_cc, mbo/config/config.h
    - Custom Bazel flag `--//mbo/config:limited_ordered_max_unroll_capacity` which controls the maximum unroll size for `LimitedOrdered` and thus `LimitedMap` and `LimitedSet`.
    - Custom Bazel flag `--//mbo/config:require_throws` which controls whether `MBO_CONFIG_REQUIRE` throw exceptions or use crash logging (the default `False` or `0`). This mostly affects containers.
  - mbo/config:require_cc, mbo/config/require.h
    - Marcos `MBO_CONFIG_REQUIRE(condition, message)` which allows to check a `condition` and either throw an exception or crash with Abseil FATAL logging. The behavior is controlled by `--//mbo/config:require_throws`.
- Container
  - `namespace…
