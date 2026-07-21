---
repo: "uutils/tar"
name: "tar"
description: "Rust implementation of tar"
readmeQualityOk: true
url: "https://github.com/uutils/tar"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
stars: 42
forks: 11
openIssues: 94
closedIssues: 10
watchers: 6
contributors: 9
recentReleases: 0
createdAt: "2025-09-24T18:19:59Z"
lastCommitAt: "2026-07-21T06:11:01Z"
lastReleaseAt: "2026-04-03T07:43:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 39
maintainers: ["renovate[bot]", "kaladron", "sylvestre"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5790f5fb67bae999aa8468779c9835f40e50d12d0773c8d78a130e41d10f91c/uutils/tar"
---

# tar

Rust reimplementation of the tar utility.

## Installation

We provide a [pre-built binary from main branch](https://github.com/uutils/tar/releases/tag/latest-commit).

To build tar from source, install Rust on your system. You can install Rust via [rustup](https://rustup.rs/).

Clone the repository and build the project using Cargo:

```bash
git clone https://github.com/uutils/tar.git
cd tar
cargo build --release
cargo run --release
```

## Testing

The tar application has a focused testing philosophy that separates concerns between the application (CLI interface, error handling, user experience) and the underlying `tar-rs` library (archive format correctness, encoding, permissions).

See [tests/README.md](https://github.com/uutils/tar/blob/HEAD/tests/README.md) for comprehensive documentation.

```bash
# Run all tests
cargo test --all

# Run specific test
cargo test test_create_single_file
```

## License

tar is licensed under the MIT License - see the `LICENSE` file for details
