---
repo: "hffgzktbcc-blip/ounce-core"
name: "ounce-core"
description: "Ounce-Core runs supported ARM64 programs on three CPU engines, compares their outputs with real-hardware references, and helps developers find bugs."
readmeQualityOk: true
url: "https://github.com/hffgzktbcc-blip/ounce-core"
homepage: "https://hffgzktbcc-blip.github.io/ounce-core/"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
topics: ["aarch64", "arm64", "differential-testing", "jit", "neon", "rust", "verification", "fuzzing", "testing", "elf"]
stars: 205
forks: 21
openIssues: 5
closedIssues: 71
watchers: 2
contributors: 7
recentReleases: 10
createdAt: "2026-10-24T19:32:45Z"
lastCommitAt: "2026-11-23T12:23:05Z"
lastReleaseAt: "2026-11-12T19:23:28Z"
status: "newborn"
tags: ["needs_contributors", "release_machine"]
healthScore: 99
undervaluedScore: 35
maintainers: ["hffgzktbcc-blip", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1432527622/5345cb5e-69b1-4ec4-b6b9-6a796731a879"
discussionCount: 10
---

# Ounce-Core checks how ARM64 programs behave

Ounce-Core runs supported ARM64 programs through three CPU engines, compares their results with references recorded on real ARM64 hardware, and helps developers investigate differences.

**[Try it in your browser](https://hffgzktbcc-blip.github.io/ounce-core/playground/)** · **[Latest published release](https://github.com/hffgzktbcc-blip/ounce-core/releases/latest)**

## What it is

You ship a library built on x86. Will it give the same answer on ARM64? You may not own an ARM64 machine to find out.

Ounce-Core runs supported programs through three CPU engines and compares their outputs with results recorded on real ARM64 hardware. When results differ, its reports and bounded traces help developers find where the runs split. Ounce-Core is open source, written in Rust, and licensed under MIT. The [vision](https://github.com/hffgzktbcc-blip/ounce-core/blob/HEAD/docs/VISION.md) explains the aim.
