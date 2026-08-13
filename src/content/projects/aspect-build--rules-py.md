---
repo: "aspect-build/rules_py"
name: "rules_py"
description: "More compatible Bazel rules for running Python tools and building Python projects"
readmeQualityOk: true
url: "https://github.com/aspect-build/rules_py"
language: "Starlark"
languages: ["Starlark", "Python"]
languagePcts: [70, 26]
topics: ["bazel", "bazel-rules", "python"]
stars: 143
forks: 97
openIssues: 38
closedIssues: 221
watchers: 7
contributors: 75
recentReleases: 0
createdAt: "2022-03-04T18:49:25Z"
lastCommitAt: "2026-08-13T05:17:13Z"
lastReleaseAt: "2024-05-01T00:56:03Z"
status: "thriving"
tags: ["needs_contributors", "funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 48
maintainers: ["jbedard", "tamird", "xangcastle"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d9cb4aaaff0181581bb9776b373abd8fc673fd110501cf397daa1955f71caa2/aspect-build/rules_py"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/aspect-build"]
discussionCount: 9
---

# aspect_rules_py

> [!NOTE]
> This repository uses the [Aspect CLI](https://github.com/aspect-build/aspect-cli) for CI and local development.
> See the [docs](https://docs.aspect.build/cli/overview) and [install instructions](https://docs.aspect.build/cli/install) to get started.

> [!WARNING]
> **This is the 2.x ALPHA branch.** APIs and behavior may change without notice. For stable documentation, see the [1.x branch](https://github.com/aspect-build/rules_py/tree/1.x).

`aspect_rules_py` is a high-performance alternative to [rules_python](https://github.com/bazelbuild/rules_python), the
reference Python ruleset for Bazel.

It provides drop-in replacements for `py_binary`, `py_library`, and `py_test` that prioritize:

- **Blazing-fast dependency resolution** via native `uv` integration
- **Strict hermeticity** with isolated Python execution and Bash-based launchers
- **Idiomatic Python layouts** using standard `site-packages` symlink trees
- **Seamless IDE compatibility** via virtualenv-native structures
- **Production-ready containers** with optimized OCI image layers

`aspect_rules_py` optimizes for modern Python development workflows, large-scale monorepos, and Remote Build…
