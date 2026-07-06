---
repo: "asterinas/vostd"
name: "vostd"
description: "A community preview of ongoing formal verification efforts for Asterinas"
readmeQualityOk: true
url: "https://github.com/asterinas/vostd"
homepage: "https://asterinas.github.io/vostd/"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 50
forks: 13
openIssues: 14
closedIssues: 12
watchers: 2
contributors: 61
recentReleases: 0
createdAt: "2025-01-21T10:40:59Z"
lastCommitAt: "2026-07-06T07:03:35Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 53
maintainers: ["rikosellic", "hiroki-chen", "Marsman1996"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8e659a8ced9814eccd12c73417645fdf4fb762dc06184d1f92c16ddad9aa0b2/asterinas/vostd"
discussionCount: 1
---

# Formal Verification of Asterinas OSTD with Verus

The `vostd` project provides a formally-verified version of [OSTD](https://asterinas.github.io/book/ostd/index.html), the (unofficial) standard library for OS development in safe Rust. OSTD encapsulates low-level hardware interactions—which requires using `unsafe` Rust—into a small yet powerful set of high-level, safe abstractions. These abstractions enable the creation of complex, general-purpose OSes like [Asterinas](https://github.com/asterinas/asterinas) entirely in safe Rust.

By design, OSTD guarantees *soundness*: no undefined behavior is possible, regardless of how its API is used in safe Rust. The goal of the `vostd` project is to bolster confidence in this soundness through formal verification, leveraging the [Verus](https://github.com/verus-lang/verus) verification tool.

This work is ongoing. Our current focus is on verifying OSTD’s *memory management subsystem*, a core component that is directly related to kernel memory safety. As we continue, we aim to extend formal verification to additional parts of OSTD to further ensure its reliability and correctness.

## Project Structure

Implementation code from the OSTD…
