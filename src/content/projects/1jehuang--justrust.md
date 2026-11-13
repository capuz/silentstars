---
repo: "1jehuang/justrust"
name: "justrust"
description: "Ultra fast Rust compile for coding agents"
readmeQualityOk: true
url: "https://github.com/1jehuang/justrust"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 26
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-07T05:03:22Z"
lastCommitAt: "2026-11-13T11:19:02Z"
lastReleaseAt: "2026-10-12T03:46:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 49
maintainers: ["1jehuang"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5f8564d205d0f4c2e3aa5f1b7f5103c5f231623897f60c78531bc48b49ed3ae/1jehuang/justrust"
---

# justrust

**Ultra fast Rust compile for coding agents.**

Rebuilding every step of the Rust build toolchain from scratch to be faster,
more parallelizable, and more cacheable.

[Website](https://jcode.sh/rust) · [Install](#install) · [Use](#use) · [Remote builds](#remote-builds) · [Goal](#goal) · [Changelog](https://github.com/1jehuang/justrust/blob/HEAD/CHANGELOG.md)

---

justrust is rebuilding every step of the Rust build toolchain from scratch,
with a goal of **100–1,000× faster builds** through more parallelism, finer-grained
caching, and less redundant work.

The released client makes the edit, check, and test loop faster locally or with
our remote build service while the new toolchain takes shape.

Your coding agents spend valuable time waiting for Rust checks, builds, and
tests. Running those operations locally can slow down your machine, drive up
CPU usage, temperature, and RAM consumption, and fill your disk with build
artifacts. Our remote service offloads compilation, test execution, and build
artifact storage to our machines, freeing up yours.

Each build command also returns actionable diagnostics, showing agents where
time went, why crates rebuilt, and which…
