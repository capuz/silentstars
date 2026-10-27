---
repo: "TheSledgeHammer/2.11BSD_X44"
name: "2.11BSD_X44"
description: "2.11BSD_X44. A 2.11BSD that implements 4.4BSD's (Lite 2) vm and vnodes"
readmeQualityOk: true
url: "https://github.com/TheSledgeHammer/2.11BSD_X44"
language: "C"
languages: ["C"]
languagePcts: [57]
topics: ["bsd", "unix", "unix-like", "211bsd"]
stars: 59
forks: 4
openIssues: 2
closedIssues: 0
watchers: 10
contributors: 2
recentReleases: 0
createdAt: "2019-09-07T08:26:31Z"
lastCommitAt: "2026-10-27T09:16:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 69
undervaluedScore: 40
maintainers: ["TheSledgeHammer"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1a596e3d6f91dddf1277d802e138ef6cac17984f6f67cce122316bb0eb41b34/TheSledgeHammer/2.11BSD_X44"
---

# 2.11BSD_X44 (TBA)

2.11BSD is unique in BSD's history, still receiving patches to it's codebase long after it's release. As well as being the only BSD to receive patches that were backported from numerous versions of 4BSD.

2.11BSD_X44 is 2.11BSD that continues with that tradition. Replacing the 4BSD (4.1BSD to 4.3BSD) styled vmspace and inodes with 4.4BSD's vmspace and vnodes. While retaining 2.11BSD's kernel and user space. 2.11BSD_X44 adopts the 4.4BSD & later BSD's (i.e. FreeBSD, NetBSD, OpenBSD & DragonflyBSD) approach of having a clearly defined architecture dependent code and architecture independent code, allowing for easier portability.

## Source Roadmap:
---------------
| Directory | Description |
| --------- | ----------- |
| bin | System/user commands. |
| contrib | Packages contributed by 3rd parties. |
| crypto | Cryptography stuff. |
| etc | Template files for /etc. |
| include | System include files. |
| lib | System libraries. |
| libexec | System daemons. |
| sbin | System commands. |
| share | Shared resources. |
| sys | Kernel sources. |
| sys/arch/`arch`/conf | Kernel configuration files. GENERIC.'arch' is the configuration used in release builds. |
| stand…
