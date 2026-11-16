---
repo: "md-raid-utilities/mdadm"
name: "mdadm"
description: "Manager of Linux Software RAID implemented through Multiple Devices driver."
readmeQualityOk: true
url: "https://github.com/md-raid-utilities/mdadm"
homepage: "https://git.kernel.org/pub/scm/utils/mdadm/mdadm.git"
language: "C"
languages: ["C"]
languagePcts: [88]
topics: ["raid"]
stars: 93
forks: 68
openIssues: 6
closedIssues: 47
watchers: 9
contributors: 135
recentReleases: 0
createdAt: "2024-04-10T08:00:56Z"
lastCommitAt: "2026-11-16T11:56:47Z"
lastReleaseAt: "2026-03-24T15:40:56Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 94
undervaluedScore: 55
maintainers: ["prajnoha", "ppiatkowsk", "mwilck"]
openGraphImageUrl: "https://opengraph.githubassets.com/96c2952d1577d14443201c53b9e0e33c481200477a66078d4a04411dab7c2ab2/md-raid-utilities/mdadm"
discussionCount: 2
---

**mdadm** is a utility used to create and manage **software RAID** devices implemented through
**Multiple devices driver (MD)** in kernel. It supports following RAID metadata formats:

* [Linux native RAID](https://docs.kernel.org/admin-guide/md.html#superblock-formats):

  Known as **native** or **native RAID**. First and default metadata format. Metadata management
  is implemented in **MD driver**.

* Matrix Storage Manager Support (no reference, metadata format documentation is proprietary).

  Known as **IMSM**. Metadata format developed by**Intel®**. Currently, maintained
  by **Graid Technology Inc.** as a part of **VROC** solution. There are some functional differences
  between **native** and **imsm**.
  The most important difference is that the metadata is managed from userspace.

  **CAUTION:** **imsm** is compatible with **Intel RST**, however it is not officially supported.
  You are using it on your own risk.

* [Common RAID DDF Specification Revision](https://www.snia.org/sites/default/files/SNIA_DDF_Technical_Position_v2.0.pdf)

    **IMPORTANT:** DDF is in **maintenance only** mode. There is no active development around it.
    Please do not use it in new…
