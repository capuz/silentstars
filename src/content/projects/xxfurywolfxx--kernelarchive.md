---
repo: "xxFURYWOLFxx/KernelArchive"
name: "KernelArchive"
description: "Searchable archive of Windows kernel symbols, struct layouts, function RVAs and byte patterns extracted from Microsoft PDBs and pinned to exact Windows builds. Browse it or query the JSON API. Free and self-hosted at kernelarchive.com"
readmeQualityOk: true
url: "https://github.com/xxFURYWOLFxx/KernelArchive"
homepage: "https://kernelarchive.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["debugging", "disassembler", "driver-development", "kernel", "kernel-development", "nextjs", "ntoskrnl", "offsets", "pattern-scanning", "pdb"]
stars: 14
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-10T07:34:58Z"
lastCommitAt: "2026-10-08T10:52:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 22
maintainers: ["xxFURYWOLFxx"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f45bcfe530a5f323b93e7a917aaafbdeb0388afa6979c500bcc130fd5614870/xxFURYWOLFxx/KernelArchive"
---

# KernelArchive

A searchable index of Windows kernel symbols, type layouts and byte patterns,
derived by analysing Microsoft's public debug symbols and the corresponding system
binaries on your own machine, and pinned to an exact Windows build.

It does not host or redistribute Windows binaries or PDB files. It records facts
about them: names, offsets, sizes and addresses.

**Live at [kernelarchive.com](https://kernelarchive.com)**. Free, no account needed.

---

## Why this exists

Ask anyone, or anything, for the offset of a field in `_EPROCESS` and you will
usually get an answer. It will look right. It may even have been right, for some
build, once.

That is the problem. Kernel structures change between Windows builds, sometimes
between patch levels of the same build. An offset without a build number attached is
a guess. In kernel-mode code a wrong guess does not throw an exception, it bugchecks
the machine.

KernelArchive is the thing you check against. Every type layout, function RVA and
byte pattern here came out of a real binary and a real PDB, and every one of them is
attributed to a specific build. You can look up the layout for `26100.8875 x64` and
be correct, or find…
