---
repo: "aspect-build/rules_py"
name: "rules_py"
description: "More compatible Bazel rules for running Python tools and building Python projects"
url: "https://github.com/aspect-build/rules_py"
language: "Starlark"
languages: ["Starlark", "Python"]
languagePcts: [77, 20]
topics: ["bazel", "bazel-rules", "python"]
stars: 142
forks: 90
openIssues: 40
closedIssues: 196
watchers: 5
contributors: 69
recentReleases: 0
createdAt: "2022-03-04T18:49:25Z"
lastCommitAt: "2026-06-25T06:40:34Z"
lastReleaseAt: "2024-05-01T00:56:03Z"
status: "thriving"
tags: ["needs_contributors", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 47
maintainers: ["jbedard", "tamird", "gregmagolan"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bc14f5adf5106cd313c4f38bac9aaed6270937f2bb7c294aa934a409783374e/aspect-build/rules_py"
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
