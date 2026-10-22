---
repo: "ThinkParQ/beegfs-rust"
name: "beegfs-rust"
description: "BeeGFS 🛠️ software written in Rust such as the 🆕 BeeGFS management service."
readmeQualityOk: true
url: "https://github.com/ThinkParQ/beegfs-rust"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 9
forks: 3
openIssues: 6
closedIssues: 15
watchers: 6
contributors: 7
recentReleases: 1
createdAt: "2025-04-10T16:12:54Z"
lastCommitAt: "2026-10-22T08:52:00Z"
lastReleaseAt: "2026-08-18T21:22:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 61
maintainers: ["rustybee42", "sundereshwar", "pranavpadmasali"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4793eb1220ff3138e41ec4d74667018dde3a5a6822e0c1295c49ef061e39829/ThinkParQ/beegfs-rust"
---

beegfs-rust 
===========

# Contents 

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Building (With or Without Packaging)](#building-with-or-without-packaging)
  - [Setting the binaries version output](#setting-the-binaries-version-output)
- [Run the management](#run-the-management)
  - [Provide a config file](#provide-a-config-file)
  - [Provide TLS certificates](#provide-tls-certificates)
  - [Provide BeeMsg authentication file](#provide-beemsg-authentication-file)
  - [Set up the database](#set-up-the-database)
  - [Run the server](#run-the-server)

The purpose of this repository is twofold:

* Provide Rust packages for interacting with BeeGFS.
* Provide BeeGFS-related software written in Rust, such as the BeeGFS management service.

# Getting Started

## Prerequisites

* If you just want to build/run the project without OS packages download and install Rust from
  [rustup](https://rustup.rs/).
* If you want to build packages you also need to run `make install-tools`.
  * Note this only installs the tooling needed for a local, native build and is insufficient for
    cross-compilation.

If you are interested in contributing to the project please…
