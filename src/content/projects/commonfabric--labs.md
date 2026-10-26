---
repo: "commonfabric/labs"
name: "labs"
description: "The Common Fabric runtime."
readmeQualityOk: true
url: "https://github.com/commonfabric/labs"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 55
forks: 13
openIssues: 124
closedIssues: 430
watchers: 6
contributors: 25
recentReleases: 1
createdAt: "2024-05-10T02:20:07Z"
lastCommitAt: "2026-10-26T21:00:29Z"
lastReleaseAt: "2026-08-06T00:13:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 53
maintainers: ["danfuzz", "mathpirate", "Hixie"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ca3795f98970ec88f887ba843d6591b58beafd617da9b41df71b1742862299e/commonfabric/labs"
---

# Common Fabric

**Common Labs** is where Common Fabric is built in the open. This is early,
fast-moving work: interfaces change often, and there is no API stability yet.
You are welcome to explore the code, run and write patterns, and contribute.

[commonfabric.com](https://commonfabric.com)

## What is Common Fabric?

Common Fabric is a nascent distributed computing platform that provides both a
runtime and storage layer. The design allows instrumentation of all information
flow in the system, enabling safe & private collaboration at scale.

All networked software today runs on one rule: hand your data to the software,
and trust the software. This runtime inverts it. The software is untrusted, and
safety attaches to the data — every datum carries its own policies, anything
derived from it carries them too, and code that cannot prove it honors those
policies does not compile.

Two ways in, depending on how much you want:

- [**Why**](https://github.com/commonfabric/labs/blob/HEAD/docs/why.md) — our case for flipping the trust model.
- [**Inverting the physics of trust**](https://github.com/commonfabric/labs/blob/HEAD/docs/inverting-the-physics-of-trust.md) —
  the physics, the…
