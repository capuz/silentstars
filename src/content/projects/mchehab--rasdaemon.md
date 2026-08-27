---
repo: "mchehab/rasdaemon"
name: "rasdaemon"
description: "Rasdaemon is a RAS (Reliability, Availability and Serviceability) logging tool. It records memory errors, using the EDAC tracing events. EDAC is a Linux kernel subsystem with handles detection of ECC errors from memory controllers for most chipsets on i386 and x86_64 architectures. EDAC drivers for other architectures like arm also exists."
readmeQualityOk: true
url: "https://github.com/mchehab/rasdaemon"
language: "C"
languages: ["C", "Perl"]
languagePcts: [64, 32]
stars: 329
forks: 118
openIssues: 42
closedIssues: 33
watchers: 13
contributors: 66
recentReleases: 1
createdAt: "2018-08-14T16:42:59Z"
lastCommitAt: "2026-08-27T14:20:49Z"
lastReleaseAt: "2026-06-26T14:26:05Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 75
undervaluedScore: 37
maintainers: ["mchehab"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a6479f02816eac77e31aea69f33b62a0c4e79e362ff91d682240d0ad24ff0b6/mchehab/rasdaemon"
---

RAS Daemon
==========

Those tools provide a way to get Platform Reliability, Availability
and Serviceability (RAS) reports made via the Kernel tracing events.

The main repository for the rasdaemon is at:

- <https://github.com/mchehab/rasdaemon>

And two mirrors are available:

- <https://gitlab.com/mchehab_kernel/rasdaemon>
- <http://git.infradead.org/users/mchehab/rasdaemon.git>

Tarballs for each release can be found at:
- <http://www.infradead.org/~mchehab/rasdaemon/>

Intended Use
============

This project provides general-purpose software components intended primarily
for integration, development, research, and infrastructure use by technical
users.

The project is not offered as a consumer-facing online service or
managed platform.

Goals
=====

Its initial goal is to replace the edac-tools that got bitrotted after
the addition of the HERM (Hardware Events Report Method )patches[^1] at
the EDAC Kernel drivers.

[^1]: <http://lkml.indiana.edu/hypermail/linux/kernel/1205.1/02075.html>

Its long term goal is to be the userspace tool that will collect all
hardware error events reported by the Linux Kernel from several sources
(EDAC, MCE, PCI, ...) into one common framework.…
