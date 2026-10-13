---
repo: "bazel-contrib/platforms_contrib"
name: "platforms_contrib"
description: "Rich, expressive constraints for real-world Bazel platforms"
readmeQualityOk: true
url: "https://github.com/bazel-contrib/platforms_contrib"
language: "Starlark"
languages: ["Starlark"]
languagePcts: [87]
topics: ["bazel", "platforms"]
stars: 7
forks: 2
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 18
recentReleases: 1
createdAt: "2026-01-22T17:33:50Z"
lastCommitAt: "2026-10-13T10:57:52Z"
lastReleaseAt: "2026-10-11T09:46:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 61
undervaluedScore: 23
maintainers: ["fmeum"]
openGraphImageUrl: "https://opengraph.githubassets.com/f050920a3b7658474f9ff7e903e008f3a690c8ee37d7389486694333aa27125e/bazel-contrib/platforms_contrib"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/bazel-rules-authors-sig"]
discussionCount: 0
---

# platforms_contrib

platforms_contrib provides standardized constraints and flags for expressive Bazel platform definitions, beyond the standard OS and CPU constraints provided by [bazelbuild/platforms](https://github.com/bazelbuild/platforms).
It currently covers:

* [libc flavor and version](#libc-flavor-and-version-linux-only) (currently Linux only)
* [CPU features and model](#cpu-features-and-model-x86-64-only) (currently x86-64 only)

We plan to work on support for non-Linux OSes and ARM CPUs next.
Suggestions and PRs are welcome!

Use these constraints instead of defining your own when authoring toolchains, rules or BUILD files.
platforms_contrib also provides [host platforms](#auto-detected-host-platforms) that are auto-detected with these constraints.

**Note:** platforms_contrib is currently in alpha and may change in backwards-incompatible ways at any time.
We plan to reach version 1.0.0 soon and will heavily emphasize backwards compatibility at that point.

## Setup

Add the following to your `MODULE.bazel` file, using the latest version from the [releases page](https://github.com/bazel-contrib/platforms_contrib/releases):

```starlark
bazel_dep(name =…
