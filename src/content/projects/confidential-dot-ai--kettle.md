---
repo: "confidential-dot-ai/kettle"
name: "kettle"
description: "Kettle builds and verifies attested builds, packages that include cryptographically signed SLSA provenance."
url: "https://github.com/confidential-dot-ai/kettle"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["builds", "in-toto", "slsa-provenance", "attestable-builds", "attested-builds"]
stars: 32
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 6
recentReleases: 1
createdAt: "2025-10-16T18:11:44Z"
lastCommitAt: "2026-06-25T01:32:46Z"
lastReleaseAt: "2026-05-15T20:20:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 48
maintainers: ["indirect", "AnomalRoil", "CluEleSsUK"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ecfc975a8059d6d6a93e81b6f544aa69a60a787c90c9a5975bb9ab8ac102f83/confidential-dot-ai/kettle"
---

<h1 align="center">
</h1>

# Kettle, for attested builds

Kettle builds and verifies **attested builds**, packages that include cryptographically signed SLSA provenance certifying the source, tools, and machine used to create the build.

**Get just the good parts of reproducible builds: the security and assurance of signed and provable inputs, without the misery of constantly repairing your build system.**

## Why attested builds?

Attested builds allow anyone to verify the exact inputs that produced any binary output, by adding cryptographic signatures showing exactly what source code, dependencies, and toolchains were used.

Kettle uses TEEs (Trusted Execution Environments) to sign builds using hardware attestation. Hardware attestations are verified against certificates published by the hardware manufacturer, cryptographically linking binaries to their exact source code.

### Use cases for attested builds

Kettle's attested builds provide a solution to almost every scenario where binaries need a verification trail directly back to the source code and tools that created them. This is just a few examples of problems Kettle can solve:

- A customer deploying your service wants to…
