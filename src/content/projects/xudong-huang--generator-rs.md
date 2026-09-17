---
repo: "Xudong-Huang/generator-rs"
name: "generator-rs"
description: "rust stackful generator library"
readmeQualityOk: true
url: "https://github.com/Xudong-Huang/generator-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["rust", "generator", "yield", "stackful-coroutines"]
stars: 364
forks: 48
openIssues: 12
closedIssues: 37
watchers: 12
contributors: 23
recentReleases: 0
createdAt: "2017-03-24T03:20:25Z"
lastCommitAt: "2026-09-17T08:50:28Z"
lastReleaseAt: "2021-03-30T08:13:48Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 70
undervaluedScore: 21
maintainers: ["Xudong-Huang", "Dantsz", "alexanderkjall"]
openGraphImageUrl: "https://opengraph.githubassets.com/7309ef9024fb6f51d963d8794e4effc154509aa4e025bdbdd46a2fd157515f53/Xudong-Huang/generator-rs"
---

# Generator-rs

rust stackful generator library

```toml
[dependencies]
generator = "0.8"
```

## Usage
```rust
use generator::{done, Gn};

fn main() {
    let g = Gn::new_scoped(|mut s| {
        let (mut a, mut b) = (0, 1);
        while b < 200 {
            std::mem::swap(&mut a, &mut b);
            b = a + b;
            s.yield_(b);
        }
        done!();
    });

    for i in g {
        println!("{}", i);
    }
}
```

## Output
```
1
2
3
5
8
13
21
34
55
89
144
233
```

## Goals

- [x] basic send/yield with message support
- [x] generator cancel support
- [x] yield_from support
- [x] panic inside generator support
- [x] stack size tune support
- [x] scoped static type support
- [x] basic coroutine interface support
- [x] stable rust support

##  based on this basic library
- we can easily port python library based on generator into rust
- coroutine framework running on multi thread

## Notices

* This crate supports below platforms, welcome to contribute with other arch and platforms

    - x86_64 Linux
    - x86_64 macOS
    - x86_64 Windows
    - x86_64 Fuchsia
    - ~~x86_64 Android~~
    - aarch64 Linux
    - aarch64 macOS
    - aarch64 Fuchsia
    - aarch64…
