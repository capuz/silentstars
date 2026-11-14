---
repo: "amartani/rules_mise"
name: "rules_mise"
description: "Use mise-en-place tools from bazel"
readmeQualityOk: true
url: "https://github.com/amartani/rules_mise"
language: "Starlark"
languages: ["Starlark", "Python"]
languagePcts: [64, 30]
topics: ["bazel", "bazel-build", "bazel-module"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-24T13:42:48Z"
lastCommitAt: "2026-11-14T22:02:00Z"
lastReleaseAt: "2026-10-23T16:26:48Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 62
maintainers: ["amartani", "renovate[bot]", "mkanat"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fccb9561cb6ae5b64c56dea1be1540b8a49d993a53bd97bec499cd75294dc1a/amartani/rules_mise"
---

# Bazel rules for mise

A Bazel module that exposes tools installed via [mise](https://mise.jdx.dev/) as
Bazel dependencies. It is an alternative to
[rules_multitool](https://github.com/bazel-contrib/rules_multitool) that reuses
your existing `mise.lock` instead of maintaining a separate lockfile. The same
`mise.toml` / `mise.lock` drives both your local developer environment
(`mise install`) and your Bazel toolchains, so tools don't have to run through
Bazel to stay pinned to the same version — handy for linters and other dev tools
you also run outside Bazel (see `e2e/smoke`, which uses `ruff` both ways).

## Usage

In your `MODULE.bazel`, add the `bazel_dep` from the release you wish to use
(see <https://github.com/amartani/rules_mise/releases> for available versions):

```starlark
bazel_dep(name = "rules_mise", version = "0.6.2")
```

Then set up the extension and register the toolchains:

```starlark
mise = use_extension("@rules_mise//mise:extensions.bzl", "mise")
mise.hub(lockfile = "//:mise.lock")
use_repo(mise, "mise")

register_toolchains("@mise//toolchains:all")
```

Then depend on tools through the toolchain-resolved targets:

```text
@mise//tools/ruff                 ->…
