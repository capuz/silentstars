---
repo: "christhomas/rust-fs-ext4"
name: "rust-fs-ext4"
description: "Pure-Rust ext4 filesystem driver with stable C ABI (ext4rs_*) for FSKit/Swift/C/Go."
readmeQualityOk: true
url: "https://github.com/christhomas/rust-fs-ext4"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["antimatter-website", "library"]
stars: 6
forks: 5
openIssues: 19
closedIssues: 75
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-04-18T02:18:07Z"
lastCommitAt: "2026-09-17T08:50:41Z"
lastReleaseAt: "2026-09-06T13:53:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 70
maintainers: ["christhomas"]
openGraphImageUrl: "https://opengraph.githubassets.com/83a7e506b936804fde6e1c4c1161109653c8c3ea61fbb6815845e9effbc72ae9/christhomas/rust-fs-ext4"
---

# am-fs-ext4 — pure-Rust ext2/3/4 driver

Pure-Rust read/write driver for the ext2, ext3, and ext4 on-disk
formats. Mounts disk images and block devices, journals writes
through JBD2, replays the journal on dirty mounts, and exposes a
stable C ABI (`fs_ext4_*`) so any FFI host (Swift/C/C++/Go/…) can
link `libfs_ext4.a` and `#include "fs_ext4.h"`. MIT-licensed. Zero
kernel calls; zero non-MIT/BSD/Apache dependencies. Runtime crates
are `crc32c`, `bitflags`, `unicode-normalization` and `caseless`
(casefold), plus the sister `am-fs-core` block-device crate.

Designed for FFI: the C ABI is stable and the static library has no
host-specific assumptions, so the same `libfs_ext4.a` works equally
well in a macOS FSKit extension, a Linux FUSE binary, a Windows tool,
or any embedded environment with a `BlockDevice` shim.

## Status

Read/write driver for the common case across ext2, ext3, and ext4.
Mount + read is exhaustive against the ext4 feature matrix we test
against; write is journaled through JBD2 and crash-safe under
fault-injection sweeps for every multi-block op the driver
exposes. Specific gaps are listed under "What doesn't work" below.

- 700+ automated tests — 200+ lib unit…
