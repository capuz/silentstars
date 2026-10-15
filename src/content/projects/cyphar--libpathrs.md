---
repo: "cyphar/libpathrs"
name: "libpathrs"
description: "C-friendly API to make path resolution safer on Linux."
readmeQualityOk: true
url: "https://github.com/cyphar/libpathrs"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
topics: ["rust", "containers", "path-resolution", "security-hardening", "linux"]
stars: 147
forks: 13
openIssues: 55
closedIssues: 86
watchers: 6
contributors: 9
recentReleases: 0
createdAt: "2019-06-04T07:59:11Z"
lastCommitAt: "2026-10-15T08:30:56Z"
lastReleaseAt: "2025-11-24T16:07:42Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 87
undervaluedScore: 40
maintainers: ["cyphar", "dependabot[bot]", "AkihiroSuda"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bc7d5d30623a68b6dc8d29ca24e593cbf500c251576295d5211860205e22187/cyphar/libpathrs"
discussionCount: 0
---

## `libpathrs` ##

This library implements a set of C-friendly APIs (written in Rust) to make path
resolution within a potentially-untrusted directory safe on GNU/Linux. [There
are countless examples of security vulnerabilities caused by bad handling of
paths][avoidable-issues]; this library provides an easy-to-use set of VFS APIs
to avoid those kinds of issues.

[avoidable-issues]: ./docs/avoidable-vulnerabilities.md

### Examples ###

Here is a toy example of using this library to open a path (`/etc/passwd`)
inside a root filesystem (`/path/to/root`) safely. More detailed examples can
be found in `examples/` and `tests/`.

#### Rust ####

```rust
use std::fs::File;

use pathrs::{flags::OpenFlags, Root};

fn get_my_fd() -> Result<File, Error> {
    const ROOT_PATH: &'static str = "/path/to/root";
    const UNSAFE_PATH: &'static str = "/etc/passwd";

    let root = Root::open(ROOT_PATH)?;
    let handle = root.resolve(UNSAFE_PATH)?;
    let file = handle.reopen(OpenFlags::O_RDONLY)?;

    // The handle step can be skipped using root.open_subpath().

    Ok(file)
}
```

#### C ####

```c
#define _GNU_SOURCE
#include <unistd.h>
#include <fcntl.h>
#include <stdio.h>
#include…
