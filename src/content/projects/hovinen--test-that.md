---
repo: "hovinen/test-that"
name: "test-that"
description: "Test assertion library for Rust"
readmeQualityOk: true
url: "https://github.com/hovinen/test-that"
homepage: "https://crates.io/crates/test-that"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["rust-crate", "rust-library", "testing"]
stars: 104
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 22
recentReleases: 5
createdAt: "2026-05-29T19:13:50Z"
lastCommitAt: "2026-09-18T14:03:15Z"
lastReleaseAt: "2026-06-30T18:52:22Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 87
undervaluedScore: 34
maintainers: ["hovinen", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa83d95b287f0a7504095a95023fc0577c17f84003e3702461dc368950814ff9/hovinen/test-that"
---

# Test That!

[crates-badge]: https://img.shields.io/crates/v/test-that.svg
[crates-url]: https://crates.io/crates/test-that
[docs-badge]: https://img.shields.io/badge/docs.rs-test_that-66c2a5
[docs-url]: https://docs.rs/test-that/*/test_that/
[license-badge]: https://img.shields.io/badge/license-Apache-blue.svg
[license-url]: https://github.com/hovinen/test-that/blob/main/LICENSE
[actions-badge]: https://github.com/hovinen/test-that/actions/workflows/ci.yml/badge.svg
[actions-url]: https://github.com/hovinen/test-that/actions?query=workflow%3ACI+branch%3Amain

Test That! is a powerful test assertion library for Rust.

## TL;DR

Write test assertions which precisely specify your _intent_:

```rust
let vec = vec![5, 123, -4];
assert_that!(vec, each(gt(0)));
```

and get informative, meaningful diagnostics when the tests fail:

```
Value of: vec
Expected: only contains elements that is greater than 0
Actual: [5, 123, -4],
  whose element #2 is -4, which is less than or equal to 0
```

## Background

The existing assertions which come with Rust are fairly primitive:

* `assert!`
* `assert_eq!`
* `assert_matches!` (as of Rust 1.96)

These work fine for simple cases. But suppose you…
