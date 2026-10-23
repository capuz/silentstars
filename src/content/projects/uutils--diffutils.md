---
repo: "uutils/diffutils"
name: "diffutils"
description: "Drop-in replacement of diffutils in Rust"
readmeQualityOk: true
url: "https://github.com/uutils/diffutils"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 280
forks: 48
openIssues: 26
closedIssues: 40
watchers: 5
contributors: 29
recentReleases: 1
createdAt: "2021-02-24T05:18:30Z"
lastCommitAt: "2026-10-23T09:33:18Z"
lastReleaseAt: "2026-10-23T09:08:07Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 87
undervaluedScore: 38
maintainers: ["renovate[bot]", "cakebaker", "oech3"]
openGraphImageUrl: "https://opengraph.githubassets.com/834f77fa05f724bdfab66503850e1db14d4cc6e4b2a0f2402e10e86837fdeded/uutils/diffutils"
---

The goal of this package is to be a drop-in replacement for the [diffutils commands](https://www.gnu.org/software/diffutils/) (diff, cmp, diff3, sdiff) in Rust.

Based on the incomplete diff generator in https://github.com/rust-lang/rust/blob/master/src/tools/compiletest/src/runtest.rs, and made to be compatible with GNU's diff and patch tools.

## Installation

Ensure you have Rust installed on your system. You can install Rust through [rustup](https://rustup.rs/).

Clone the repository and build the project using Cargo:

```bash
git clone https://github.com/uutils/diffutils.git
cd diffutils
cargo build --release
```

## Example

```bash

cat <<EOF >fruits_old.txt
Apple
Banana
Cherry
EOF

cat <<EOF >fruits_new.txt
Apple
Fig
Cherry
EOF

$ cargo run -- diff -u fruits_old.txt fruits_new.txt
    Finished dev [unoptimized + debuginfo] target(s) in 0.00s
     Running `target/debug/diffutils -u fruits_old.txt fruits_new.txt`
--- fruits_old.txt
+++ fruits_new.txt
@@ -1,3 +1,3 @@
 Apple
-Banana
+Fig
 Cherry

```

## License

This project is distributed under the terms of both the MIT license and the
Apache License (Version 2.0).

See…
