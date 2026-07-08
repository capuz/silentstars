---
repo: "coconut-svsm/svsm"
name: "svsm"
description: "COCONUT-SVSM"
readmeQualityOk: true
url: "https://github.com/coconut-svsm/svsm"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 229
forks: 97
openIssues: 28
closedIssues: 131
watchers: 21
contributors: 40
recentReleases: 3
createdAt: "2023-03-13T09:02:31Z"
lastCommitAt: "2026-07-08T05:41:34Z"
lastReleaseAt: "2026-06-29T11:47:07Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 95
undervaluedScore: 46
maintainers: ["00xc", "joergroedel", "stefano-garzarella"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3913c9054d8f603560a3fe8b53b147c3f90ab364caf1facce2833c4acf32ab3/coconut-svsm/svsm"
discussionCount: 8
---

COCONUT Secure VM Service Module
================================

This is the source code repository for the COCONUT Secure VM Service
Module (SVSM), a software which aims to provide secure services and
device emulations to guest operating systems in confidential virtual
machines (CVMs). It requires AMD Secure Encrypted Virtualization with
Secure Nested Paging (AMD SEV-SNP), especially the VM Privilege Level
(VMPL) feature.

The COCONUT-SVSM is distributed under the MIT license, which is included in the
[LICENSE-MIT](https://github.com/coconut-svsm/svsm/blob/HEAD/LICENSE-MIT) file.

The project builds on support code written for the [linux-svsm](https://github.com/AMDESE/linux-svsm),
a software written and published by AMD. This includes the necessary
hypervisor changes for KVM host, guest, and for the EDK2 firmware.

Installation
------------

Detailed installation instructions are in the [INSTALL.md](https://github.com/coconut-svsm/svsm/blob/HEAD/Documentation/docs/installation/INSTALL.md)
file. It walks through the process of building all the necessary parts
to get a virtual machine powered by the COCONUT-SVSM up and running.

Community
---------

Development discussions…
