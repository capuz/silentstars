---
repo: "safer-rust/RAPx"
name: "RAPx"
description: "A static analysis tool for Rust programs. The guardrail for AI-generated Rust code."
readmeQualityOk: true
url: "https://github.com/safer-rust/RAPx"
homepage: "https://safer-rust.github.io/RAPx"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 154
forks: 32
openIssues: 1
closedIssues: 32
watchers: 4
contributors: 14
recentReleases: 1
createdAt: "2023-10-04T09:20:41Z"
lastCommitAt: "2026-08-10T05:05:48Z"
lastReleaseAt: "2026-06-14T17:20:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 48
maintainers: ["hxuhack", "DiuDiu777"]
openGraphImageUrl: "https://opengraph.githubassets.com/4471815f3c336db8d1b89b3360a7014856e9dfebc0f9de617f550fce261dbfb8/safer-rust/RAPx"
discussionCount: 0
---

# <img src="https://raw.githubusercontent.com/safer-rust/RAPx/main/logo.png" width="50%">
RAPx (Rust Analysis Platform with Extensions) [](./LICENSE-MPL)[](https://docs.rs/rapx) is an advanced static analysis platform for Rust. It provides an extensible framework for building and integrating powerful analysis capabilities that go beyond those available in the standard rustc compiler, empowering developers to reason about safety, robustness, and performance at a deeper level.

RAPx is available on crates.io. [](https://crates.io/crates/rapx)

## Features
# 
RAPx is structured into two layers: a core layer offering essential program analysis algorithms (e.g., alias and dataflow analysis), and an application layer implementing specific tasks such as bug detection. This separation of concerns promotes modular development and fosters collaboration between algorithm and application developers.

The project is still under heavy development. For further details, please refer to the [RAPx-Book](https://safer-rust.github.io/RAPx-Book/).

## Quick Start

Install the latest `nightly` toolchain, on which rapx is compiled. This just needs to be done once on your machine. If the toolchain…
