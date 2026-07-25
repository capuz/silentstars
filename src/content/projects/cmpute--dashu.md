---
repo: "cmpute/dashu"
name: "dashu"
description: "A library set of arbitrary precision numbers implemented in Rust."
readmeQualityOk: true
url: "https://github.com/cmpute/dashu"
homepage: "http://zyxin.xyz/dashu/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["arbitrary-precision", "bignum-library", "rust", "bigfloat", "bigint", "multiple-precision"]
stars: 129
forks: 18
openIssues: 5
closedIssues: 38
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2022-06-29T06:48:48Z"
lastCommitAt: "2026-07-25T06:01:14Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 47
maintainers: ["cmpute", "DRMacIver", "Shoeboxam"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/508578436/e0aad4ff-a2ec-4bce-994d-5a0a0165069a"
discussionCount: 1
---

# dashu

[English](https://github.com/cmpute/dashu/blob/HEAD/README.md) | [简体中文](https://github.com/cmpute/dashu/blob/HEAD/README-zh.md)



A library set of arbitrary precision numbers (aka. big numbers) implemented in Rust. It's a Rust native alternative to GNU GMP + MPFR + MPC. It features:
- Pure rust, full `no_std` support.
- Focus on ergonomics & readability, and then efficiency.
- Optimized speed and memory usage.
- Current MSRV is 1.68.

## Sub-crates

- [`dashu-base`](https://github.com/cmpute/dashu/blob/HEAD/base): Common trait definitions
- [`dashu-int`](https://github.com/cmpute/dashu/blob/HEAD/integer): Arbitrary precision integers
- [`dashu-float`](https://github.com/cmpute/dashu/blob/HEAD/float): Arbitrary precision floating point numbers
- [`dashu-ratio`](https://github.com/cmpute/dashu/blob/HEAD/rational): Arbitrary precision rational numbers
- [`dashu-cmplx`](https://github.com/cmpute/dashu/blob/HEAD/complex): Arbitrary precision complex numbers
- [`dashu-macros`](https://github.com/cmpute/dashu/blob/HEAD/macros): Macros for creating big numbers

`dashu` is a meta crate that re-exports all the types from these sub-crates. Please see the…
