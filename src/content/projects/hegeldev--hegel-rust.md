---
repo: "hegeldev/hegel-rust"
name: "hegel-rust"
description: "Property-based testing for Rust, built on Hypothesis"
readmeQualityOk: true
url: "https://github.com/hegeldev/hegel-rust"
homepage: "https://docs.rs/hegeltest"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 336
forks: 31
openIssues: 30
closedIssues: 31
watchers: 3
contributors: 17
recentReleases: 0
createdAt: "2026-01-14T21:52:17Z"
lastCommitAt: "2026-08-28T12:21:53Z"
lastReleaseAt: "2026-03-19T21:28:18Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 27
maintainers: ["DRMacIver", "rdck", "hegel-release[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a522be9d111f2175a817b36ed91c505e3b9c13ef9d1a81d1458fa50520c8be5/hegeldev/hegel-rust"
---

> [!IMPORTANT]
> We're excited you're checking out Hegel! Hegel is in beta, and we'd love for you to try it and [report any feedback](https://github.com/hegeldev/hegel-rust/issues/new).
>
> As part of our beta, we may make breaking changes if it makes Hegel a better property-based testing library. If that instability bothers you, please check back in a few months for a stable release!
>
> See https://hegel.dev/compatibility for more details.

# Hegel for Rust

* [Documentation](https://docs.rs/hegeltest)
* [Website](https://hegel.dev)

`hegel-rust` is a property-based testing library for Rust. `hegel-rust` is based on [Hypothesis](https://github.com/hypothesisworks/hypothesis), using the [Hegel](https://hegel.dev/) protocol.

## Installation

To install: `cargo add --dev hegeltest`.

## Quickstart

Here's a quick example of how to write a Hegel test:

```rust
use hegel::generators as gs;
use hegel::TestCase;

fn my_sort(ls: &[i32]) -> Vec<i32> {
    let mut result: Vec<i32> = ls.to_vec();
    result.sort();
    result.dedup();
    result
}

#[hegel::test]
fn test_matches_builtin(tc: TestCase) {
    let mut vec1 = tc.draw(gs::vecs(gs::integers::<i32>()));
    let vec2 =…
