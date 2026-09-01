---
repo: "sepahead/NCP"
name: "NCP"
description: "Neuro-Cybernetic Protocol: versioned canonical-JSON contract connecting neural simulators and neuromorphic controllers to robots, UAVs and analysis clients over Zenoh. Rust reference, independent TypeScript validator, Python/C/C++ bindings. v0.8.0 is the latest release; HEAD is a release-blocked 1.0 candidate."
readmeQualityOk: true
url: "https://github.com/sepahead/NCP"
homepage: "https://github.com/sepahead/NCP"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["brain-simulation", "nest-simulator", "neuromorphic", "neurorobotics", "protocol", "real-time", "robotics", "rust", "sdk", "spiking-neural-networks"]
stars: 16
forks: 0
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-06-16T14:29:59Z"
lastCommitAt: "2026-09-01T07:08:06Z"
lastReleaseAt: "2026-06-22T06:20:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 54
maintainers: ["sepahead"]
openGraphImageUrl: "https://opengraph.githubassets.com/5170cb0bd910cd8e5be3e68be0a93dce0d826527d88d0c22a4cfe0f41c1c97e2/sepahead/NCP"
discussionCount: 0
---

# NCP — Neuro-Cybernetic Protocol

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/logo-light.svg">
  </picture>
</p>

NCP is a versioned, project-agnostic canonical-JSON contract for connecting a
neural simulator or neuromorphic controller to robots, UAVs, simulators, and
read-only analysis clients.

> **Current status:** repository HEAD is the **unreleased, release-blocked**
> `1.0.0-rc.1` candidate: wire `1.0`, compact proto contract hash
> `163acc57d8a62b66`. The latest immutable annotated source tag is `v0.8.0`; it is a
> different, incompatible wire. Do not describe this candidate as the NCP 1.0 release,
> production-certified, published, signed, or consumer-certified.

The complete normative SHA-256 contract digest and exact source list are generated
in [`contract/manifest.v1.json`](https://github.com/sepahead/NCP/blob/HEAD/contract/manifest.v1.json). The short 16-hex
`CONTRACT_HASH` is an advisory FNV-1a digest of the canonical protobuf structure.
It is not the complete normative digest.

## System at a glance

<picture>
  <source media="(prefers-color-scheme:…
