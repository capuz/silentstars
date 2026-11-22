---
repo: "smuellerDD/esdm"
name: "esdm"
description: "Entropy Source and DRNG Manager"
readmeQualityOk: true
url: "https://github.com/smuellerDD/esdm"
homepage: "https://www.chronox.de/esdm"
language: "C"
languages: ["C"]
languagePcts: [89]
topics: ["entropy", "linux", "rng"]
stars: 16
forks: 7
openIssues: 0
closedIssues: 31
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2022-05-10T12:22:52Z"
lastCommitAt: "2026-11-22T11:50:35Z"
lastReleaseAt: "2026-05-02T00:50:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 75
maintainers: ["thillux"]
openGraphImageUrl: "https://opengraph.githubassets.com/a64e16e8656f62c15f40321335888e57009e89e6c47351e442be9f64f076f5d4/smuellerDD/esdm"
---

# Entropy Source and DRNG Manager

** ... or /dev/random in user space **

The Entropy Source and DRNG Manager (ESDM) manages a set of deterministic
random number generators (DRNG) and ensures their proper seeding and reseeding.
To seed the DRNGs, a set of entropy sources are managed by the ESDM. The
cryptographic strength of the entire ESDM is always 256 bits. All entropy
processing is designed to maintain this strength.

Besides other services, it provides an API and ABI compliant drop-in
replacement for the Linux `/dev/random` and `/dev/urandom` devices as well
as the `getrandom` system call. This means it not only supports common
users requesting random numbers, but also services using the IOCTLs
documented in `random(4)` or using `select(2)` / `poll(2)` on the device files.

In addition to the Linux interface support, the ESDM provides a daemon managing
the entropy sources and DRNG instances that can be accessed with a wrapper
library. The ESDM requires only POSIX support along with `protobuf-c` and thus
is intended to be executable on different operating systems.

It is extensible as follows:
