---
repo: "VladasZ/rustscript"
name: "rustscript"
description: "Interpreted subset of Rust for fast automation scripts"
readmeQualityOk: true
url: "https://github.com/VladasZ/rustscript"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 29
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-04T07:27:53Z"
lastCommitAt: "2026-08-29T10:20:56Z"
lastReleaseAt: "2026-07-22T19:11:13Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 80
undervaluedScore: 41
maintainers: ["VladasZ", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcefebfb0157734c0dacd0d6116fd5665df79c72ac114043f7ce4c0a8e28b2e6/VladasZ/rustscript"
---

# RustScript

Write helper scripts in `rust` and run them like shell scripts, with no
compile step. RustScript interprets a practical subset of the language, so a
script starts instantly. `rust check` validates the same file with the real
`rustc`.

How it works inside: [docs/interpreter.md](https://github.com/VladasZ/rustscript/blob/HEAD/docs/interpreter.md)

## Install

```sh
cargo install run-rs
```

This installs a binary named `rust`.

## First script

```rust
#!/usr/bin/env rust

use std::fs;

fn main() -> anyhow::Result<()> {
    let text = fs::read_to_string("notes.txt")?;
    println!("{} lines", text.lines().count());
    Ok(())
}
```

Make it executable and run it:

```sh
chmod +x notes.rs
./notes.rs
```

## Usage

```text
rust FILE.rs         interpret the script
rust -e 'CODE'       run a snippet, arguments after CODE go to it
rust check FILE.rs   validate without running
rust build FILE.rs   compile, cache, and run a native binary
rust supported       list every bridged method per receiver
rust clean           clear cached checks and builds
rust update [VER]    install a release, the newest one by default
rust --version       show version and build information
```…
