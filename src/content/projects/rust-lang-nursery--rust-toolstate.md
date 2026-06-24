---
repo: "rust-lang-nursery/rust-toolstate"
name: "rust-toolstate"
description: "Records build and test status of external tools bundled with the Rust repository."
url: "https://github.com/rust-lang-nursery/rust-toolstate"
homepage: "https://rust-lang-nursery.github.io/rust-toolstate/"
language: "SCSS"
languages: ["SCSS"]
languagePcts: [88]
stars: 102
forks: 21
openIssues: 1
closedIssues: 9
watchers: 12
contributors: 42
recentReleases: 0
createdAt: "2017-12-04T13:37:55Z"
lastCommitAt: "2026-06-24T23:37:09Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 49
maintainers: ["rust-highfive"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a2385a52a65aff57b3adbe37d38375888e86bd7ee0595d68644fc3d62e41982/rust-lang-nursery/rust-toolstate"
---

rust-toolstate
==============

This repository records the compilation and testing status of development tools
bundled with the Rust build system.

The latest status can be read from https://rust-lang-nursery.github.io/rust-toolstate/.

Currently these tools are tracked:

* All the external books

These tools can be in one of the following states:

* **build fail** — the tool cannot be compiled at all, possibly due to recent
    changes of the compiler internal APIs.

* **test fail** — the tool can be compiled, but some tests failed.

* **test pass** — everything working correctly :)

Whenever the state changes, a commit will be pushed which mentions the maintainers on GitHub. This
notifies them to update the tool and sync with the Rust compiler repository.

How this repository works
-------------------------

In Rust, every PR needs to be tested by the CI and pass before merging. One of the tests is to check
if these external tools are still working. After the test, the CI will send a commit to record the
test result into `history/linux.tsv` or `history/windows.tsv`.

When the PR is successfully merged, the CI will inspect the corresponding tool states from the
history. If the…
