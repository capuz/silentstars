---
repo: "facebookincubator/reindeer"
name: "reindeer"
description: "Reindeer is a tool to transform Rust Cargo dependencies into generated Buck build rules"
readmeQualityOk: true
url: "https://github.com/facebookincubator/reindeer"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["buck", "buck2", "starlark"]
stars: 269
forks: 55
openIssues: 15
closedIssues: 24
watchers: 12
contributors: 173
recentReleases: 0
createdAt: "2020-06-25T00:49:48Z"
lastCommitAt: "2026-07-05T20:56:20Z"
lastReleaseAt: "2024-05-06T15:09:33Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 76
undervaluedScore: 37
maintainers: ["JakobDegen"]
openGraphImageUrl: "https://opengraph.githubassets.com/db8b5ec904d3bb32528d7e5145216193d07f93d3ab2cfc12bd9d8ee5e0cb2a74/facebookincubator/reindeer"
---

# Reindeer - Building Cargo Packages with Buck [](https://github.com/facebookincubator/reindeer/actions)

Jeremy Fitzhardinge <jsgf@fb.com>

This is a set of tools for importing Rust crates from crates.io, git repos, etc
and generating Buck build rules for them. Currently it primarily solves the
problem of managing third-party dependencies in a monorepo built with
[Buck](https://buck2.build/), but my hope is that it can be extended to support
[Bazel](https://bazel.build/) and other similar build systems.

## Installation and Building

Reindeer builds with Cargo in the normal way. It has no unusual build-time
dependencies. Therefore, you can use Cargo to not only build Reindeer, but to
install it as well.

```shell
cargo install --locked --git https://github.com/facebookincubator/reindeer reindeer
```

### Nix

If you are using [Nix](https://nixos.org/), you can install Reindeer from
[nixpkgs](https://github.com/NixOS/nixpkgs) via the `reindeer` package. This
package is unofficial and community-maintained.

## Getting started

There are several complete (but small) [examples](https://github.com/facebookincubator/reindeer/blob/HEAD/examples) to get started with.
More complete…
