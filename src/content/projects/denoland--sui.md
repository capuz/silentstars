---
repo: "denoland/sui"
name: "sui"
description: "Embed custom RO data into precompiled executables"
url: "https://github.com/denoland/sui"
homepage: "https://littledivy.com/sui"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 139
forks: 11
openIssues: 1
closedIssues: 18
watchers: 8
contributors: 16
recentReleases: 0
createdAt: "2024-04-29T16:36:13Z"
lastCommitAt: "2026-07-02T06:32:39Z"
lastReleaseAt: "2024-07-17T09:27:02Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 39
maintainers: ["littledivy", "divybot", "jlarmstrongiv"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ddf908ef6239957b96aecade1f8886de62facf93a28b6f10200e839b6e4d7fa/denoland/sui"
---

# `libsui`

_Sui (सुई)_ is a injection tool for executable formats (ELF, PE, Mach-O) that
allows you to embed files into existing binary and extract them at runtime.

It produces valid executables that can be code signed on macOS and Windows.

[Documentation](https://docs.rs/libsui) | [Usage](cli.rs)

## Usage

```
cargo add libsui
```

Embedding data into binaries:

```rust
use libsui::{Macho, PortableExecutable};

let exe = std::fs::read("tests/exec_mach64")?;
let mut out = std::fs::File::create("out")?;

Macho::from(exe)?
    .write_section("__hello", b"Hello, World!".to_vec())?
    .build(&mut out)?;

let exe = std::fs::read("tests/exec_pe64")?;
let mut out = std::fs::File::create("out.exe")?;

PortableExecutable::from(exe)?
    .write_resource("hello.txt", b"Hello, World!".to_vec())?
    .build(&mut out)?;
```

Extracting from self:

```rust
use libsui::find_section;

let data = find_section("hello.txt")?;
```

## Design

### Mach-O

#### ARM64 (Apple Silicon)

Resource is added as section in a new segment, load commands are updated and
offsets are adjusted. `__LINKEDIT` is kept at the end of the file.

It is similar to linker's `-sectcreate,__FOO,__foo,hello.txt` option.…
