---
repo: "3dl-dev/vms"
name: "vms"
description: "An OpenVMS-compatible environment for Linux: DCL, RMS, native linker, image activator. Not an emulator; the ABI is the contract."
readmeQualityOk: true
url: "https://github.com/3dl-dev/vms"
homepage: "https://openvmx.3dl.dev"
language: "C"
languages: ["C"]
languagePcts: [72]
topics: ["openvms", "operating-system", "linux", "dcl", "abi", "systems-programming", "vax", "c"]
stars: 5
forks: 0
openIssues: 8
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-02-13T21:18:31Z"
lastCommitAt: "2026-10-21T19:03:50Z"
lastReleaseAt: "2026-08-11T23:46:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 68
maintainers: ["baron-3dl"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e7f749f33b0b7b7d9ae4b7dfc482d65352e9b891a90967218a943c84e19dee3/3dl-dev/vms"
fundingLinks: ["CUSTOM:https://3dl.dev"]
---

# OpenVMX

OpenVMS-compatible environment for Linux. OpenVMX implements VMS system services,
the DCL command language, Record Management Services, and VMS-style kernel
extensions — packaged as a bootable Linux distribution.

OpenVMX is two named layers, GNU/Linux-style: **OpenVMX** is the VMS-compatible
product (login banner, `SHOW SYSTEM`, DCL — what a user touches), running on
**OVMX/Linux**, the Linux base layer underneath (kernel, boot, distro
tooling) — the rough equivalent of the VAX/Alpha hardware OpenVMS itself ran
on. See [Architecture](https://github.com/3dl-dev/vms/blob/HEAD/docs/architecture.md#product-and-kernel-layering) for
where the split falls.

## Features

- **System Services** — `sys$assign`, `sys$qio`, `sys$crmpsc`, `sys$enq`, `sys$setimr`,
  `sys$creprc`, `sys$asctim`, `sys$gettim`, mailboxes, event flags, ASTs, logical names —
  kernel-resident in the executive (`vms.ko`), reached through `/dev/vms`
- **Runtime Library** — `lib$`, `str$`, `mth$`, `ots$` routines for memory, strings,
  math, signals, date/time
- **DCL Shell** — the DCL command language: 50+ built-in verbs, symbol management,
  lexical functions, script execution, VMS-style file specifications…
