---
repo: "analogdevicesinc/cim"
name: "cim"
description: "Code in Motion (cim) manages complex multi‑repository projects by bundling setup, build, and tooling into reproducible workspaces."
readmeQualityOk: true
url: "https://github.com/analogdevicesinc/cim"
homepage: "https://analogdevicesinc.github.io/cim"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
stars: 6
forks: 8
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-03T10:30:20Z"
lastCommitAt: "2026-09-01T08:50:11Z"
lastReleaseAt: "2026-05-13T16:58:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 61
maintainers: ["joabech", "awm", "mskorucu"]
openGraphImageUrl: "https://opengraph.githubassets.com/321afe17120b64b8fd0e6b8f81d9778a880add233da7a576c6cdb02be00dd426/analogdevicesinc/cim"
---

# Code in Motion

Code in Motion, also known as `cim`, manages multi-repository SDK workspaces and makes it possible to bundle everything needed to setup, build and work with software projects of any size. With the concept of "manifests", it also allows to create dedicated manifest gits for all sorts of projects and purpose. A company can for example, put all their manifests at an internal only git, which allows them to have a single source and entrance point for all their SDKs and software projects. At the same time, they might have external facing manifests for customers and partners, which can be public or private.

Setting up and building an entire project takes just a handful of commands, typically around 5 lines in a shell. The tool standardizes build targets across projects (sdk-xyz commands), so teams don't need to learn different conventions for each software project. Still, advanced users can continue working with the underlying build systems directly if and when needed. The defaults just make the common case easy. `cim` minimizes duplication by letting you share toolchains, workspace components, and git mirrors across multiple projects. Since it is built as a CLI, it…
