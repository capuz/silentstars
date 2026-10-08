---
repo: "AbdelmonemAwad/os-xgs-npu"
name: "os-xgs-npu"
description: "Experimental FreeBSD drivers for the coprocessors that own the front ports on Sophos XGS appliances: all 14 ports on an XGS 136 (Marvell CN9131), and the host-to-coprocessor management link on an XGS 3300 (Cavium OCTEON TX). Two appliances on the bench; the other four families are documented only, not supported."
readmeQualityOk: true
url: "https://github.com/AbdelmonemAwad/os-xgs-npu"
language: "C"
languages: ["C"]
languagePcts: [79]
topics: ["device-driver", "firewall", "freebsd", "kernel-module", "marvell", "networking", "opnsense", "pcie", "reverse-engineering", "sophos"]
stars: 5
forks: 0
openIssues: 11
closedIssues: 56
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-25T00:15:11Z"
lastCommitAt: "2026-10-08T10:52:16Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 52
maintainers: ["AbdelmonemAwad"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b85ebbc8cc49e92892ac80ce861b8580b4f647ed9911611e0c3f134aa77e72d/AbdelmonemAwad/os-xgs-npu"
---

# os-xgs-npu

**This repository is younger than the work in it.** The reverse engineering, the measurements and
the failed attempts behind these drivers ran for months on real appliances before any of it was
written in public. One of the faults it closes had been open for eighteen of them.

**Publishing and documenting began recently, and deliberately.** Nothing here is claimed that has
not been run on the hardware, which is why the dead ends are recorded beside the results rather than
quietly dropped &mdash; see [docs/the-road.md](https://github.com/AbdelmonemAwad/os-xgs-npu/blob/HEAD/docs/the-road.md) for the shape of it, and
[docs/measurements/](https://github.com/AbdelmonemAwad/os-xgs-npu/blob/HEAD/docs/measurements/) for every number with how it was taken.

**Several related projects belong to the same effort** and are not here yet. They will be published
in full, on the same terms: measured first, documented as they are, with what did not work kept
beside what did.

This project drives an undocumented PCIe coprocessor by writing to its registers from a kernel
module of our own making. There is no vendor support for any of it, on any operating system.

It is not a product. It…
