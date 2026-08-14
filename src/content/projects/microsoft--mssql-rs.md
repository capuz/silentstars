---
repo: "microsoft/mssql-rs"
name: "mssql-rs"
description: "Repository for the TDS implementation in Rust."
readmeQualityOk: true
url: "https://github.com/microsoft/mssql-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [74]
stars: 39
forks: 8
openIssues: 31
closedIssues: 59
watchers: 6
contributors: 10000
recentReleases: 0
createdAt: "2025-07-11T22:16:30Z"
lastCommitAt: "2026-08-14T05:13:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 53
maintainers: ["saurabh500", "David-Engel", "Vahid-b"]
openGraphImageUrl: "https://opengraph.githubassets.com/c606a556c16d5f7d853e52a286efb264db8d78bfaf42fd36fde939e110a92aea/microsoft/mssql-rs"
discussionCount: 0
---

# mssql-rs

A Rust implementation of the [Tabular Data Stream (TDS)](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-tds/) protocol used by Microsoft SQL Server. This library provides a foundational protocol layer to power SQL connectivity across multiple language bindings.

## Overview

The `mssql-tds` crate implements the TDS protocol from the ground up in Rust, providing a high-performance, memory-safe core that can be shared across driver ecosystems. The project is organized as a Cargo workspace:

| Crate | Purpose |
|---|---|
| `mssql-tds` | Core TDS protocol library |
| `mssql-js` | (Experimental) Node.js bindings via NAPI-RS |
| `mssql-tds-cli` | Interactive CLI client tool |
| `mssql-mock-tds` | Mock TDS server for testing |
| `mssql-odbc` | ODBC driver implementing the msodbcsql18 interface — cdylib for C/C++ |

## Getting Started

### Prerequisites

- [Rust](https://rustup.rs/) (version specified in `rust-toolchain.toml`)
- A C linker and OpenSSL development headers (e.g., `build-essential`, `libssl-dev` on Debian/Ubuntu)
- [cargo-nextest](https://nexte.st/) for running tests: `cargo install cargo-nextest --locked`
- Docker (optional, for running a local…
