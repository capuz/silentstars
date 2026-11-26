---
repo: "hephbuild/heph"
name: "heph"
description: "Build once. Trust the cache."
readmeQualityOk: true
url: "https://github.com/hephbuild/heph"
homepage: "https://hephbuild.github.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 12
forks: 4
openIssues: 9
closedIssues: 32
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-07-22T16:43:25Z"
lastCommitAt: "2026-11-26T22:36:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 74
maintainers: ["raphaelvigee"]
openGraphImageUrl: "https://opengraph.githubassets.com/4dbad49fc36a1e0d47befd5ebd7a7372beaa74792e5dcfa24ed19bb0ac39caa4/hephbuild/heph"
---

# heph

heph is a build/task execution engine with a provider/driver plugin model. Targets are
isolated, side-effect-free, and content-addressed: declared inputs are hashed before
execution, so identical inputs hit the cache instead of re-running.

Documentation: https://hephbuild.github.io/docs

> ⚠️ **Under heavy development.** Breaking changes may arise at any time.

# Developer setup

Install devenv: https://devenv.sh/getting-started/

## RustRover

Build the devenv

    devenv build

Toolchain location:

    echo "$(pwd)/.devenv/profile/bin"

Standard library:

    devenv shell 'echo $RUST_SRC_PATH'
