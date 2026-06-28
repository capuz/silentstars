---
repo: "sisshiki1969/monoruby"
name: "monoruby"
description: "Ruby implementation with yet another JIT compiler."
url: "https://github.com/sisshiki1969/monoruby"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
stars: 140
forks: 6
openIssues: 3
closedIssues: 44
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2022-02-06T06:11:45Z"
lastCommitAt: "2026-06-28T01:46:00Z"
lastReleaseAt: "2026-05-19T06:49:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 45
maintainers: ["sisshiki1969", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bb18d84ec5a1695de6ca3511d882ec0ec2ac6063c8b172320bfaae0dfb477b5/sisshiki1969/monoruby"
discussionCount: 0
---

# monoruby

Ruby implementation with yet another JIT compiler written in Rust.

## Presentation

- Presentation movie and slides for RubyKaigi2024 is [here](https://rubykaigi.org/2024/presentations/s_isshiki1969.html#day2).
- Presentation movie and slides for RubyKaigi2025 is [here](https://rubykaigi.org/2025/presentations/s_isshiki1969.html#day2).

## Features

- Written in Rust from scratch. No dependencies on any other Ruby implementations.
- Fast. Currently, monoruby is comparable to ruby3.4.1+YJIT in the optcarrot benchmark.
- Hand-written original parser.
- Register-based bytecode.
- Bytecode executor (virtual machine) written in x86-64 assembly (yes, we currently support only x86-64!).
- A compact and fast just-in-time compiler. (internally using self-made dynamic assembler [monoasm](https://github.com/sisshiki1969/monoasm))

## Prerequisites

### Platform

Currently, only x86-64/linux is supported.

## How to run

Please see [wiki](https://github.com/sisshiki1969/monoruby/wiki/Build-and-Install) for details. 

(1) Install nightly Rust.

First of all, install Rust nightly.
[Check here to install Rust](https://www.rust-lang.org/ja/tools/install)

_Caution!!_ **only nightly…
