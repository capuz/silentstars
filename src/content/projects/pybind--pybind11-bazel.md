---
repo: "pybind/pybind11_bazel"
name: "pybind11_bazel"
description: "Bazel wrapper around the pybind11 repository"
readmeQualityOk: true
url: "https://github.com/pybind/pybind11_bazel"
language: "Starlark"
languages: ["Starlark"]
languagePcts: [100]
stars: 115
forks: 67
openIssues: 3
closedIssues: 63
watchers: 9
contributors: 40
recentReleases: 2
createdAt: "2019-10-03T09:25:05Z"
lastCommitAt: "2026-10-20T08:50:02Z"
lastReleaseAt: "2026-08-05T15:38:27Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 86
undervaluedScore: 39
maintainers: ["Mizux", "dependabot[bot]", "mikael-s-persson"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a03bc9c79c065bdd08cf826106c5d352c8e639b95292fcee61081ad09244aa0/pybind/pybind11_bazel"
---

# Bazel extensions for pybind11

Github-CI:
| OS \ Build system | Bazel |
|:------- | :---: |
| Linux (`amd64`) | [][amd64_linux_bazel_link] |
| MacOS (`amd64`) | [][amd64_macos_bazel_link] |
| MacOS (`arm64`)     | [][arm64_macos_bazel_link] |
| Windows (`amd64`) | [][amd64_windows_bazel_link] |

[amd64_linux_bazel_status]: ./../../actions/workflows/amd64_linux_bazel.yml/badge.svg
[amd64_linux_bazel_link]: ./../../actions/workflows/amd64_linux_bazel.yml
[amd64_macos_bazel_status]: ./../../actions/workflows/amd64_macos_bazel.yml/badge.svg
[amd64_macos_bazel_link]: ./../../actions/workflows/amd64_macos_bazel.yml
[arm64_macos_bazel_status]: ./../../actions/workflows/arm64_macos_bazel.yml/badge.svg
[arm64_macos_bazel_link]: ./../../actions/workflows/arm64_macos_bazel.yml
[amd64_windows_bazel_status]: ./../../actions/workflows/amd64_windows_bazel.yml/badge.svg
[amd64_windows_bazel_link]: ./../../actions/workflows/amd64_windows_bazel.yml

Provided rules:

-   `pybind_extension`: Builds a python extension, automatically adding the
    required build flags and pybind11 dependencies. It defines a target which
    can be included as a `data` dependency of a `py_*` target.
-…
