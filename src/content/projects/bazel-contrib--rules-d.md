---
repo: "bazel-contrib/rules_d"
name: "rules_d"
description: "D rules for Bazel"
readmeQualityOk: true
url: "https://github.com/bazel-contrib/rules_d"
homepage: "https://registry.bazel.build/modules/rules_d"
language: "Starlark"
languages: ["Starlark", "D"]
languagePcts: [60, 40]
topics: ["bazel", "bazel-rules", "dlang", "dub", "dmd", "ldc"]
stars: 27
forks: 22
openIssues: 1
closedIssues: 20
watchers: 19
contributors: 32
recentReleases: 0
createdAt: "2016-03-15T15:04:29Z"
lastCommitAt: "2026-10-10T10:05:07Z"
lastReleaseAt: "2025-12-13T15:18:45Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 90
undervaluedScore: 65
maintainers: ["renovate[bot]", "dcarp", "georgesfarah"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1f1e6f3b5eee8a114e9089785aeb26ebfe8c78ee68e2a350160bdaaf24aa255/bazel-contrib/rules_d"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/bazel-rules-authors-sig"]
---

# Bazel Rules for the [D Programming Language](https://dlang.org)

`rules_d` provides Bazel rules and toolchains for building D libraries,
binaries, tests, protocol buffers, and projects that depend on DUB packages.

## Documentation

- [API documentation](https://registry.bazel.build/modules/rules_d/latest/docs)
- [Bazel Central Registry module](https://registry.bazel.build/modules/rules_d)
- [Releases](https://github.com/bazel-contrib/rules_d/releases)

## Tutorials

- [Using rules_d from a DUB project](https://github.com/bazel-contrib/rules_d/blob/HEAD/docs/dub.md)

## Installation

With Bzlmod, add `rules_d` to your `MODULE.bazel`:

```starlark
bazel_dep(name = "rules_d", version = "<version>")
```

Then configure a D toolchain:

```starlark
d = use_extension("@rules_d//d:extensions.bzl", "d")
d.toolchain(d_version = "dmd-2.112.0")
use_repo(d, "d_toolchains")

register_toolchains("@d_toolchains//:all")
```

Use the latest published version from the
[Bazel Central Registry](https://registry.bazel.build/modules/rules_d).

## WORKSPACE

For legacy `WORKSPACE` projects, copy the snippet from the release notes for
the version you want to use.

To use a commit instead of a release,…
