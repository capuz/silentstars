---
repo: "okooo5km/pngoptim"
name: "pngoptim"
description: "a tool for png optimizing."
readmeQualityOk: true
url: "https://github.com/okooo5km/pngoptim"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-05T10:51:18Z"
lastCommitAt: "2026-10-25T02:46:27Z"
lastReleaseAt: "2026-04-10T16:14:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 59
undervaluedScore: 20
maintainers: ["okooo5km"]
openGraphImageUrl: "https://opengraph.githubassets.com/32d9822d9cc944fde6b1e6930f664313c1bffcf90bb7be0f5ecd594146daa94f/okooo5km/pngoptim"
---

# pngoptim

A fast, single-binary PNG quantization CLI written in Rust — a modern alternative to [pngquant](https://pngquant.org/).

- **1.69x faster** than pngquant on average (up to 1.98x on large images)
- **2–3% smaller** files at equivalent quality settings
- **APNG support** with lossy quantization (global shared palette) and lossless structure optimization — safe mode (duplicate frame folding) and aggressive mode (+ frame rect minimization with rollback safety)
- **ICC color management** with automatic sRGB normalization via lcms2

## Installation

### Homebrew (macOS)

```bash
brew install okooo5km/tap/pngoptim
```

### GitHub Releases

Download prebuilt binaries for macOS (Universal), Linux (x86_64/arm64), and Windows (x86_64) from [Releases](https://github.com/okooo5km/pngoptim/releases/latest).

### Build from Source

```bash
# Via cargo install
cargo install --git https://github.com/okooo5km/pngoptim.git

# Or clone and build
git clone https://github.com/okooo5km/pngoptim.git
cd pngoptim
cargo build --release
# Binary at ./target/release/pngoptim
```

## Usage

```bash
# Basic: quantize a single PNG
pngoptim input.png -o output.png

# Quality control (min-max, like…
