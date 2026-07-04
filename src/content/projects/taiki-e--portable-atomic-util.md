---
repo: "taiki-e/portable-atomic-util"
name: "portable-atomic-util"
description: "Synchronization primitives built with portable-atomic."
url: "https://github.com/taiki-e/portable-atomic-util"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["atomic", "no-std", "rust"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-14T14:19:43Z"
lastCommitAt: "2026-07-04T19:19:51Z"
lastReleaseAt: "2026-03-14T16:16:28Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 93
undervaluedScore: 34
maintainers: ["taiki-e", "dependabot[bot]", "tommasoclini"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4fba6a783a2d607cd4d1eee925ec481c69aec4c97db160b17f43f32048b63a3/taiki-e/portable-atomic-util"
fundingLinks: ["GITHUB:https://github.com/taiki-e"]
---

# portable-atomic-util

Synchronization primitives built with [portable-atomic].

- Provide `Arc`. (optional, requires the `std` or `alloc` feature)
- Provide `task::Wake`. (optional, requires the `std` or `alloc` feature)

See [portable-atomic#1] for other primitives being considered for addition to this crate.

This crate was originally [part of the portable-atomic repository](https://github.com/taiki-e/portable-atomic/tree/cbbee0c0d202a5944f7d66aaafaac6ed76e6f599/portable-atomic-util) and was extracted into its own repository.

## Optional features

- **`std`**<br>
  Use `std`.

  Note:
  - This implicitly enables the `alloc` feature.

- **`alloc`**<br>
  Use `alloc`.

  Note:
  - The MSRV when this feature is enabled and the `std` feature is *not* enabled is Rust 1.36 that `alloc` crate stabilized.

- **`serde`**<br>
  Implement `serde::{Serialize, Deserialize}` for `Arc`.

  Note:
  - The MSRV when this feature is enabled is the one coming from serde, as of now it's Rust 1.56

[portable-atomic]: https://github.com/taiki-e/portable-atomic
[portable-atomic#1]: https://github.com/taiki-e/portable-atomic/issues/1

## Optional cfg

One of the ways to enable cfg is to set…
