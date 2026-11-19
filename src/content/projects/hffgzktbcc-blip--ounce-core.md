---
repo: "hffgzktbcc-blip/ounce-core"
name: "ounce-core"
description: "Open-source ARM64 execution lab in safe Rust: run programs on three CPU engines and prove the results match real hardware."
readmeQualityOk: true
url: "https://github.com/hffgzktbcc-blip/ounce-core"
homepage: "https://hffgzktbcc-blip.github.io/ounce-core/"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
topics: ["aarch64", "arm64", "cpu-emulator", "differential-testing", "emulator", "homebrew", "jit", "neon", "rust", "good-first-issue"]
stars: 205
forks: 22
openIssues: 23
closedIssues: 53
watchers: 2
contributors: 7
recentReleases: 10
createdAt: "2026-10-24T19:32:45Z"
lastCommitAt: "2026-11-19T12:01:51Z"
lastReleaseAt: "2026-11-12T19:23:28Z"
status: "newborn"
tags: ["needs_contributors", "release_machine"]
healthScore: 94
undervaluedScore: 33
maintainers: ["claude", "hffgzktbcc-blip", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1432527622/5345cb5e-69b1-4ec4-b6b9-6a796731a879"
discussionCount: 8
---

# Does your code behave the same on ARM64?

Ounce-Core runs a program on three CPU engines and compares the output with real ARM64 hardware.

**[Try it in your browser](https://hffgzktbcc-blip.github.io/ounce-core/playground/)**

## What it is

You ship a library built on x86. Will it give the same answer on ARM64? You may not own an ARM64 machine to find out.

Ounce-Core runs the program and diffs its output byte for byte against a reference recorded on real ARM64 hardware. When the two differ, it helps you find where they split. It is open source and written in Rust. The [vision](https://github.com/hffgzktbcc-blip/ounce-core/blob/HEAD/docs/VISION.md) explains the aim.
