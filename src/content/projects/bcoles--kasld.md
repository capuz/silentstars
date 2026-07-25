---
repo: "bcoles/kasld"
name: "kasld"
description: "KASLD derandomizes the Linux kernel's virtual and physical memory layout from a local process, using whatever its vantage — privilege, configuration, and confinement — allows."
readmeQualityOk: true
url: "https://github.com/bcoles/kasld"
language: "C"
languages: ["C"]
languagePcts: [89]
topics: ["kaslr", "linux", "linux-kernel", "linux-kaslr", "kernel-exploit", "kernel", "linux-aslr", "aslr", "aslr-bypass", "kaslr-bypass"]
stars: 500
forks: 51
openIssues: 0
closedIssues: 2
watchers: 8
contributors: 2
recentReleases: 3
createdAt: "2019-12-30T05:12:39Z"
lastCommitAt: "2026-07-25T06:01:31Z"
lastReleaseAt: "2026-06-18T14:02:03Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 39
maintainers: ["bcoles"]
openGraphImageUrl: "https://opengraph.githubassets.com/6556dfa0f91a5cffac19220ef522f0b695d9ee4c7e7ade08fdd02b6d1369a10c/bcoles/kasld"
---

</p>

</p>

KASLD recovers the Linux kernel's virtual and physical memory layout —
primarily the kernel text base — from a local process, using as much as
the process's vantage allows: its privileges and capabilities, the
system's configuration, and any container confinement. It recovers the
kernel text base outright where a leak or side channel allows, and
otherwise narrows it to the smallest set of placements the available
evidence supports. The inference engine fuses evidence from dozens of
independent techniques with the architecture's known invariants,
narrowing the kernel's placement to a residual window — reported as the
surviving slot count and bits of entropy: an upper bound on the protection
KASLR retains from this vantage, not a guarantee the base is beyond an
attacker's reach (see [docs/limitations.md](https://github.com/bcoles/kasld/blob/HEAD/docs/limitations.md)). On a
fully-patched modern kernel — where x86-64 side channels are mitigated
and no direct kernel-text leak survives — full recovery is often impossible,
but the constraint set is rarely empty. On architectures without KASLR, the
engine locates the bootloader-chosen load address.

Supports:

* x86 (i386+,…
