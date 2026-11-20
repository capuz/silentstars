---
repo: "coastalwhite/vogls"
name: "vogls"
description: "Fast, Interactive and Embeddable Verilog-2005 Simulator"
readmeQualityOk: true
url: "https://github.com/coastalwhite/vogls"
homepage: "https://www.vogls.nl/"
language: "Verilog"
languages: ["Verilog", "Rust"]
languagePcts: [56, 39]
topics: ["rust", "simulation", "verilog"]
stars: 9
forks: 2
openIssues: 21
closedIssues: 11
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-19T12:43:17Z"
lastCommitAt: "2026-11-19T11:55:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 86
undervaluedScore: 47
maintainers: ["coastalwhite"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7392cfc5695d29ae938fbb230c3c8c8825c52da54b1d40dbf1261f33e43c809/coastalwhite/vogls"
---

Vogls is a full-timing Verilog simulator focused on side-channel analysis,
interactive simulation and gate-level simulation. It can be used as
command-line application, a python library or as a Rust library to embed in
applications and tools.

> **Warning**
>
> 
> Although we use Vogls for our own research, it is still very much *alpha*
> software. We hope to develop in the open and collaborate to resolve bugs and
> implement missing features.

This repository contains the source code, tests and documentation for Vogls. Alongside that, there are several tools we have built using Vogls, including:
- [A Python library to write side-channel analysis plans](https://github.com/coastalwhite/vogls/blob/HEAD/crates/vogls-python/README.md)
- [A web application visualizing RISC-V processor pipelines](https://vogls.nl/pipeline-explorer)

## Getting started

To get started and install the Vogls Command-Line Interface:

```bash
git clone https://codeberg.org/coastalwhite/vogls
cd vogls

# Requires a Rust toolchain.
cargo install --path crates/vogls-cli
```

This will install the `vogls` binary, which allows for simulating Verilog design like:

```bash
vogls path/to/file1.v path/to/file2.v
```
