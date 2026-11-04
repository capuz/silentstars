---
repo: "QuilibriumNetwork/monorepo"
name: "monorepo"
description: "Quilibrium protocol, supporting libraries, and light client"
readmeQualityOk: true
url: "https://github.com/QuilibriumNetwork/monorepo"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 153
forks: 156
openIssues: 11
closedIssues: 165
watchers: 21
contributors: 41
recentReleases: 0
createdAt: "2023-04-15T04:06:11Z"
lastCommitAt: "2026-11-03T23:18:36Z"
lastReleaseAt: "2024-06-21T17:54:48Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 98
undervaluedScore: 50
maintainers: ["CassOnMars", "blacks1ne"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/628151963/badc764b-c30b-45ff-90dc-6fd2d4d35072"
discussionCount: 1
---

# Quilibrium - 2.1 - Bloom

## Quick Start

Running production nodes from source is no longer recommended given build
complexity. Please refer to our release information to obtain the latest
version.

## Running From Source

Ensure you have all required dependencies.

### Ubuntu Linux

`docker/Dockerfile.source` is the reference for these dependencies: its
`base` stage lists the Ubuntu packages, and its `gmp-builder`,
`flint-builder`, `emp-builder` and `rust-base` stages build the native
libraries and install the Rust toolchain. Run the same steps on the host,
or build inside that image.

### macOS

Because Mac varies in terms of dependency management, we recommend
installing Xcode for build toolchain, then use homebrew to install openssl.
Other dependencies via homebrew are the dynamically linked version of the
libraries, so we recommend manually fetching the required packages:

    curl https://gmplib.org/download/gmp/gmp-6.3.0.tar.xz > /tmp/gmp.tar.xz
    pushd /tmp/
    tar xvf gmp.tar.xz
    pushd gmp-6.3.0
    ./configure
    make
    make check
    sudo make install
    popd
    git clone https://github.com/flintlib/flint.git
    pushd flint
    git checkout flint-3.0…
