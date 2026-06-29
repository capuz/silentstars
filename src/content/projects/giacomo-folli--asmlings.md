---
repo: "giacomo-folli/asmlings"
name: "asmlings"
description: "A lightweight educational sandbox for Intel 8086 assembly programming with a Rust-based emulator runner."
url: "https://github.com/giacomo-folli/asmlings"
homepage: "https://giacomo-folli.github.io/asmlings-web/"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["assembly-x86", "education", "rust"]
stars: 28
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-22T08:27:36Z"
lastCommitAt: "2026-06-29T07:23:51Z"
lastReleaseAt: "2026-06-21T07:40:47Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 87
undervaluedScore: 38
maintainers: ["giacomo-folli"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d5a0c2d5bb5114cc3c5c4fb11a7f03b7f7dc302d40a2f52a227b8a18f191b25/giacomo-folli/asmlings"
---

# ⚙️ ASMLings

**A lightweight, interactive educational sandbox for Intel 8086 assembly programming.**

</div>

ASMLings provides a sandboxed feedback loop powered by a Rust-based 16-bit x86 emulator. You just write code, save the file and instantly check the results.

> Inspired by the `rustlings` project

## Installation

### Using cargo-binstall (fast, no compilation)

```bash
cargo install cargo-binstall
cargo binstall asmlings
```

### Using Cargo (with compilation step)

```bash
cargo install asmlings
```

### Manual Download

Download binaries from the [GitHub Releases page](https://github.com/giacomo-folli/asmlings/releases)

### System Dependency

You must also have the **NASM** assembler installed, as Asmlings uses it under the hood to compile your code before emulation.

* **macOS:** `brew install nasm`
* **Ubuntu/Debian:** `sudo apt install nasm`
* **Arch Linux:** `sudo pacman -S nasm`
* **Windows:** `winget install NASM`

### Troubleshooting Installation (Linux)

If `cargo install asmlings` fails with a linker error mentioning `__atomic_compare_exchange_16` or `undefined symbol`, your system needs the `libatomic` library to compile the underlying CPU emulator.

To fix…
